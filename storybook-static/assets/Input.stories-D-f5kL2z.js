import{j as u}from"./jsx-runtime-DWbWqHZ-.js";import{r as s}from"./index-l2PZgWEW.js";import{I as r}from"./Input-BNfStDuy.js";import"./styled-components.browser.esm-E6QWLWCY.js";import"./tslib.es6-CRos2fHm.js";const L={title:"Atoms/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"text",description:"Tipo de input (text, password, email, etc.)",defaultValue:"text"},placeholder:{control:"text",description:"Placeholder del input",defaultValue:"Enter text here"},value:{control:"text",description:"Valor del input",defaultValue:""},onChange:{action:"changed",description:"Función llamada cuando el valor cambia"}}},l={render:e=>{const[t,n]=s.useState(e.value);return u.jsx(r,{...e,value:t,onChange:a=>{n(a.target.value),e.onChange(a)}})},args:{type:"text",placeholder:"Enter text here",value:""}},o={render:e=>{const[t,n]=s.useState(e.value);return u.jsx(r,{...e,value:t,onChange:a=>{n(a.target.value),e.onChange(a)}})},args:{type:"password",placeholder:"Enter password",value:""}},p={render:e=>{const[t,n]=s.useState(e.value);return u.jsx(r,{...e,value:t,onChange:a=>{n(a.target.value),e.onChange(a)}})},args:{type:"email",placeholder:"Enter your email",value:""}},c={render:e=>{const[t,n]=s.useState(e.value);return u.jsx(r,{...e,value:t,onChange:a=>{n(a.target.value),e.onChange(a)}})},args:{type:"number",placeholder:"Enter a number",value:""}},d={render:e=>{const[t,n]=s.useState(e.value);return u.jsx(r,{...e,value:t,onChange:a=>{n(a.target.value),e.onChange(a)}})},args:{type:"text",placeholder:"Pre-filled input",value:"Hello, World!"}};var g,v,m;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Input {...args} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      args.onChange(e);
    }} />;
  },
  args: {
    type: 'text',
    placeholder: 'Enter text here',
    value: ''
  }
}`,...(m=(v=l.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var i,h,C;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Input {...args} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      args.onChange(e);
    }} />;
  },
  args: {
    type: 'password',
    placeholder: 'Enter password',
    value: ''
  }
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var E,x,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Input {...args} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      args.onChange(e);
    }} />;
  },
  args: {
    type: 'email',
    placeholder: 'Enter your email',
    value: ''
  }
}`,...(I=(x=p.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var V,y,S;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Input {...args} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      args.onChange(e);
    }} />;
  },
  args: {
    type: 'number',
    placeholder: 'Enter a number',
    value: ''
  }
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,b,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <Input {...args} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      args.onChange(e);
    }} />;
  },
  args: {
    type: 'text',
    placeholder: 'Pre-filled input',
    value: 'Hello, World!'
  }
}`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const M=["Default","PasswordInput","EmailInput","NumberInput","PreFilledInput"];export{l as Default,p as EmailInput,c as NumberInput,o as PasswordInput,d as PreFilledInput,M as __namedExportsOrder,L as default};
