import{j as o}from"./iframe-BFJxpdhf.js";import{d as l,a as m}from"./index-Ccfv0_tG.js";import{P as c,a as v,b as d}from"./PopoverTrigger-DPN2XSO8.js";import{B as u}from"./Button-yU81vrZ7.js";import"./ButtonGroup-DFL1BSnf.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.react-BEyLZque.js";import"./bundle-mjs-169JcMJR.js";import"./Slot-1UVdkdoK.js";import"./icons-DTRdX-dv.js";import"./Divider-CQtCw9GH.js";const{expect:a,userEvent:i,waitFor:x,within:p}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Popover",tags:["autodocs"],component:c,decorators:e=>o.jsx("div",{className:"storybookContainer",children:o.jsx(e,{})}),argTypes:{children:{name:"text"},color:{options:m,control:{type:"select"}},placement:{control:{type:"select"},options:l},role:{table:{disable:!0}}}},t={play:async({canvasElement:e})=>{const n=p(e),r=p(document.body),s=n.getByText("hover me");a(r.queryByText("popover")).toBeNull(),await i.hover(s),a(await r.findByText("popover")).toBeInTheDocument(),await i.unhover(s),await x(()=>{a(r.queryByText("popover")).toBeNull()})},render:({disabled:e,children:n,...r})=>o.jsxs(c,{disabled:e,...r,children:[o.jsx(v,{children:o.jsx(u,{disabled:e,children:"hover me"})}),o.jsx(d,{children:n})]}),args:{children:"popover"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const trigger = canvas.getByText("hover me");
    expect(screen.queryByText("popover")).toBeNull();
    await userEvent.hover(trigger);
    expect(await screen.findByText("popover")).toBeInTheDocument();
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByText("popover")).toBeNull();
    });
  },
  render: ({
    disabled,
    children,
    ...rest
  }) => {
    return <Popover disabled={disabled} {...rest}>\r
        <PopoverTrigger>\r
          <Button disabled={disabled}>hover me</Button>\r
        </PopoverTrigger>\r
        <PopoverContent>{children}</PopoverContent>\r
      </Popover>;
  },
  args: {
    children: "popover"
  }
}`,...t.parameters?.docs?.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,_ as default};
