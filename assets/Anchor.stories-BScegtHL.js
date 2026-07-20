import{j as r}from"./iframe-KW3OR2Aq.js";import{A as n}from"./Anchor-DSFmwBjn.js";import{a as d}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";const{expect:h,within:x}=__STORYBOOK_MODULE_TEST__,T={title:"Components/Anchor",tags:["autodocs"],component:n,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{children:{name:"text"},color:{options:d,control:{type:"select"},table:{defaultValue:{summary:"main"}}},href:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}}}},t={play:async({canvasElement:e})=>{const p=x(e).getByText("Link");await h(p,"renders").toBeTruthy()},render:({children:e,...a})=>r.jsx(n,{href:"#",...a,children:e}),args:{children:"Link"}},s={render:({...e})=>r.jsxs("p",{children:["Lorem ipsum"," ",r.jsx(n,{href:"#",...e,children:"dolor"})," ","sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque dolores"," ",r.jsx(n,{"data-selected":!0,href:"#",...e,children:"inventore"})," ","natus molestiae totam temporibus, aperiam voluptates aut excepturi possimus praesentium"," ",r.jsx(n,{href:"#",...e,children:"mollitia"})," ","odio culpa quis!"]}),argTypes:{children:{table:{disable:!0}}}};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,u,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      table: {
        disable: true
      }
    }
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const A=["Default","InText"];export{t as Default,s as InText,A as __namedExportsOrder,T as default};
