import{j as r}from"./iframe-DnygXqbo.js";import{D as a}from"./Divider-D3dyumf4.js";import{c as t,a as l}from"./index-COUSODbC.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";const v={title:"Components/Divider",tags:["autodocs"],component:a,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{color:{control:{type:"select"},options:l},responsiveAt:{control:{type:"inline-radio"},options:t}}},s={render:({...e})=>r.jsx("div",{className:"h-5 w-full",children:r.jsx(a,{...e})})},o={render:({...e})=>r.jsx("div",{className:"flex w-full flex-col",children:l.map(n=>r.jsx("div",{className:"h-5 w-full",children:r.jsx(a,{color:n,...e})},n))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="h-5 w-full">\r
        <Divider {...rest} />\r
      </div>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  }
}`,...o.parameters?.docs?.source}}};const f=["Default","Colors"];export{o as Colors,s as Default,f as __namedExportsOrder,v as default};
