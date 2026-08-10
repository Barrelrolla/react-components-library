import{j as n}from"./iframe-DnygXqbo.js";import{C as o}from"./Checkbox-ZnPrvmtM.js";import{a as l}from"./index-COUSODbC.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-Clz5e0bR.js";const{expect:i,within:d}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Checkbox",tags:["autodocs"],component:o,decorators:e=>n.jsx("div",{className:"storybookContainer",children:n.jsx(e,{})}),argTypes:{children:{name:"text"},color:{options:l,control:{type:"select"}},labelColor:{options:l,control:{type:"select"}},defaultChecked:{table:{disable:!0}},labelStyle:{table:{disable:!0}},labelClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},a={play:async({canvasElement:e})=>{const c=d(e).getByText("Checkbox");await i(c,"renders").toBeTruthy()},render:({children:e,...r})=>n.jsx(o,{...r,children:e}),args:{children:"Checkbox",size:24}},s={play:async({canvasElement:e})=>{const c=d(e).getByText("Checkbox");await i(c,"renders").toBeTruthy()},render:({children:e,...r})=>n.jsx(o,{disabled:!0,...r,children:e}),args:{children:"Checkbox",size:24}},t={render:({...e})=>n.jsx("div",{className:"flex flex-wrap gap-2",children:l.map(r=>n.jsx(o,{color:r,defaultChecked:!0,...e,children:r},r))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    return <Checkbox disabled {...rest}>\r
        {children}\r
      </Checkbox>;
  },
  args: {
    children: "Checkbox",
    size: 24
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["Default","Disabled","Colors"];export{t as Colors,a as Default,s as Disabled,y as __namedExportsOrder,k as default};
