import{j as n}from"./jsx-runtime-DWbWqHZ-.js";import{p as r}from"./styled-components.browser.esm-E6QWLWCY.js";const a=r.div`
  display: flex;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`,t=r.div`
  position: relative;
  display: inline-block;
`,l=r.button`
  background: none;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #e0e0e0;
  }
`,s=r.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  ${t}:hover & {
    display: block;
  }
`,i=r.div`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`,c=r.div`
  height: 1px;
  background-color: #ddd;
  margin: 5px 0;
`,d=r.span`
  float: right;
  color: #888;
`,e=({children:o})=>n.jsx(a,{children:o}),p=({children:o})=>n.jsx(t,{children:o}),u=({children:o})=>n.jsx(l,{children:o}),m=({children:o})=>n.jsx(s,{children:o}),b=({children:o})=>n.jsx(i,{children:o}),f=()=>n.jsx(c,{}),x=({children:o})=>n.jsx(d,{children:o});e.Menu=p;e.Trigger=u;e.Content=m;e.Item=b;e.Separator=f;e.Shortcut=x;e.__docgenInfo={description:"",methods:[{name:"Menu",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Separator",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Shortcut",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null}],displayName:"Menubar"};export{e as M};
