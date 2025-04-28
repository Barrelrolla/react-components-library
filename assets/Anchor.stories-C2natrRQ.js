import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{w as d,e as h}from"./index-D_lHLW6D.js";import{A as n}from"./Anchor-3zSwnYK9.js";import"./ThemeContext-CzQ_9dh3.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const A={title:"Components/Anchor",component:n,argTypes:{children:{name:"text"},color:{control:{type:"inline-radio"}},href:{if:{arg:"false",exists:!0}},as:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}}}},t={play:async({canvasElement:e})=>{const u=d(e).getByText("Link");await h(u,"renders").toBeTruthy()},render:({children:e,...a})=>r.jsx("div",{className:"bg-main min-h-100 px-10 py-20",children:r.jsx(n,{href:"#",...a,children:e})}),args:{children:"Link"}},s={render:({...e})=>r.jsxs("p",{className:"bg-main text-main-content p-2",children:["Lorem ipsum"," ",r.jsx(n,{href:"#",...e,children:"dolor"})," ","sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque dolores"," ",r.jsx(n,{"data-selected":!0,href:"#",...e,children:"inventore"})," ","natus molestiae totam temporibus, aperiam voluptates aut excepturi possimus praesentium"," ",r.jsx(n,{href:"#",...e,children:"mollitia"})," ","odio culpa quis!"]}),argTypes:{children:{if:{exists:!0,global:"true"}}}};var i,o,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
    return <div className="bg-main min-h-100 px-10 py-20">\r
        <Anchor href="#" {...rest}>\r
          {children}\r
        </Anchor>\r
      </div>;
  },
  args: {
    children: "Link"
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,l,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => {
    return <p className={"bg-main text-main-content p-2"}>\r
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
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const T=["Default","InText"];export{t as Default,s as InText,T as __namedExportsOrder,A as default};
