import{j as r}from"./jsx-runtime-DWbWqHZ-.js";import{p as n}from"./styled-components.browser.esm-E6QWLWCY.js";import"./index-l2PZgWEW.js";import"./tslib.es6-CRos2fHm.js";const b=n.div`
  width: 100%;
  height: 20px;
  
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
`,j=n.div`
  /* background-color: var(--color-active); */
  background-color: #007aff;
  width: ${e=>e.percentage}%;
  height: 100%;
`,q=n.div`
  position: absolute;  

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  min-height: 20px;
  width: 100%;
  margin: auto;
  flex: 1;

  font-size: 12px;
  z-index: 2;
  text-align: center;
`,s=({fill:e,children:l,className:R})=>r.jsx(b,{className:R,children:l||r.jsxs(r.Fragment,{children:[r.jsxs(N,{children:[e,"%"]}),r.jsx(y,{fill:e})]})}),y=({fill:e,className:l})=>r.jsx(j,{percentage:Number(e),className:l}),N=({children:e,className:l})=>r.jsx(q,{className:l,children:e});s.Fill=y;s.Text=N;s.__docgenInfo={description:"",methods:[{name:"Fill",docblock:null,modifiers:["static"],params:[{name:"{ fill, className} :ProgressBarFillProps",optional:!1,type:{name:"ProgressBarFillProps",alias:"ProgressBarFillProps"}}],returns:null},{name:"Text",docblock:null,modifiers:["static"],params:[{name:"{ children, className }:PercentageTextProps",optional:!1,type:{name:"PercentageTextProps",alias:"PercentageTextProps"}}],returns:null}],displayName:"ProgressBar",props:{fill:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const v={title:"Atoms/ProgressBar",component:s,args:{fill:50},argTypes:{fill:{control:{type:"range",min:0,max:100},description:"Valor porcentual",defaultValue:50}},parameters:{},tags:["autodocs"]},a=e=>r.jsx(s,{...e});a.args={fill:50};const t=e=>r.jsxs(s,{...e,children:[r.jsx(s.Text,{children:`${e.fill}% complete`}),r.jsx(s.Fill,{fill:e.fill})]});t.args={fill:50};const o=e=>r.jsx(s,{...e});o.args={fill:50};const i=e=>r.jsx(s,{...e,children:r.jsx(s.Fill,{fill:e.fill})});i.args={fill:50};a.__docgenInfo={description:"",methods:[],displayName:"BasicProgressBar",props:{fill:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"ProgressBarWithCustomText",props:{fill:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"ProgressBarWithoutText",props:{fill:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"StyledProgressBar",props:{fill:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"(args: ProgressBarProps) => <ProgressBar {...args} />",...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"(args: ProgressBarProps) => <ProgressBar {...args}>\r\n    <ProgressBar.Text>{`${args.fill}% complete`}</ProgressBar.Text>\r\n    <ProgressBar.Fill fill={args.fill} />\r\n  </ProgressBar>",...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,P,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"(args: ProgressBarProps) => <ProgressBar {...args} />",...(x=(P=o.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var B,h,T;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`(args: ProgressBarProps) => <ProgressBar {...args}>\r
    <ProgressBar.Fill fill={args.fill} />\r
  </ProgressBar>`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const k=["BasicProgressBar","ProgressBarWithCustomText","ProgressBarWithoutText","StyledProgressBar"];export{a as BasicProgressBar,t as ProgressBarWithCustomText,o as ProgressBarWithoutText,i as StyledProgressBar,k as __namedExportsOrder,v as default};
