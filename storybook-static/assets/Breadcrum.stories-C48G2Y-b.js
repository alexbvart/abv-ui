import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{p as n}from"./styled-components.browser.esm-E6QWLWCY.js";import"./index-l2PZgWEW.js";import"./tslib.es6-CRos2fHm.js";const l=n.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
`,d=n.ol`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`,i=n.li`
  display: flex;
  align-items: center;
`,u=n.a`
  text-decoration: none;
  color: #007aff;
  &:hover {
    text-decoration: underline;
  }
`,p=n.span`
  margin: 0 8px;
  color: #ccc;
`,b=n.span`
  color: #888;
`,r=({children:a})=>e.jsx(l,{children:a}),B=({children:a})=>e.jsx(d,{children:a}),x=({children:a})=>e.jsx(i,{children:a}),f=({href:a,children:m})=>e.jsx(u,{href:a,children:m}),h=()=>e.jsx(p,{children:"/"}),j=({children:a})=>e.jsx(b,{children:a});r.List=B;r.Item=x;r.Link=f;r.Separator=h;r.Page=j;r.__docgenInfo={description:"",methods:[{name:"List",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Link",docblock:null,modifiers:["static"],params:[{name:"{ href, children }",optional:!1,type:null}],returns:null},{name:"Separator",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Page",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null}],displayName:"Breadcrumb"};const S={title:"molecules/Breadcrumb.",component:r,parameters:{},tags:["autodocs"]},L=()=>e.jsx(r,{children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"/",children:"Home"})}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"/components",children:"Components"})}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:e.jsx(r.Page,{children:"Breadcrumb."})})]})}),t=L.bind({});var c,s,o;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Breadcrumb>\r
    <Breadcrumb.List>\r
      <Breadcrumb.Item>\r
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>\r
      </Breadcrumb.Item>\r
      <Breadcrumb.Separator />\r
      <Breadcrumb.Item>\r
        <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>\r
      </Breadcrumb.Item>\r
      <Breadcrumb.Separator />\r
      <Breadcrumb.Item>\r
        <Breadcrumb.Page>Breadcrumb.</Breadcrumb.Page>\r
      </Breadcrumb.Item>\r
    </Breadcrumb.List>\r
  </Breadcrumb>`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,S as default};
