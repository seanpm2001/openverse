import{f as Le}from"./Xs_VBmP5.js";import{u as le}from"./2vq21tXV.js";import{u as Ae}from"./CIg47mny.js";import{v as ee,w as Be,a as Re}from"./C67TMzvP.js";import{G as k,z as m,d as x,D as f,A as P,C as M,X as E,U as y,I as v,O as r,E as b,L as T,Q as w,N as p,ad as I,ae as C,Y as je,M as se,P as _,F as Pe,$ as De,T as Ee,R as j,ah as ae}from"./lKNUlTH_.js";import{t as Fe,u as Ne,V as Ge}from"./DQ80oQA9.js";import{u as V}from"./CsX9763x.js";import{u as Oe,a as We}from"./C7KF9ARD.js";import{d as Ue}from"./DivIZ7Lb.js";import{u as ne}from"./xwskLidM.js";import"./CFMQYC2y.js";import{e as oe,b as re,f as te}from"./BS9R2VWD.js";import{w as He}from"./C0voMBC3.js";import{u as Ke}from"./EAKoqukU.js";import{b as qe}from"./CRWjC3CT.js";import{V as Qe}from"./DaIK_f_e.js";import{V as Xe}from"./9Q23NzEb.js";import{_ as Ye}from"./u9rXNwju.js";import{u as F}from"./C4uCsYSu.js";import{_ as ue}from"./CAne9MmG.js";import{V as D}from"./CerlZzKD.js";import{_ as N}from"./DlAUqK2U.js";import{_ as de}from"./CA4HNXs5.js";const Je=k(void 0);function Ze(){return Object.freeze({obj:Je})}const ie=Symbol("NotSet"),es=t=>{const a=k(ie);return m({get(){return a.value===ie?t():a.value},set(e){a.value=e}})},ss=()=>{const t=k(!1),a=()=>{t.value=!0},e=()=>{t.value?t.value=!1:V().showInstructionsSnackbar()},l=()=>{V().hideInstructionsSnackbar()},n=()=>{V().dismissInstructionsSnackbar()};return{isVisible:m(()=>V().areInstructionsVisible),show:e,hide:l,dismiss:n,handleMouseDown:a,isMouseDown:t}},as="active-media",os=Ue(as,{state:()=>({type:null,id:null,status:"ejected",message:null}),actions:{setActiveMediaItem({type:t,id:a,status:e="playing"}){this.type=t,this.id=a,this.status=e},pauseActiveMediaItem(){this.status="paused"},ejectActiveMediaItem(){this.status="ejected",this.id=null,this.type=null},setMessage({message:t}){this.message=t},playAudio(t){const a=t==null?void 0:t.play();if(a===void 0){He("Play promise is undefined");return}a.catch(e=>{const l=Object.keys(oe).includes(e.name)?oe[e.name]:"err_unknown";if(l==="err_unknown"){const{$sentry:n}=ne();n.captureException(e)}this.setMessage({message:l}),t==null||t.pause()})}}}),ts=x({__name:"VGetMediaButton",props:{media:{},mediaType:{}},setup(t){const a=t,{$sendCustomEvent:e}=ne(),l=()=>{e("GET_MEDIA",{id:a.media.id,provider:a.media.provider,mediaType:a.mediaType})};return(n,d)=>(f(),P(Xe,{as:"VLink",href:n.media.foreign_landing_url,size:"large",variant:"filled-pink-8","has-icon-end":"","show-external-icon":"","external-icon-size":6,class:"description-bold","send-external-link-click-event":!1,onClick:l},{default:M(()=>[E(y(n.$t(`${n.mediaType}Details.weblink`)),1)]),_:1},8,["href"]))}}),is={class:"w-full lg:w-auto"},ls={class:"heading-6 mb-3 sm:mb-1"},ns=x({__name:"VMediaInfo",props:{media:{}},setup(t){return(a,e)=>(f(),v("div",is,[r("h1",ls,y(a.media.title),1),b(Ye,{media:a.media},null,8,["media"])]))}}),rs={class:"full-track w-full"},us={class:"relative border-b border-default"},ds={key:0,class:"pointer-events-none absolute left-0 hidden h-full w-4 bg-complementary md:block lg:w-10","aria-hidden":""},cs={key:1,class:"pointer-events-none absolute right-0 hidden h-full w-4 bg-complementary md:block lg:w-10","aria-hidden":""},ms={class:"md:mx-4 lg:mx-10"},ps={class:"mx-auto grid grid-cols-1 grid-rows-[auto,1fr] gap-y-6 p-6 pb-0 sm:grid-cols-[1fr,auto] sm:grid-rows-1 sm:gap-x-6 lg:mb-6 lg:max-w-5xl"},fs={class:"row-start-1 flex justify-between gap-x-6 sm:col-start-2 sm:mt-1"},vs=x({__name:"VFullLayout",props:{audio:{},size:{},status:{},currentTime:{}},setup(t){return(a,e)=>(f(),v("div",rs,[r("div",us,[a.currentTime>0?(f(),v("span",ds)):T("",!0),a.status==="played"?(f(),v("span",cs)):T("",!0),r("div",ms,[w(a.$slots,"controller",{features:p(re),usableFrac:.8})])]),r("div",ps,[r("div",fs,[w(a.$slots,"audio-control",I(C({layout:"full",size:"medium"}))),b(ts,{media:a.audio,"media-type":"audio",class:"col-start-2 !w-full px-0 sm:!w-auto sm:flex-shrink-0"},null,8,["media"])]),b(ns,{media:a.audio,class:"min-w-0"},null,8,["media"])])]))}}),hs={class:"z-10 col-span-full row-span-full self-end justify-self-start"},bs={role:"document",class:"flex min-w-0 flex-shrink-0 flex-col gap-1"},gs={key:0,class:"flex flex-col gap-1"},ys={class:"flex flex-row"},_s={class:"flex"},ws={key:0,class:"dot-before"},ks={key:1,class:"flex flex-shrink-0 flex-row"},$s=x({__name:"VRowLayout",props:{audio:{},size:{}},setup(t){const a=t,e={},l=m(()=>a.size==="s"),n=m(()=>a.size==="m"),d=m(()=>a.size==="l"),{isHidden:c}=F(a.audio),$=V(),u=m(()=>$.isBreakpoint("md"));return(i,L)=>{const s=je("i18n-t");return f(),v("article",{class:_(["row-track grid p-2 hover:bg-surface md:p-4",[`size-${i.size}`,{"items-start":l.value}]])},[r("div",{class:_(["thumbnail grid overflow-hidden rounded-sm",{"h-20 w-20":l.value}])},[b(ue,{audio:i.audio,class:"col-span-full row-span-full"},null,8,["audio"]),se(r("div",hs,[w(i.$slots,"audio-control",I(C({size:"small",layout:"row",isTabbable:!1})),void 0,!0)],512),[[ee,l.value]])],2),r("div",bs,[r("h2",{class:_(["decoration-inherit line-clamp-1 block overflow-hidden text-ellipsis whitespace-nowrap rounded-sm text-default hover:text-default group-hover:underline",[{"blur-text":p(c)},l.value?"label-bold":"description-bold"]])},y(p(c)?i.$t("sensitiveContent.title.audio"):i.audio.title),3),r("div",{class:_(["flex text-secondary",[l.value?"caption-regular":"label-regular",n.value?"flex-row items-center":"flex-col gap-1"]])},[b(s,{tag:"div",keypath:"audioTrack.creator",scope:"global",class:_(["line-clamp-1 inline-block overflow-hidden text-ellipsis whitespace-nowrap",{"blur-text":p(c)}])},{creator:M(()=>[E(y(p(c)?i.$t("sensitiveContent.creator"):i.audio.creator),1)]),_:1},8,["class"]),l.value?(f(),v("div",gs,[r("div",ys,[r("span",_s,y(p(Fe)(i.audio.duration||0,!0)),1),i.audio.category?(f(),v("span",ws,y(i.$t(`filters.audioCategories.${i.audio.category}`)),1)):T("",!0)]),b(D,{"hide-name":!0,license:i.audio.license},null,8,["license"])])):(f(),v("div",ks,[i.audio.category?(f(),v("span",{key:0,class:_({"dot-before":n.value})},y(i.$t(`filters.audioCategories.${i.audio.category}`)),3)):T("",!0),b(D,{"hide-name":!u.value,license:i.audio.license,class:_({"dot-before":n.value||d.value&&i.audio.category})},null,8,["hide-name","license","class"])]))],2)]),se(r("div",{class:_(["controller flex flex-row",{"ms-2":d.value}])},[w(i.$slots,"audio-control",I(C({size:d.value?"large":"medium",layout:"row",isTabbable:!1})),void 0,!0),w(i.$slots,"controller",{features:p(re),featureNotices:e,isTabbable:!1},void 0,!0)],2),[[ee,!l.value]])],2)}}}),Ss=N($s,[["__scopeId","data-v-b592e66f"]]),Ts={class:"box-track group relative h-0 w-full rounded-sm bg-complementary pt-full text-default"},xs={class:"absolute inset-0 flex flex-col"},Ms={class:"info flex flex-grow flex-col justify-between px-4 pt-4"},zs={class:"info"},Vs={key:0,class:"label-regular mt-2"},Is={class:"player flex h-12 flex-row items-end"},Cs={class:"flex-none p-2"},Ls={key:0,class:"label-regular self-center"},As=x({__name:"VBoxLayout",props:{audio:{},size:{}},setup(t){const a=t,{t:e}=le({useScope:"global"}),l=m(()=>a.size==="s"),n=m(()=>e(`filters.audioCategories.${a.audio.category}`)),{isHidden:d}=F(a.audio);return(c,$)=>(f(),v("div",Ts,[r("div",xs,[r("div",Ms,[r("h2",{class:_(["label-bold line-clamp-3",{"blur-text":p(d)}])},y(p(d)?c.$t("sensitiveContent.title.audio"):c.audio.title),3),r("div",zs,[b(D,{class:"hidden group-hover:block group-focus:block","hide-name":"",license:c.audio.license},null,8,["license"]),c.audio.category&&!l.value?(f(),v("div",Vs,y(n.value),1)):T("",!0)])]),r("div",Is,[r("div",Cs,[w(c.$slots,"audio-control",I(C({size:"small",layout:"box",isTabbable:!1})),void 0,!0)]),c.audio.category&&l.value?(f(),v("p",Ls,y(n.value),1)):T("",!0),l.value?T("",!0):w(c.$slots,"controller",{key:1,features:[],isTabbable:!1},void 0,!0)])])]))}}),Bs=N(As,[["__scopeId","data-v-74231607"]]),Rs={class:"global-track grid w-full grid-cols-[3rem,1fr] grid-rows-[3rem,3rem] rounded ring-1 ring-gray-3 ring-opacity-20"},js={class:"h-12 w-12 rounded-ss"},Ps={class:"flex h-12 items-center justify-between rounded-se bg-default"},Ds=x({__name:"VGlobalLayout",props:{audio:{}},setup(t){const a=t,{audio:e}=Pe(a),{isHidden:l}=F(e);return(n,d)=>(f(),v("div",Rs,[r("div",js,[b(ue,{class:"rounded-ss",audio:p(e)},null,8,["audio"])]),r("div",Ps,[b(de,{href:`/audio/${p(e).id}`,class:_(["hover-underline label-bold z-10 flex flex-row items-center px-3 pe-12 text-default",{"blur-text":p(l)}])},{default:M(()=>[E(y(p(l)?n.$t("sensitiveContent.title.audio"):p(e).title),1)]),_:1},8,["href","class"])]),w(n.$slots,"audio-control",I(C({size:"medium",layout:"global"})),void 0,!0),w(n.$slots,"controller",{usableFrac:1},void 0,!0)]))}}),Es=N(Ds,[["__scopeId","data-v-9e9350d0"]]),da=x({__name:"VAudioTrack",props:{audio:{},layout:{},size:{},searchTerm:{}},emits:["shift-tab","interacted","mousedown","focus"],setup(t,{emit:a}){var Z;const e=t,l=a,{t:n}=le({useScope:"global"}),d=os(),c=Ae(),$=Ze(),u=k("paused"),i=k(0),L=()=>{s||(s=new Audio(e.audio.url)),Object.entries(K).forEach(([o,h])=>s.addEventListener(o,h)),s.paused?s.ended?H():U():W(),i.value=s.currentTime};let s=((Z=$.obj.value)==null?void 0:Z.src)===e.audio.url?$.obj.value:void 0;const G=()=>{s&&(te.includes(u.value)?(i.value=s.currentTime,window.requestAnimationFrame(G)):i.value=s.currentTime)},O=Ke(),ce=()=>{O.setMediaProperties("audio",e.audio.id,{hasLoaded:!0}),u.value="playing"},me=()=>{u.value="loading"},W=()=>{e.audio.hasLoaded?u.value="playing":u.value="loading",$.obj.value=s,d.setActiveMediaItem({type:"audio",id:e.audio.id}),d.setMessage({message:null}),G()},U=()=>{u.value="paused",d.pauseActiveMediaItem()},H=()=>u.value="played",pe=()=>{u.value!=="playing"&&s&&(i.value=s.currentTime,u.value==="played"&&(u.value="paused"))},z=es(()=>{var o;return s?s.duration:typeof((o=e.audio)==null?void 0:o.duration)=="number"?e.audio.duration/1e3:0}),K={play:W,pause:U,ended:H,timeupdate:pe,durationchange:()=>{s&&(z.value=s.duration)},waiting:me,playing:ce};s&&L(),De(()=>{if(!s)return;Object.entries(K).forEach(([Ie,Ce])=>s==null?void 0:s.removeEventListener(Ie,Ce));const{matches:o}=Oe(),{matches:h}=We(),g=Le(c==null?void 0:c.params.id);h.value&&g&&g===e.audio.id||o.value&&O.getItemById(qe,e.audio.id)||s.pause()});const fe=()=>{s||L(),d.playAudio(s)},ve=()=>s==null?void 0:s.pause();Ee($.obj,o=>{o!==s&&(u.value==="playing"||u.value==="loading")&&(s==null||s.pause())},{immediate:!0});const he=m(()=>d.message?n(`audioTrack.messages.${d.message}`):""),B=o=>{let h;if(!o)switch(u.value){case"playing":{o="paused";break}case"paused":case"played":{o="playing";break}}switch(o){case"playing":{fe(),h="play";break}case"paused":{ve(),h="pause";break}}q(h)},q=o=>{o&&(A.dismiss(),l("interacted",{event:o,id:e.audio.id,provider:e.audio.provider}))},Q=o=>{s||L(),s&&(Number.isFinite(z.value)?s.currentTime=o*z.value:Number.isFinite(s.duration)?s.currentTime=o*s.duration:console.warn("Duration is not finite. Skipping seek.")),q("seek")},be={full:vs,row:Ss,box:Bs,global:Es},ge=m(()=>be[e.layout]),ye=m(()=>{if(!(e.layout==="box"&&!e.size))return e.size??"m"}),_e=k(null),X=k(null),we=o=>{var g;const h=((g=X.value)==null?void 0:g.$el.contains(o.target))??!1;A.handleMouseDown(),l("mousedown",{event:o,inWaveform:h})},S=m(()=>["box","row"].includes(e.layout)),ke=m(()=>S.value?{href:`/audio/${e.audio.id}/${e.searchTerm?"?q="+e.searchTerm:""}`,class:["cursor-pointer",{"focus-bold-filled":e.layout==="box","focus-slim-tx":e.layout==="row"}]}:{}),$e=m(()=>S.value?n("audioTrack.ariaLabelInteractiveSeekable",{title:e.audio.title}):n("audioTrack.ariaLabel",{title:e.audio.title})),Se=()=>{u.value=te.includes(u.value)?"paused":"playing",B(u.value)},{isSeeking:Te,...R}=Ne({duration:z,currentTime:i,isReady:k(!0),isSeekable:m(()=>e.layout!=="box"),onSeek:Q,onTogglePlayback:Se}),xe=o=>{R.listeners.keydown(o)},Me=m(()=>({...S.value?R.attributes.value:{},...ke.value})),A=ss(),Y=o=>{A.show(),l("focus",o)},J=()=>{A.hide(),R.listeners.blur()},ze=o=>{S.value||Y(o)},Ve=()=>{S.value||J()};return(o,h)=>(f(),P(ae(S.value?de:"div"),j(Me.value,{class:"audio-track group block overflow-hidden rounded-sm ring-pink-8 hover:no-underline","aria-label":$e.value,role:S.value?"application":void 0,onKeydown:[h[0]||(h[0]=Be(Re(g=>o.$emit("shift-tab",g),["shift","exact"]),["tab"])),xe],onBlur:J,onMousedown:we,onFocus:Y}),{default:M(()=>[(f(),P(ae(ge.value),{audio:o.audio,size:ye.value,status:u.value,"current-time":i.value},{controller:M(g=>[b(Ge,j({ref_key:"waveformRef",ref:X},g,{"is-parent-seeking":p(Te),peaks:o.audio.peaks,"audio-id":o.audio.id,"current-time":i.value,duration:p(z),message:he.value,onSeeked:Q,onTogglePlayback:B,onBlur:Ve,onFocus:ze}),null,16,["is-parent-seeking","peaks","audio-id","current-time","duration","message"])]),"audio-control":M(g=>[b(Qe,j({ref_key:"audioControlRef",ref:_e,status:u.value},g,{onToggle:B}),null,16,["status"])]),_:1},8,["audio","size","status","current-time"]))]),_:1},16,["aria-label","role"]))}});export{da as _,ns as a,ts as b,ss as u};
