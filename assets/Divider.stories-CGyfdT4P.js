import{j as r}from"./iframe-IjIofJAl.js";import{d as n,a as l}from"./index-DttbUWqL.js";import{D as a}from"./Divider-B8DehVb6.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";const v={title:"Components/Divider",tags:["autodocs"],component:a,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{color:{control:{type:"select"},options:l,table:{category:"controls"}},width:{table:{category:"controls"}},vertical:{table:{category:"controls"}},useBgColor:{table:{category:"controls"}},responsiveAt:{control:{type:"inline-radio"},options:n,table:{category:"controls"}}}},o={render:({...e})=>r.jsx("div",{className:"h-5 w-full",children:r.jsx(a,{...e})})},s={render:({...e})=>r.jsx("div",{className:"flex w-full flex-col",children:l.map(t=>r.jsx("div",{className:"h-5 w-full",children:r.jsx(a,{color:t,...e})},t))}),argTypes:{color:{table:{disable:!0}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="h-5 w-full">\r
        <Divider {...rest} />\r
      </div>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="flex w-full flex-col">\r
        {availableColors.map(color => {
        return <div key={color} className="h-5 w-full">\r
              <Divider color={color} {...rest} />\r
            </div>;
      })}\r
      </div>;
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const f=["Default","Colors"];export{s as Colors,o as Default,f as __namedExportsOrder,v as default};
