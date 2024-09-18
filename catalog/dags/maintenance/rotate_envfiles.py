"""
Check daily for envfiles in need of removal, following standard criteria for each service.

Manages envfiles based on references in tags of task definitions and launch templates.
Envfiles are deleted from S3 if they are not referenced by the 3 most recent task definitions or launch templates for a given service.

It does this by constructing a list of "recent" envfiles, and then deleting objects from the envfile buckets
that are not in the list of recent envfiles.

Resources that reference envfiles are tagged in the form `envfile:<container>` with the value
set to the hash of the envfile referenced by that resource/version.

For the sake of brevity, this module uses "lt" as an abbreviation for launch template and "task def" as an abbreviation for task definition.
"""

import logging
from collections import defaultdict
from datetime import datetime

from airflow.decorators import dag, task
from airflow.providers.amazon.aws.hooks.ec2 import EC2Hook
from airflow.providers.amazon.aws.hooks.ecs import EcsHook
from airflow.providers.amazon.aws.hooks.s3 import S3Hook

from common.constants import AWS_CONN_ID, DAG_DEFAULT_ARGS


logger = logging.getLogger(__name__)

DAG_ID = "rotate_envfiles"
MAX_ACTIVE = 1

ENVFILE_TAG_PREFIX = "envfile:"
TEMPLATE_LAUNCH_TEMPLATE_SUFFIX = "-tpl"
TEMPLATE_TASK_DEF_SUFFIX = "-template"


@task
def retrieve_recent_launch_template_envfiles() -> dict[str, set[str]]:
    ec2_hook = EC2Hook(aws_conn_id=AWS_CONN_ID, api_type="client_type")

    lt_response = ec2_hook.conn.describe_launch_templates()

    all_launch_templates: dict[str, dict] = {
        lt["LaunchTemplateName"]: lt for lt in lt_response["LaunchTemplates"]
    }

    real_launch_templates: dict[str, dict] = {
        lt_name: lt
        for lt_name, lt in all_launch_templates.items()
        if not (
            lt_name.endswith(TEMPLATE_LAUNCH_TEMPLATE_SUFFIX)
            and lt_name[: -len(TEMPLATE_LAUNCH_TEMPLATE_SUFFIX)] in all_launch_templates
        )
    }

    logger.info(
        "Found %s 'real' launch templates to check for envfiles",
        len(real_launch_templates),
    )

    recent_envfiles: dict[str, set[str]] = defaultdict(set)
    for lt_name, lt in real_launch_templates.items():
        latest_lt_version = lt["LatestVersionNumber"]
        # min should be either 3 less than the latest, but never
        # less than 1 which is the absolute minimum version
        min_for_range = max(1, latest_lt_version - 3)

        lt_versions = ec2_hook.conn.describe_launch_template_versions(
            LaunchTemplateName=lt_name,
            MinVersion=str(min_for_range),
            MaxVersion=str(latest_lt_version),
        )

        lt_tags = {tag["Key"]: tag["Value"] for tag in lt["Tags"]}
        service_name = lt_tags["ServiceName"]
        environment = lt_tags["Environment"]

        for lt_version in lt_versions["LaunchTemplateVersions"]:
            instance_tag_spec = next(
                (
                    tag_spec
                    for tag_spec in lt_version["TagSpecifications"]
                    if tag_spec["ResourceType"] == "instance"
                ),
                None,
            )
            if instance_tag_spec is None:
                raise ValueError(
                    f"Unable to find instance tags for launch template {lt_name}"
                )

            tags = {tag["Key"]: tag["Value"] for tag in instance_tag_spec["Tags"]}
            for key, value in tags.items():
                if key.startswith(ENVFILE_TAG_PREFIX):
                    container = key[len(ENVFILE_TAG_PREFIX) :]
                    envfile = f"{service_name}/{container}/{value}.env"
                    logger.info(
                        "Found recent envfile %s for launch template %s",
                        envfile,
                        lt_name,
                    )
                    recent_envfiles[environment].add(envfile)

    return recent_envfiles


