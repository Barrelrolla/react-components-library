import{j as r}from"./iframe-CIDGPNHV.js";import{a as i}from"./index-CikE6BH2.js";import{R as t,a as p}from"./RadioGroup-C1_m1Vd_.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./icons-xD5BLknX.js";const{expect:c,within:d}=__STORYBOOK_MODULE_TEST__,R={title:"Components/Radio",tags:["autodocs"],component:t,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{children:{name:"text"},color:{options:i,control:{type:"select"}},labelColor:{options:i,control:{type:"select"}},defaultChecked:{table:{disable:!0}},labelStyle:{table:{disable:!0}},labelClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},n={play:async({canvasElement:e})=>{const l=d(e).getByText("Radio");await c(l,"renders").toBeTruthy()},render:({children:e,...a})=>r.jsx(t,{...a,children:e}),args:{children:"Radio",size:20}},s={play:async({canvasElement:e})=>{const l=d(e).getByText("Radio");await c(l,"renders").toBeTruthy()},render:({children:e,...a})=>r.jsx(t,{disabled:!0,...a,children:e}),args:{children:"Radio",size:20}},o={render:({...e})=>r.jsx(p,{name:"colors",title:"",className:"flex flex-wrap gap-2",children:i.map(a=>r.jsx(t,{color:a,...e,children:a},a))}),argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const g=["Default","Disabled","Colors"];export{o as Colors,n as Default,s as Disabled,g as __namedExportsOrder,R as default};
