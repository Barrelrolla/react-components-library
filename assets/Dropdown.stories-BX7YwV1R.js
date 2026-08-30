import{j as e}from"./iframe-IjIofJAl.js";import{d as y}from"./index-D4_Aqjcv.js";import{b as B,e as T,a as x}from"./index-DttbUWqL.js";import"./Anchor-CQ6rG7DQ.js";import"./Badge-BYal0W2_.js";import{B as g}from"./Button-CiFVnd6D.js";import"./ButtonGroup-D99X3ycs.js";import"./PopoverTrigger-BCV3vJCT.js";import"./DarkModeToggle-W0Cf_A2W.js";import"./DarkModeSelector-BiSZDjEF.js";import{a as s,b as c,c as n,d as a,e as i,f as l}from"./DropdownTrigger-CK2tZ2s5.js";import"./Divider-B8DehVb6.js";import"./HamburgerButton-DV9Arz9E.js";import"./AutocompleteInput-B2MRN4PA.js";import"./Checkbox-C6cQ6CPi.js";import"./RadioGroup-CRzP2w05.js";import"./TooltipContent-BnDYh_tQ.js";import"./SidemenuItem-C7j-z8hZ.js";import"./SelectOption-C04hzJLe.js";import"./Skeleton-CL3-pCtE.js";import"./AutocompleteTrigger-DooYucUg.js";import"./Combobox-D4uO62YO.js";import"./Pagination-C7Meg5oM.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-D9Ceu6Hu.js";import"./FloatingElementContent-COIVXDWQ.js";import"./useIsMobile-D3wkI3Hm.js";import"./Slot-X8oaB9SZ.js";import"./helpers-BlNmDQhL.js";import"./getSelectClasses-CvbKxVK4.js";const{expect:t,screen:b,userEvent:u,within:h}=__STORYBOOK_MODULE_TEST__,ne={title:"Components/Dropdown",tags:["autodocs"],component:l,subcomponents:{DropdownContent:i,DropdownList:a,DropdownListItem:n,DropdownTitle:c,DropdownTrigger:s},decorators:o=>e.jsx("div",{className:"storybookContainer",children:e.jsx(o,{})}),argTypes:{color:{options:x,control:{type:"select"},table:{category:"controls"}},mobileSheetPlacement:{options:T,control:{type:"select"},table:{category:"controls"}},placement:{options:B,control:{type:"select"},table:{category:"controls"}},returnFocus:{control:{type:"boolean"},table:{category:"controls"}},hasArrow:{table:{category:"controls"}},strategy:{table:{category:"controls"}},requireClick:{table:{category:"controls"}},disabled:{table:{category:"controls"}},mobileSheet:{table:{category:"controls"}},isOpen:{control:!1,table:{category:"docs"}},onOpenChange:{control:!1,table:{category:"docs"}},hasBackdrop:{table:{category:"docs"}}}},d={play:async({canvasElement:o})=>{const r=h(o),w=r.getByText("Open menu");t(r.queryByText("Menu")).toBeNull(),await u.click(w);const D=b.getByText("Menu");t(D,"renders").toBeInTheDocument(),await u.click(document.body),t(r.queryByText("Menu")).toBeNull()},render:({...o})=>e.jsxs(l,{...o,children:[e.jsx(s,{children:e.jsx(g,{children:"Open menu"})}),e.jsxs(i,{closeButtonAriaLabel:"close",children:[e.jsx(c,{children:"Menu"}),e.jsxs(a,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]})]})]})},p={play:async({canvasElement:o})=>{const r=h(o),w=r.getByText("Open menu");t(r.queryByText("Menu")).toBeNull(),await u.click(w);const D=b.getByText("Menu");t(D,"renders").toBeInTheDocument(),await u.click(document.body),t(r.queryByText("Menu")).toBeNull()},render:({...o})=>e.jsxs(l,{...o,children:[e.jsx(s,{children:e.jsx(g,{children:"Open menu"})}),e.jsxs(i,{closeButtonAriaLabel:"close",children:[e.jsx(c,{children:"Menu"}),e.jsxs(a,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{disabled:!0,children:"Item 2"}),e.jsxs(l,{placement:"right",children:[e.jsx(s,{children:e.jsx(n,{children:"Item 3"})}),e.jsxs(i,{closeButtonAriaLabel:"close",children:[e.jsx(c,{children:"Sub menu"}),e.jsxs(a,{children:[e.jsx(n,{children:"Nested 1"}),e.jsx(n,{children:"Nested 2"}),e.jsx(n,{children:"Nested 3"})]})]})]}),e.jsxs(n,{className:"justify-start",children:[e.jsx(y,{}),"Item 4"]})]})]})]}),argTypes:{isOpen:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}},m={render:({...o})=>e.jsx(e.Fragment,{children:x.map(r=>e.jsxs(l,{color:r,...o,children:[e.jsx(s,{children:e.jsx(g,{color:r,children:r})}),e.jsxs(i,{closeButtonAriaLabel:"close",children:[e.jsx(c,{children:"Menu"}),e.jsxs(a,{children:[e.jsx(n,{children:"Item 1"}),e.jsxs(l,{children:[e.jsx(s,{children:e.jsx(n,{children:"Item 2"})}),e.jsx(i,{closeButtonAriaLabel:"close",children:e.jsx(a,{children:e.jsx(n,{children:"Nested"})})})]})]})]})]},r))}),argTypes:{color:{table:{disable:!0}},isOpen:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},hasBackdrop:{table:{disable:!0}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
            <DropdownListItem disabled>Item 2</DropdownListItem>\r
            <Dropdown placement="right">\r
              <DropdownTrigger>\r
                <DropdownListItem>Item 3</DropdownListItem>\r
              </DropdownTrigger>\r
              <DropdownContent closeButtonAriaLabel="close">\r
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
    },
    hasBackdrop: {
      table: {
        disable: true
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const re=["Default","Nested","Colors"];export{m as Colors,d as Default,p as Nested,re as __namedExportsOrder,ne as default};
