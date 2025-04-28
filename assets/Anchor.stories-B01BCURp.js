import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{w as d,e as h}from"./index-D_lHLW6D.js";import{A as n}from"./Anchor-DFDv8UPl.js";import"./ThemeContext-CzQ_9dh3.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const A={title:"Components/Anchor",tags:["autodocs"],component:n,argTypes:{children:{name:"text"},color:{control:{type:"inline-radio"}},href:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}},as:{control:{disable:!0}}}},t={play:async({canvasElement:e})=>{const p=d(e).getByText("Link");await h(p,"renders").toBeTruthy()},render:({children:e,...a})=>r.jsx("div",{className:"storybookContainer",children:r.jsx(n,{href:"#",...a,children:e})}),args:{children:"Link"}},s={render:({...e})=>r.jsxs("p",{className:"bg-main p-4",children:["Lorem ipsum"," ",r.jsx(n,{href:"#",...e,children:"dolor"})," ","sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque dolores"," ",r.jsx(n,{"data-selected":!0,href:"#",...e,children:"inventore"})," ","natus molestiae totam temporibus, aperiam voluptates aut excepturi possimus praesentium"," ",r.jsx(n,{href:"#",...e,children:"mollitia"})," ","odio culpa quis!"]}),argTypes:{children:{if:{exists:!0,global:"true"}}}};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
    return <div className="storybookContainer">\r
        <Anchor href="#" {...rest}>\r
          {children}\r
        </Anchor>\r
      </div>;
  },
  args: {
    children: "Link"
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,u,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => {
    return <p className={"bg-main p-4"}>\r
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
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const T=["Default","InText"];export{t as Default,s as InText,T as __namedExportsOrder,A as default};
