const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BEbpKRct.js","./2vq21tXV.js","./BSEdKPgk.js","./lKNUlTH_.js","./CsX9763x.js","./BR9eDTPM.js","./CVtkxrq9.js","./DivIZ7Lb.js","./CA4HNXs5.js","./CIg47mny.js","./CFMQYC2y.js","./xwskLidM.js","./MXhTc5uu.js","./CuPsdpTl.js","./DlAUqK2U.js","./VIcon.Dp3bi4FO.css","./DR2xa6OK.js","./5ehHOY6F.js","./9Q23NzEb.js","./C0voMBC3.js","./BOX21o1p.js","./VButton.CXrgG5NA.css","./CzQJ3XG_.js","./DiBe8aPd.js","./DPAaeLdr.js"])))=>i.map(i=>d[i]);
import{c as g}from"./CzMkt2mC.js";import{u as y}from"./CsX9763x.js";import{_ as f}from"./DPAaeLdr.js";import{v as A}from"./C67TMzvP.js";import{u as C}from"./xwskLidM.js";import{u as P}from"./B-yYc1eY.js";import{d as w,z as e,D as n,I as S,M as x,O as E,A as m,N as h,L as B,W as b,G as N,T,E as D,P as k,ah as I}from"./lKNUlTH_.js";import{_ as R}from"./E8Zs_Sga.js";import{_ as z}from"./K80pDeuB.js";import{_ as H}from"./DoIooQtM.js";const L={class:"flex flex-col gap-2 p-2 pb-0"},O=w({__name:"VBanners",setup(d){const s=b(()=>f(()=>import("./BEbpKRct.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url)),t=b(()=>f(()=>import("./CzQJ3XG_.js"),__vite__mapDeps([22,23,11,3,5,6,2,10,24,9,8,12,13,14,15,16,17,18,19,20,21]),import.meta.url)),o=y(),l=C().$i18n.localeProperties,i=e(()=>o.shouldShowTranslationBanner(l.value)),r=e(()=>o.shouldShowAnalyticsBanner),a=e(()=>`translation-${l.value.code}`),{current:p}=P(),_=e(()=>["","index"].includes(p.value)?"dark":"regular"),v=u=>{o.dismissBanner(u)},V=e(()=>[i,r].some(u=>u.value));return(u,c)=>(n(),S("div",null,[x(E("div",L,[r.value?(n(),m(h(t),{key:0,variant:_.value,onClose:c[0]||(c[0]=$=>v("analytics"))},null,8,["variant"])):B("",!0),i.value?(n(),m(h(s),{key:1,variant:_.value,"banner-key":a.value,onClose:c[1]||(c[1]=$=>v(a.value))},null,8,["variant","banner-key"])):B("",!0)],512),[[A,V.value]])]))}}),X=w({__name:"VHeader",props:{showBottomBorder:{type:Boolean,default:!1},kind:{},color:{default:"default"}},setup(d){const s=d,t=N(null),o=y(),{height:l}=g(t);T(l,a=>{o.setHeaderHeight(a)});const i=e(()=>({internal:R,"search-desktop":z,"search-mobile":H})[s.kind]),r=e(()=>`bg-${s.color}`);return(a,p)=>(n(),S("div",{ref_key:"headerRef",ref:t,class:k(["header-el",r.value])},[D(O),(n(),m(I(i.value),{class:k(["h-20 border-b",[a.showBottomBorder?"border-b-default":"border-b-tx",r.value]])},null,8,["class"]))],2))}});export{X as _};
