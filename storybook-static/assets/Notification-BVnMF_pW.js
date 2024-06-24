import{j as n}from"./jsx-runtime-DWbWqHZ-.js";import{p as t,c as i}from"./styled-components.browser.esm-E6QWLWCY.js";import{c as l}from"./clsx-B-dksMZM.js";const a=t.div`
  position: relative;
  padding: 16px;
  border-radius: 8px;
  margin: 8px 0;
  display: flex;
  align-items: center;

  ${o=>o.type==="success"&&i`
      background-color: #e6ffed;
      border: 1px solid #b7eb8f;
      color: #237804;
    `}

  ${o=>o.type==="error"&&i`
      background-color: #fff1f0;
      border: 1px solid #ffa39e;
      color: #cf1322;
    `}

  ${o=>o.type==="warning"&&i`
      background-color: #fff7e6;
      border: 1px solid #ffd591;
      color: #d48806;
    `}

  ${o=>o.type==="info"&&i`
      background-color: #e6f7ff;
      border: 1px solid #91d5ff;
      color: #096dd9;
    `}
`,d=t.div`
  margin-right: 12px;
  font-size: 24px;
`,f=t.div`
  flex-grow: 1;
`,p=t.div`
  margin-left: 12px;
  display: flex;
  gap: 8px;
`,u=t.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
`,r=({type:o,onClose:e,className:c,children:s})=>n.jsxs(a,{type:o,className:l("notification",c),children:[s,e&&n.jsx(u,{onClick:e,"aria-label":"Close Notification",children:"×"})]}),m=({children:o})=>n.jsx(d,{children:o}),x=({children:o})=>n.jsx(f,{children:o}),b=({children:o})=>n.jsx(p,{children:o});r.Icon=m;r.Content=x;r.Actions=b;r.__docgenInfo={description:"",methods:[{name:"Icon",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Actions",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null}],displayName:"AbvNotification"};export{r as A};
