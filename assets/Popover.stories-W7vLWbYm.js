import{j as e}from"./iframe-BdSF-zhJ.js";import{b as v,a as C}from"./index-DttbUWqL.js";import{P as s,g as i,h as l,f as p,b as m,a as u,e as x}from"./PopoverTrigger-BAjkdt3Y.js";import{B as t,T as b}from"./ButtonGroup-Ddw7f-DK.js";import{T as y,a as j,b as B}from"./TooltipContent-DvLGkifi.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ct12j0u0.js";import"./FloatingElementContent-C1kDOyUp.js";import"./useIsMobile-BQdZ7aDV.js";import"./cssColorProps-D-Xi89r8.js";import"./icons-B4oRaJlO.js";import"./Slot-g1PeTlvY.js";import"./Divider-B_Uo59Vs.js";const{expect:c,userEvent:T,waitFor:P,within:h}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Popover",tags:["autodocs"],component:l,subcomponents:{PopoverContent:i,PopoverTrigger:s},decorators:r=>e.jsx("div",{className:"storybookContainer",children:e.jsx(r,{})}),argTypes:{color:{options:C,control:{type:"select"},table:{category:"controls"}},placement:{control:{type:"select"},options:v,table:{category:"controls"}},isOpen:{table:{category:"controls"}},strategy:{table:{category:"controls"}},delay:{table:{category:"controls"}},requireClick:{table:{category:"controls"}},hasArrow:{table:{category:"controls"}},disabled:{table:{category:"controls"}},role:{control:!1,table:{category:"docs"}},onOpenChange:{control:!1,table:{category:"docs"}}}},n={play:async({canvasElement:r})=>{const o=h(r),d=h(document.body),g=o.getByText("Hover me");c(d.queryByText("Lorem, ipsum dolor.")).toBeNull(),await T.hover(g),c(await d.findByText("Lorem, ipsum dolor.")).toBeInTheDocument(),await T.unhover(g),await P(()=>{c(d.queryByText("Lorem, ipsum dolor.")).toBeNull()})},render:({disabled:r,...o})=>e.jsxs(l,{disabled:r,...o,children:[e.jsx(s,{children:e.jsx(t,{disabled:r,children:"Hover me"})}),e.jsx(i,{"aria-label":"test",children:e.jsxs(p,{children:[e.jsx(m,{children:"Lorem, ipsum dolor."}),e.jsx(u,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsx(x,{children:e.jsx(t,{children:"Learn more"})})]})})]})},a={render:({disabled:r,...o})=>e.jsx(b,{children:e.jsxs(l,{disabled:r,...o,children:[e.jsx(s,{children:e.jsx(t,{disabled:r,children:"Hover me"})}),e.jsx(i,{"aria-label":"test",children:e.jsxs(p,{children:[e.jsx(m,{children:"Lorem, ipsum dolor."}),e.jsx(u,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsx(x,{children:e.jsxs(l,{placement:"left",...o,children:[e.jsx(s,{children:e.jsx(t,{disabled:r,children:"hover me"})}),e.jsx(i,{"aria-label":"test",children:e.jsxs(p,{children:[e.jsx(m,{children:"Lorem, ipsum dolor."}),e.jsx(u,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsx(x,{children:e.jsxs(y,{children:[e.jsx(j,{children:e.jsx(t,{children:"Learn more"})}),e.jsx(B,{children:"Tooltip"})]})})]})})]})})]})})]})}),argTypes:{placement:{table:{disable:!0}},role:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const trigger = canvas.getByText("Hover me");
    expect(screen.queryByText("Lorem, ipsum dolor.")).toBeNull();
    await userEvent.hover(trigger);
    expect(await screen.findByText("Lorem, ipsum dolor.")).toBeInTheDocument();
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByText("Lorem, ipsum dolor.")).toBeNull();
    });
  },
  render: ({
    disabled,
    ...rest
  }) => {
    return <Popover disabled={disabled} {...rest}>\r
        <PopoverTrigger>\r
          <Button disabled={disabled}>Hover me</Button>\r
        </PopoverTrigger>\r
        <PopoverContent aria-label="test">\r
          <Card>\r
            <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
            <CardText>\r
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!\r
            </CardText>\r
            <CardActions>\r
              <Button>Learn more</Button>\r
            </CardActions>\r
          </Card>\r
        </PopoverContent>\r
      </Popover>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    disabled,
    ...rest
  }) => {
    return <ThemeContextProvider>\r
        <Popover disabled={disabled} {...rest}>\r
          <PopoverTrigger>\r
            <Button disabled={disabled}>Hover me</Button>\r
          </PopoverTrigger>\r
          <PopoverContent aria-label="test">\r
            <Card>\r
              <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
              <CardText>\r
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,\r
                id!\r
              </CardText>\r
              <CardActions>\r
                <Popover placement="left" {...rest}>\r
                  <PopoverTrigger>\r
                    <Button disabled={disabled}>hover me</Button>\r
                  </PopoverTrigger>\r
                  <PopoverContent aria-label="test">\r
                    <Card>\r
                      <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
                      <CardText>\r
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.\r
                        Vero, id!\r
                      </CardText>\r
                      <CardActions>\r
                        <Tooltip>\r
                          <TooltipTrigger>\r
                            <Button>Learn more</Button>\r
                          </TooltipTrigger>\r
                          <TooltipContent>Tooltip</TooltipContent>\r
                        </Tooltip>\r
                      </CardActions>\r
                    </Card>\r
                  </PopoverContent>\r
                </Popover>\r
              </CardActions>\r
            </Card>\r
          </PopoverContent>\r
        </Popover>\r
      </ThemeContextProvider>;
  },
  argTypes: {
    placement: {
      table: {
        disable: true
      }
    },
    role: {
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
}`,...a.parameters?.docs?.source}}};const F=["Default","Nested"];export{n as Default,a as Nested,F as __namedExportsOrder,k as default};
