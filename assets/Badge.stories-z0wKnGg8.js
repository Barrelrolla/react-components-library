import{j as n}from"./iframe-BFJxpdhf.js";import{B as c}from"./Badge-Cty4l4DI.js";import{a as o}from"./index-Ccfv0_tG.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";const{expect:l,within:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/Badge",tags:["autodocs"],component:c,decorators:e=>n.jsx("div",{className:"storybookContainer",children:n.jsx(e,{})}),argTypes:{children:{name:"text"},color:{options:o,control:{type:"select"}}}},r={play:async({canvasElement:e})=>{const t=d(e).getByText("Badge");await l(t,"renders").toBeTruthy()},render:({children:e,...a})=>n.jsx(c,{...a,children:e}),args:{children:"Badge"}},s={play:async({canvasElement:e})=>{const t=d(e).getAllByText(/^(main|light|dark|primary|secondary|accent|info|success|warning|error)$/);await l(t).toHaveLength(o.length)},render:({...e})=>n.jsx("div",{className:"flex flex-wrap gap-2",children:o.map(a=>n.jsx(c,{color:a,...e,children:a},a))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText("Badge");
    await expect(badge, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Badge {...rest}>{children}</Badge>;
  },
  args: {
    children: "Badge"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badges = canvas.getAllByText(/^(main|light|dark|primary|secondary|accent|info|success|warning|error)$/);
    await expect(badges).toHaveLength(availableColors.length);
  },
  render: ({
    ...rest
  }) => {
    return <div className="flex flex-wrap gap-2">\r
        {availableColors.map(color => <Badge color={color} key={color} {...rest}>\r
            {color}\r
          </Badge>)}\r
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
}`,...s.parameters?.docs?.source}}};const h=["Default","Colors"];export{s as Colors,r as Default,h as __namedExportsOrder,u as default};
