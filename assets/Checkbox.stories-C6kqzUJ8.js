import{j as a}from"./iframe-CBMgLoGF.js";import{C as o}from"./Checkbox-BRu-tVNf.js";import{a as t}from"./index-Ccfv0_tG.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./icons-owaYhVx7.js";const{expect:l,within:i}=__STORYBOOK_MODULE_TEST__,u={title:"Components/Checkbox",tags:["autodocs"],component:o,decorators:e=>a.jsx("div",{className:"storybookContainer",children:a.jsx(e,{})}),argTypes:{children:{name:"text"},color:{options:t,control:{type:"select"}},labelColor:{options:t,control:{type:"select"}},defaultChecked:{table:{disable:!0}},labelStyle:{table:{disable:!0}},labelClasses:{table:{disable:!0}},wrapperClasses:{table:{disable:!0}}}},n={play:async({canvasElement:e})=>{const c=i(e).getByText("Checkbox");await l(c,"renders").toBeTruthy()},render:({children:e,...r})=>a.jsx(o,{...r,children:e}),args:{children:"Checkbox",size:24}},s={render:({...e})=>a.jsx("div",{className:"flex flex-wrap gap-2",children:t.map(r=>a.jsx(o,{color:r,defaultChecked:!0,...e,children:r},r))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByText("Checkbox");
    await expect(checkbox, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Checkbox {...rest}>{children}</Checkbox>;
  },
  args: {
    children: "Checkbox",
    size: 24
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="flex flex-wrap gap-2">\r
        {availableColors.map(color => <Checkbox color={color} key={color} defaultChecked {...rest}>\r
            {color}\r
          </Checkbox>)}\r
      </div>;
  },
  args: {},
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
}`,...s.parameters?.docs?.source}}};const C=["Default","Colors"];export{s as Colors,n as Default,C as __namedExportsOrder,u as default};
