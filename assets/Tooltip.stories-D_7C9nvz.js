import{j as e}from"./iframe-wXjdf4Kb.js";import{d as g,a as d}from"./index-CikE6BH2.js";import{B as m}from"./Button-DWsuvrTI.js";import"./ButtonGroup-B3x7Hoes.js";import{T as i,a as u,b as T}from"./TooltipContent-SWALOwnx.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-CNOMk5uR.js";import"./bundle-mjs-169JcMJR.js";import"./FloatingContext-DyVC0_1Q.js";import"./Divider-CfAUucPC.js";import"./FloatingElementContent-Be3qqXpN.js";import"./useIsMobile-JsJW3NJQ.js";const{expect:s,userEvent:c,waitFor:h,within:p}=__STORYBOOK_MODULE_TEST__,D={title:"Components/Tooltip",tags:["autodocs"],component:i,decorators:o=>e.jsx("div",{className:"storybookContainer",children:e.jsx(o,{})}),argTypes:{children:{name:"text"},color:{options:d,control:{type:"select"}},placement:{control:{type:"select"},options:g},isLabel:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}},n={play:async({canvasElement:o})=>{const t=p(o),r=p(document.body),l=t.getByText("hover me");s(r.queryByText("tooltip")).toBeNull(),await c.hover(l),s(await r.findByText("tooltip")).toBeInTheDocument(),await c.unhover(l),await h(()=>{s(r.queryByText("tooltip")).toBeNull()})},render:({disabled:o,children:t,...r})=>e.jsxs(i,{...r,children:[e.jsx(u,{children:e.jsx(m,{disabled:o,children:"hover me"})}),e.jsx(T,{children:t})]}),args:{children:"tooltip"}},a={render:({...o})=>e.jsx(e.Fragment,{children:d.map(t=>e.jsxs(i,{color:t,...o,children:[e.jsx(u,{children:e.jsx(m,{color:t,children:t})}),e.jsx(T,{children:t})]},t))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const trigger = canvas.getByText("hover me");
    expect(screen.queryByText("tooltip")).toBeNull();
    await userEvent.hover(trigger);
    expect(await screen.findByText("tooltip")).toBeInTheDocument();
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByText("tooltip")).toBeNull();
    });
  },
  render: ({
    disabled,
    children,
    ...rest
  }) => {
    return <Tooltip {...rest}>\r
        <TooltipTrigger>\r
          <Button disabled={disabled}>hover me</Button>\r
        </TooltipTrigger>\r
        <TooltipContent>{children}</TooltipContent>\r
      </Tooltip>;
  },
  args: {
    children: "tooltip"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => <Tooltip color={color} key={color} {...rest}>\r
            <TooltipTrigger>\r
              <Button color={color}>{color}</Button>\r
            </TooltipTrigger>\r
            <TooltipContent>{color}</TooltipContent>\r
          </Tooltip>)}\r
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
}`,...a.parameters?.docs?.source}}};const N=["Default","Colors"];export{a as Colors,n as Default,N as __namedExportsOrder,D as default};
