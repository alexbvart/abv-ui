import{j as n}from"./jsx-runtime-DWbWqHZ-.js";import{p as o,c as r}from"./styled-components.browser.esm-E6QWLWCY.js";import{c as d}from"./clsx-B-dksMZM.js";const c=o.div`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  min-height: 300px;
  min-width: 300px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`,m=o.div`
  position: relative;
  padding: 16px;
  width: 100%;
  height: max-content;
  min-height: 300px;
  min-width: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 4px;

  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,a=({className:t,children:e,...i})=>n.jsx(c,{...i,children:n.jsx(m,{className:d(t),children:e})}),p=o.div`
  justify-content: flex-start;
  margin-bottom: auto;
  /* flex: 1; */
`,x=({className:t,children:e})=>n.jsx(p,{className:t,children:e}),f=o.h2`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-align: left;
`,u=({children:t,className:e})=>n.jsx(f,{className:e,children:t}),g=o.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`,h=({children:t,className:e,...i})=>n.jsx(g,{className:e,...i,children:t}),b=o.div`
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  z-index: -1; // Coloca la imagen detrás del contenido

  ${t=>t.isFull&&r`
      width: 100%;
      height: 100%;
      position: absolute;
    `}
`,C=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${t=>!t.isFull&&["top","bottom","center"].includes(t.imagePosition||"")&&r`
      max-height: 200px;
      border-radius: 8px;
      object-fit: cover;
      object-position: center ${t.imagePosition};
    `}
`,y=({image:t,alt:e="Card Image",imagePosition:i="center",className:l,isFull:s=!1})=>n.jsx(b,{imagePosition:i,isFull:s,className:l,children:n.jsx(C,{src:t,alt:e,isFull:s,imagePosition:i})}),j=o.div`
  width: 100%;
  height: 100%;
  flex: 1;
  text-align: left;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: auto;
  margin-bottom: auto;
`,v=({children:t,className:e})=>n.jsx(j,{className:e,children:t}),w=o.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 8px;
`,S=({children:t,className:e})=>n.jsx(w,{className:e,children:t});a.Header=x;a.Title=u;a.Subtitle=h;a.Image=y;a.Content=v;a.Footer=S;a.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ className, children }",optional:!1,type:null}],returns:null},{name:"Title",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Subtitle",docblock:null,modifiers:["static"],params:[{name:`{\r
  children,\r
  className,\r
  ...rest\r
}`,optional:!1,type:null}],returns:null},{name:"Image",docblock:null,modifiers:["static"],params:[{name:`{\r
  image,\r
  alt = "Card Image",\r
  imagePosition = "center",\r
  className,\r
  isFull = false,\r
}`,optional:!1,type:null}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: CardContentProps",optional:!1,type:{name:"CardContentProps",alias:"CardContentProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: CardActionsProps",optional:!1,type:{name:"CardActionsProps",alias:"CardActionsProps"}}],returns:null}],displayName:"Card"};export{a as C};
