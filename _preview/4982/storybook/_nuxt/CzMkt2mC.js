import{N as se,T as P,H as Z,p as ee,a0 as le,a2 as te,a9 as ue,a8 as ae,G as E,aa as ce,z as D,ab as $,a1 as fe,a5 as de}from"./lKNUlTH_.js";function B(e){return ue()?(ae(e),!0):!1}function _(e){return typeof e=="function"?e():se(e)}const ne=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const me=e=>e!=null,ve=Object.prototype.toString,pe=e=>ve.call(e)==="[object Object]",x=()=>{},he=we();function we(){var e,t;return ne&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Y(e,t){function n(...o){return new Promise((r,l)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(r).catch(l)})}return n}const oe=e=>e();function re(e,t={}){let n,o,r=x;const l=s=>{clearTimeout(s),r(),r=x};return s=>{const d=_(e),f=_(t.maxWait);return n&&l(n),d<=0||f!==void 0&&f<=0?(o&&(l(o),o=null),Promise.resolve(s())):new Promise((p,i)=>{r=t.rejectOnCancel?i:p,f&&!o&&(o=setTimeout(()=>{n&&l(n),o=null,p(s())},f)),n=setTimeout(()=>{o&&l(o),o=null,p(s())},d)})}}function ge(...e){let t=0,n,o=!0,r=x,l,a,s,d,f;!le(e[0])&&typeof e[0]=="object"?{delay:a,trailing:s=!0,leading:d=!0,rejectOnCancel:f=!1}=e[0]:[a,s=!0,d=!0,f=!1]=e;const p=()=>{n&&(clearTimeout(n),n=void 0,r(),r=x)};return u=>{const c=_(a),m=Date.now()-t,g=()=>l=u();return p(),c<=0?(t=Date.now(),g()):(m>c&&(d||!o)?(t=Date.now(),g()):s&&(l=new Promise((b,y)=>{r=f?y:b,n=setTimeout(()=>{t=Date.now(),o=!0,b(g()),p()},Math.max(0,c-m))})),!d&&!n&&(n=setTimeout(()=>o=!0,c)),o=!1,l)}}function be(e=oe){const t=E(!0);function n(){t.value=!1}function o(){t.value=!0}const r=(...l)=>{t.value&&e(...l)};return{isActive:ce(t),pause:n,resume:o,eventFilter:r}}function ye(e){return te()}function Se(e,t=200,n={}){return Y(re(t,n),e)}function Ee(e,t=200,n=!1,o=!0,r=!1){return Y(ge(t,n,o,r),e)}function ie(e,t,n={}){const{eventFilter:o=oe,...r}=n;return P(e,Y(o,t),r)}function Te(e,t,n={}){const{eventFilter:o,...r}=n,{eventFilter:l,pause:a,resume:s,isActive:d}=be(o);return{stop:ie(e,t,{...r,eventFilter:l}),pause:a,resume:s,isActive:d}}function k(e,t=!0,n){ye()?Z(e,n):t?e():ee(e)}function Ne(e,t,n={}){const{debounce:o=0,maxWait:r=void 0,...l}=n;return ie(e,t,{...l,eventFilter:re(o,{maxWait:r})})}function O(e){var t;const n=_(e);return(t=n==null?void 0:n.$el)!=null?t:n}const W=ne?window:void 0;function M(...e){let t,n,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,r]=e,t=W):[t,n,o,r]=e,!t)return x;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const l=[],a=()=>{l.forEach(p=>p()),l.length=0},s=(p,i,u,c)=>(p.addEventListener(i,u,c),()=>p.removeEventListener(i,u,c)),d=P(()=>[O(t),_(r)],([p,i])=>{if(a(),!p)return;const u=pe(i)?{...i}:i;l.push(...n.flatMap(c=>o.map(m=>s(p,c,m,u))))},{immediate:!0,flush:"post"}),f=()=>{d(),a()};return B(f),f}let q=!1;function Fe(e,t,n={}){const{window:o=W,ignore:r=[],capture:l=!0,detectIframe:a=!1}=n;if(!o)return x;he&&!q&&(q=!0,Array.from(o.document.body.children).forEach(u=>u.addEventListener("click",x)),o.document.documentElement.addEventListener("click",x));let s=!0;const d=u=>r.some(c=>{if(typeof c=="string")return Array.from(o.document.querySelectorAll(c)).some(m=>m===u.target||u.composedPath().includes(m));{const m=O(c);return m&&(u.target===m||u.composedPath().includes(m))}}),p=[M(o,"click",u=>{const c=O(e);if(!(!c||c===u.target||u.composedPath().includes(c))){if(u.detail===0&&(s=!d(u)),!s){s=!0;return}t(u)}},{passive:!0,capture:l}),M(o,"pointerdown",u=>{const c=O(e);s=!d(u)&&!!(c&&!u.composedPath().includes(c))},{passive:!0}),a&&M(o,"blur",u=>{setTimeout(()=>{var c;const m=O(e);((c=o.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&t(u)},0)})].filter(Boolean);return()=>p.forEach(u=>u())}function Oe(){const e=E(!1),t=te();return t&&Z(()=>{e.value=!0},t),e}function X(e){const t=Oe();return D(()=>(t.value,!!e()))}function J(e,t={}){const{window:n=W}=t,o=X(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const l=E(!1),a=f=>{l.value=f.matches},s=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a))},d=fe(()=>{o.value&&(s(),r=n.matchMedia(_(e)),"addEventListener"in r?r.addEventListener("change",a):r.addListener(a),l.value=r.matches)});return B(()=>{d(),s(),r=void 0}),l}const z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V="__vueuse_ssr_handlers__",Ae=_e();function _e(){return V in z||(z[V]=z[V]||{}),z[V]}function xe(e,t){return Ae[e]||t}function Ie(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const We={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},K="vueuse-storage";function Pe(e,t,n,o={}){var r;const{flush:l="pre",deep:a=!0,listenToStorageChanges:s=!0,writeDefaults:d=!0,mergeDefaults:f=!1,shallow:p,window:i=W,eventFilter:u,onError:c=v=>{console.error(v)},initOnMounted:m}=o,g=(p?de:E)(typeof t=="function"?t():t);if(!n)try{n=xe("getDefaultStorage",()=>{var v;return(v=W)==null?void 0:v.localStorage})()}catch(v){c(v)}if(!n)return g;const b=_(t),y=Ie(b),T=(r=o.serializer)!=null?r:We[y],{pause:R,resume:j}=Te(g,()=>H(g.value),{flush:l,deep:a,eventFilter:u});i&&s&&k(()=>{M(i,"storage",I),M(i,K,A),m&&I()}),m||I();function F(v,w){i&&i.dispatchEvent(new CustomEvent(K,{detail:{key:e,oldValue:v,newValue:w,storageArea:n}}))}function H(v){try{const w=n.getItem(e);if(v==null)F(w,null),n.removeItem(e);else{const S=T.write(v);w!==S&&(n.setItem(e,S),F(w,S))}}catch(w){c(w)}}function h(v){const w=v?v.newValue:n.getItem(e);if(w==null)return d&&b!=null&&n.setItem(e,T.write(b)),b;if(!v&&f){const S=T.read(w);return typeof f=="function"?f(S,b):y==="object"&&!Array.isArray(S)?{...b,...S}:S}else return typeof w!="string"?w:T.read(w)}function I(v){if(!(v&&v.storageArea!==n)){if(v&&v.key==null){g.value=b;return}if(!(v&&v.key!==e)){R();try{(v==null?void 0:v.newValue)!==T.write(g.value)&&(g.value=h(v))}catch(w){c(w)}finally{v?ee(j):j()}}}}function A(v){I(v.detail)}return g}function Le(e,t,n={}){const{window:o=W,...r}=n;let l;const a=X(()=>o&&"ResizeObserver"in o),s=()=>{l&&(l.disconnect(),l=void 0)},d=D(()=>Array.isArray(e)?e.map(i=>O(i)):[O(e)]),f=P(d,i=>{if(s(),a.value&&o){l=new ResizeObserver(t);for(const u of i)u&&l.observe(u,r)}},{immediate:!0,flush:"post"}),p=()=>{s(),f()};return B(p),{isSupported:a,stop:p}}function Ce(e,t={width:0,height:0},n={}){const{window:o=W,box:r="content-box"}=n,l=D(()=>{var i,u;return(u=(i=O(e))==null?void 0:i.namespaceURI)==null?void 0:u.includes("svg")}),a=E(t.width),s=E(t.height),{stop:d}=Le(e,([i])=>{const u=r==="border-box"?i.borderBoxSize:r==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;if(o&&l.value){const c=O(e);if(c){const m=c.getBoundingClientRect();a.value=m.width,s.value=m.height}}else if(u){const c=Array.isArray(u)?u:[u];a.value=c.reduce((m,{inlineSize:g})=>m+g,0),s.value=c.reduce((m,{blockSize:g})=>m+g,0)}else a.value=i.contentRect.width,s.value=i.contentRect.height},n);k(()=>{const i=O(e);i&&(a.value="offsetWidth"in i?i.offsetWidth:t.width,s.value="offsetHeight"in i?i.offsetHeight:t.height)});const f=P(()=>O(e),i=>{a.value=i?t.width:0,s.value=i?t.height:0});function p(){d(),f()}return{width:a,height:s,stop:p}}function Me(e,t,n={}){const{root:o,rootMargin:r="0px",threshold:l=.1,window:a=W,immediate:s=!0}=n,d=X(()=>a&&"IntersectionObserver"in a),f=D(()=>{const m=_(e);return(Array.isArray(m)?m:[m]).map(O).filter(me)});let p=x;const i=E(s),u=d.value?P(()=>[f.value,O(o),i.value],([m,g])=>{if(p(),!i.value||!m.length)return;const b=new IntersectionObserver(t,{root:O(g),rootMargin:r,threshold:l});m.forEach(y=>y&&b.observe(y)),p=()=>{b.disconnect(),p=x}},{immediate:s,flush:"post"}):x,c=()=>{p(),u(),i.value=!1};return B(c),{isSupported:d,isActive:i,pause(){p(),i.value=!1},resume(){i.value=!0},stop:c}}function Re(e,t={}){const{window:n=W,scrollTarget:o,threshold:r=0}=t,l=E(!1);return Me(e,a=>{let s=l.value,d=0;for(const f of a)f.time>=d&&(d=f.time,s=f.isIntersecting);l.value=s},{root:o,window:n,threshold:r}),l}const U=1;function je(e,t={}){const{throttle:n=0,idle:o=200,onStop:r=x,onScroll:l=x,offset:a={left:0,right:0,top:0,bottom:0},eventListenerOptions:s={capture:!1,passive:!0},behavior:d="auto",window:f=W,onError:p=h=>{console.error(h)}}=t,i=E(0),u=E(0),c=D({get(){return i.value},set(h){g(h,void 0)}}),m=D({get(){return u.value},set(h){g(void 0,h)}});function g(h,I){var A,v,w,S;if(!f)return;const L=_(e);if(!L)return;(w=L instanceof Document?f.document.body:L)==null||w.scrollTo({top:(A=_(I))!=null?A:m.value,left:(v=_(h))!=null?v:c.value,behavior:_(d)});const C=((S=L==null?void 0:L.document)==null?void 0:S.documentElement)||(L==null?void 0:L.documentElement)||L;c!=null&&(i.value=C.scrollLeft),m!=null&&(u.value=C.scrollTop)}const b=E(!1),y=$({left:!0,right:!1,top:!0,bottom:!1}),T=$({left:!1,right:!1,top:!1,bottom:!1}),R=h=>{b.value&&(b.value=!1,T.left=!1,T.right=!1,T.top=!1,T.bottom=!1,r(h))},j=Se(R,n+o),F=h=>{var I;if(!f)return;const A=((I=h==null?void 0:h.document)==null?void 0:I.documentElement)||(h==null?void 0:h.documentElement)||O(h),{display:v,flexDirection:w}=getComputedStyle(A),S=A.scrollLeft;T.left=S<i.value,T.right=S>i.value;const L=Math.abs(S)<=(a.left||0),C=Math.abs(S)+A.clientWidth>=A.scrollWidth-(a.right||0)-U;v==="flex"&&w==="row-reverse"?(y.left=C,y.right=L):(y.left=L,y.right=C),i.value=S;let N=A.scrollTop;h===f.document&&!N&&(N=f.document.body.scrollTop),T.top=N<u.value,T.bottom=N>u.value;const G=Math.abs(N)<=(a.top||0),Q=Math.abs(N)+A.clientHeight>=A.scrollHeight-(a.bottom||0)-U;v==="flex"&&w==="column-reverse"?(y.top=Q,y.bottom=G):(y.top=G,y.bottom=Q),u.value=N},H=h=>{var I;if(!f)return;const A=(I=h.target.documentElement)!=null?I:h.target;F(A),b.value=!0,j(h),l(h)};return M(e,"scroll",n?Ee(H,n,!0,!1):H,s),k(()=>{try{const h=_(e);if(!h)return;F(h)}catch(h){p(h)}}),M(e,"scrollend",R,s),{x:c,y:m,isScrolling:b,arrivedState:y,directions:T,measure(){const h=_(e);f&&h&&F(h)}}}function He(e){const t=J("(prefers-color-scheme: light)",e),n=J("(prefers-color-scheme: dark)",e);return D(()=>n.value?"dark":t.value?"light":"no-preference")}function ze(e={}){const{window:t=W,behavior:n="auto"}=e;if(!t)return{x:E(0),y:E(0)};const o=E(t.scrollX),r=E(t.scrollY),l=D({get(){return o.value},set(s){scrollTo({left:s,behavior:n})}}),a=D({get(){return r.value},set(s){scrollTo({top:s,behavior:n})}});return M(t,"scroll",()=>{o.value=t.scrollX,r.value=t.scrollY},{capture:!1,passive:!0}),{x:l,y:a}}function Ve(e={}){const{window:t=W,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:l=!0}=e,a=E(n),s=E(o),d=()=>{t&&(l?(a.value=t.innerWidth,s.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};if(d(),k(d),M("resize",d,{passive:!0}),r){const f=J("(orientation: portrait)");P(f,()=>d())}return{width:a,height:s}}export{J as a,Re as b,Ce as c,Pe as d,ze as e,je as f,Ve as g,Le as h,O as i,B as j,Fe as o,_ as t,He as u,Ne as w};
