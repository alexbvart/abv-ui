const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-Cvy65rU0.js","./iframe-CX6FfvoD.js","./index-l2PZgWEW.js","./react-18-B2S7X9kl.js","./index-CaNG7YX3.js","./index-DMim10ev.js","./jsx-runtime-DWbWqHZ-.js","./tslib.es6-CRos2fHm.js","./index-DXimoRZY.js","./index-B5xYo-Cg.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-CX6FfvoD.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-Cvy65rU0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
