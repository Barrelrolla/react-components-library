import{j as r}from"./iframe-CV33I6ka.js";import{A as n}from"./Anchor-jnc3d3C8.js";import{a as i}from"./index-Ccfv0_tG.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";const{expect:c,within:l}=__STORYBOOK_MODULE_TEST__,x={title:"Components/Anchor",tags:["autodocs"],component:n,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{children:{name:"text"},color:{options:i,control:{type:"select"},table:{defaultValue:{summary:"main"}}},href:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}}}},t={play:async({canvasElement:e})=>{const o=l(e).getByText("Link");await c(o,"renders").toBeTruthy()},render:({children:e,...a})=>r.jsx(n,{href:"#",...a,children:e}),args:{children:"Link"}},s={render:({...e})=>r.jsxs("p",{children:["Lorem ipsum"," ",r.jsx(n,{href:"#",...e,children:"dolor"})," ","sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque dolores"," ",r.jsx(n,{"data-selected":!0,href:"#",...e,children:"inventore"})," ","natus molestiae totam temporibus, aperiam voluptates aut excepturi possimus praesentium"," ",r.jsx(n,{href:"#",...e,children:"mollitia"})," ","odio culpa quis!"]}),argTypes:{children:{table:{disable:!0}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const b=["Default","InText"];export{t as Default,s as InText,b as __namedExportsOrder,x as default};
