import{j as r}from"./iframe-MZB_caGF.js";import{d as b,a as v}from"./index-Ccfv0_tG.js";import{P as t,a as l,b as d}from"./PopoverTrigger-0Ehypoo5.js";import{B as n,T as j}from"./Button-DZTzONxe.js";import"./ButtonGroup-0IbGhgEV.js";import{f as c,b as p,a as m,e as u}from"./CardTitle-DaGPg37z.js";import{T as P,a as B,b as L}from"./TooltipContent-D59k5U8e.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-DDLLzMxe.js";import"./bundle-mjs-169JcMJR.js";import"./Slot-8frvC-U1.js";import"./icons-C6YbZSVv.js";import"./Divider-Df6SaE8Q.js";const{expect:h,userEvent:C,waitFor:y,within:g}=__STORYBOOK_MODULE_TEST__,I={title:"Components/Popover",tags:["autodocs"],component:t,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{children:{table:{disable:!0}},color:{options:v,control:{type:"select"}},placement:{control:{type:"select"},options:b},role:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}},i={play:async({canvasElement:e})=>{const o=g(e),x=g(document.body),T=o.getByText("hover me");h(x.queryByText("Lorem, ipsum dolor.")).toBeNull(),await C.hover(T),h(await x.findByText("Lorem, ipsum dolor.")).toBeInTheDocument(),await C.unhover(T),await y(()=>{h(x.queryByText("Lorem, ipsum dolor.")).toBeNull()})},render:({disabled:e,...o})=>r.jsxs(t,{disabled:e,...o,children:[r.jsx(l,{children:r.jsx(n,{disabled:e,children:"hover me"})}),r.jsx(d,{"aria-label":"test",children:r.jsxs(c,{children:[r.jsx(p,{children:"Lorem, ipsum dolor."}),r.jsx(m,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(u,{children:r.jsx(n,{children:"Learn more"})})]})})]})},s={render:({disabled:e,...o})=>r.jsx(j,{children:r.jsxs(t,{disabled:e,...o,children:[r.jsx(l,{children:r.jsx(n,{disabled:e,children:"hover me"})}),r.jsx(d,{"aria-label":"test",children:r.jsxs(c,{children:[r.jsx(p,{children:"Lorem, ipsum dolor."}),r.jsx(m,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(u,{children:r.jsxs(t,{placement:"left",...o,children:[r.jsx(l,{children:r.jsx(n,{disabled:e,children:"hover me"})}),r.jsx(d,{"aria-label":"test",children:r.jsxs(c,{children:[r.jsx(p,{children:"Lorem, ipsum dolor."}),r.jsx(m,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(u,{children:r.jsxs(P,{children:[r.jsx(B,{children:r.jsx(n,{children:"Learn more"})}),r.jsx(L,{children:"Tooltip"})]})})]})})]})})]})})]})}),argTypes:{placement:{table:{disable:!0}}}},a={render:({...e})=>r.jsx(r.Fragment,{children:v.map(o=>r.jsxs(t,{color:o,...e,children:[r.jsx(l,{children:r.jsx(n,{color:o,children:o})}),r.jsx(d,{"aria-label":"test",children:r.jsxs(c,{color:o,children:[r.jsx(p,{children:"Lorem, ipsum dolor."}),r.jsx(m,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!"}),r.jsx(u,{children:r.jsx(n,{children:"Learn more"})})]})})]},o))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => <Popover color={color} key={color} {...rest}>\r
            <PopoverTrigger>\r
              <Button color={color}>{color}</Button>\r
            </PopoverTrigger>\r
            <PopoverContent aria-label="test">\r
              <Card color={color}>\r
                <CardTitle>Lorem, ipsum dolor.</CardTitle>\r
                <CardText>\r
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,\r
                  id!\r
                </CardText>\r
                <CardActions>\r
                  <Button>Learn more</Button>\r
                </CardActions>\r
              </Card>\r
            </PopoverContent>\r
          </Popover>)}\r
      </>;
  },
  args: {},
  argTypes: {
    color: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const R=["Default","Nested","Colors"];export{a as Colors,i as Default,s as Nested,R as __namedExportsOrder,I as default};
