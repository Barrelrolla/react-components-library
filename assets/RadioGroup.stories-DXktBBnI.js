import{j as e}from"./iframe-P8Y-PKRI.js";import{a as t}from"./index-Ccfv0_tG.js";import{a as s,R as o}from"./RadioGroup-DivVYUbH.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./icons-D2r-zf0o.js";const m={title:"Components/RadioGroup",tags:["autodocs"],component:s,decorators:a=>e.jsx("div",{className:"storybookContainer",children:e.jsx(a,{})}),argTypes:{color:{options:t,control:{type:"select"}},labelColor:{options:t,control:{type:"select"}},labelStyle:{table:{disable:!0}},defaultChecked:{table:{disable:!0}},wrapperClasses:{table:{disable:!0}},labelClasses:{table:{disable:!0}},name:{table:{disable:!0}}}},r={render:({...a})=>e.jsxs(s,{className:"flex gap-4",...a,children:[e.jsx(o,{children:"one"}),e.jsx(o,{children:"two"}),e.jsx(o,{children:"three"})]}),args:{size:20,name:"radio",title:"radio group"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <RadioGroup className="flex gap-4" {...rest}>\r
        <Radio>one</Radio>\r
        <Radio>two</Radio>\r
        <Radio>three</Radio>\r
      </RadioGroup>;
  },
  args: {
    size: 20,
    name: "radio",
    title: "radio group"
  }
}`,...r.parameters?.docs?.source}}};const u=["Default"];export{r as Default,u as __namedExportsOrder,m as default};
