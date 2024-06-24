import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as d}from"./index-l2PZgWEW.js";import{A as c,a}from"./MultiselectOption-x01ZP_En.js";import{p as M}from"./styled-components.browser.esm-E6QWLWCY.js";import{A as B}from"./Button-DwRTw4I5.js";import"./Input-BNfStDuy.js";import"./tslib.es6-CRos2fHm.js";import"./clsx-B-dksMZM.js";const K={title:"organism/MultiSelectDropdown",component:c,args:{selectedValues:[]},argTypes:{onChange:{action:"changed"}},parameters:{layout:"centered"},tags:["autodocs"]},u={render:l=>{const[t,r]=d.useState(l.selectedValues);return e.jsxs(c,{...l,selectedValues:t,onChange:n=>{r(n),l.onChange(n)},children:[e.jsx(a,{value:"apple",label:"Apple"}),e.jsx(a,{value:"banana",label:"Banana"}),e.jsx(a,{value:"cherry",label:"Cherry"}),e.jsx(a,{value:"date",label:"Date"}),e.jsx(a,{value:"elderberry",label:"Elderberry"})]})},args:{selectedValues:[]}},p={render:l=>{const[t,r]=d.useState(l.selectedValues);return e.jsxs(c,{...l,selectedValues:t,onChange:n=>{r(n),l.onChange(n)},children:[e.jsx(a,{value:"apple",label:"Apple"}),e.jsx(a,{value:"banana",label:"Banana"}),e.jsx(a,{value:"cherry",label:"Cherry"}),e.jsx(a,{value:"date",label:"Date"}),e.jsx(a,{value:"elderberry",label:"Elderberry"})]})},args:{selectedValues:["apple","banana"]}},i={render:l=>{const[t,r]=d.useState(l.selectedValues);return e.jsxs(c,{...l,selectedValues:t,onChange:n=>{r(n),l.onChange(n)},children:[e.jsx(a,{value:"apple",label:"Apple"}),e.jsx(a,{value:"banana",label:"Banana"}),e.jsx(a,{value:"cherry",label:"Cherry"}),e.jsx(a,{value:"date",label:"Date"}),e.jsx(a,{value:"elderberry",label:"Elderberry"}),e.jsx(a,{value:"fig",label:"Fig"}),e.jsx(a,{value:"grape",label:"Grape"}),e.jsx(a,{value:"honeydew",label:"Honeydew"})]})},args:{selectedValues:[]}},E=M.div`
width: 400px;
border: 2px solid #007bff;
border-radius: 8px;
padding: 10px;
`,s=()=>{const[l,t]=d.useState([]);return e.jsx(E,{children:e.jsxs(c,{selectedValues:l,onChange:t,children:[e.jsx(a,{value:"kiwi",label:"Kiwi"}),e.jsx(a,{value:"lemon",label:"Lemon"}),e.jsx(a,{value:"mango",label:"Mango"}),e.jsx(a,{value:"nectarine",label:"Nectarine"}),e.jsx(a,{value:"orange",label:"Orange"}),e.jsx(a,{value:"papaya",label:"Papaya"})]})})};s.args={selectedValues:[]};const b=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],o=()=>{const[l,t]=d.useState([]),r=()=>{t(b.map(n=>n.toLowerCase()))};return e.jsxs("div",{children:[e.jsx(B,{onClick:r,children:"Select All"}),e.jsx(c,{selectedValues:l,onChange:t,children:b.map(n=>e.jsx(a,{value:n.toLowerCase(),label:n},n))})]})};o.args={selectedValues:b};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};o.__docgenInfo={description:"",methods:[],displayName:"SelectAll"};var v,g,S;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(args.selectedValues);
    return <AbvMultiSelectDropdown {...args} selectedValues={selectedValues} onChange={newSelectedValues => {
      setSelectedValues(newSelectedValues);
      args.onChange(newSelectedValues);
    }}>\r
        <AbvOption value="apple" label="Apple" />\r
        <AbvOption value="banana" label="Banana" />\r
        <AbvOption value="cherry" label="Cherry" />\r
        <AbvOption value="date" label="Date" />\r
        <AbvOption value="elderberry" label="Elderberry" />\r
      </AbvMultiSelectDropdown>;
  },
  args: {
    selectedValues: []
  }
}`,...(S=(g=u.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var m,A,h;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(args.selectedValues);
    return <AbvMultiSelectDropdown {...args} selectedValues={selectedValues} onChange={newSelectedValues => {
      setSelectedValues(newSelectedValues);
      args.onChange(newSelectedValues);
    }}>\r
        <AbvOption value="apple" label="Apple" />\r
        <AbvOption value="banana" label="Banana" />\r
        <AbvOption value="cherry" label="Cherry" />\r
        <AbvOption value="date" label="Date" />\r
        <AbvOption value="elderberry" label="Elderberry" />\r
      </AbvMultiSelectDropdown>;
  },
  args: {
    selectedValues: ["apple", "banana"]
  }
}`,...(h=(A=p.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var y,x,V;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string[]>(args.selectedValues);
    return <AbvMultiSelectDropdown {...args} selectedValues={selected} onChange={newSelected => {
      setSelected(newSelected);
      args.onChange(newSelected);
    }}>\r
        <AbvOption value="apple" label="Apple" />\r
        <AbvOption value="banana" label="Banana" />\r
        <AbvOption value="cherry" label="Cherry" />\r
        <AbvOption value="date" label="Date" />\r
        <AbvOption value="elderberry" label="Elderberry" />\r
        <AbvOption value="fig" label="Fig" />\r
        <AbvOption value="grape" label="Grape" />\r
        <AbvOption value="honeydew" label="Honeydew" />\r
      </AbvMultiSelectDropdown>;
  },
  args: {
    selectedValues: []
  }
}`,...(V=(x=i.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var C,w,j;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<string[]>([]);
  return <CustomDropdownContainer>\r
      <AbvMultiSelectDropdown selectedValues={selected} onChange={setSelected}>\r
        <AbvOption value="kiwi" label="Kiwi" />\r
        <AbvOption value="lemon" label="Lemon" />\r
        <AbvOption value="mango" label="Mango" />\r
        <AbvOption value="nectarine" label="Nectarine" />\r
        <AbvOption value="orange" label="Orange" />\r
        <AbvOption value="papaya" label="Papaya" />\r
      </AbvMultiSelectDropdown>\r
    </CustomDropdownContainer>;
}`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var O,D,f;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleSelectAll = () => {
    setSelected(allOptions.map(option => option.toLowerCase()));
  };
  return <div>\r
      <AbvButton onClick={handleSelectAll}>Select All</AbvButton>\r
      <AbvMultiSelectDropdown selectedValues={selected} onChange={setSelected}>\r
        {allOptions.map(option => <AbvOption key={option} value={option.toLowerCase()} label={option} />)}\r
      </AbvMultiSelectDropdown>\r
    </div>;
}`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};const I=["Default","PreselectedValues","WithSearchFunctionality","CustomStyling","SelectAll"];export{s as CustomStyling,u as Default,p as PreselectedValues,o as SelectAll,i as WithSearchFunctionality,I as __namedExportsOrder,K as default};
