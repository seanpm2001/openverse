import{T as q}from"./C67TMzvP.js";import{P as K,L as D,a as $,R as Q,u as V,n as z}from"./CIg47mny.js";import{g as w,_ as G,w as J,t as P,d as W,s as Z,c as U}from"./BUsGC9UV.js";import{d as H,Z as X,as as Y,h as k,G as A,_ as N,T as L,au as ee,p as te,J as ae,z as _,ag as re,D as b,I as O,A as ne,E as oe,N as T}from"./lKNUlTH_.js";import{u as j,b as E,c as se}from"./xwskLidM.js";import{u as ie,a as ue,i as I,b as le,c as ce,h as de}from"./nLTbcOiO.js";import{u as fe}from"./B-AmpYsk.js";import{u as me}from"./vJbQKuyf.js";import{s as F}from"./DivIZ7Lb.js";import{s as pe}from"./BOX21o1p.js";import{u as he}from"./CeIx8O89.js";import{A as ve}from"./QKPGpISV.js";import{_ as ge}from"./DI37Eb2l.js";import{w as ye}from"./CzMkt2mC.js";import"./CFMQYC2y.js";import"./5VTD9IrS.js";import"./yH-X360_.js";import"./CVtkxrq9.js";import"./DPAaeLdr.js";import"../sb-preview/runtime.js";import"./Xs_VBmP5.js";import"./Bz7P8nyL.js";import"./DiBe8aPd.js";import"./BR9eDTPM.js";import"./BSEdKPgk.js";import"./2vq21tXV.js";import"./CsX9763x.js";import"./CTON8dBl.js";import"./C0voMBC3.js";import"./Cpj98o6Y.js";import"./Dt-H8hG_.js";import"./Ci7G4jyV.js";import"./D0ww02ZN.js";const _e=H({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,a=e.route,c={};for(const r in e.route)Object.defineProperty(c,r,{get:()=>n===e.renderKey?e.route[r]:a[r]});return X(K,Y(c)),()=>k(e.vnode,{ref:e.vnodeRef})}}),ke=H({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:n,slots:a,expose:c}){const r=j(),o=A(),l=N(K,null);let m;c({pageRef:o});const i=N(D,null);let s;const g=r.deferHydration();if(r.isHydrating){const t=r.hooks.hookOnce("app:error",g);$().beforeEach(t)}return e.pageKey&&L(()=>e.pageKey,(t,p)=>{t!==p&&r.callHook("page:loading:start")}),()=>k(Q,{name:e.name,route:e.route,...n},{default:t=>{const p=Se(l,t.route,t.Component),y=l&&l.matched.length===t.route.matched.length;if(!t.Component){if(s&&!y)return s;g();return}if(s&&i&&!i.isCurrent(t.route))return s;if(p&&l&&(!i||i!=null&&i.isCurrent(l)))return y?s:null;const d=w(t,e.pageKey);!r.isHydrating&&!xe(l,t.route,t.Component)&&m===d&&r.callHook("page:loading:end"),m=d;const h=!!(e.transition??t.route.meta.pageTransition??E),f=h&&Re([e.transition,t.route.meta.pageTransition,E,{onAfterLeave:()=>{r.callHook("page:transition:finish",t.Component)}}].filter(Boolean)),R=e.keepalive??t.route.meta.keepalive??se;return s=G(q,h&&f,J(R,k(ee,{suspensible:!0,onPending:()=>r.callHook("page:start",t.Component),onResolve:()=>{te(()=>r.callHook("page:finish",t.Component).then(()=>r.callHook("page:loading:end")).finally(g))}},{default:()=>{const S=k(_e,{key:d||void 0,vnode:a.default?k(ae,void 0,a.default(t)):t.Component,route:t.route,renderKey:d||void 0,trackRootNodes:h,vnodeRef:o});return R&&(S.type.name=t.Component.type.name||t.Component.type.__name||"RouteProvider"),S}}))).default(),s}})}});function Re(e){const n=e.map(a=>({...a,onAfterLeave:a.onAfterLeave?P(a.onAfterLeave):void 0}));return W(...n)}function Se(e,n,a){if(!e)return!1;const c=n.matched.findIndex(r=>{var o;return((o=r.components)==null?void 0:o.default)===(a==null?void 0:a.type)});return!c||c===-1?!1:n.matched.slice(0,c).some((r,o)=>{var l,m,i;return((l=r.components)==null?void 0:l.default)!==((i=(m=e.matched[o])==null?void 0:m.components)==null?void 0:i.default)})||a&&w({route:n,Component:a})!==w({route:e,Component:a})}function xe(e,n,a){return e?n.matched.findIndex(r=>{var o;return((o=r.components)==null?void 0:o.default)===(a==null?void 0:a.type)})<n.matched.length-1:!1}const be=["id"],Te={key:1},ot=H({name:"SearchPage",__name:"search",async setup(e){let n,a;const c=j(),r=he(),o=ie(),l=ue(),m=V(),{searchTerm:i,searchType:s,apiSearchQueryParams:g,searchTypeIsSupported:t}=F(l),{fetchState:p}=F(o),y=A(`${i.value} | Openverse`);L(i,()=>{y.value=`${i.value} | Openverse`}),me(()=>({title:y.value}));const d=A(I(s.value)?{type:s.value,items:s.value===ve?o.allMedia:o.resultItems[s.value]}:null),h=async(u={})=>{if(!I(s.value)||p.value.hasStarted&&f.value!==null&&!ce(f.value))return;u.shouldPersistMedia||(d.value={type:s.value,items:[]});const x=await o.fetchMedia(u);return d.value={type:s.value,items:x},f.value===null||de(f.value)?x:f.value},f=_(()=>p.value.fetchingError),R=_(()=>p.value.isFetching);ye(g,(u,v)=>{le(u,v)||z(l.getSearchPath())},{debounce:800,maxWait:5e3});const S=_(()=>m.query),B=_(()=>m.path),M=_(()=>r.isOn("fetch_sensitive")),C=async()=>{await h({shouldPersistMedia:!0})};return[n,a]=re(async()=>fe("search",async()=>{var v;if(c.isHydrating)return d.value;(v=document.getElementById("main-page"))==null||v.scroll(0,0);const u=await h();return!u||u&&"requestKind"in u?Z(u??U("No results found")):u},{server:!1,lazy:!0,watch:[M,S,B]})),await n,a(),(u,v)=>{const x=ke;return b(),O("div",{id:T(pe),tabindex:"-1",class:"browse-page flex w-full flex-col px-6 lg:px-10"},[f.value?(b(),ne(ge,{key:0,"fetching-error":f.value,class:"w-full py-10"},null,8,["fetching-error"])):(b(),O("section",Te,[oe(x,{"page-key":(u._.provides[K]||u.$route).path,results:d.value,"is-fetching":R.value,"search-term":T(i),supported:T(t),"handle-load-more":C,"data-testid":"search-results"},null,8,["page-key","results","is-fetching","search-term","supported"])]))],8,be)}}});export{ot as default};
