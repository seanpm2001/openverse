import{u as K}from"./xwskLidM.js";import{k as n}from"./RevM6cLn.js";import{e as v}from"./DQnMOLSw.js";import{d as B,G as w,aa as A,I as F,Q as z,P as h,Z as g,D as k,V as D,_ as b,T as R,z as x,E as L,C as N,R as S,N as r,O as j,A as E,L as U}from"./lKNUlTH_.js";import{w as I}from"./C0voMBC3.js";import{V as T}from"./fl49u9nx.js";import{V as q}from"./9Q23NzEb.js";import{V as O}from"./MXhTc5uu.js";import{_ as Q}from"./DlAUqK2U.js";const re=["vertical","horizontal","columns"],$=Symbol("VItemGroupContext"),G=Symbol("VItemGroupFocusContext"),Z=["role"],se=B({__name:"VItemGroup",props:{direction:{default:"vertical"},bordered:{type:Boolean,default:!0},type:{default:"menu"},size:{default:"small"},showCheck:{type:Boolean,default:!0}},setup(y){const u=[n.ArrowUp,n.ArrowDown,n.ArrowLeft,n.ArrowRight],c=y,l=w(null),i=w(!1);g($,c);const d=K().$i18n,p=(e,o)=>d.localeProperties.value.dir==="rtl"&&c.direction==="horizontal"?o:e,t=e=>{var V;if(!u.includes(e.key)||!l.value)return;e.preventDefault();const o=e.target,s=Array.from((V=l.value)==null?void 0:V.querySelectorAll("[data-item-group-item]")),m=s.findIndex(P=>P===o);switch(e.key){case n.ArrowUp:case p(n.ArrowLeft,n.ArrowRight):return m===0?v(s[s.length-1]):v(s[m-1]);case n.ArrowDown:case p(n.ArrowRight,n.ArrowLeft):return m===s.length-1?v(s[0]):v(s[m+1]);default:return}},a=w(0),C=(e,o)=>{o&&!e&&(a.value-=1),!o&&e&&(a.value+=1)},f={isGroupFocused:A(i),onItemKeyPress:t,selectedCount:A(a),setSelected:C};return g(G,f),(e,o)=>(k(),F("div",{ref_key:"nodeRef",ref:l,class:h(["flex w-full",{"flex-col":e.direction==="vertical","flex-row":e.direction!=="vertical","flex-wrap":e.direction==="columns"}]),role:e.type,onFocusin:o[0]||(o[0]=s=>i.value=!0),onFocusout:o[1]||(o[1]=s=>i.value=!1)},[z(e.$slots,"default")],42,Z))}}),H=B({inheritAttrs:!1,__name:"VItem",props:{selected:{type:Boolean},isFirst:{type:Boolean},as:{default:"button"}},emits:["click"],setup(y){const u=y,c=D(),l=b(G),i=w(!1),d=b(T,!1),p=b($);if(!p||!l)throw new Error("Do not use `VItem` outside of a `VItemGroup`. Use `VButton` instead.");const t=p,a=l;d&&t.bordered&&I("Bordered popover items are not supported"),c.size&&I("The `size` prop should be passed to the parent `VItemGroup` component."),R(()=>u.selected,(e,o)=>a.setSelected(e,o));const C=x(()=>t.type!=="radiogroup"||a.selectedCount.value===0&&u.isFirst&&!a.isGroupFocused.value||i.value||!a.isGroupFocused.value&&u.selected?0:-1),f=x(()=>{const{class:e,...o}=c;return{class:e,vButtonAttrs:o}});return(e,o)=>(k(),F("div",{class:h(["flex",[r(t).direction,f.value.class,{[`${r(t).direction}-bordered`]:r(t).bordered,[`${r(t).direction}-popover-item`]:r(d),"border border-default":r(t).bordered,"has-check":r(t).showCheck,"font-semibold":e.selected&&!r(t).showCheck,"bg-transparent":e.selected&&r(t).bordered&&r(t).showCheck},r(d)?"px-2":""]])},[L(q,S({"data-item-group-item":"",as:e.as,class:["relative min-w-full justify-between border-0 hover:bg-transparent-hover focus-visible:z-10",{"w-max":r(t).direction==="horizontal","!p-3":r(t).size==="small","!p-5 !ps-6":r(t).size==="medium","bg-transparent-hover ring-offset-gray-2":e.selected&&r(t).showCheck,"text-default":e.as==="VLink","!px-2":!r(t).showCheck}],variant:"transparent-tx",size:"disabled",pressed:e.selected,role:r(t).type==="radiogroup"?"radio":"menuitemcheckbox","aria-checked":e.selected,tabindex:C.value},f.value.vButtonAttrs,{onFocus:o[0]||(o[0]=s=>i.value=!0),onBlur:o[1]||(o[1]=s=>i.value=!1),onKeydown:r(a).onItemKeyPress,onClick:o[2]||(o[2]=s=>e.$emit("click"))}),{default:N(()=>[j("div",{class:h(["flex w-full flex-grow gap-x-2 whitespace-nowrap rounded-sm",[`${r(t).direction}-content`]])},[z(e.$slots,"default",{},void 0,!0)],2),e.selected&&r(t).direction==="vertical"&&r(t).showCheck?(k(),E(O,{key:0,class:h(["absolute",r(t).size==="small"?"end-3":"end-5"]),name:"item-indicator"},null,8,["class"])):U("",!0)]),_:3},16,["as","class","pressed","role","aria-checked","tabindex","onKeydown"])],2))}}),ne=Q(H,[["__scopeId","data-v-6c1df842"]]);export{ne as V,se as _,re as i};
