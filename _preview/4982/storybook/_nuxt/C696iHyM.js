import{u as n}from"./2vq21tXV.js";import{a as d}from"./EAKoqukU.js";import{V as p}from"./9Q23NzEb.js";import{_ as u}from"./B2bKr4jl.js";import{d as f,z as a,A as c,C as m,D as b,E as h,O as B,U as g}from"./lKNUlTH_.js";const _={class:"hidden xl:inline-block"},y=f({__name:"VFilterButton",props:{pressed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["toggle"],setup(v){const{t}=n({useScope:"global"}),o=d(),s=a(()=>o.appliedFilterCount),r=a(()=>t("header.filterButton.simple")),i=a(()=>t("header.filterButton.withCount",{count:s.value}));return(e,l)=>(b(),c(p,{id:"filter-button",variant:e.pressed?"filled-dark":"bordered-white",size:"disabled",class:"label-regular h-12 w-12 gap-x-2 self-center xl:w-auto xl:pe-4 xl:ps-3",pressed:e.pressed,disabled:e.disabled,"aria-controls":"filters","aria-label":i.value,onClick:l[0]||(l[0]=C=>e.$emit("toggle"))},{default:m(()=>[h(u,{"applied-filter-count":s.value,pressed:e.pressed},null,8,["applied-filter-count","pressed"]),B("span",_,g(r.value),1)]),_:1},8,["variant","pressed","disabled","aria-label"]))}});export{y as _};
