import{j as e}from"./iframe-DFQrxG_d.js";import{d as g,a as d}from"./index-Ccfv0_tG.js";import{B as m}from"./Button-BZGaoj64.js";import"./ButtonGroup-5dA5QxRZ.js";import{T as i,a as u,b as T}from"./TooltipContent-CPuE2MEc.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-DdnGTkyW.js";import"./bundle-mjs-169JcMJR.js";import"./floating-ui.react-BznOviIR.js";import"./Divider-CSUZxSct.js";const{expect:s,userEvent:c,waitFor:h,within:p}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Tooltip",tags:["autodocs"],component:i,decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{children:{name:"text"},color:{options:d,control:{type:"select"}},placement:{control:{type:"select"},options:g},isLabel:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}},n={play:async({canvasElement:t})=>{const o=p(t),r=p(document.body),l=o.getByText("hover me");s(r.queryByText("tooltip")).toBeNull(),await c.hover(l),s(await r.findByText("tooltip")).toBeInTheDocument(),await c.unhover(l),await h(()=>{s(r.queryByText("tooltip")).toBeNull()})},render:({disabled:t,children:o,...r})=>e.jsxs(i,{...r,children:[e.jsx(u,{children:e.jsx(m,{disabled:t,children:"hover me"})}),e.jsx(T,{children:o})]}),args:{children:"tooltip"}},a={render:({...t})=>e.jsx("div",{className:"flex flex-wrap gap-2",children:d.map(o=>e.jsxs(i,{color:o,...t,children:[e.jsx(u,{children:e.jsx(m,{children:"hover me"})}),e.jsx(T,{children:o})]},o))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    return <div className="flex flex-wrap gap-2">\r
        {availableColors.map(color => <Tooltip color={color} key={color} {...rest}>\r
            <TooltipTrigger>\r
              <Button>hover me</Button>\r
            </TooltipTrigger>\r
            <TooltipContent>{color}</TooltipContent>\r
          </Tooltip>)}\r
      </div>;
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
}`,...a.parameters?.docs?.source}}};const N=["Default","Colors"];export{a as Colors,n as Default,N as __namedExportsOrder,_ as default};
