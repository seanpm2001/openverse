import{t as d}from"./C4yIuh8P.js";import{d as i,_ as u,G as b,H as c,$ as p,z as o,I as f,Q as m,P as v,D as _}from"./lKNUlTH_.js";const P=["id","aria-labelledby","tabindex"],x=i({__name:"VTabPanel",props:{id:{}},setup(r){const l=r,e=u(d);if(!e)throw new Error("Could not resolve tabContext in VTabPanel");const a=b(null);c(()=>{e.registerPanel(a)}),p(()=>e.unregisterPanel(a));const t=o(()=>l.id===e.selectedId.value),s=o(()=>e.variant.value==="bordered"?"border rounded-sm first:rounded-ss-none":"border-t");return(n,y)=>(_(),f("div",{id:`panel-${n.id}`,ref_key:"internalPanelRef",ref:a,"aria-labelledby":`tab-${n.id}`,role:"tabpanel",tabindex:t.value?0:-1,class:v(["min-h-0 overflow-y-auto border-default p-6",[s.value,{hidden:!t.value}]])},[m(n.$slots,"default")],10,P))}});export{x as _};
