import{u as V}from"./xwskLidM.js";import{f as Q,v as X}from"./Xs_VBmP5.js";import{h as Y}from"./nLTbcOiO.js";import{u as Z,s as x}from"./CU41EU6_.js";import{u as ee}from"./Dn0zF3z3.js";import{u as te}from"./P_gAomGn.js";import{u as ae}from"./CIg47mny.js";import{I as A,f as ie}from"./QKPGpISV.js";import{s as re}from"./BOX21o1p.js";import{u as oe}from"./CA4HNXs5.js";import{u as se}from"./C4uCsYSu.js";import{u as le,_ as ne,a as me,b as ue}from"./Hy3UUOt_.js";import{u as ce}from"./NJb-5UdH.js";import{a as P}from"./B4bs1Dzo.js";import{_ as pe}from"./DzJ3op9H.js";import{u as de}from"./2vq21tXV.js";import{d as B,G as p,H as fe,D as r,I as d,O as E,N as _,z as g,ag as ge,T as he,A as h,J as D,R as ve,E as c,L as v}from"./lKNUlTH_.js";import{_ as _e}from"./Bv7rrS3w.js";import{a as we,b as be}from"./CF9Orc4u.js";import{_ as ye}from"./DlT0KJFd.js";import{e as ke}from"./DXous9VY.js";import{_ as Ie}from"./DlAUqK2U.js";import"./DivIZ7Lb.js";import"./C0voMBC3.js";import"./CFMQYC2y.js";import"./Dt-H8hG_.js";import"./CTON8dBl.js";import"./CzMkt2mC.js";import"./Cpj98o6Y.js";import"./Ci7G4jyV.js";import"./CeIx8O89.js";import"./BR9eDTPM.js";import"./CVtkxrq9.js";import"./5VTD9IrS.js";import"./C67TMzvP.js";import"./yH-X360_.js";import"./DdC_rYQt.js";import"../sb-preview/runtime.js";import"./Bz7P8nyL.js";import"./DlQeo9n8.js";import"./BSEdKPgk.js";import"./CsX9763x.js";import"./D0ww02ZN.js";import"./MXhTc5uu.js";import"./CuPsdpTl.js";import"./DFcd4RIc.js";import"./CJfwjuxI.js";import"./D8WVEJ-M.js";import"./DYkE03l5.js";import"./DQnMOLSw.js";import"./5ehHOY6F.js";import"./9Q23NzEb.js";import"./B8EfuPyc.js";import"./DUeGaeCZ.js";import"./CENJcm0Y.js";import"./C2lBk38O.js";import"./-TaKdCZx.js";import"./6cMn6_iE.js";import"./CPKoWrgC.js";import"./CxW0GE0L.js";import"./C4yIuh8P.js";import"./RevM6cLn.js";import"./Bn5HhA26.js";import"./HuKvJ5x_.js";import"./Box5JfbC.js";import"./Bnkvtx4f.js";import"./DYaXnAuU.js";import"./bBgZBGC4.js";import"./CKwmgxjS.js";import"./BJA81pUf.js";import"./Cj2bXMFv.js";import"./CvyrVSfi.js";import"./DQ80oQA9.js";import"./C9mm1iuR.js";import"./Cx5-73E0.js";import"./BS9R2VWD.js";import"./DaIK_f_e.js";import"./PSCYL13p.js";import"./c1er4GOR.js";import"./CAne9MmG.js";import"./DC-AD4tD.js";import"./CerlZzKD.js";const xe=(w="")=>new Promise((l,n)=>{typeof document>"u"&&n();const a=document.createElement("script");a.src=w,a.defer=!0,a.addEventListener("load",l),a.addEventListener("error",n),document.head.appendChild(a)}),Ee={class:"block aspect-[2/1]"},Se=["title","aria-label"],$e="https://static.sketchfab.com/api/sketchfab-viewer-1.10.1.js",Ce=B({__name:"VSketchFabViewer",props:{uid:{}},emits:["failure"],setup(w,{emit:l}){const n=w,a=l,{t:f}=de({useScope:"global"}),s=f("sketchfabIframeTitle",{sketchfab:"Sketchfab"}),i=p(),{$sentry:e}=V(),m=async()=>{if(await xe($e),typeof window.Sketchfab>"u"){e.captureMessage("Unable to find window.Sketchfab after loading");return}if(!i.value)return;new window.Sketchfab(i.value).init(n.uid,{error:u=>{e.captureException(u),a("failure")}})};return fe(()=>{m()}),(k,u)=>(r(),d("div",Ee,[E("iframe",{id:"sketchfab-iframe",ref_key:"node",ref:i,src:"",sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",title:_(s),"aria-label":_(s),allow:"autoplay; fullscreen; vr",autoplay:!0,class:"h-full w-full"},null,8,Se)]))}}),Le=["id"],Me={class:"relative mb-4 grid grid-cols-1 grid-rows-1 justify-items-center border-b border-default px-6"},Re=["src","alt","width","height"],Te={key:2,class:"col-span-full row-span-full w-full lg:max-w-4xl lg:px-4"},He={class:"grid grid-cols-1 grid-rows-[auto,1fr] sm:grid-cols-[1fr,auto] sm:grid-rows-1 sm:gap-x-6"},Ae=B({name:"ImageDetailPage",__name:"index",async setup(w){var R,T,H;let l,n;ce();const a=Z(),f=V(),s=ae(),i=g(()=>Q(s==null?void 0:s.params.id));(!i.value||!X(i.value))&&x({statusCode:404,message:`Invalid image id: "${i.value}" on ${s==null?void 0:s.fullPath}.`,fatal:!0});const e=p((R=a.image)!=null&&R.id&&i.value&&a.image.id===i.value?a.image:null),m=g(()=>a.fetchState.fetchingError),k=g(()=>!f.isHydrating),u=p(k.value?(T=e.value)==null?void 0:T.thumbnail:(H=e.value)==null?void 0:H.url),S=p(!f.isHydrating),$=g(()=>b.value?!1:S.value),{sendCustomEvent:F}=oe(),N=t=>{F("RIGHT_CLICK_IMAGE",{id:t})},{reveal:U,isHidden:G}=se(e.value),{pageTitle:j,detailPageMeta:z}=le(e);te(()=>({...z,title:j.value}));const C=p(!0),L=p(!1),b=g(()=>{var t;return((t=e.value)==null?void 0:t.source)!=="sketchfab"||L.value?null:e.value.url.split("https://media.sketchfab.com/models/")[1].split("/")[0]}),O=t=>{var o;t.target instanceof HTMLImageElement&&(u.value=t.target.src===((o=e.value)==null?void 0:o.url)?e.value.thumbnail:ke)},J=t=>{var o;if(!(!(t.target instanceof HTMLImageElement)||!e.value)&&(S.value=!1,C.value)){const y={width:t.target.naturalWidth,height:t.target.naturalHeight};((o=a.mediaItem)==null?void 0:o.frontendMediaType)===A&&(a.mediaItem.width=y.width,a.mediaItem.height=y.height),e.value.filetype||ie.head(e.value.url).then(W=>{const q=W.headers["content-type"];a.mediaItem&&(a.mediaItem.filetype=q)}).catch(()=>{}),u.value=e.value.url,C.value=!1}},K=async()=>{if(f.isHydrating)return e.value;const t=await a.fetch(A,i.value);if(t)return e.value=t,u.value=t.thumbnail,t;throw new Error(`Could not fetch image with id ${i.value}`)},{error:I}=([l,n]=ge(async()=>ee("single-image-result",async()=>await K(),{lazy:!0,server:!1})),l=await l,n(),l),M=t=>{["Image not found","Image ID not found"].includes(t.message)&&x({statusCode:404,message:"Image ID not found",fatal:!0}),m.value&&!Y(m.value)&&x({...m.value??{},fatal:!0})};return I.value&&M(I.value),he(I,t=>{t&&M(t)}),(t,o)=>(r(),d("main",{id:_(re),tabindex:"-1",class:"relative flex-grow"},[m.value?(r(),h(ye,{key:0,"fetching-error":m.value,class:"px-6 py-10 lg:px-10"},null,8,["fetching-error"])):e.value?(r(),d(D,{key:1},[_(G)?(r(),h(_e,ve({key:0},e.value,{onReveal:_(U)}),null,16,["onReveal"])):(r(),d(D,{key:1},[c(ne,{media:e.value},null,8,["media"]),E("figure",Me,[$.value?(r(),h(P,{key:0,class:"col-span-full row-span-full h-[500px] w-[500px] self-center"})):v("",!0),b.value?v("",!0):(r(),d("img",{key:1,id:"main-image",src:u.value,alt:e.value.title,class:"col-span-full row-span-full h-full max-h-[500px] w-full rounded-se-sm rounded-ss-sm object-contain",width:e.value.width??0,height:e.value.height??0,onLoad:J,onError:O,onContextmenu:o[0]||(o[0]=y=>N(e.value.id))},null,40,Re)),b.value?(r(),d("div",Te,[c(Ce,{uid:b.value,class:"rounded-se-sm rounded-ss-sm",onFailure:o[1]||(o[1]=y=>L.value=!0)},null,8,["uid"])])):v("",!0)]),E("section",He,[c(we,{media:e.value,class:"min-w-0 sm:col-start-1"},null,8,["media"]),c(be,{media:e.value,"media-type":"image",class:"row-start-1 mb-4 !w-full flex-initial sm:col-start-2 sm:mb-0 sm:mt-1 sm:!w-auto"},null,8,["media"])]),c(pe,{media:e.value},null,8,["media"]),c(me,{media:e.value},null,8,["media"]),e.value?(r(),h(ue,{key:0,"media-type":"image","related-to":e.value.id},null,8,["related-to"])):v("",!0)],64))],64)):$.value?(r(),h(P,{key:2,class:"col-span-full row-span-full mx-auto h-[500px] w-[500px]"})):v("",!0)],8,Le))}}),ma=Ie(Ae,[["__scopeId","data-v-02b61222"]]);export{ma as default};
