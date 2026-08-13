import{j as e}from"./iframe-CUtd1n4L.js";import{b as u,a as d}from"./index-DttbUWqL.js";import{B as T}from"./ButtonGroup-SfHTwtbh.js";import{T as s,a as m,b as g}from"./TooltipContent-CI3TSE9k.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-DdSbJd4H.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-BldbZDxN.js";import"./Divider-CijQ5Lkn.js";import"./FloatingElementContent-DN09I3ti.js";import"./useIsMobile-B3cQGu-U.js";const{expect:l,userEvent:c,waitFor:y,within:p}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Tooltip",tags:["autodocs"],component:s,decorators:o=>e.jsx("div",{className:"storybookContainer",children:e.jsx(o,{})}),argTypes:{children:{name:"text",table:{category:"storybook"}},color:{options:d,control:{type:"select"},table:{category:"controls"}},placement:{control:{type:"select"},options:u,table:{category:"controls"}},isOpen:{table:{category:"controls"}},strategy:{table:{category:"controls"}},delay:{table:{category:"controls"}},hasArrow:{table:{category:"controls"}},disabled:{table:{category:"controls"}},isLabel:{table:{category:"controls"}},onOpenChange:{control:!1,table:{category:"docs"}}}},n={play:async({canvasElement:o})=>{const t=p(o),r=p(document.body),i=t.getByText("Hover me");l(r.queryByText("Tooltip")).toBeNull(),await c.hover(i),l(await r.findByText("Tooltip")).toBeInTheDocument(),await c.unhover(i),await y(()=>{l(r.queryByText("Tooltip")).toBeNull()})},render:({disabled:o,children:t,...r})=>e.jsxs(s,{...r,children:[e.jsx(m,{children:e.jsx(T,{disabled:o,children:"Hover me"})}),e.jsx(g,{children:t})]}),args:{children:"Tooltip"}},a={render:({...o})=>e.jsx(e.Fragment,{children:d.map(t=>e.jsxs(s,{color:t,...o,children:[e.jsx(m,{children:e.jsx(T,{color:t,children:t})}),e.jsx(g,{children:t})]},t))}),argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const D=["Default","Colors"];export{a as Colors,n as Default,D as __namedExportsOrder,_ as default};
