import{j as r}from"./jsx-runtime-DWbWqHZ-.js";import{p as n}from"./styled-components.browser.esm-E6QWLWCY.js";import{c as s}from"./clsx-B-dksMZM.js";import"./index-l2PZgWEW.js";import"./tslib.es6-CRos2fHm.js";const b=n.nav`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  background-color: #faf7f7;
  @media (max-width: 768px) {
    width: 60px;
    & > div {
      display: none;
    }
  }
`,N=n.div`
  margin-bottom: 20px;
`,x=n.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 16px 0;
  padding-left: 16px;
`,u=n.div`
  display: flex;
  flex-direction: column;
`,I=n.div`
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-active);
;
  }
`,h=n.hr`
  margin: 10px 16px;
  border: 0;
  border-top: 1px solid #444;
`,a=({children:e,className:t})=>r.jsx(b,{className:s(t),children:e}),j=({children:e,className:t})=>r.jsx(N,{className:s(t),children:e}),f=({children:e,className:t})=>r.jsx(x,{className:s(t),children:e}),S=({children:e,className:t})=>r.jsx(u,{className:s(t),children:e}),g=({children:e,className:t})=>r.jsx(I,{className:s(t),children:e}),C=()=>r.jsx(h,{});a.Group=j;a.Title=f;a.Content=S;a.Item=g;a.Separator=C;a.__docgenInfo={description:"Componente principal de Navbar",methods:[{name:"Group",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Title",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Separator",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Navbar"};const F={title:"Molecules/Navbar",component:a,parameters:{},tags:["autodocs"]},o={render:e=>r.jsxs(a,{...e,children:[r.jsxs(a.Group,{children:[r.jsx(a.Title,{children:"File"}),r.jsxs(a.Content,{children:[r.jsx(a.Item,{children:"New File"}),r.jsx(a.Item,{children:"Open File"}),r.jsx(a.Separator,{}),r.jsx(a.Item,{children:"Save File"}),r.jsx(a.Item,{children:"Exit"})]})]}),r.jsxs(a.Group,{children:[r.jsx(a.Title,{children:"Edit"}),r.jsxs(a.Content,{children:[r.jsx(a.Item,{children:"Undo"}),r.jsx(a.Item,{children:"Redo"}),r.jsx(a.Separator,{}),r.jsx(a.Item,{children:"Cut"}),r.jsx(a.Item,{children:"Copy"}),r.jsx(a.Item,{children:"Paste"})]})]})]}),args:{}},l={render:e=>r.jsxs(a,{...e,className:"expandable",children:[r.jsxs(a.Group,{children:[r.jsx(a.Title,{children:"Dashboard"}),r.jsxs(a.Content,{children:[r.jsx(a.Item,{children:"Overview"}),r.jsx(a.Item,{children:"Stats"}),r.jsx(a.Separator,{}),r.jsx(a.Item,{children:"Settings"})]})]}),r.jsxs(a.Group,{children:[r.jsx(a.Title,{children:"Manage"}),r.jsxs(a.Content,{children:[r.jsx(a.Item,{children:"Users"}),r.jsx(a.Item,{children:"Products"}),r.jsx(a.Separator,{}),r.jsx(a.Item,{children:"Orders"}),r.jsx(a.Item,{children:"Reports"})]})]})]}),args:{}};var i,m,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Navbar {...args}>\r
      <Navbar.Group>\r
        <Navbar.Title>File</Navbar.Title>\r
        <Navbar.Content>\r
          <Navbar.Item>New File</Navbar.Item>\r
          <Navbar.Item>Open File</Navbar.Item>\r
          <Navbar.Separator />\r
          <Navbar.Item>Save File</Navbar.Item>\r
          <Navbar.Item>Exit</Navbar.Item>\r
        </Navbar.Content>\r
      </Navbar.Group>\r
      <Navbar.Group>\r
        <Navbar.Title>Edit</Navbar.Title>\r
        <Navbar.Content>\r
          <Navbar.Item>Undo</Navbar.Item>\r
          <Navbar.Item>Redo</Navbar.Item>\r
          <Navbar.Separator />\r
          <Navbar.Item>Cut</Navbar.Item>\r
          <Navbar.Item>Copy</Navbar.Item>\r
          <Navbar.Item>Paste</Navbar.Item>\r
        </Navbar.Content>\r
      </Navbar.Group>\r
    </Navbar>,
  args: {}
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,v;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Navbar {...args} className="expandable">\r
      <Navbar.Group>\r
        <Navbar.Title>Dashboard</Navbar.Title>\r
        <Navbar.Content>\r
          <Navbar.Item>Overview</Navbar.Item>\r
          <Navbar.Item>Stats</Navbar.Item>\r
          <Navbar.Separator />\r
          <Navbar.Item>Settings</Navbar.Item>\r
        </Navbar.Content>\r
      </Navbar.Group>\r
      <Navbar.Group>\r
        <Navbar.Title>Manage</Navbar.Title>\r
        <Navbar.Content>\r
          <Navbar.Item>Users</Navbar.Item>\r
          <Navbar.Item>Products</Navbar.Item>\r
          <Navbar.Separator />\r
          <Navbar.Item>Orders</Navbar.Item>\r
          <Navbar.Item>Reports</Navbar.Item>\r
        </Navbar.Content>\r
      </Navbar.Group>\r
    </Navbar>,
  args: {}
}`,...(v=(p=l.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const k=["Default","Expandable"];export{o as Default,l as Expandable,k as __namedExportsOrder,F as default};
