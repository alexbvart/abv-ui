import{j as a}from"./jsx-runtime-DWbWqHZ-.js";import{r as b}from"./index-l2PZgWEW.js";import{p as i,c as d}from"./styled-components.browser.esm-E6QWLWCY.js";import{c as h}from"./clsx-B-dksMZM.js";import"./tslib.es6-CRos2fHm.js";const v=i.div`
  display: flex;
  flex-direction: column;
`,P=i.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  background-color: #f8f8f8;
  scroll-snap-align: initial;
  scroll-behavior: smooth;
  overflow-x: auto;

  scrollbar-width: none; // Oculta la barra de desplazamiento en Firefox
  &::-webkit-scrollbar {
    display: none; // Oculta la barra de desplazamiento en Chrome, Safari y Edge
  }
`,g=i.button`
  flex: 1;
  padding: 10px 15px;
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  font-size: 14px;

  ${e=>e.className!=="active"?d`
        ${e.className}
      `:d`
      color: ${e.isActive?"var(--color-active)":"var(--color-text-base)"};
      border-bottom-color: ${e.isActive?"var(--color-active)":"var(--color-transparent)"};
    `}

  ${e=>{if(e.disabled)return d`
        color: var(--color-text-disabled);
        cursor: not-allowed;
      `}}

  &:hover {
    background-color: #e0e0e0;
  }
`,j=i.div`
  padding: 10px 15px;
`,p=b.createContext(void 0),x=()=>{const e=b.useContext(p);if(!e)throw new Error("useTabsContext must be used within a Tabs component");return e},n=({children:e,initialActiveTab:s=0})=>{const[r,o]=b.useState(s),c=l=>{o(l)};return a.jsx(p.Provider,{value:{activeTab:r,onTabChange:c},children:a.jsx(v,{children:e})})},y=({children:e,className:s})=>a.jsx(P,{className:s,children:e}),A=({children:e,index:s,className:r,disabled:o=!1,...c})=>{const{activeTab:l,onTabChange:f}=x();return a.jsx(g,{className:h({active:l===s},r,{disabled:o}),isActive:l===s,onClick:()=>f(s),disabled:o,...c,children:e})},C=({children:e})=>a.jsx(j,{children:e}),k=({children:e,index:s})=>{const{activeTab:r}=x();return r===s?a.jsx("div",{children:e}):null};n.List=y;n.Tab=A;n.Panels=C;n.Panel=k;n.__docgenInfo={description:"",methods:[{name:"List",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Tab",docblock:null,modifiers:["static"],params:[{name:`{\r
  children,\r
  index,\r
  className,\r
  disabled=false,\r
  ...rest\r
}`,optional:!1,type:null}],returns:null},{name:"Panels",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Panel",docblock:null,modifiers:["static"],params:[{name:"{ children, index }",optional:!1,type:null}],returns:null}],displayName:"Tabs",props:{initialActiveTab:{defaultValue:{value:"0",computed:!1},required:!1}}};const S={title:"Molecules/Tabs",component:n,parameters:{},tags:["autodocs"]},t=()=>a.jsxs(n,{initialActiveTab:0,children:[a.jsxs(n.List,{children:[a.jsx(n.Tab,{index:0,children:"Home"}),a.jsx(n.Tab,{index:1,children:"Profile"}),a.jsx(n.Tab,{index:2,children:"Settings"})]}),a.jsxs(n.Panels,{children:[a.jsx(n.Panel,{index:0,children:"Welcome to the Home page"}),a.jsx(n.Panel,{index:1,children:"Profile information here"}),a.jsx(n.Panel,{index:2,children:"Adjust your settings"})]})]});t.args={initialActiveTab:0};t.__docgenInfo={description:"",methods:[],displayName:"DefaultTab"};var u,m,T;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Tabs initialActiveTab={0}>\r
    <Tabs.List>\r
      <Tabs.Tab index={0}>Home</Tabs.Tab>\r
      <Tabs.Tab index={1}>Profile</Tabs.Tab>\r
      <Tabs.Tab index={2}>Settings</Tabs.Tab>\r
    </Tabs.List>\r
    <Tabs.Panels>\r
      <Tabs.Panel index={0}>Welcome to the Home page</Tabs.Panel>\r
      <Tabs.Panel index={1}>Profile information here</Tabs.Panel>\r
      <Tabs.Panel index={2}>Adjust your settings</Tabs.Panel>\r
    </Tabs.Panels>\r
  </Tabs>`,...(T=(m=t.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};const W=["DefaultTab"];export{t as DefaultTab,W as __namedExportsOrder,S as default};
