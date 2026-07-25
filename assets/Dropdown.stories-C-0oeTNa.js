import{j as n}from"./iframe-wbB-xHy2.js";import{D as d,a as m,b as l,c as u,d as w,e as r}from"./DropdownListItem-4pRD6ume.js";import{a as h}from"./index-Ccfv0_tG.js";import{B as D}from"./Button-C0b68ykF.js";import"./ButtonGroup-JAjyirTf.js";import{c as y}from"./index-D_0K5evh.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-BX1Sr0XH.js";import"./Slot-DTUeGszr.js";import"./bundle-mjs-169JcMJR.js";import"./Anchor-B_GT_0PL.js";import"./icons-Dj3q28JA.js";import"./Divider-DiOhMQMX.js";const{expect:o,screen:x,userEvent:c,within:g}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Dropdown",tags:["autodocs"],component:d,decorators:e=>n.jsx("div",{className:"storybookContainer",children:n.jsx(e,{})}),argTypes:{color:{options:h,control:{type:"select"}}}},s={play:async({canvasElement:e})=>{const t=g(e),p=t.getByText("open menu");o(t.queryByText("menu")).toBeNull(),await c.click(p);const a=x.getByText("menu");o(a,"renders").toBeInTheDocument(),await c.click(document.body),o(t.queryByText("menu")).toBeNull()},render:({...e})=>n.jsxs(d,{...e,children:[n.jsx(m,{children:n.jsx(D,{children:"open menu"})}),n.jsxs(l,{children:[n.jsx(u,{children:"menu"}),n.jsxs(w,{children:[n.jsx(r,{onClick:()=>console.log("clickdd"),children:"item 1"}),n.jsx(r,{children:"item 2"}),n.jsx(r,{children:"item 3"})]})]})]})},i={play:async({canvasElement:e})=>{const t=g(e),p=t.getByText("open menu");o(t.queryByText("menu")).toBeNull(),await c.click(p);const a=x.getByText("menu");o(a,"renders").toBeInTheDocument(),await c.click(document.body),o(t.queryByText("menu")).toBeNull()},render:({...e})=>n.jsxs(d,{...e,children:[n.jsx(m,{children:n.jsx(D,{children:"open menu"})}),n.jsxs(l,{children:[n.jsx(u,{children:"menu"}),n.jsxs(w,{children:[n.jsx(r,{children:"item 1"}),n.jsx(r,{children:"item 2"}),n.jsxs(d,{placement:"right",children:[n.jsx(m,{children:n.jsxs(r,{className:"flex items-center gap-1 pr-0",children:[n.jsx("span",{children:"item 3"})," ",n.jsx(y,{})]})}),n.jsxs(l,{children:[n.jsx(u,{children:"sub menu"}),n.jsxs(w,{children:[n.jsx(r,{children:"nested 1"}),n.jsx(r,{children:"nested 2"}),n.jsx(r,{children:"nested 3"})]})]})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <DropdownListItem onClick={() => console.log("clickdd")}>\r
              item 1\r
            </DropdownListItem>\r
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
            <DropdownListItem>item 2</DropdownListItem>\r
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
          </DropdownList>\r
        </DropdownContent>\r
      </Dropdown>;
  }
}`,...i.parameters?.docs?.source}}};const O=["Default","Nested"];export{s as Default,i as Nested,O as __namedExportsOrder,_ as default};
