import{j as n}from"./iframe-DjrizWL9.js";import{D as s,a as i,b as d,c as l,d as c,e}from"./DropdownListItem-DWBD5Af1.js";import{d as j,e as y,a as h}from"./index-COUSODbC.js";import{B as x}from"./ButtonGroup-DoHF2o8H.js";import{c as L}from"./index-C63JpXd2.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsMobile-BX4diqlI.js";import"./FloatingElementContent-JERVoKqN.js";import"./cssColorProps-BldbZDxN.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-BGFAW_Lx.js";import"./Slot-DBlTz432.js";import"./helpers-DdlamiXa.js";import"./Divider-BvYcTTEa.js";const{expect:t,screen:g,userEvent:w,within:T}=__STORYBOOK_MODULE_TEST__,G={title:"Components/Dropdown",tags:["autodocs"],component:s,decorators:o=>n.jsx("div",{className:"storybookContainer",children:n.jsx(o,{})}),argTypes:{color:{options:h,control:{type:"select"}},mobileSheetPlacement:{options:y,control:{type:"select"}},placement:{options:j,control:{type:"select"}}}},p={play:async({canvasElement:o})=>{const r=T(o),u=r.getByText("open menu");t(r.queryByText("menu")).toBeNull(),await w.click(u);const D=g.getByText("menu");t(D,"renders").toBeInTheDocument(),await w.click(document.body),t(r.queryByText("menu")).toBeNull()},render:({...o})=>n.jsxs(s,{...o,children:[n.jsx(i,{children:n.jsx(x,{children:"open menu"})}),n.jsxs(d,{children:[n.jsx(l,{children:"menu"}),n.jsxs(c,{children:[n.jsx(e,{children:"item 1"}),n.jsx(e,{children:"item 2"}),n.jsx(e,{children:"item 3"})]})]})]})},a={play:async({canvasElement:o})=>{const r=T(o),u=r.getByText("open menu");t(r.queryByText("menu")).toBeNull(),await w.click(u);const D=g.getByText("menu");t(D,"renders").toBeInTheDocument(),await w.click(document.body),t(r.queryByText("menu")).toBeNull()},render:({...o})=>n.jsxs(s,{...o,children:[n.jsx(i,{children:n.jsx(x,{children:"open menu"})}),n.jsxs(d,{children:[n.jsx(l,{children:"menu"}),n.jsxs(c,{children:[n.jsx(e,{children:"item 1"}),n.jsx(e,{disabled:!0,children:"item 2"}),n.jsxs(s,{placement:"right",children:[n.jsx(i,{children:n.jsx(e,{children:"item 3"})}),n.jsxs(d,{children:[n.jsx(l,{children:"sub menu"}),n.jsxs(c,{children:[n.jsx(e,{children:"nested 1"}),n.jsx(e,{children:"nested 2"}),n.jsx(e,{children:"nested 3"})]})]})]}),n.jsxs(e,{children:[n.jsx(L,{}),"item 4"]})]})]})]})},m={render:({...o})=>n.jsx(n.Fragment,{children:h.map(r=>n.jsxs(s,{color:r,...o,children:[n.jsx(i,{children:n.jsx(x,{color:r,children:r})}),n.jsxs(d,{children:[n.jsx(l,{children:"menu"}),n.jsxs(c,{children:[n.jsx(e,{children:"item 1"}),n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(e,{children:"item 2"})}),n.jsx(d,{children:n.jsx(c,{children:n.jsx(e,{children:"nested"})})})]})]})]})]},r))}),argTypes:{color:{table:{disable:!0}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
                <DropdownListItem>item 3</DropdownListItem>\r
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
            <DropdownListItem>\r
              <PiGearThin />\r
              item 4\r
            </DropdownListItem>\r
          </DropdownList>\r
        </DropdownContent>\r
      </Dropdown>;
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => {
        return <Dropdown key={color} color={color} {...rest}>\r
              <DropdownTrigger>\r
                <Button color={color}>{color}</Button>\r
              </DropdownTrigger>\r
              <DropdownContent>\r
                <DropdownTitle>menu</DropdownTitle>\r
                <DropdownList>\r
                  <DropdownListItem>item 1</DropdownListItem>\r
                  <Dropdown>\r
                    <DropdownTrigger>\r
                      <DropdownListItem>item 2</DropdownListItem>\r
                    </DropdownTrigger>\r
                    <DropdownContent>\r
                      <DropdownList>\r
                        <DropdownListItem>nested</DropdownListItem>\r
                      </DropdownList>\r
                    </DropdownContent>\r
                  </Dropdown>\r
                </DropdownList>\r
              </DropdownContent>\r
            </Dropdown>;
      })}\r
      </>;
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const M=["Default","Nested","Colors"];export{m as Colors,p as Default,a as Nested,M as __namedExportsOrder,G as default};
