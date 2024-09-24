import{b as $,I as E,A as B}from"./QKPGpISV.js";import{V as D}from"./B4bs1Dzo.js";import{s as N}from"./DivIZ7Lb.js";import{u as C}from"./CsX9763x.js";import{a as S}from"./BiA5wFep.js";import{V as I}from"./D3ehJaoC.js";import{u as w}from"./xwskLidM.js";import{_ as F,u as L}from"./Df6Bt93s.js";import{u as M}from"./C4uCsYSu.js";import{a as U}from"./nLTbcOiO.js";import{d as h,F as G,D as r,I as c,E as g,R as O,N as m,z as p,Y as P,A as u,C as V,aw as q,K as _,O as y,U as H,J as f,L as b,P as v,Q as A,ah as j}from"./lKNUlTH_.js";import{V as J}from"./CJfwjuxI.js";import{_ as K}from"./DlAUqK2U.js";const R=h({inheritAttrs:!1,__name:"VAudioResult",props:{kind:{},searchTerm:{},relatedTo:{default:"null"},layout:{},size:{},audio:{}},setup(n){const e=n,{$sendCustomEvent:l}=w(),t=U(),{audio:s}=G(e),{isHidden:a}=M(s),o=(i,{inWaveform:d})=>{var k;d||(L().hide(),l("SELECT_SEARCH_RESULT",{id:i.id,kind:e.kind,mediaType:$,query:e.searchTerm,provider:i.provider,relatedTo:e.relatedTo??"null",sensitivities:((k=i.sensitivity)==null?void 0:k.join(","))??"",isBlurred:a.value??"null",collectionType:t.strategy!=="default"?t.strategy:"null",collectionValue:t.collectionValue??"null"}))},T=i=>{const d=e.kind==="related"?"VRelatedAudio":e.layout==="box"?"VAllResultsGrid":"AudioSearch";l("AUDIO_INTERACTION",{...i,component:d})};return(i,d)=>(r(),c("li",null,[g(F,O({audio:m(s),layout:i.layout,size:i.size,"search-term":i.searchTerm},i.$attrs,{onInteracted:T,onMousedown:d[0]||(d[0]=k=>o(m(s),k))}),null,16,["audio","layout","size","search-term"])]))}}),Q={class:"font-sans"},z=h({__name:"VAudioInstructions",props:{kind:{}},setup(n){const e=n,{isVisible:l}=L(),t=p(()=>e.kind==="all"?["spacebar"]:["spacebar","left","right"]),s=p(()=>e.kind==="all"?"allResults.snackbar":"audioResults.snackbar");return(a,o)=>{const T=P("i18n-t");return r(),u(J,{size:"large","is-visible":m(l)},{default:V(()=>[g(T,{scope:"global",keypath:`${s.value}.text`,tag:"p"},q({_:2},[_(t.value,i=>({name:i,fn:V(()=>[y("kbd",Q,H(a.$t(`${s.value}.${i}`)),1)])}))]),1032,["keypath"])]),_:1},8,["is-visible"])}}}),Y=["aria-label"],W=h({__name:"VAllResultsGrid",props:{searchTerm:{},results:{},collectionLabel:{}},setup(n){const e=C(),{isFilterVisible:l}=N(e),t=p(()=>e.isBreakpoint("sm"));return(s,a)=>(r(),c("div",null,[g(z,{kind:"all"}),y("ol",{class:v(["grid grid-cols-2 gap-4",m(l)?"lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5":"sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"]),"aria-label":s.collectionLabel},[(r(!0),c(f,null,_(s.results,o=>(r(),c(f,null,[m(S).image(o)?(r(),u(I,{key:o.id,image:o,"search-term":s.searchTerm,kind:"search","aspect-ratio":"square"},null,8,["image","search-term"])):b("",!0),m(S).audio(o)?(r(),u(R,{key:o.id,audio:o,"search-term":s.searchTerm,layout:"box",size:t.value?"l":"s",kind:"search"},null,8,["audio","search-term","size"])):b("",!0)],64))),256))],10,Y)]))}}),X=["aria-label"],Z=h({__name:"VAudioCollection",props:{kind:{default:"search"},searchTerm:{},relatedTo:{default:"null"},collectionLabel:{},results:{}},setup(n){const e=n,l=C(),t=p(()=>e.kind==="related"?l.isBreakpoint("sm")?"m":"s":l.isBreakpoint("sm")?l.isBreakpoint("xl")?"l":"m":"s");return(s,a)=>(r(),c("div",null,[g(z,{kind:"audio"}),y("ol",{"aria-label":s.collectionLabel,class:v(["-mx-2 flex flex-col md:-mx-4",s.kind==="related"?"gap-4":"gap-2 md:gap-1"])},[(r(!0),c(f,null,_(s.results,o=>(r(),u(R,{key:o.id,"search-term":s.searchTerm,"related-to":s.relatedTo,audio:o,layout:"row",size:t.value,kind:s.kind},null,8,["search-term","related-to","audio","size","kind"]))),128))],10,X)]))}}),x=["aria-label"],ee=h({__name:"VImageCollection",props:{kind:{},searchTerm:{},relatedTo:{default:"null"},collectionLabel:{},results:{}},setup(n){return(e,l)=>(r(),c("ol",{class:"image-grid flex flex-wrap gap-4","aria-label":e.collectionLabel},[(r(!0),c(f,null,_(e.results,t=>(r(),u(I,{key:t.id,image:t,"search-term":e.searchTerm,"aspect-ratio":"intrinsic",kind:e.kind,"related-to":e.relatedTo},null,8,["image","search-term","kind","related-to"]))),128))],8,x))}}),se=K(ee,[["__scopeId","data-v-b5e572b1"]]),ke=h({__name:"VMediaCollection",props:{kind:{},searchTerm:{},relatedTo:{default:"null"},collectionLabel:{},results:{},isFetching:{type:Boolean}},emits:["load-more"],setup(n){const e=n,l=p(()=>e.isFetching&&e.results.items.length===0),t={[E]:se,[$]:Z,[B]:W},s=p(()=>t[e.results.type]);return(a,o)=>(r(),c("section",null,[A(a.$slots,"header"),l.value?(r(),u(D,{key:0,"is-for-tab":a.results.type},null,8,["is-for-tab"])):b("",!0),l.value?b("",!0):(r(),u(j(s.value),{key:1,results:a.results.items,kind:a.kind,"search-term":a.searchTerm,"related-to":a.relatedTo,"collection-label":a.collectionLabel,class:v({"pt-2 sm:pt-0":a.results.type==="image"})},null,8,["results","kind","search-term","related-to","collection-label","class"])),A(a.$slots,"footer")]))}});export{ke as _};
