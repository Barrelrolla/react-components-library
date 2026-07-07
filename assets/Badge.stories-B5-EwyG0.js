import{j as a}from"./iframe-CbDRy_SN.js";import{B as o}from"./Badge-b5pDJqOU.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";const{expect:y,within:u}=__STORYBOOK_MODULE_TEST__,c=["main","light","dark","primary","secondary","accent","info","success","warning","error"],f={title:"Components/Badge",tags:["autodocs"],component:o,decorators:e=>a.jsx("div",{className:"storybookContainer",children:a.jsx(e,{})})},r={play:async({canvasElement:e})=>{const t=u(e).getByText("Badge");await y(t,"renders").toBeTruthy()},render:({children:e,...n})=>a.jsx(o,{...n,children:e}),args:{children:"Badge"}},s={play:async({canvasElement:e})=>{const t=u(e).getAllByText(/^(main|light|dark|primary|secondary|accent|info|success|warning|error)$/);await y(t).toHaveLength(c.length)},render:({...e})=>a.jsx("div",{className:"flex flex-wrap gap-2",children:c.map(n=>a.jsx(o,{color:n,...e,children:n},n))}),args:{},argTypes:{color:{if:{arg:"false",eq:"true"}}}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var g,p,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badges = canvas.getAllByText(/^(main|light|dark|primary|secondary|accent|info|success|warning|error)$/);
    await expect(badges).toHaveLength(colors.length);
  },
  render: ({
    ...rest
  }) => {
    return <div className="flex flex-wrap gap-2">\r
        {colors.map(color => <Badge color={color} key={color} {...rest}>\r
            {color}\r
          </Badge>)}\r
      </div>;
  },
  args: {},
  argTypes: {
    color: {
      if: {
        arg: "false",
        eq: "true"
      }
    }
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const w=["Default","Colors"];export{s as Colors,r as Default,w as __namedExportsOrder,f as default};
