import{u as L}from"./DlQeo9n8.js";import{u as I}from"./CIg47mny.js";import{g as $}from"./Bz7P8nyL.js";import{z as x,d as V,A as o,C as r,I as c,J as k,K as g,N as f,D as s,O as _,U as b,L as w,E as d,X as z,P as N,Y as B}from"./lKNUlTH_.js";import{_ as A,V as E}from"./CG5ne2OF.js";import{V as y}from"./MXhTc5uu.js";import{_ as P}from"./CA4HNXs5.js";import{_ as S}from"./C2lBk38O.js";function W(){const a=L(),n=[{id:"about",name:"navigation.about",link:a("/about")},{id:"licenses",name:"navigation.licenses",link:"https://creativecommons.org/about/cclicenses/"},{id:"sources",name:"navigation.sources",link:a("/sources")},{id:"search-help",name:"navigation.searchHelp",link:a("/search-help")},{id:"get-involved",name:"navigation.getInvolved",link:"https://make.wordpress.org/openverse/handbook/"},{id:"api",name:"navigation.api",link:"https://api.openverse.org/v1/"},{id:"terms",name:"navigation.terms",link:"https://docs.openverse.org/terms_of_service.html"},{id:"privacy",name:"navigation.privacy",link:a("/privacy")},{id:"feedback",name:"navigation.feedback",link:a("/feedback")}],l=I(),i=x(()=>$(l).split("__")[0]??"");return{all:n,current:i}}const D={class:"flex w-full flex-row justify-between"},M={class:"pe-2"},R={key:1},Y=V({__name:"VPageLinks",props:{mode:{default:"light"},navLinkClasses:{default:""},variant:{default:"links"},isInModal:{type:Boolean,default:!1}},emits:["close"],setup(a,{emit:n}){const l=a,i=n,{all:u,current:m}=W(),p=()=>i("close"),v=t=>!t.link.startsWith("/"),C=x(()=>l.isInModal?6:4);return(t,j)=>t.variant==="itemgroup"?(s(),o(A,{key:0,class:"my-2 min-w-50 gap-y-2",bordered:!1,"show-check":!1},{default:r(()=>[(s(!0),c(k,null,g(f(u),(e,h)=>(s(),o(E,{key:h,as:"VLink","is-first":h===0,selected:f(m)===e.id,href:e.link,class:"w-full",onClick:p},{default:r(()=>[_("div",D,[_("span",M,b(t.$t(e.name)),1),v(e)?(s(),o(y,{key:0,name:"external-link",size:4,class:"self-center","rtl-flip":""})):w("",!0)])]),_:2},1032,["is-first","selected","href"]))),128))]),_:1})):(s(),c("ul",R,[(s(!0),c(k,null,g(f(u),e=>(s(),c("li",{key:e.id},[d(P,{class:N(["flex flex-row rounded-sm hover:underline focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-tx disabled:text-disabled",[{"font-semibold":f(m)===e.id},{"focus-visible:ring-border-focus text-default":t.mode==="light"},t.navLinkClasses]]),href:e.link,onClick:p},{default:r(()=>[z(b(t.$t(e.name)),1),v(e)?(s(),o(y,{key:0,name:"external-link",size:C.value,class:"ms-2 self-center","rtl-flip":""},null,8,["size"])):w("",!0)]),_:2},1032,["class","href"])]))),128))]))}}),q=V({__name:"VWordPressLink",props:{mode:{default:"light"}},setup(a){return(n,l)=>{const i=B("i18n-t");return s(),o(P,{href:"https://wordpress.org","aria-label":n.$t("footer.wordpressAffiliation",{wordpress:"WordPress"}),class:"focus-visible:ring-border-focus text-default hover:no-underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-1 focus-visible:ring-offset-tx"},{default:r(()=>[d(i,{scope:"global",tag:"p",keypath:"footer.wordpressAffiliation",class:"label-regular flex flex-row items-center gap-1"},{wordpress:r(()=>[d(S,{name:"wordpress",class:"h-6 w-6",width:"24",height:"24"})]),_:1})]),_:1},8,["aria-label"])}}});export{Y as _,q as a,W as u};
