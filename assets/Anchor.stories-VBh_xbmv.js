import{j as r}from"./iframe-C8KOGUx2.js";import{a as i}from"./index-DttbUWqL.js";import{A as n}from"./Anchor-rFKeucJX.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-BldbZDxN.js";import"./bundle-mjs-Ct12j0u0.js";const{expect:c,within:d}=__STORYBOOK_MODULE_TEST__,y={title:"Components/Anchor",tags:["autodocs"],component:n,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{children:{name:"text",table:{category:"storybook"}},color:{options:i,control:{type:"select"},table:{defaultValue:{summary:"main"},category:"controls"}},underlined:{table:{category:"controls"}},hoverUnderline:{table:{category:"controls"}},hoverUnderlineOffset:{table:{category:"controls"}},as:{table:{category:"docs"}},ref:{table:{category:"docs"}},href:{table:{disable:!0}}}},s={play:async({canvasElement:e})=>{const a=d(e).getByText("Link");await c(a,"renders").toBeTruthy()},render:({children:e,...t})=>r.jsx(n,{href:"#",...t,children:e}),args:{children:"Link"}},o={render:({...e})=>r.jsxs("p",{children:["Lorem ipsum"," ",r.jsx(n,{underlined:!0,href:"#",...e,children:"dolor"})," ","sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque dolores"," ",r.jsx(n,{underlined:!0,"data-selected":!0,href:"#",...e,children:"inventore"})," ","natus molestiae totam temporibus, aperiam voluptates aut excepturi possimus praesentium"," ",r.jsx(n,{underlined:!0,href:"#",...e,children:"mollitia"})," ","odio culpa quis!"]}),argTypes:{children:{table:{disable:!0}},as:{table:{disable:!0}},ref:{table:{disable:!0}}}},l={render:({children:e,...t})=>r.jsx(r.Fragment,{children:i.map(a=>r.jsx(n,{color:a,...t,children:e},a))}),args:{children:"Link"},argTypes:{color:{table:{disable:!0}},as:{table:{disable:!0}},ref:{table:{disable:!0}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    },
    as: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    },
    as: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const f=["Default","InText","Colors"];export{l as Colors,s as Default,o as InText,f as __namedExportsOrder,y as default};
