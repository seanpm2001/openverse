import{u as p,A as h,V as v}from"./CsX9763x.js";import{g as b,w as _}from"./CzMkt2mC.js";import{G as f,H as u,h as r,ab as g,T as n}from"./lKNUlTH_.js";import{u as E}from"./2vq21tXV.js";import{u as k}from"./CvyrVSfi.js";import{_ as L}from"./Cr-EKv9u.js";import"./BR9eDTPM.js";import"./CVtkxrq9.js";import"./DivIZ7Lb.js";import"./BSEdKPgk.js";import"./CeIx8O89.js";import"./xwskLidM.js";import"./C0voMBC3.js";import"./CFMQYC2y.js";import"./MXhTc5uu.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";import"./CSjnkXPe.js";import"./C67TMzvP.js";const c=e=>(Object.entries(h).find(([,o])=>e>=o)??["xs",0])[0];function T(){const e=p(),{width:t}=b(),o=()=>{e.updateBreakpoint(c(t.value))};return _(t,i=>{const a=c(i);e.updateBreakpoint(a)},{debounce:100}),{updateBreakpoint:o}}const S=e=>({components:{story:e},setup(){const t=f(),{updateBreakpoint:o}=T();return u(()=>{o()}),()=>r("div",{ref:t},[r(e())])}}),{useEffect:w}=__STORYBOOK_MODULE_PREVIEW_API__,d=g({value:"ltr"}),D=(e,t)=>(w(()=>{d.value=t.globals.languageDirection},[t.globals.languageDirection]),{components:{story:e},setup(){const o=f(),i=E({useScope:"global"});return u(()=>{n(d,async a=>{await i.setLocale(a.value==="rtl"?"ar":"en"),o.value&&o.value.ownerDocument.documentElement.setAttribute("dir",(a==null?void 0:a.value)??"ltr")},{immediate:!0})}),()=>r("div",{ref:o},[r(e())])}}),{useEffect:R,useGlobals:y}=__STORYBOOK_MODULE_PREVIEW_API__,O=e=>e==null?void 0:e.split("-")[0],B=e=>["light","dark"].includes(e),I=(e,t)=>{t==="dark-mode"?(e.classList.add("dark-mode"),e.classList.remove("light-mode"),document.documentElement.style.setProperty("--color-bg-curr-page","#0d0d0d")):(e.classList.add("light-mode"),e.classList.remove("dark-mode"),document.documentElement.style.setProperty("--color-bg-curr-page","#ffffff"))},s=g({value:"light"}),P=e=>{const[t,o]=y();return s.value=t.theme,R(()=>{s.value=t.theme},[t.theme]),{components:{story:e},setup(){const{cssClass:i}=k(),a=p();return n(s,l=>{B(l.value)&&a.setColorMode(l.value)},{immediate:!0}),n(i,l=>{I(document.body,l);const m=O(l);m&&o({theme:m})},{immediate:!0}),u(()=>{document.body.classList.add("bg-default")}),()=>r("div",{class:"relative",style:"height: calc(100dvh - 32px);"},[r(e()),r("div",{class:"absolute bottom-0",id:"storybook-theme-switcher"},[r(L)])])}}},Q={decorators:[D,S,P],globalTypes:{theme:{name:"Theme",description:"Color theme",table:{defaultValue:{summary:"light"}},toolbar:{icon:"circlehollow",items:[{value:"light",title:"Light"},{value:"dark",title:"Dark"}]}},languageDirection:{name:"RTL",description:"Simulate an RTL language.",table:{defaultValue:{summary:"ltr"}},toolbar:{icon:"globe",items:[{value:"ltr",title:"LTR"},{value:"rtl",title:"RTL"}]}}},parameters:{backgrounds:{values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0d0d0d"}]},viewport:{viewports:{...v}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},initialGlobals:{theme:"light",languageDirection:"ltr",backgrounds:{value:"light"}}};export{Q as default};
