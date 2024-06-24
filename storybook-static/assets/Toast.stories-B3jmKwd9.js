import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{A as r}from"./Toast-DGRvjdXA.js";import"./index-l2PZgWEW.js";import"./styled-components.browser.esm-E6QWLWCY.js";import"./tslib.es6-CRos2fHm.js";import"./clsx-B-dksMZM.js";const O={title:"Organism/Toast",component:r,args:{type:"info",message:"This is an info toast message!",duration:5e3,onClose:()=>{}},parameters:{layout:"centered"},tags:["autodocs"]},a={render:s=>e.jsx(r,{...s}),args:{type:"success",message:"Operation completed successfully!"}},o={render:s=>e.jsx(r,{...s}),args:{type:"error",message:"An error occurred during the operation."}},t={render:s=>e.jsx(r,{...s}),args:{type:"info",message:"Here is some information."}},n={render:s=>e.jsx(r,{...s}),args:{type:"warning",message:"This is a warning message."}},m={render:s=>e.jsx(r,{...s}),args:{type:"info",message:"Custom toast message!",duration:1e4}};var c,p,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: ToastProps) => <AbvToast {...args} />,
  args: {
    type: 'success',
    message: 'Operation completed successfully!'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var i,d,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: ToastProps) => <AbvToast {...args} />,
  args: {
    type: 'error',
    message: 'An error occurred during the operation.'
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var T,f,l;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: ToastProps) => <AbvToast {...args} />,
  args: {
    type: 'info',
    message: 'Here is some information.'
  }
}`,...(l=(f=t.parameters)==null?void 0:f.docs)==null?void 0:l.source}}};var y,x,A;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: ToastProps) => <AbvToast {...args} />,
  args: {
    type: 'warning',
    message: 'This is a warning message.'
  }
}`,...(A=(x=n.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var j,S,b;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args: ToastProps) => <AbvToast {...args} />,
  args: {
    type: 'info',
    message: 'Custom toast message!',
    duration: 10000
  }
}`,...(b=(S=m.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const H=["SuccessToast","ErrorToast","InfoToast","WarningToast","CustomToast"];export{m as CustomToast,o as ErrorToast,t as InfoToast,a as SuccessToast,n as WarningToast,H as __namedExportsOrder,O as default};
