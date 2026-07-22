import{j as a}from"./iframe-P8Y-PKRI.js";import{a as s}from"./index-Ccfv0_tG.js";import{R as t,a as i}from"./RadioGroup-DivVYUbH.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./icons-D2r-zf0o.js";const{expect:c,within:d}=__STORYBOOK_MODULE_TEST__,R={title:"Components/Radio",tags:["autodocs"],component:t,decorators:e=>a.jsx("div",{className:"storybookContainer",children:a.jsx(e,{})}),argTypes:{children:{name:"text"},color:{options:s,control:{type:"select"}},labelColor:{options:s,control:{type:"select"}},defaultChecked:{table:{disable:!0}},labelStyle:{table:{disable:!0}},labelClasses:{table:{disable:!0}},wrapperClasses:{table:{disable:!0}}}},o={play:async({canvasElement:e})=>{const l=d(e).getByText("Radio");await c(l,"renders").toBeTruthy()},render:({children:e,...r})=>a.jsx(t,{...r,children:e}),args:{children:"Radio",size:20}},n={render:({...e})=>a.jsx(i,{name:"colors",title:"",className:"flex flex-wrap gap-2",children:s.map(r=>a.jsx(t,{color:r,...e,children:r},r))}),argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const h=["Default","Colors"];export{n as Colors,o as Default,h as __namedExportsOrder,R as default};
