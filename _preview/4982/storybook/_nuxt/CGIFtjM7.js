import{S as o}from"./D03f3Lmc.js";import{_ as n}from"./B7dFPXoS.js";import{h as m,d as c}from"./lKNUlTH_.js";import"./xwskLidM.js";import"./DivIZ7Lb.js";import"./D0ww02ZN.js";import"./CRWjC3CT.js";import"./CeIx8O89.js";import"./BR9eDTPM.js";import"./CVtkxrq9.js";import"./CzMkt2mC.js";import"./C0voMBC3.js";import"./CFMQYC2y.js";import"./Dt-H8hG_.js";import"./Xs_VBmP5.js";import"./EAKoqukU.js";import"./CTON8dBl.js";import"./Cpj98o6Y.js";import"./Ci7G4jyV.js";import"./CA4HNXs5.js";import"./CIg47mny.js";import"./MXhTc5uu.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";import"./9Q23NzEb.js";import"./BOX21o1p.js";const r=c({name:"VSafetyWallWrapper",components:{VSafetyWall:n},props:{id:{type:String,required:!0},sensitivities:{type:Array,default:()=>[]}},emits:["reveal"],setup(e,{emit:i}){const l=()=>i("reveal");return()=>m(n,{id:e.id,sensitivity:e.sensitivities,onReveal:l})}}),z={title:"Components/VSafetyWall",component:r,argTypes:{sensitivities:{control:{type:"check"},options:o},onReveal:{action:"reveal"}},args:{sensitivities:[...o],id:"f9384235-b72e-4f1e-9b05-e1b116262a29"}},t={render:e=>({components:{VSafetyWallWrapper:r},setup(){const i=()=>{console.log("Revealed")};return()=>m(r,{id:e.id,sensitivity:e.sensitivities,onReveal:i})}}),name:"default"};var s,a,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VSafetyWallWrapper
    },
    setup() {
      const logReveal = () => {
        console.log("Revealed");
      };
      return () => h(VSafetyWallWrapper, {
        id: args.id,
        sensitivity: args.sensitivities,
        onReveal: logReveal
      });
    }
  }),
  name: "default"
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,z as default};
