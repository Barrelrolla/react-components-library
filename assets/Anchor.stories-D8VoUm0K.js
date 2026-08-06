import{j as r}from"./iframe-DjrizWL9.js";import{A as n}from"./Anchor-Srzm7Fpc.js";import{a as c}from"./index-COUSODbC.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-BldbZDxN.js";import"./bundle-mjs-Ct12j0u0.js";const{expect:l,within:u}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Anchor",tags:["autodocs"],component:n,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{children:{name:"text"},color:{options:c,control:{type:"select"},table:{defaultValue:{summary:"main"}}},href:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}}}},a={play:async({canvasElement:e})=>{const s=u(e).getByText("Link");await l(s,"renders").toBeTruthy()},render:({children:e,...t})=>r.jsx(n,{href:"#",...t,children:e}),args:{children:"Link"}},o={render:({...e})=>r.jsxs("p",{children:["Lorem ipsum"," ",r.jsx(n,{underlined:!0,href:"#",...e,children:"dolor"})," ","sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque dolores"," ",r.jsx(n,{underlined:!0,"data-selected":!0,href:"#",...e,children:"inventore"})," ","natus molestiae totam temporibus, aperiam voluptates aut excepturi possimus praesentium"," ",r.jsx(n,{underlined:!0,href:"#",...e,children:"mollitia"})," ","odio culpa quis!"]}),argTypes:{children:{table:{disable:!0}}}},i={render:({children:e,...t})=>r.jsx(r.Fragment,{children:c.map(s=>r.jsx(n,{color:s,...t,children:e},s))}),args:{children:"Link"},argTypes:{color:{table:{disable:!0}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => {
    return <p>\r
        Lorem ipsum{" "}\r
        <Anchor underlined href="#" {...props}>\r
          dolor\r
        </Anchor>{" "}\r
        sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque\r
        dolores{" "}\r
        <Anchor underlined data-selected href="#" {...props}>\r
          inventore\r
        </Anchor>{" "}\r
        natus molestiae totam temporibus, aperiam voluptates aut excepturi\r
        possimus praesentium{" "}\r
        <Anchor underlined href="#" {...props}>\r
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => <Anchor color={color} key={color} {...rest}>\r
            {children}\r
          </Anchor>)}\r
      </>;
  },
  args: {
    children: "Link"
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const f=["Default","InText","Colors"];export{i as Colors,a as Default,o as InText,f as __namedExportsOrder,g as default};
