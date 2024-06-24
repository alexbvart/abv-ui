import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{p as a,c as u}from"./styled-components.browser.esm-E6QWLWCY.js";import"./index-l2PZgWEW.js";import"./tslib.es6-CRos2fHm.js";const L="_input_field_container_1r3ep_1",p={input_field_container:L},$=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  ${n=>n.disabled&&u`
      cursor: not-allowed;

      & input {
        background-color: #f9faff;
      }
    `}

  &:disabled {
    background-color: #f9faff;
    cursor: not-allowed;
  }
`,b=a.div`
  margin-top: 5px;
  ${n=>n.disabled&&u`
      cursor: not-allowed;
      background-color: #f9faff;
    `}
`,k=a.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  background-color: transparent;

  ${n=>n.disabled&&u`
      cursor: not-allowed;

      & input {
        background-color: #f9faff;
      }
    `}
`,D=a.div`
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
  padding-bottom: 4px;
`,E=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-base);
  width: 24px;
  height: 100%;
  cursor: pointer;
`,r=({label:n,icon:l,children:s,className:I,disabled:t=!1,...C})=>{const z=e.jsxs(e.Fragment,{children:[n&&e.jsx("div",{className:"input-label",children:n}),e.jsxs(b,{className:`${p.input_field_container} ${I}`,disabled:t,children:[l&&e.jsx("div",{className:"input-icon",children:l}),e.jsx(k,{...C,className:p.input_field,disabled:t})]})]});return e.jsx($,{disabled:t,children:s?e.jsx(b,{className:`${p.input_field_container} ${I}`,disabled:t,children:s}):z})},U=n=>e.jsx(k,{className:"input-field",...n}),A=({children:n})=>e.jsx(D,{className:"input-label",children:n}),B=({children:n,onClick:l,className:s})=>e.jsx(E,{className:s,onClick:l,children:n});r.Input=U,r.Label=A,r.Icon=B;r.__docgenInfo={description:"",methods:[{name:"Input",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null},{name:"Label",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Icon",docblock:null,modifiers:["static"],params:[{name:"{ children, onClick, className }",optional:!1,type:null}],returns:null}],displayName:"InputField",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const m=n=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:{display:"block",height:20,width:20,fill:"currentcolor"},viewBox:"0 0 32 32",...n,children:e.jsx("path",{d:"M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"})});m.__docgenInfo={description:"",methods:[],displayName:"LupeIcon"};const O={title:"Atoms/InputField",component:r,args:{label:"Username"},parameters:{layout:"centered"},tags:["autodocs"]},o={render:n=>e.jsx(r,{label:n.label,children:e.jsx(r.Input,{placeholder:"Enter your username",type:"password"})}),args:{label:"Username"}},d={render:n=>e.jsxs(r,{label:n.label,icon:e.jsx("p",{children:"9"}),disabled:!0,children:[e.jsx(r.Icon,{children:e.jsx(m,{})}),e.jsx(r.Input,{placeholder:"Disabled input",disabled:!0})]}),args:{label:"Disabled Username"}},i={render:n=>e.jsxs(r,{label:n.label,icon:e.jsx("p",{children:"5"}),children:[e.jsx(r.Input,{placeholder:"Search..."}),e.jsx(r.Icon,{children:e.jsx(m,{})})]}),args:{label:"Search"}},c={render:n=>e.jsx(r,{label:n.label,className:"custom-input-field",children:e.jsx(r.Input,{placeholder:"Custom styled input"})}),args:{label:"Custom Styled"},parameters:{docs:{description:{story:"Este es un campo de entrada con estilo personalizado utilizando CSS."}}}};var f,x,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <InputField label={args.label}>\r
      <InputField.Input placeholder="Enter your username" type='password' />\r
    </InputField>,
  args: {
    label: 'Username'
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,j,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <InputField label={args.label} icon={<p>9</p>} disabled>\r
      <InputField.Icon><LupeIcon /></InputField.Icon>\r
      <InputField.Input placeholder="Disabled input" disabled /> \r
    </InputField>,
  args: {
    label: 'Disabled Username'
  }
}`,...(y=(j=d.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var F,S,_;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <InputField label={args.label} icon={<p>5</p>}>\r
      <InputField.Input placeholder="Search..." />\r
      <InputField.Icon><LupeIcon /></InputField.Icon>\r
    </InputField>,
  args: {
    label: 'Search'
  }
}`,...(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var w,v,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <InputField label={args.label} className="custom-input-field">\r
      <InputField.Input placeholder="Custom styled input" />\r
    </InputField>,
  args: {
    label: 'Custom Styled'
  },
  parameters: {
    docs: {
      description: {
        story: 'Este es un campo de entrada con estilo personalizado utilizando CSS.'
      }
    }
  }
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const R=["PasswordInput","DisabledInput","SearchField","CustomStyledInput"];export{c as CustomStyledInput,d as DisabledInput,o as PasswordInput,i as SearchField,R as __namedExportsOrder,O as default};
