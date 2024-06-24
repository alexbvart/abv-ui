import{j as i}from"./jsx-runtime-DWbWqHZ-.js";import{A as o}from"./Notification-BVnMF_pW.js";import{A as e}from"./Button-DwRTw4I5.js";import"./index-l2PZgWEW.js";import"./styled-components.browser.esm-E6QWLWCY.js";import"./tslib.es6-CRos2fHm.js";import"./clsx-B-dksMZM.js";const k={title:"organism/Notification",component:o,args:{type:"success"},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{type:"string",options:["success","error","warning","info"]}}},n=()=>i.jsxs(o,{type:"success",children:[i.jsx(o.Icon,{children:"✔️"}),i.jsx(o.Content,{children:"This is a success notification."}),i.jsx(o.Actions,{children:i.jsx(e,{onClick:()=>alert("Action clicked"),children:"Action"})})]});n.args={type:"success"};const t=()=>i.jsxs(o,{type:"error",children:[i.jsx(o.Icon,{children:"❌"}),i.jsx(o.Content,{children:"This is an error notification."}),i.jsx(o.Actions,{children:i.jsx(e,{onClick:()=>alert("Action clicked"),children:"Action"})})]});t.args={type:"error"};const c=()=>i.jsxs(o,{type:"warning",children:[i.jsx(o.Icon,{children:"⚠️"}),i.jsx(o.Content,{children:"This is a warning notification."}),i.jsx(o.Actions,{children:i.jsx(e,{onClick:()=>alert("Action clicked"),children:"Action"})})]});c.args={type:"warning"};const r=()=>i.jsxs(o,{type:"info",children:[i.jsx(o.Icon,{children:"ℹ️"}),i.jsx(o.Content,{children:"This is an info notification."}),i.jsx(o.Actions,{children:i.jsx(e,{onClick:()=>alert("Action clicked"),children:"Action"})})]});r.args={type:"info"};n.__docgenInfo={description:"",methods:[],displayName:"SuccessNotification"};t.__docgenInfo={description:"",methods:[],displayName:"ErrorNotification"};c.__docgenInfo={description:"",methods:[],displayName:"WarningNotification"};r.__docgenInfo={description:"",methods:[],displayName:"InfoNotification"};var s,a,A;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => <AbvNotification type="success">\r
    <AbvNotification.Icon>✔️</AbvNotification.Icon>\r
    <AbvNotification.Content>\r
      This is a success notification.\r
    </AbvNotification.Content>\r
    <AbvNotification.Actions>\r
      <AbvButton onClick={() => alert("Action clicked")}>Action</AbvButton>\r
    </AbvNotification.Actions>\r
  </AbvNotification>`,...(A=(a=n.parameters)==null?void 0:a.docs)==null?void 0:A.source}}};var f,d,l;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => <AbvNotification type="error">\r
    <AbvNotification.Icon>❌</AbvNotification.Icon>\r
    <AbvNotification.Content>\r
      This is an error notification.\r
    </AbvNotification.Content>\r
    <AbvNotification.Actions>\r
      <AbvButton onClick={() => alert("Action clicked")}>Action</AbvButton>\r
    </AbvNotification.Actions>\r
  </AbvNotification>`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,N,b;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`() => <AbvNotification type="warning">\r
    <AbvNotification.Icon>⚠️</AbvNotification.Icon>\r
    <AbvNotification.Content>\r
      This is a warning notification.\r
    </AbvNotification.Content>\r
    <AbvNotification.Actions>\r
      <AbvButton onClick={() => alert("Action clicked")}>Action</AbvButton>\r
    </AbvNotification.Actions>\r
  </AbvNotification>`,...(b=(N=c.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var u,v,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => <AbvNotification type="info">\r
    <AbvNotification.Icon>ℹ️</AbvNotification.Icon>\r
    <AbvNotification.Content>\r
      This is an info notification.\r
    </AbvNotification.Content>\r
    <AbvNotification.Actions>\r
      <AbvButton onClick={() => alert("Action clicked")}>Action</AbvButton>\r
    </AbvNotification.Actions>\r
  </AbvNotification>`,...(m=(v=r.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};const _=["SuccessNotification","ErrorNotification","WarningNotification","InfoNotification"];export{t as ErrorNotification,r as InfoNotification,n as SuccessNotification,c as WarningNotification,_ as __namedExportsOrder,k as default};
