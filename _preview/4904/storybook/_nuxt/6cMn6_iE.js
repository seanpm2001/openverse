import{u as O}from"./CPKoWrgC.js";import{_ as F}from"./CxW0GE0L.js";import{d as R,G as s,z as p,I as E,O as w,Q as l,N as o,A as $,C as a,L as S,D as b}from"./lKNUlTH_.js";const A=R({__name:"VModal",props:{hideOnEsc:{type:Boolean,default:!0},hideOnClickOutside:{type:Boolean,default:!1},autoFocusOnShow:{type:Boolean,default:!0},autoFocusOnHide:{type:Boolean,default:!0},label:{},labelledBy:{},initialFocusElement:{default:void 0},variant:{default:"default"},mode:{default:"light"},modalContentClasses:{default:""},id:{}},emits:["open","close"],setup(g,{expose:h,emit:v}){const C=g,y=v,i=s(null),n=s(null),r=s(null),d=p(()=>{var e;return(e=r.value)==null?void 0:e.firstElementChild}),k=p(()=>{var e;return(e=n.value)==null?void 0:e.deactivateFocusTrap}),{close:u,onTriggerClick:c,triggerA11yProps:B,visible:f}=O({id:C.id,lockBodyScroll:!0,nodeRef:i,emit:y,deactivateFocusTrap:k});return h({close:u}),(e,m)=>(b(),E("div",{ref_key:"nodeRef",ref:i},[w("div",{ref_key:"triggerContainerRef",ref:r,class:"flex",onClick:m[0]||(m[0]=(...t)=>o(c)&&o(c)(...t))},[l(e.$slots,"trigger",{a11yProps:o(B),visible:o(f)})],512),d.value?(b(),$(F,{key:0,id:e.id,ref_key:"modalContentRef",ref:n,visible:o(f),"trigger-element":d.value,"hide-on-esc":e.hideOnEsc,"hide-on-click-outside":e.hideOnClickOutside,"auto-focus-on-show":e.autoFocusOnShow,"auto-focus-on-hide":e.autoFocusOnHide,hide:o(u),"aria-label":e.label,"aria-labelledby":e.labelledBy,"initial-focus-element":e.initialFocusElement,variant:e.variant,mode:e.mode,"content-classes":e.modalContentClasses},{"top-bar":a(({close:t})=>[l(e.$slots,"top-bar",{close:t})]),title:a(()=>[l(e.$slots,"title")]),"close-button":a(({close:t})=>[l(e.$slots,"close-button",{close:t})]),default:a(()=>[l(e.$slots,"default")]),_:3},8,["id","visible","trigger-element","hide-on-esc","hide-on-click-outside","auto-focus-on-show","auto-focus-on-hide","hide","aria-label","aria-labelledby","initial-focus-element","variant","mode","content-classes"])):S("",!0)],512))}});export{A as _};
