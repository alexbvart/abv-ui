import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as h,R as u}from"./index-l2PZgWEW.js";import{p as l}from"./styled-components.browser.esm-E6QWLWCY.js";import{c as i}from"./clsx-B-dksMZM.js";import"./Accordion-K75SmzLK.js";import{A as o}from"./Button-DwRTw4I5.js";import"./Card-CetrBd_y.js";import"./MenuBar-CEWx_Dpj.js";import"./MultiselectOption-x01ZP_En.js";import"./Notification-BVnMF_pW.js";import"./Notification2-DZl8CvF9.js";import"./Toast-DGRvjdXA.js";import"./tslib.es6-CRos2fHm.js";import"./Input-BNfStDuy.js";const S=h.createContext(null),N=l.div`
  position: fixed;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  padding: 1rem;

  ${({side:t})=>{if(t==="top"||t==="bottom")return`
        width: 100vw;
        height: 100%;
      `;if(t==="left"||t==="right")return`
        width: 100%;
        height: 100vh;
      `}}

  ${({side:t})=>t==="top"?"top":t==="bottom"?"bottom":t==="left"?"left":"right"}: 0;
  margin: 0;
  max-width: ${({side:t})=>t==="left"||t==="right"?"540px":"none"};
  max-height: ${({side:t})=>t==="top"||t==="bottom"?"60vh":"none"};
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transform: ${({side:t,isOpen:n})=>n?"translate(0)":t==="top"?"translateY(-100%)":t==="bottom"?"translateY(100%)":t==="left"?"translateX(-100%)":"translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`,H=l.div`
  display: ${({isOpen:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,k=l.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`,D=l.h2`
  margin: 0;
  font-size: 20px;
`,F=l.p`
  margin: 8px 0 0;
  font-size: 14px;
  color: #666;
`,O=l.div`
  padding: 16px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
`,r=({children:t})=>{const[n,s]=h.useState(!1),a={isOpen:n,close:()=>s(!1),open:()=>s(!0)};return e.jsxs(S.Provider,{value:a,children:[e.jsx(H,{isOpen:n,onClick:()=>s(!1)}),t]})},E=({children:t,className:n})=>{const s=h.useContext(S);if(!s)throw new Error("SheetTrigger must be used within a Sheet");const a=()=>{s.open()};return u.isValidElement(t)?u.cloneElement(t,{className:i(t.props.className,n),onClick:()=>{t.props.onClick&&t.props.onClick(),a()}}):e.jsx(o,{type:"secondary",className:i(n),onClick:()=>s.open(),children:t})},$=({side:t="right",children:n,className:s})=>{const a=h.useContext(S);if(!a)throw new Error("SheetTrigger must be used within a Sheet");return e.jsx(N,{side:t,isOpen:a.isOpen,className:i(s),children:n})},I=({children:t,className:n})=>e.jsx(k,{className:i(n),children:t}),P=({children:t,className:n})=>e.jsx(D,{className:i(n),children:t}),R=({children:t,className:n})=>e.jsx(F,{className:i(n),children:t}),z=({children:t,className:n})=>e.jsx(O,{className:i(n),children:t}),L=({children:t,asChild:n=!1})=>{const s=h.useContext(S);if(!s)throw new Error("SheetClose must be used within a Sheet");return u.cloneElement(u.Children.only(t),{onClick:()=>s.close()})};r.Trigger=E;r.Content=$;r.Header=I;r.Title=P;r.Description=R;r.Footer=z;r.Close=L;r.__docgenInfo={description:"",methods:[{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{\r
  side = "right",\r
  children,\r
  className,\r
}`,optional:!1,type:null}],returns:null},{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Title",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Description",docblock:null,modifiers:["static"],params:[{name:`{\r
  children,\r
  className,\r
}`,optional:!1,type:null}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Close",docblock:null,modifiers:["static"],params:[{name:"{ children, asChild = false }",optional:!1,type:null}],returns:null}],displayName:"Sheet"};const te={title:"Molecules/Sheet",component:r,parameters:{},tags:["autodocs"]},c={render:t=>e.jsxs(r,{children:[e.jsx(r.Trigger,{children:e.jsx(o,{type:"primary",children:"Open Sheet"})}),e.jsxs(r.Content,{className:"w-[400px] sm:w-[540px]",...t,side:"right",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Are you absolutely sure?"}),e.jsx(r.Description,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsx("p",{children:"Additional content can go here."}),e.jsxs(r.Footer,{children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(o,{children:"Cancel"})}),e.jsx(o,{type:"primary",children:"Save changes"})]})]})]}),args:{}},d={render:t=>e.jsxs(r,{children:[e.jsx(r.Trigger,{children:e.jsx(o,{children:"Open Bottom Sheet"})}),e.jsxs(r.Content,{className:"h-[300px] sm:h-[400px]",...t,side:"bottom",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Confirm Action"}),e.jsx(r.Description,{children:"This action requires your confirmation. Please review the details before proceeding."})]}),e.jsx("div",{children:"This is a bottom-aligned sheet."}),e.jsxs(r.Footer,{children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(o,{type:"secondary",children:"Cancel"})}),e.jsx(o,{type:"primary",children:"Proceed"})]})]})]}),args:{}},p={render:t=>e.jsxs(r,{children:[e.jsx(r.Trigger,{children:e.jsx(o,{children:"Open Left Sheet"})}),e.jsxs(r.Content,{className:"w-[300px] sm:w-[400px]",...t,side:"left",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Information"}),e.jsx(r.Description,{children:"Here you can place any information or actions you want to show in a side sheet."})]}),e.jsx("div",{children:"This is a left-aligned sheet."}),e.jsx(r.Footer,{children:e.jsx(r.Close,{asChild:!0,children:e.jsx(o,{type:"secondary",children:"Close"})})})]})]}),args:{}},m={render:t=>e.jsxs(r,{children:[e.jsx(r.Trigger,{children:e.jsx(o,{children:"Open Top Sheet"})}),e.jsxs(r.Content,{className:"h-[200px] sm:h-[300px]",...t,side:"top",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Top Sheet"}),e.jsx(r.Description,{children:"This sheet slides in from the top of the screen."})]}),e.jsx("div",{children:"This is a top-aligned sheet."}),e.jsx(r.Footer,{children:e.jsx(r.Close,{asChild:!0,children:e.jsx(o,{type:"secondary",children:"Close"})})})]})]}),args:{}};var x,g,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Sheet>\r
      <Sheet.Trigger>\r
        <AbvButton type='primary'>Open Sheet</AbvButton>\r
      </Sheet.Trigger>\r
      <Sheet.Content className="w-[400px] sm:w-[540px]" {...args} side="right">\r
        <Sheet.Header>\r
          <Sheet.Title>Are you absolutely sure?</Sheet.Title>\r
          <Sheet.Description>\r
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.\r
          </Sheet.Description>\r
        </Sheet.Header>\r
        <p>\r
          Additional content can go here.\r
        </p>\r
        <Sheet.Footer>\r
          <Sheet.Close asChild>\r
            <AbvButton>Cancel</AbvButton>\r
          </Sheet.Close>\r
          <AbvButton type="primary">Save changes</AbvButton>\r
        </Sheet.Footer>\r
      </Sheet.Content>\r
    </Sheet>,
  args: {}
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,C,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Sheet>\r
      <Sheet.Trigger>\r
        <AbvButton>Open Bottom Sheet</AbvButton>\r
      </Sheet.Trigger>\r
      <Sheet.Content className="h-[300px] sm:h-[400px]" {...args} side="bottom">\r
        <Sheet.Header>\r
          <Sheet.Title>Confirm Action</Sheet.Title>\r
          <Sheet.Description>\r
            This action requires your confirmation. Please review the details before proceeding.\r
          </Sheet.Description>\r
        </Sheet.Header>\r
        <div>\r
          This is a bottom-aligned sheet.\r
        </div>\r
        <Sheet.Footer>\r
          <Sheet.Close asChild>\r
            <AbvButton type="secondary">Cancel</AbvButton>\r
          </Sheet.Close>\r
          <AbvButton type="primary">Proceed</AbvButton>\r
        </Sheet.Footer>\r
      </Sheet.Content>\r
    </Sheet>,
  args: {}
}`,...(b=(C=d.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var j,T,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Sheet>\r
      <Sheet.Trigger>\r
        <AbvButton>Open Left Sheet</AbvButton>\r
      </Sheet.Trigger>\r
      <Sheet.Content className="w-[300px] sm:w-[400px]" {...args} side="left">\r
        <Sheet.Header>\r
          <Sheet.Title>Information</Sheet.Title>\r
          <Sheet.Description>\r
            Here you can place any information or actions you want to show in a side sheet.\r
          </Sheet.Description>\r
        </Sheet.Header>\r
        <div>\r
          This is a left-aligned sheet.\r
        </div>\r
        <Sheet.Footer>\r
          <Sheet.Close asChild>\r
            <AbvButton type="secondary">Close</AbvButton>\r
          </Sheet.Close>\r
        </Sheet.Footer>\r
      </Sheet.Content>\r
    </Sheet>,
  args: {}
}`,...(v=(T=p.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var w,A,B;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Sheet>\r
      <Sheet.Trigger>\r
        <AbvButton>Open Top Sheet</AbvButton>\r
      </Sheet.Trigger>\r
      <Sheet.Content className="h-[200px] sm:h-[300px]" {...args} side="top">\r
        <Sheet.Header>\r
          <Sheet.Title>Top Sheet</Sheet.Title>\r
          <Sheet.Description>\r
            This sheet slides in from the top of the screen.\r
          </Sheet.Description>\r
        </Sheet.Header>\r
        <div>\r
          This is a top-aligned sheet.\r
        </div>\r
        <Sheet.Footer>\r
          <Sheet.Close asChild>\r
            <AbvButton type="secondary">Close</AbvButton>\r
          </Sheet.Close>\r
        </Sheet.Footer>\r
      </Sheet.Content>\r
    </Sheet>,
  args: {}
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const re=["RightSheet","BottomSheet","LeftSheet","TopSheet"];export{d as BottomSheet,p as LeftSheet,c as RightSheet,m as TopSheet,re as __namedExportsOrder,te as default};
