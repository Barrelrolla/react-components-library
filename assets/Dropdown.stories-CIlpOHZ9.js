import{j as e}from"./iframe-DqSxrya1.js";import{D as d,a as m,b as l,c as u,d as w,e as n}from"./DropdownListItem-CvVW5Ffc.js";import{d as h,e as y,a as T}from"./index-CikE6BH2.js";import{B as D}from"./Button-DIZNnSEb.js";import"./ButtonGroup-E6EBIcDk.js";import{c as B}from"./index-BOcfcWFa.js";import"./preload-helper-PPVm8Dsz.js";import"./FloatingContext-BNvFg4Nv.js";import"./useIsMobile-Cec8TY7E.js";import"./FloatingElementContent-uoroiEGL.js";import"./bundle-mjs-169JcMJR.js";import"./Anchor-B2zVe2Og.js";import"./icons-DvkMP2D8.js";import"./Divider-ULoo0Bda.js";const{expect:o,screen:x,userEvent:c,within:g}=__STORYBOOK_MODULE_TEST__,P={title:"Components/Dropdown",tags:["autodocs"],component:d,decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{color:{options:T,control:{type:"select"}},mobileSheetPlacement:{options:y,control:{type:"select"}},placement:{options:h,control:{type:"select"}}}},s={play:async({canvasElement:t})=>{const r=g(t),p=r.getByText("open menu");o(r.queryByText("menu")).toBeNull(),await c.click(p);const a=x.getByText("menu");o(a,"renders").toBeInTheDocument(),await c.click(document.body),o(r.queryByText("menu")).toBeNull()},render:({...t})=>e.jsxs(d,{...t,children:[e.jsx(m,{children:e.jsx(D,{children:"open menu"})}),e.jsxs(l,{children:[e.jsx(u,{children:"menu"}),e.jsxs(w,{children:[e.jsx(n,{children:"item 1"}),e.jsx(n,{children:"item 2"}),e.jsx(n,{children:"item 3"})]})]})]})},i={play:async({canvasElement:t})=>{const r=g(t),p=r.getByText("open menu");o(r.queryByText("menu")).toBeNull(),await c.click(p);const a=x.getByText("menu");o(a,"renders").toBeInTheDocument(),await c.click(document.body),o(r.queryByText("menu")).toBeNull()},render:({...t})=>e.jsxs(d,{...t,children:[e.jsx(m,{children:e.jsx(D,{children:"open menu"})}),e.jsxs(l,{children:[e.jsx(u,{children:"menu"}),e.jsxs(w,{children:[e.jsx(n,{children:"item 1"}),e.jsx(n,{disabled:!0,children:"item 2"}),e.jsxs(d,{placement:"right",children:[e.jsx(m,{children:e.jsxs(n,{className:"flex items-center gap-1 pr-0",children:[e.jsx("span",{children:"item 3"})," ",e.jsx(B,{})]})}),e.jsxs(l,{children:[e.jsx(u,{children:"sub menu"}),e.jsxs(w,{children:[e.jsx(n,{children:"nested 1"}),e.jsx(n,{children:"nested 2"}),e.jsx(n,{children:"nested 3"})]})]})]}),e.jsx(n,{children:"item 4"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("open menu");
    expect(canvas.queryByText("menu")).toBeNull();
    await userEvent.click(trigger);
    const dropdown = screen.getByText("menu");
    expect(dropdown, "renders").toBeInTheDocument();
    await userEvent.click(document.body);
    expect(canvas.queryByText("menu")).toBeNull();
  },
  render: ({
    ...rest
  }) => {
    return <Dropdown {...rest}>\r
        <DropdownTrigger>\r
          <Button>open menu</Button>\r
        </DropdownTrigger>\r
        <DropdownContent>\r
          <DropdownTitle>menu</DropdownTitle>\r
          <DropdownList>\r
            <DropdownListItem>item 1</DropdownListItem>\r
            <DropdownListItem>item 2</DropdownListItem>\r
            <DropdownListItem>item 3</DropdownListItem>\r
          </DropdownList>\r
        </DropdownContent>\r
      </Dropdown>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("open menu");
    expect(canvas.queryByText("menu")).toBeNull();
    await userEvent.click(trigger);
    const dropdown = screen.getByText("menu");
    expect(dropdown, "renders").toBeInTheDocument();
    await userEvent.click(document.body);
    expect(canvas.queryByText("menu")).toBeNull();
  },
  render: ({
    ...rest
  }) => {
    return <Dropdown {...rest}>\r
        <DropdownTrigger>\r
          <Button>open menu</Button>\r
        </DropdownTrigger>\r
        <DropdownContent>\r
          <DropdownTitle>menu</DropdownTitle>\r
          <DropdownList>\r
            <DropdownListItem>item 1</DropdownListItem>\r
            <DropdownListItem disabled>item 2</DropdownListItem>\r
            <Dropdown placement="right">\r
              <DropdownTrigger>\r
                <DropdownListItem className="flex items-center gap-1 pr-0">\r
                  <span>item 3</span> <PiCaretRight />\r
                </DropdownListItem>\r
              </DropdownTrigger>\r
              <DropdownContent>\r
                <DropdownTitle>sub menu</DropdownTitle>\r
                <DropdownList>\r
                  <DropdownListItem>nested 1</DropdownListItem>\r
                  <DropdownListItem>nested 2</DropdownListItem>\r
                  <DropdownListItem>nested 3</DropdownListItem>\r
                </DropdownList>\r
              </DropdownContent>\r
            </Dropdown>\r
            <DropdownListItem>item 4</DropdownListItem>\r
          </DropdownList>\r
        </DropdownContent>\r
      </Dropdown>;
  }
}`,...i.parameters?.docs?.source}}};const R=["Default","Nested"];export{s as Default,i as Nested,R as __namedExportsOrder,P as default};
