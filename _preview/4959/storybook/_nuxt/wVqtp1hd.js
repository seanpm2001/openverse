import{u as k}from"./xwskLidM.js";import{v as m}from"./C67TMzvP.js";import{u as R,a as V}from"./nLTbcOiO.js";import{u as F}from"./CsX9763x.js";import{I as $}from"./fl49u9nx.js";import{u as D}from"./DsW0RRgO.js";import{u as E}from"./bBgZBGC4.js";import{e as I}from"./DQnMOLSw.js";import{_ as C}from"./BOv1JzQ7.js";import{_ as H}from"./CoRMBWob.js";import{_ as N}from"./BhwEeiXI.js";import{V as G}from"./CxCG1Ups.js";import{_ as M}from"./wM1q_EzW.js";import{d as U,G as p,_ as j,z as r,I as z,E as o,C as A,N as s,a0 as L,D as O,M as h,O as q,U as K}from"./lKNUlTH_.js";const P={class:"main-header z-30 flex w-full items-stretch justify-between gap-x-2 bg-default px-6 py-4"},ce=U({__name:"VHeaderDesktop",setup(X){const _=p(null),l=p(null),g=R(),n=V(),i=F(),t=j($),S=r(()=>g.fetchState.isFetching),{$sendCustomEvent:c}=k(),{updateSearchState:x,searchTerm:a,searchStatus:u}=D(c),w=()=>{var e;a.value="",I((e=l.value)==null?void 0:e.$el.querySelector("input"))},d=async()=>{window.scrollTo({top:0,left:0,behavior:"auto"});const e=document.activeElement;e==null||e.blur(),x()},b=r(()=>!n.searchTypeIsSupported),v=()=>{const e=t!=null&&t.value?"closed":"opened";c("TOGGLE_FILTER_SIDEBAR",{searchType:n.searchType,toState:e}),i.toggleFilters()},y=r(()=>i.isBreakpoint("xl")),{doneHydrating:B}=E();return(e,f)=>(O(),z("header",P,[o(N,{"is-fetching":S.value},null,8,["is-fetching"]),o(H,{ref_key:"searchBarRef",ref:l,modelValue:s(a),"onUpdate:modelValue":f[0]||(f[0]=T=>L(a)?a.value=T:null),modelModifiers:{trim:!0},class:"me-4 flex-grow",onSubmit:d,onRecentHidden:d},{default:A(()=>[h(o(G,{icon:"close-small",label:e.$t("browsePage.searchForm.clear"),variant:"filled-white",class:"hidden group-focus-within:flex",onClick:w},null,8,["label"]),[[m,s(a)!==""]]),h(q("span",{class:"info mx-4 hidden whitespace-nowrap text-xs text-secondary group-focus-within:hidden group-hover:text-default group-focus:text-default lg:block"},K(s(u)),513),[[m,!!s(u)]])]),_:1},8,["modelValue"]),o(M,{"show-label":y.value},null,8,["show-label"]),o(C,{ref_key:"filterButtonRef",ref:_,class:"flex self-stretch",pressed:s(t),disabled:!s(B)||b.value,"aria-haspopup":"dialog","aria-expanded":s(t),onToggle:v},null,8,["pressed","disabled","aria-expanded"])]))}});export{ce as _};
