import{u as q}from"./2vq21tXV.js";import{u as W}from"./xwskLidM.js";import{G as x,z as n,d as U,I as S,E as T,C as j,af as H,N as o,P as m,D as y,O as r,U as I,J as N,X as P,A as M}from"./lKNUlTH_.js";import{u as D}from"./C4uCsYSu.js";import{I as G}from"./CRWjC3CT.js";import{a as O}from"./EAKoqukU.js";import{V as F}from"./MXhTc5uu.js";import{V as J}from"./CerlZzKD.js";import{_ as X}from"./CA4HNXs5.js";import"./CFMQYC2y.js";import{_ as K}from"./DlAUqK2U.js";const C=3/4,w=16/9,Q=21/9,Y=250,Z=Y/w,k=250,R=100,ee=l=>l>w?w:l<C?C:l,te=({imageSize:l,isSquare:e})=>{const u=x(e.value?k:l.height||R),s=x(e.value?k:l.width||R),c=n(()=>s.value/u.value),d=n(()=>c.value>Q),h=n(()=>{const v={};if(e.value)return v;const g=c.value,p=ee(g),f=Math.round(p*Z);return{"--container-width":`${f}px`,"--container-grow":f,"--img-aspect-ratio":p}});return{imgHeight:u,imgWidth:s,isPanorama:d,styles:h}},ae=""+new URL("image_not_available_placeholder.BTm11Bgh.png",import.meta.url).href,se=["alt","src","width","height"],ie={class:"sr-only"},oe={class:"label-regular leading-none text-secondary group-hover:text-default group-focus-visible:text-default sm:text-default"},le=U({__name:"VImageCell",props:{kind:{default:"search"},searchTerm:{},relatedTo:{default:"null"},image:{},aspectRatio:{default:"square"}},setup(l){const e=l,u=(t,a="https://")=>t.startsWith("http://")||t.startsWith("https://")?t:`${a}${t}`,s=n(()=>e.aspectRatio==="square"),{imgHeight:c,imgWidth:d,isPanorama:h,styles:v}=te({imageSize:{width:e.image.width,height:e.image.height},isSquare:s}),{t:g}=q({useScope:"global"}),p=n(()=>{if(h.value)return u(e.image.url);const t=e.image.thumbnail||e.image.url;return u(t)}),f=n(()=>`/image/${e.image.id}/${e.searchTerm?"?q="+e.searchTerm:""}`),V=t=>{const a=t.target;a.src=a.src===e.image.url?ae:e.image.url},$=t=>{if(e.aspectRatio==="square")return;const a=t.target;c.value=a.naturalHeight,d.value=a.naturalWidth},_=g("browsePage.aria.imageTitle",{title:e.image.title}),A=n(()=>i.value?g("sensitiveContent.title.image"):_),E=n(()=>i.value?void 0:_),{$sendCustomEvent:B}=W(),b=O(),z=t=>{var a;t.button===0&&B("SELECT_SEARCH_RESULT",{id:e.image.id,kind:e.kind,mediaType:G,provider:e.image.provider,query:e.searchTerm||"",relatedTo:e.relatedTo??"null",sensitivities:((a=e.image.sensitivity)==null?void 0:a.join(","))??"",isBlurred:i.value??"null",collectionType:b.strategy!=="default"?b.strategy:"null",collectionValue:b.collectionValue??"null"})},{isHidden:i}=D(e.image);return(t,a)=>(y(),S("li",{style:H(o(v)),class:m(["container w-full max-w-full",s.value?"square":"intrinsic"])},[T(X,{itemprop:"contentUrl",title:E.value,href:f.value,class:"group relative block w-full overflow-hidden rounded-sm text-gray-2 hover:no-underline focus-visible:outline-3 focus-visible:outline-offset-4","aria-label":A.value,onMousedown:z},{default:j(()=>[r("figure",{itemprop:"image",itemscope:"",itemtype:"https://schema.org/ImageObject",class:m(["grid w-full rounded-sm",{"aspect-square":s.value}])},[r("img",{loading:"lazy",class:m(["image col-span-full row-span-full block w-full overflow-hidden rounded-sm object-cover",[s.value?"h-full":"margin-auto"]]),alt:o(i)?`${t.$t("sensitiveContent.title.image")}`:t.image.title,src:p.value,width:o(d),height:o(c),itemprop:"thumbnailUrl",onLoad:$,onError:a[0]||(a[0]=L=>V(L))},null,42,se),r("span",{class:m(["col-span-full row-span-full flex items-center justify-center bg-blur text-default backdrop-blur-xl duration-200 motion-safe:transition-opacity",o(i)?"opacity-100":"opacity-0"]),"data-testid":"blur-overlay","aria-hidden":"true"},[T(F,{name:"eye-closed"})],2),r("figcaption",{class:m(["z-10 col-span-full my-2 self-end justify-self-start rounded-sm text-default group-hover:visible group-focus-visible:visible",[s.value?"invisible row-span-full p-2":"sm:invisible sm:row-span-full sm:p-2",o(i)?"sm:w-full sm:text-center":"bg-default",!o(i)&&(s.value?"mx-2":"sm:mx-2")]])},[r("h2",ie,I(o(i)?`${t.$t("sensitiveContent.title.image")}`:t.image.title),1),r("div",oe,[o(i)?(y(),S(N,{key:0},[P(I(t.$t("sensitiveContent.singleResult.title")),1)],64)):(y(),M(J,{key:1,license:t.image.license,"hide-name":!0},null,8,["license"]))])],2)],2)]),_:1},8,["title","href","aria-label"])],6))}}),be=K(le,[["__scopeId","data-v-568481ba"]]);export{be as V,ae as e};
