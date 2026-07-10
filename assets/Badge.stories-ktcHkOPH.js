import{j as n}from"./iframe-CQt0MMLO.js";import{B as c}from"./Badge-__7BUMph.js";import{a as o}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";const{expect:y,within:u}=__STORYBOOK_MODULE_TEST__,f={title:"Components/Badge",tags:["autodocs"],component:c,decorators:e=>n.jsx("div",{className:"storybookContainer",children:n.jsx(e,{})}),argTypes:{children:{name:"text"},color:{options:o,control:{type:"select"}}}},r={play:async({canvasElement:e})=>{const t=u(e).getByText("Badge");await y(t,"renders").toBeTruthy()},render:({children:e,...a})=>n.jsx(c,{...a,children:e}),args:{children:"Badge"}},s={play:async({canvasElement:e})=>{const t=u(e).getAllByText(/^(main|light|dark|primary|secondary|accent|info|success|warning|error)$/);await y(t).toHaveLength(o.length)},render:({...e})=>n.jsx("div",{className:"flex flex-wrap gap-2",children:o.map(a=>n.jsx(c,{color:a,...e,children:a},a))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};var l,d,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var g,p,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const T=["Default","Colors"];export{s as Colors,r as Default,T as __namedExportsOrder,f as default};
