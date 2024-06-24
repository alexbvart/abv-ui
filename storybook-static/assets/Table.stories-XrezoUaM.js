import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as x}from"./index-l2PZgWEW.js";import{p as n}from"./styled-components.browser.esm-E6QWLWCY.js";import{c as l}from"./clsx-B-dksMZM.js";import{A as f}from"./Button-DwRTw4I5.js";import"./tslib.es6-CRos2fHm.js";const y=n.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
`,j=n.thead`
  background-color: #f9f9f9;
`,g=n.th`
  padding: 16px;
  text-align: left;
  border-bottom: 1px solid #eaeaea;
  font-weight: bold;
  min-width: ${({minWidth:r})=>r||"auto"};
`,W=n.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`,B=n.td`
  padding: 16px;
  border-bottom: 1px solid #eaeaea;
  min-width: ${({minWidth:r})=>r||"auto"};
`,a=({children:r,className:t})=>e.jsx(y,{className:l(t),children:r}),v=({children:r,className:t})=>e.jsx(j,{className:l(t),children:r}),D=({children:r,className:t})=>e.jsx("tbody",{className:l(t),children:r}),H=({children:r,className:t})=>e.jsx(W,{className:l(t),children:r}),N=({children:r,minWidth:t,className:s})=>e.jsx(g,{className:l(s),minWidth:t,children:r}),k=({children:r,minWidth:t,className:s})=>e.jsx(B,{className:l(s),minWidth:t,children:r});a.Head=v;a.Body=D;a.Tr=H;a.Th=N;a.Td=k;a.__docgenInfo={description:"",methods:[{name:"Head",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Tr",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Th",docblock:null,modifiers:["static"],params:[{name:"{ children, minWidth, className }",optional:!1,type:null}],returns:null},{name:"Td",docblock:null,modifiers:["static"],params:[{name:"{ children, minWidth, className }",optional:!1,type:null}],returns:null}],displayName:"Table"};const M={title:"Atoms/Table",component:a,args:{},parameters:{layout:"centered"},tags:["autodocs"]},A=[{title:"Nombre"},{title:"Estado"},{title:"Detalle"},{title:"Acciones"}],h=[{nombre:"Frank Herbert",estado:"Duplicado",detalle:"El archivo que intentas subir ya existe, ¿Deseas reemplazarlo?"},{nombre:"Alice Munro",estado:"Duplicado",detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem tortor, elementum vitae ipsum nec, vestibulum convallis tellus. Maecenas faucibus pharetra eros id rutrum"},{nombre:"H. P. Lovecraft",estado:"Aceptado",detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",content:"Cras lorem tortor, elementum vitae ipsum nec, vestibulum convallis tellus. Maecenas faucibus pharetra eros id rutrum Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum convallis tellus."}],d={render:r=>e.jsxs(a,{children:[e.jsx(a.Head,{children:e.jsx(a.Tr,{children:A.map(t=>e.jsx(a.Th,{children:t.title},t.title))})}),e.jsx(a.Body,{children:h.map(t=>e.jsxs(a.Tr,{children:[e.jsx(a.Td,{minWidth:"200px",children:t.nombre}),e.jsx(a.Td,{minWidth:"150px",children:t.estado}),e.jsx(a.Td,{minWidth:"400px",children:t.detalle}),e.jsxs(a.Td,{minWidth:"100px",children:[" ",e.jsx(f,{type:"danger",children:"Eliminar"})," "]})]},t.nombre))})]}),args:{}},i={render:r=>{const[t,s]=x.useState(h);return e.jsxs(a,{children:[e.jsx(a.Head,{children:e.jsxs(a.Tr,{children:[e.jsx(a.Th,{minWidth:"150px",children:"Autor"}),e.jsx(a.Th,{minWidth:"100px",children:"Estado"}),e.jsx(a.Th,{minWidth:"300px",children:"Descripción"})]})}),e.jsx(a.Body,{children:t.map(o=>e.jsxs(a.Tr,{children:[e.jsx(a.Td,{minWidth:"150px",children:o.nombre}),e.jsx(a.Td,{minWidth:"100px",children:o.estado}),e.jsx(a.Td,{minWidth:"300px",children:o.detalle})]},o.nombre))})]})},args:{}};var m,c,T;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Table>\r
      <Table.Head>\r
        <Table.Tr>\r
          {dataHead.map(item => <Table.Th key={item.title}>{item.title}</Table.Th>)}\r
        </Table.Tr>\r
      </Table.Head>\r
      <Table.Body>\r
        {dataBody.map(item => <Table.Tr key={item.nombre}>\r
            <Table.Td minWidth="200px">{item.nombre}</Table.Td>\r
            <Table.Td minWidth="150px">{item.estado}</Table.Td>\r
            <Table.Td minWidth="400px">{item.detalle}</Table.Td>\r
            <Table.Td minWidth="100px"> <AbvButton type='danger'>Eliminar</AbvButton> </Table.Td>\r
          </Table.Tr>)}\r
      </Table.Body>\r
    </Table>,
  args: {}
}`,...(T=(c=d.parameters)==null?void 0:c.docs)==null?void 0:T.source}}};var p,u,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [customData, setCustomData] = useState(dataBody);
    return <Table>\r
        <Table.Head>\r
          <Table.Tr>\r
            <Table.Th minWidth="150px">Autor</Table.Th>\r
            <Table.Th minWidth="100px">Estado</Table.Th>\r
            <Table.Th minWidth="300px">Descripción</Table.Th>\r
          </Table.Tr>\r
        </Table.Head>\r
        <Table.Body>\r
          {customData.map(item => <Table.Tr key={item.nombre}>\r
              <Table.Td minWidth="150px">{item.nombre}</Table.Td>\r
              <Table.Td minWidth="100px">{item.estado}</Table.Td>\r
              <Table.Td minWidth="300px">{item.detalle}</Table.Td>\r
            </Table.Tr>)}\r
        </Table.Body>\r
      </Table>;
  },
  args: {}
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const F=["Default","CustomColumns"];export{i as CustomColumns,d as Default,F as __namedExportsOrder,M as default};
