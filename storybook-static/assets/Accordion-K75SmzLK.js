import{j as o}from"./jsx-runtime-DWbWqHZ-.js";import{r as d}from"./index-l2PZgWEW.js";import{p as e}from"./styled-components.browser.esm-E6QWLWCY.js";const a=e.div`
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
`,p=e.div`
  padding: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`,m=e.div`
  padding: 10px;
  background-color: white;
`,t=({children:r})=>o.jsx(o.Fragment,{children:r}),l=({title:r,children:s,defaultOpen:c=!1})=>{const[n,i]=d.useState(c);return o.jsxs(a,{children:[o.jsxs(p,{onClick:()=>i(!n),children:[r,o.jsx("span",{children:n?"-":"+"})]}),n&&o.jsx(m,{children:s})]})};t.Item=l;t.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{\r
  title,\r
  children,\r
  defaultOpen = false,\r
}: AccordionItemProps`,optional:!1,type:{name:"AccordionItemProps",alias:"AccordionItemProps"}}],returns:null}],displayName:"AbvAccordion"};export{t as A};
