import{j as e}from"./iframe-Bbxhc0td.js";import{d as b}from"./index-BcQ5fAdE.js";import{b as T,e as I,a as x}from"./index-DttbUWqL.js";import"./Anchor-Bd8u19zS.js";import"./Badge-ClTnM6nG.js";import{B as g}from"./Button-BO93cLlU.js";import"./ButtonGroup-DwYiJzMz.js";import"./PopoverTrigger-DC3zGtyd.js";import"./DarkModeToggle-DjbJfyJ8.js";import"./DarkModeSelector-C8p4kY1D.js";import{a as s,b as c,c as n,d as i,e as a,f as d}from"./DropdownTrigger-CgBoVI6l.js";import"./Divider-DSU9h1GZ.js";import"./HamburgerButton-D7-yr55c.js";import"./AutocompleteInput-CHW-CgMg.js";import"./Checkbox-Dvot6QXH.js";import"./RadioGroup-LuxfsKUB.js";import"./TooltipContent-CoHp1mC_.js";import"./SidemenuItem-BI_Gs0CE.js";import"./SelectOption-CgAFufTX.js";import"./Skeleton-i6dR9Dz8.js";import"./AutocompleteTrigger-CdMJVSoW.js";import"./Combobox-BpDiAhlV.js";import"./Pagination-BdLsu59G.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-DfMaXq6z.js";import"./FloatingElementContent-CyNdRXM9.js";import"./useIsMobile-DyAixpuM.js";import"./Slot-D0LNAv-l.js";import"./helpers-BX2qdzfg.js";import"./getSelectClasses-DIPACFQu.js";const{expect:t,screen:h,userEvent:u,within:y}=__STORYBOOK_MODULE_TEST__,ne={title:"Components/Dropdown",tags:["autodocs"],component:d,subcomponents:{DropdownContent:a,DropdownList:i,DropdownListItem:n,DropdownTitle:c,DropdownTrigger:s},decorators:o=>e.jsx("div",{className:"storybookContainer",children:e.jsx(o,{})}),argTypes:{color:{options:x,control:{type:"select"},table:{category:"controls"}},mobileSheetPlacement:{options:I,control:{type:"select"},table:{category:"controls"}},placement:{options:T,control:{type:"select"},table:{category:"controls"}},returnFocus:{control:{type:"boolean"},table:{category:"controls"}},hasArrow:{table:{category:"controls"}},strategy:{table:{category:"controls"}},requireClick:{table:{category:"controls"}},disabled:{table:{category:"controls"}},mobileSheet:{table:{category:"controls"}},isOpen:{control:!1,table:{category:"docs"}},onOpenChange:{control:!1,table:{category:"docs"}}}},l={play:async({canvasElement:o})=>{const r=y(o),w=r.getByText("Open menu");t(r.queryByText("Menu")).toBeNull(),await u.click(w);const D=h.getByText("Menu");t(D,"renders").toBeInTheDocument(),await u.click(document.body),t(r.queryByText("Menu")).toBeNull()},render:({...o})=>e.jsxs(d,{...o,children:[e.jsx(s,{children:e.jsx(g,{children:"Open menu"})}),e.jsxs(a,{closeButtonAriaLabel:"close",children:[e.jsx(c,{children:"Menu"}),e.jsxs(i,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]})]})]})},p={play:async({canvasElement:o})=>{const r=y(o),w=r.getByText("Open menu");t(r.queryByText("Menu")).toBeNull(),await u.click(w);const D=h.getByText("Menu");t(D,"renders").toBeInTheDocument(),await u.click(document.body),t(r.queryByText("Menu")).toBeNull()},render:({...o})=>e.jsxs(d,{...o,children:[e.jsx(s,{children:e.jsx(g,{children:"Open menu"})}),e.jsxs(a,{children:[e.jsx(c,{children:"Menu"}),e.jsxs(i,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{disabled:!0,children:"Item 2"}),e.jsxs(d,{placement:"right",children:[e.jsx(s,{children:e.jsx(n,{children:"Item 3"})}),e.jsxs(a,{children:[e.jsx(c,{children:"Sub menu"}),e.jsxs(i,{children:[e.jsx(n,{children:"Nested 1"}),e.jsx(n,{children:"Nested 2"}),e.jsx(n,{children:"Nested 3"})]})]})]}),e.jsxs(n,{className:"justify-start",children:[e.jsx(b,{}),"Item 4"]})]})]})]}),argTypes:{isOpen:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}},m={render:({...o})=>e.jsx(e.Fragment,{children:x.map(r=>e.jsxs(d,{color:r,...o,children:[e.jsx(s,{children:e.jsx(g,{color:r,children:r})}),e.jsxs(a,{closeButtonAriaLabel:"close",children:[e.jsx(c,{children:"Menu"}),e.jsxs(i,{children:[e.jsx(n,{children:"Item 1"}),e.jsxs(d,{children:[e.jsx(s,{children:e.jsx(n,{children:"Item 2"})}),e.jsx(a,{closeButtonAriaLabel:"close",children:e.jsx(i,{children:e.jsx(n,{children:"Nested"})})})]})]})]})]},r))}),argTypes:{color:{table:{disable:!0}},isOpen:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("Open menu");
    expect(canvas.queryByText("Menu")).toBeNull();
    await userEvent.click(trigger);
    const dropdown = screen.getByText("Menu");
    expect(dropdown, "renders").toBeInTheDocument();
    await userEvent.click(document.body);
    expect(canvas.queryByText("Menu")).toBeNull();
  },
  render: ({
    ...rest
  }) => {
    return <Dropdown {...rest}>\r
        <DropdownTrigger>\r
          <Button>Open menu</Button>\r
        </DropdownTrigger>\r
        <DropdownContent closeButtonAriaLabel="close">\r
          <DropdownTitle>Menu</DropdownTitle>\r
          <DropdownList>\r
            <DropdownListItem>Item 1</DropdownListItem>\r
            <DropdownListItem>Item 2</DropdownListItem>\r
            <DropdownListItem>Item 3</DropdownListItem>\r
          </DropdownList>\r
        </DropdownContent>\r
      </Dropdown>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("Open menu");
    expect(canvas.queryByText("Menu")).toBeNull();
    await userEvent.click(trigger);
    const dropdown = screen.getByText("Menu");
    expect(dropdown, "renders").toBeInTheDocument();
    await userEvent.click(document.body);
    expect(canvas.queryByText("Menu")).toBeNull();
  },
  render: ({
    ...rest
  }) => {
    return <Dropdown {...rest}>\r
        <DropdownTrigger>\r
          <Button>Open menu</Button>\r
        </DropdownTrigger>\r
        <DropdownContent>\r
          <DropdownTitle>Menu</DropdownTitle>\r
          <DropdownList>\r
            <DropdownListItem>Item 1</DropdownListItem>\r
            <DropdownListItem disabled>Item 2</DropdownListItem>\r
            <Dropdown placement="right">\r
              <DropdownTrigger>\r
                <DropdownListItem>Item 3</DropdownListItem>\r
              </DropdownTrigger>\r
              <DropdownContent>\r
                <DropdownTitle>Sub menu</DropdownTitle>\r
                <DropdownList>\r
                  <DropdownListItem>Nested 1</DropdownListItem>\r
                  <DropdownListItem>Nested 2</DropdownListItem>\r
                  <DropdownListItem>Nested 3</DropdownListItem>\r
                </DropdownList>\r
              </DropdownContent>\r
            </Dropdown>\r
            <DropdownListItem className="justify-start">\r
              <PiGearThin />\r
              Item 4\r
            </DropdownListItem>\r
          </DropdownList>\r
        </DropdownContent>\r
      </Dropdown>;
  },
  argTypes: {
    isOpen: {
      table: {
        disable: true
      }
    },
    onOpenChange: {
      table: {
        disable: true
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => {
        return <Dropdown key={color} color={color} {...rest}>\r
              <DropdownTrigger>\r
                <Button color={color}>{color}</Button>\r
              </DropdownTrigger>\r
              <DropdownContent closeButtonAriaLabel="close">\r
                <DropdownTitle>Menu</DropdownTitle>\r
                <DropdownList>\r
                  <DropdownListItem>Item 1</DropdownListItem>\r
                  <Dropdown>\r
                    <DropdownTrigger>\r
                      <DropdownListItem>Item 2</DropdownListItem>\r
                    </DropdownTrigger>\r
                    <DropdownContent closeButtonAriaLabel="close">\r
                      <DropdownList>\r
                        <DropdownListItem>Nested</DropdownListItem>\r
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
    },
    isOpen: {
      table: {
        disable: true
      }
    },
    onOpenChange: {
      table: {
        disable: true
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const re=["Default","Nested","Colors"];export{m as Colors,l as Default,p as Nested,re as __namedExportsOrder,ne as default};
