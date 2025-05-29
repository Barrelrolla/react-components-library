import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{w as d,e as h}from"./index-D_lHLW6D.js";import{A as n}from"./Anchor-US6rZC-y.js";import"./bundle-mjs-CFgYV38x.js";const y={title:"Components/Anchor",tags:["autodocs"],component:n,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{children:{name:"text"},color:{control:{type:"select"}},href:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}},as:{control:{disable:!0}}}},t={play:async({canvasElement:e})=>{const m=d(e).getByText("Link");await h(m,"renders").toBeTruthy()},render:({children:e,...o})=>r.jsx(n,{href:"#",...o,children:e}),args:{children:"Link"}},s={render:({...e})=>r.jsxs("p",{children:["Lorem ipsum"," ",r.jsx(n,{href:"#",...e,children:"dolor"})," ","sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque dolores"," ",r.jsx(n,{"data-selected":!0,href:"#",...e,children:"inventore"})," ","natus molestiae totam temporibus, aperiam voluptates aut excepturi possimus praesentium"," ",r.jsx(n,{href:"#",...e,children:"mollitia"})," ","odio culpa quis!"]}),argTypes:{children:{if:{exists:!0,global:"true"}}}};var a,i,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Link");
    await expect(button, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Anchor href="#" {...rest}>\r
        {children}\r
      </Anchor>;
  },
  args: {
    children: "Link"
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,u,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => {
    return <p>\r
        Lorem ipsum{" "}\r
        <Anchor href="#" {...props}>\r
          dolor\r
        </Anchor>{" "}\r
        sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque\r
        dolores{" "}\r
        <Anchor data-selected href="#" {...props}>\r
          inventore\r
        </Anchor>{" "}\r
        natus molestiae totam temporibus, aperiam voluptates aut excepturi\r
        possimus praesentium{" "}\r
        <Anchor href="#" {...props}>\r
          mollitia\r
        </Anchor>{" "}\r
        odio culpa quis!\r
      </p>;
  },
  argTypes: {
    children: {
      if: {
        exists: true,
        global: "true"
      }
    }
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const A=["Default","InText"];export{t as Default,s as InText,A as __namedExportsOrder,y as default};
