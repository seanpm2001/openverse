import{k as s}from"./RevM6cLn.js";import{a as d}from"./nLTbcOiO.js";import{c as R}from"./DC-AD4tD.js";import{G as v,z as T,T as K,p as x}from"./lKNUlTH_.js";const w=r=>r.key===s.ArrowUp||r.key===s.ArrowDown,O=(r,t,u)=>{const i=r===s.ArrowUp?0:-1,c=r===s.ArrowUp?-1:1;return R(u??i,c,0,t)},z=({focusInput:r,term:t,isMobile:u,isInputFocused:i})=>{const c=d(),o=v(!1),a=v(void 0),l=T(()=>c.recentSearches),h=()=>{o.value=!1,t.value===""&&c.searchTerm!==""&&(t.value=c.searchTerm)},f=()=>{o.value=!0,x(()=>r())},y={isVisible:o,hide:h,show:f,selectedIdx:a,entries:l},p=e=>{e.preventDefault();const{key:n,altKey:E}=e;f(),!E&&(a.value=O(n,l.value.length,a.value))},S=(e,n)=>e.key===s.Escape?!0:!n&&(e.key===s.Enter||e.key===s.Tab&&e.shiftKey),k=e=>{const{key:n}=e;n===s.Enter&&a.value&&(t.value=l.value[a.value]),S(e,u)&&h(),u&&!o.value&&w(e)&&i&&(i.value=!1),a.value=void 0},m=e=>w(e)?p(e):k(e),A=e=>{t.value=l.value[e],h(),a.value=void 0},V=e=>{r(),d().clearRecentSearches(e)};return K(a,e=>{e!==void 0&&(t.value=l.value[e])}),{handleKeydown:m,handleSelect:A,handleClear:V,recent:y,isRecentVisible:o}};export{z as u};