@task
def retrieve_recent_task_definition_envfiles() -> dict[str, set[str]]:
    ecs_hook = EcsHook(aws_conn_id=AWS_CONN_ID, api_type="client_type")

    all_families = ecs_hook.conn.list_task_definition_families()["families"]

    # "real" task def families are those actually used for deployments
    # these are the ones we should check
    real_families = [
        family
        for family in all_families
        if not (
            family.endswith(TEMPLATE_TASK_DEF_SUFFIX)
            and family[: -len(TEMPLATE_TASK_DEF_SUFFIX)] in all_families
        )
    ]

    logger.info(
        "Found %s 'real' task definition families to check for envfiles",
        len(real_families),
    )

    latest_task_def_arns = []
    for family in real_families:
        latest_of_family = ecs_hook.conn.list_task_definitions(
            familyPrefix=family,
            # Get the 3 most recent active task definitions
            status="ACTIVE",
            sort="DESC",
            maxResults=3,
        )

        latest_task_def_arns += latest_of_family["taskDefinitionArns"]

    recent_envfiles: dict[str, set[str]] = defaultdict(set)
    for task_def_arn in latest_task_def_arns:
        task_def_response = ecs_hook.conn.describe_task_definition(
            taskDefinition=task_def_arn,
            include=["TAGS"],
        )

        tags = {tag["key"]: tag["value"] for tag in task_def_response["tags"]}
        service_name = tags["ServiceName"]
        environment = tags["Environment"]

        for key, value in tags.items():
            if key.startswith(ENVFILE_TAG_PREFIX):
                container = key[len(ENVFILE_TAG_PREFIX) :]
                envfile = f"{service_name}/{container}/{value}.env"
                logger.info(
                    "Found envfile %s for %s %s", envfile, environment, service_name
                )
                recent_envfiles[environment].add(envfile)

    return recent_envfiles


@task
def identify_stale_envfiles(
    lt_envfiles_to_keep: dict[str, set[str]],
    task_def_envfiles_to_keep: dict[str, set[str]],
) -> dict[str, set[str]]:
    """
    Retrieve the envfiles in the environment's environment file bucket
    that are NOT included in the ``envfiles_to_keep`` list.
    """
    s3_hook = S3Hook(aws_conn_id=AWS_CONN_ID, api_type="client_type")

    stale_envfiles = defaultdict(set)
    for env in ("staging", "production"):
        bucket = f"openverse-{env}-environment-files"
        envfiles_to_keep = lt_envfiles_to_keep[env] | task_def_envfiles_to_keep[env]
        objects = s3_hook.conn.list_objects_v2(Bucket=bucket)

        for obj in objects["Contents"]:
            if obj["Key"] not in envfiles_to_keep:
                stale_envfiles[env].add(obj["Key"])

        logger.info(
            "Found %s stale %s envfiles: %s",
            len(stale_envfiles[env]),
            env,
            ", ".join(stale_envfiles[env]),
        )

    return stale_envfiles


@task
def delete_stale_envfiles(
    envfiles_to_delete: dict[str, set[str]],
) -> dict[str, list[dict]]:
    s3_hook = S3Hook(aws_conn_id=AWS_CONN_ID, api_type="client_type")

    deleted_objects: dict[str, list[dict]] = {}
    for env, envfiles in envfiles_to_delete.items():
        bucket = f"openverse-{env}-environment-files"
        delete_response = s3_hook.conn.delete_objects(
            Bucket=bucket,
            Delete={"Objects": [{"Key": envfile} for envfile in envfiles]},
        )
        deleted_objects[env] = delete_response["Deleted"]
        deleted_str = ", ".join([obj["Key"] for obj in deleted_objects[env]])
        logger.info(
            "Deleted %s %s envfiles: %s", len(deleted_objects[env]), env, deleted_str
        )

    return deleted_objects


@task
def notify_complete(deleted_envfiles: dict[str, list[dict]]): ...


@dag(
    dag_id=DAG_ID,
    schedule="@daily",
    start_date=datetime(2024, 9, 18),
    tags=["maintenance"],
    max_active_tasks=MAX_ACTIVE,
    max_active_runs=MAX_ACTIVE,
    catchup=False,
    # Use the docstring at the top of the file as md docs in the UI
    doc_md=__doc__,
    default_args=DAG_DEFAULT_ARGS,
    render_template_as_native_obj=True,
)
def rotate_envfiles():
    recent_lt_envfiles = retrieve_recent_launch_template_envfiles()
    recent_task_def_envfiles = retrieve_recent_task_definition_envfiles()

    stale_envfiles = identify_stale_envfiles(
        recent_lt_envfiles, recent_task_def_envfiles
    )

    # (
    #     delete_stale_envfiles(stale_envfiles)
    #     >> notify_complete(stale_envfiles)
    # )


rotate_envfiles()
