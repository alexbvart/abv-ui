import{j as a}from"./jsx-runtime-DWbWqHZ-.js";import{r as c}from"./index-l2PZgWEW.js";import{f as s,p as n,c as r}from"./styled-components.browser.esm-E6QWLWCY.js";import{c as u}from"./clsx-B-dksMZM.js";const f=s`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,p=s`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`,d=n.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 4px;
  margin: 8px 0;
  animation: ${f} 0.3s ease-out, ${p} 0.3s ease-out ${e=>e.duration-300}ms;
  opacity: ${e=>e.isVisible?1:0};
  transition: opacity 0.3s;

  ${e=>e.type==="success"&&r`
      background-color: #e6ffed;
      border-left: 5px solid #52c41a;
    `}

  ${e=>e.type==="error"&&r`
      background-color: #fff1f0;
      border-left: 5px solid #f5222d;
    `}

  ${e=>e.type==="info"&&r`
      background-color: #e6f7ff;
      border-left: 5px solid #1890ff;
    `}

  ${e=>e.type==="warning"&&r`
      background-color: #fffbe6;
      border-left: 5px solid #faad14;
    `}
`,m=n.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  margin-left: auto;
`,b=({type:e,message:i,duration:t=5e3,onClose:o})=>(c.useEffect(()=>{const l=setTimeout(()=>{o()},t);return()=>{clearTimeout(l)}},[t,o]),a.jsxs(d,{type:e,isVisible:!0,duration:t,className:u("toast"),children:[a.jsx("div",{children:i}),a.jsx(m,{onClick:o,"aria-label":"Close Toast",children:"×"})]}));b.__docgenInfo={description:"",methods:[],displayName:"AbvToast",props:{type:{required:!0,tsType:{name:"union",raw:"'success' | 'error' | 'info' | 'warning' | 'custom'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'custom'"}]},description:""},message:{required:!0,tsType:{name:"string"},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5000",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{b as A};
