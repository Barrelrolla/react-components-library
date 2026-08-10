import{j as e}from"./iframe-DnygXqbo.js";import{d as C,a as g}from"./index-COUSODbC.js";import{P as s,a as d,b as c}from"./PopoverTrigger-vZS8EH0p.js";import{B as t,T as j}from"./ButtonGroup-Bk0e2Nce.js";import{f as m,b as p,a as u,e as x}from"./CardTitle-0WzszwCn.js";import{T as b,a as B,b as P}from"./TooltipContent-BAhrOPc9.js";import"./preload-helper-PPVm8Dsz.js";import"./FloatingElementContent-DLDJtV6V.js";import"./useIsMobile-NWL8FdQt.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-Clz5e0bR.js";import"./Slot-__QRpQAC.js";import"./Divider-D3dyumf4.js";const{expect:l,userEvent:h,waitFor:y,within:v}=__STORYBOOK_MODULE_TEST__,R={title:"Components/Popover",tags:["autodocs"],component:s,decorators:r=>e.jsx("div",{className:"storybookContainer",children:e.jsx(r,{})}),argTypes:{children:{table:{disable:!0}},color:{options:g,control:{type:"select"}},placement:{control:{type:"select"},options:C},role:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}},n={play:async({canvasElement:r})=>{const o=v(r),a=v(document.body),T=o.getByText("hover me");l(a.queryByText("Lorem, ipsum dolor.")).toBeNull(),await h.hover(T),l(await a.findByText("Lorem, ipsum dolor.")).toBeInTheDocument(),await h.unhover(T),await y(()=>{l(a.queryByText("Lorem, ipsum dolor.")).toBeNull()})},render:({disabled:r,...o})=>e.jsxs(s,{disabled:r,...o,children:[e.jsx(d,{children:e.jsx(t,{disabled:r,children:"hover me"})}),e.jsx(c,{"aria-label":"test",children:e.jsxs(m,{children:[e.jsx(p,{children:"Lorem, ipsum dolor."}),e.jsx(u,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsx(x,{children:e.jsx(t,{children:"Learn more"})})]})})]})},i={render:({disabled:r,...o})=>e.jsx(j,{children:e.jsxs(s,{disabled:r,...o,children:[e.jsx(d,{children:e.jsx(t,{disabled:r,children:"hover me"})}),e.jsx(c,{"aria-label":"test",children:e.jsxs(m,{children:[e.jsx(p,{children:"Lorem, ipsum dolor."}),e.jsx(u,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsx(x,{children:e.jsxs(s,{placement:"left",...o,children:[e.jsx(d,{children:e.jsx(t,{disabled:r,children:"hover me"})}),e.jsx(c,{"aria-label":"test",children:e.jsxs(m,{children:[e.jsx(p,{children:"Lorem, ipsum dolor."}),e.jsx(u,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),e.jsx(x,{children:e.jsxs(b,{children:[e.jsx(B,{children:e.jsx(t,{children:"Learn more"})}),e.jsx(P,{children:"Tooltip"})]})})]})})]})})]})})]})}),argTypes:{placement:{table:{disable:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const trigger = canvas.getByText("hover me");
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
          <Button disabled={disabled}>hover me</Button>\r
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ({
    disabled,
    ...rest
  }) => {
    return <ThemeContextProvider>\r
        <Popover disabled={disabled} {...rest}>\r
          <PopoverTrigger>\r
            <Button disabled={disabled}>hover me</Button>\r
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
    }
  }
}`,...i.parameters?.docs?.source}}};const k=["Default","Nested"];export{n as Default,i as Nested,k as __namedExportsOrder,R as default};
