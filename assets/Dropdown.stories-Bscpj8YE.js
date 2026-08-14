import{j as e}from"./iframe-Bpwjnk3u.js";import{d as b}from"./index-DEuiU4_l.js";import{b as T,e as I,a as x}from"./index-DttbUWqL.js";import"./Anchor-CJuWW0wX.js";import"./Badge-BLtLEFsP.js";import{B as g}from"./ButtonGroup-CG0NsCSL.js";import"./PopoverTrigger-BL66b9dD.js";import"./DarkModeToggle-9CFn13qk.js";import"./DarkModeSelector-TOS64PC2.js";import{a as s,b as c,c as n,d as i,e as d,f as a}from"./DropdownTrigger-B00f-sO_.js";import"./Divider-BrtP8V9U.js";import"./HamburgerButton-DIC8NI23.js";import"./AutocompleteInput-CrJDqEBQ.js";import"./Checkbox-mVMoJrkL.js";import"./RadioGroup-Dv2IkW-m.js";import"./TooltipContent-CLHWQY0P.js";import"./SidemenuItem-C3G8nY6-.js";import"./SelectOption-rfgSP3Tt.js";import"./Skeleton-DoLNpUEr.js";import"./AutocompleteTrigger-C2LouFhG.js";import"./Combobox-NpRxqIsT.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-D6yzrnYJ.js";import"./FloatingElementContent-CyN3GiK-.js";import"./useIsMobile-DBGPJYyI.js";import"./Slot-ByAeUTqw.js";import"./helpers-COiccZEe.js";import"./getSelectClasses-BR8WOCBR.js";const{expect:o,screen:h,userEvent:u,within:y}=__STORYBOOK_MODULE_TEST__,$={title:"Components/Dropdown",tags:["autodocs"],component:a,subcomponents:{DropdownContent:d,DropdownList:i,DropdownListItem:n,DropdownTitle:c,DropdownTrigger:s},decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{color:{options:x,control:{type:"select"},table:{category:"controls"}},mobileSheetPlacement:{options:I,control:{type:"select"},table:{category:"controls"}},placement:{options:T,control:{type:"select"},table:{category:"controls"}},returnFocus:{control:{type:"boolean"},table:{category:"controls"}},hasArrow:{table:{category:"controls"}},strategy:{table:{category:"controls"}},requireClick:{table:{category:"controls"}},disabled:{table:{category:"controls"}},mobileSheet:{table:{category:"controls"}},isOpen:{control:!1,table:{category:"docs"}},onOpenChange:{control:!1,table:{category:"docs"}}}},p={play:async({canvasElement:t})=>{const r=y(t),w=r.getByText("Open menu");o(r.queryByText("Menu")).toBeNull(),await u.click(w);const D=h.getByText("Menu");o(D,"renders").toBeInTheDocument(),await u.click(document.body),o(r.queryByText("Menu")).toBeNull()},render:({...t})=>e.jsxs(a,{...t,children:[e.jsx(s,{children:e.jsx(g,{children:"Open menu"})}),e.jsxs(d,{children:[e.jsx(c,{children:"Menu"}),e.jsxs(i,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]})]})]})},l={play:async({canvasElement:t})=>{const r=y(t),w=r.getByText("Open menu");o(r.queryByText("Menu")).toBeNull(),await u.click(w);const D=h.getByText("Menu");o(D,"renders").toBeInTheDocument(),await u.click(document.body),o(r.queryByText("Menu")).toBeNull()},render:({...t})=>e.jsxs(a,{...t,children:[e.jsx(s,{children:e.jsx(g,{children:"Open menu"})}),e.jsxs(d,{children:[e.jsx(c,{children:"Menu"}),e.jsxs(i,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{disabled:!0,children:"Item 2"}),e.jsxs(a,{placement:"right",children:[e.jsx(s,{children:e.jsx(n,{children:"Item 3"})}),e.jsxs(d,{children:[e.jsx(c,{children:"Sub menu"}),e.jsxs(i,{children:[e.jsx(n,{children:"Nested 1"}),e.jsx(n,{children:"Nested 2"}),e.jsx(n,{children:"Nested 3"})]})]})]}),e.jsxs(n,{className:"justify-start",children:[e.jsx(b,{}),"Item 4"]})]})]})]}),argTypes:{isOpen:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}},m={render:({...t})=>e.jsx(e.Fragment,{children:x.map(r=>e.jsxs(a,{color:r,...t,children:[e.jsx(s,{children:e.jsx(g,{color:r,children:r})}),e.jsxs(d,{children:[e.jsx(c,{children:"Menu"}),e.jsxs(i,{children:[e.jsx(n,{children:"Item 1"}),e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(n,{children:"Item 2"})}),e.jsx(d,{children:e.jsx(i,{children:e.jsx(n,{children:"Nested"})})})]})]})]})]},r))}),argTypes:{color:{table:{disable:!0}},isOpen:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
            <DropdownListItem>Item 2</DropdownListItem>\r
            <DropdownListItem>Item 3</DropdownListItem>\r
          </DropdownList>\r
        </DropdownContent>\r
      </Dropdown>;
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
                <DropdownTitle>Menu</DropdownTitle>\r
                <DropdownList>\r
                  <DropdownListItem>Item 1</DropdownListItem>\r
                  <Dropdown>\r
                    <DropdownTrigger>\r
                      <DropdownListItem>Item 2</DropdownListItem>\r
                    </DropdownTrigger>\r
                    <DropdownContent>\r
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
}`,...m.parameters?.docs?.source}}};const ee=["Default","Nested","Colors"];export{m as Colors,p as Default,l as Nested,ee as __namedExportsOrder,$ as default};
