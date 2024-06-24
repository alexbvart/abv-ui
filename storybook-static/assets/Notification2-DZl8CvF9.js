import{j as c}from"./jsx-runtime-DWbWqHZ-.js";import{r as i}from"./index-l2PZgWEW.js";import{p as u}from"./styled-components.browser.esm-E6QWLWCY.js";import{A as T}from"./Toast-DGRvjdXA.js";const p=i.createContext(void 0),g=u.div`
  position: fixed;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 9999;
`,b=({children:t})=>{const[m,n]=i.useState([]),f=i.useCallback(({type:e,message:r,content:o,duration:s=5e3})=>{const a=Math.random().toString(36).substr(2,9);n(d=>[...d,{id:a,type:e,message:r,content:o,duration:s}]),setTimeout(()=>{n(d=>d.filter(x=>x.id!==a))},s)},[]),l=i.useCallback(({render:e,duration:r=5e3})=>{const o=Math.random().toString(36).substr(2,9);n(s=>[...s,{id:o,type:"custom",message:"",content:e,duration:r}]),setTimeout(()=>{n(s=>s.filter(a=>a.id!==o))},r)},[]);return c.jsxs(p.Provider,{value:{addToast:f,addToastRender:l},children:[t,c.jsx(g,{children:m.map(e=>e.content?e.content:c.jsx(T,{type:e.type,message:e.message||"",duration:e.duration,onClose:()=>n(r=>r.filter(o=>o.id!==e.id))},e.id))})]})},j=()=>{const t=i.useContext(p);if(!t)throw new Error("useToast must be used within a ToastProvider");return t};b.__docgenInfo={description:"",methods:[],displayName:"AbvToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};u.div`
  background-color: ${({type:t})=>h(t)};
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;const h=t=>{switch(t){case"info":return"#2196f3";case"success":return"#4caf50";case"warning":return"#ff9800";case"error":return"#f44336";default:return"#2196f3"}};export{b as A,j as u};
