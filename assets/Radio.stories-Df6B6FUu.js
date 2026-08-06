import{j as r}from"./iframe-DjrizWL9.js";import{a as l}from"./index-COUSODbC.js";import{R as o,a as p}from"./RadioGroup-DN9fDVX7.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-BldbZDxN.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-BGFAW_Lx.js";const{expect:c,within:d}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Radio",tags:["autodocs"],component:o,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{children:{name:"text"},color:{options:l,control:{type:"select"}},defaultChecked:{table:{disable:!0}},labelStyle:{table:{disable:!0}},labelClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},n={play:async({canvasElement:e})=>{const i=d(e).getByText("Radio");await c(i,"renders").toBeTruthy()},render:({children:e,...a})=>r.jsx(o,{...a,children:e}),args:{children:"Radio",size:20}},s={play:async({canvasElement:e})=>{const i=d(e).getByText("Radio");await c(i,"renders").toBeTruthy()},render:({children:e,...a})=>r.jsx(o,{disabled:!0,...a,children:e}),args:{children:"Radio",size:20}},t={render:({...e})=>r.jsx(p,{name:"colors",title:"",className:"flex flex-wrap gap-2",children:l.map(a=>r.jsx(o,{color:a,...e,children:a},a))}),argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByText("Radio");
    await expect(radio, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Radio {...rest}>{children}</Radio>;
  },
  args: {
    children: "Radio",
    size: 20
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByText("Radio");
    await expect(radio, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Radio disabled {...rest}>\r
        {children}\r
      </Radio>;
  },
  args: {
    children: "Radio",
    size: 20
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <RadioGroup name="colors" title="" className="flex flex-wrap gap-2">\r
        {availableColors.map(color => <Radio color={color} key={color} {...rest}>\r
            {color}\r
          </Radio>)}\r
      </RadioGroup>;
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const v=["Default","Disabled","Colors"];export{t as Colors,n as Default,s as Disabled,v as __namedExportsOrder,g as default};
