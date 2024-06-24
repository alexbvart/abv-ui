import{j as o}from"./jsx-runtime-DWbWqHZ-.js";import{r as x}from"./index-l2PZgWEW.js";import{p as t}from"./styled-components.browser.esm-E6QWLWCY.js";import{I as m}from"./Input-BNfStDuy.js";const u=t.div`
  position: relative;
  width: 300px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 8px 28px 0px rgba(13, 25, 133, 0.13);
`,g=t.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`,f=t.div`
  background-color: #f0f0f0;
  color: #333;
  padding: 3px 8px;
  border-radius: 3px;
  margin: 2px;
`,b=t.div`
  max-height: 200px;
  overflow-y: auto;
`,h=t.div`
  padding: 8px;
  cursor: pointer;
  background-color: ${r=>r.isSelected?"#cce4ff":"transparent"};

  &:hover {
    background-color: #f0f0f0;
  }
`;t.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-bottom: 1px solid dodgerblue;
  }
`;const v=({selectedValues:r,onChange:n,children:i})=>{const[s,p]=x.useState(""),a=e=>{const c=r.includes(e);n(c?r.filter(l=>l!==e):[...r,e])},d=Array.isArray(i)?i.filter(e=>e.props.label.toLowerCase().includes(s.toLowerCase())):[];return o.jsxs(u,{children:[o.jsx(g,{children:r.map(e=>o.jsx(f,{children:e},e))}),o.jsx(m,{type:"text",placeholder:"Search...",value:s,onChange:e=>p(e.target.value)}),o.jsx(b,{children:d.map(e=>o.jsx(h,{isSelected:r.includes(e.props.value),onClick:()=>a(e.props.value),children:e.props.label},e.props.value))})]})},A=({value:r,label:n})=>(console.log({value:r,label:n}),null);v.__docgenInfo={description:"",methods:[],displayName:"AbvMultiSelectDropdown",props:{selectedValues:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selected: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selected"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{v as A,A as a};
