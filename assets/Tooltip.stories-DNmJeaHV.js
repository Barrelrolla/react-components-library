import{j as e}from"./iframe-DkV00Eji.js";import{b as u,a as d}from"./index-DttbUWqL.js";import{B as m}from"./ButtonGroup-DkDPmCEJ.js";import{T as s,a as T,b as g}from"./TooltipContent-DDRQzLUP.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-BXr59Awb.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-D-Xi89r8.js";import"./Divider-C8B2a_bR.js";import"./FloatingElementContent-Cl0oX9qF.js";import"./useIsMobile-CLzWy3IZ.js";import"./Slot-BAM__hAi.js";const{expect:l,userEvent:c,waitFor:y,within:p}=__STORYBOOK_MODULE_TEST__,D={title:"Components/Tooltip",tags:["autodocs"],component:s,decorators:o=>e.jsx("div",{className:"storybookContainer",children:e.jsx(o,{})}),argTypes:{children:{name:"text",table:{category:"storybook"}},color:{options:d,control:{type:"select"},table:{category:"controls"}},placement:{control:{type:"select"},options:u,table:{category:"controls"}},isOpen:{table:{category:"controls"}},strategy:{table:{category:"controls"}},delay:{table:{category:"controls"}},hasArrow:{table:{category:"controls"}},disabled:{table:{category:"controls"}},isLabel:{table:{category:"controls"}},onOpenChange:{control:!1,table:{category:"docs"}}}},n={play:async({canvasElement:o})=>{const t=p(o),r=p(document.body),i=t.getByText("Hover me");l(r.queryByText("Tooltip")).toBeNull(),await c.hover(i),l(await r.findByText("Tooltip")).toBeInTheDocument(),await c.unhover(i),await y(()=>{l(r.queryByText("Tooltip")).toBeNull()})},render:({disabled:o,children:t,...r})=>e.jsxs(s,{...r,children:[e.jsx(T,{children:e.jsx(m,{disabled:o,children:"Hover me"})}),e.jsx(g,{children:t})]}),args:{children:"Tooltip"}},a={render:({...o})=>e.jsx(e.Fragment,{children:d.map(t=>e.jsxs(s,{color:t,...o,children:[e.jsx(T,{children:e.jsx(m,{color:t,children:t})}),e.jsx(g,{children:t})]},t))}),argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const trigger = canvas.getByText("Hover me");
    expect(screen.queryByText("Tooltip")).toBeNull();
    await userEvent.hover(trigger);
    expect(await screen.findByText("Tooltip")).toBeInTheDocument();
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByText("Tooltip")).toBeNull();
    });
  },
  render: ({
    disabled,
    children,
    ...rest
  }) => {
    return <Tooltip {...rest}>\r
        <TooltipTrigger>\r
          <Button disabled={disabled}>Hover me</Button>\r
        </TooltipTrigger>\r
        <TooltipContent>{children}</TooltipContent>\r
      </Tooltip>;
  },
  args: {
    children: "Tooltip"
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
    },
    onOpenChange: {
      table: {
        disable: true
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const N=["Default","Colors"];export{a as Colors,n as Default,N as __namedExportsOrder,D as default};
