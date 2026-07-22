import{j as t}from"./iframe-P8Y-PKRI.js";import{P as s,a as h,b as j}from"./index-9auVffcn.js";import{B as e}from"./Button-Cizlvhco.js";import{b as y,a as T}from"./index-Ccfv0_tG.js";import{F as w}from"./FloatingDelayGroup-BsC5jfKa.js";import{T as x,a as B,b as v}from"./TooltipContent-Bjo8adfM.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-D2r-zf0o.js";import"./bundle-mjs-169JcMJR.js";import"./floating-ui.react-BaWSq7yJ.js";const{expect:o,within:l}=__STORYBOOK_MODULE_TEST__,S={title:"Components/Button",component:e,tags:["autodocs"],decorators:n=>t.jsx("div",{className:"storybookContainer",children:t.jsx(n,{})}),argTypes:{children:{name:"text"},color:{control:{type:"select"},options:T},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"},options:y},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}}}},i={play:async({canvasElement:n})=>{const a=l(n).getByText("Button");await o(a,"renders").toBeTruthy()},render:({children:n,...r})=>t.jsx(e,{...r,children:n}),args:{children:"Button"}},c={play:async({canvasElement:n})=>{const a=l(n).getAllByRole("button");await o(a).toHaveLength(3),await o(a[1]).toHaveClass("btn-outline"),await o(a[2]).toHaveClass("btn-ghost-none")},render:({children:n,...r})=>t.jsxs(t.Fragment,{children:[t.jsx(e,{...r,children:n}),t.jsx(e,{variant:"outline",...r,children:n}),t.jsx(e,{variant:"ghost",...r,children:n})]}),args:{children:"Button"},argTypes:{variant:{table:{disable:!0}},ghostHover:{table:{disable:!0}}}},u={play:async({canvasElement:n})=>{const a=l(n).getAllByRole("button");await o(a).toHaveLength(4),await o(a[0]).toHaveClass("btn-ghost-none"),await o(a[1]).toHaveClass("btn-ghost-fill"),await o(a[2]).toHaveClass("btn-ghost-outline"),await o(a[3]).toHaveClass("btn-ghost-contrasting")},render:({children:n,...r})=>t.jsxs(t.Fragment,{children:[t.jsx(e,{variant:"ghost",...r,children:n}),t.jsx(e,{variant:"ghost",ghostHover:"fill",...r,children:n}),t.jsx(e,{variant:"ghost",ghostHover:"outline",...r,children:n}),t.jsx(e,{variant:"ghost",ghostHover:"contrasting",...r,children:n})]}),args:{children:"Button"},argTypes:{variant:{table:{disable:!0}},ghostHover:{table:{disable:!0}}}},d={play:async({canvasElement:n})=>{const m=l(n).getAllByText("Button")[0].parentElement;await o(m?.classList.contains("cursor-not-allowed"),"shows not allowed cursor on hover").toBeTruthy()},render:({children:n,...r})=>t.jsxs(t.Fragment,{children:[t.jsx(e,{disabled:!0,...r,children:n}),t.jsx(e,{loading:!0,...r,children:n})]}),args:{children:"Button"}},p={play:async({canvasElement:n})=>{const r=l(n),a=r.getAllByRole("button");await o(a).toHaveLength(3),await o(r.queryByText("Button",{selector:"button"})).toBeNull()},render:({...n})=>t.jsx(t.Fragment,{children:t.jsxs(w,{children:[t.jsxs(x,{isLabel:!0,children:[t.jsx(B,{children:t.jsx(e,{"aria-label":"love",radius:"pill",startIcon:t.jsx(s,{}),...n})}),t.jsx(v,{children:"Love"})]}),t.jsxs(x,{isLabel:!0,children:[t.jsx(B,{children:t.jsx(e,{"aria-label":"like",radius:"none",variant:"outline",startIcon:t.jsx(h,{}),...n})}),t.jsx(v,{children:"Like"})]}),t.jsxs(x,{isLabel:!0,children:[t.jsx(B,{children:t.jsx(e,{"aria-label":"save",variant:"ghost",ghostHover:"fill",startIcon:t.jsx(j,{}),...n})}),t.jsx(v,{children:"Save"})]})]})})},g={play:async({canvasElement:n})=>{const a=l(n).getAllByRole("button");await o(a).toHaveLength(10)},render:({children:n,...r})=>t.jsxs(t.Fragment,{children:[t.jsx(e,{color:"main",...r,children:n}),t.jsx(e,{color:"light",...r,children:n}),t.jsx(e,{color:"dark",...r,children:n}),t.jsx(e,{color:"primary",...r,children:n}),t.jsx(e,{color:"secondary",...r,children:n}),t.jsx(e,{color:"accent",...r,children:n}),t.jsx(e,{color:"info",...r,children:n}),t.jsx(e,{color:"success",...r,children:n}),t.jsx(e,{color:"warning",...r,children:n}),t.jsx(e,{color:"error",...r,children:n})]}),args:{children:"Button"},argTypes:{color:{table:{disable:!0}}}},b={render:({...n})=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap items-end justify-center gap-2",children:[t.jsx(e,{...n,startIcon:t.jsx(s,{}),size:"xs",children:"Button"}),t.jsx(e,{...n,startIcon:t.jsx(s,{}),size:"sm",children:"Button"}),t.jsxs(e,{...n,size:"md",children:[t.jsx(s,{}),"Button"]}),t.jsxs(e,{...n,size:"lg",children:[t.jsx(s,{}),"Button"]}),t.jsxs(e,{...n,size:"xl",children:[t.jsx(s,{}),"Button"]})]}),t.jsxs("div",{className:"flex flex-wrap items-start justify-center gap-2",children:[t.jsx(e,{"aria-label":"like",...n,startIcon:t.jsx(s,{}),size:"xs"}),t.jsx(e,{"aria-label":"like",...n,startIcon:t.jsx(s,{}),size:"sm"}),t.jsx(e,{"aria-label":"like",...n,startIcon:t.jsx(s,{}),size:"md"}),t.jsx(e,{"aria-label":"like",...n,startIcon:t.jsx(s,{}),size:"lg"}),t.jsx(e,{"aria-label":"like",...n,startIcon:t.jsx(s,{}),size:"xl"})]}),t.jsxs("div",{className:"flex w-full items-start justify-center gap-2",children:[t.jsx(e,{...n,className:"btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl",children:"responsive"}),t.jsx(e,{"aria-label":"like",...n,className:"btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl",startIcon:t.jsx(s,{})})]})]}),argTypes:{size:{table:{disable:!0}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    await expect(button, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Button {...rest}>{children}</Button>;
  },
  args: {
    children: "Button"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await expect(buttons[1]).toHaveClass("btn-outline");
    await expect(buttons[2]).toHaveClass("btn-ghost-none");
  },
  render: ({
    children,
    ...rest
  }) => {
    return <>\r
        <Button {...rest}>{children}</Button>\r
        <Button variant="outline" {...rest}>\r
          {children}\r
        </Button>\r
        <Button variant="ghost" {...rest}>\r
          {children}\r
        </Button>\r
      </>;
  },
  args: {
    children: "Button"
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    ghostHover: {
      table: {
        disable: true
      }
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(4);
    await expect(buttons[0]).toHaveClass("btn-ghost-none");
    await expect(buttons[1]).toHaveClass("btn-ghost-fill");
    await expect(buttons[2]).toHaveClass("btn-ghost-outline");
    await expect(buttons[3]).toHaveClass("btn-ghost-contrasting");
  },
  render: ({
    children,
    ...rest
  }) => {
    return <>\r
        <Button variant="ghost" {...rest}>\r
          {children}\r
        </Button>\r
        <Button variant="ghost" ghostHover="fill" {...rest}>\r
          {children}\r
        </Button>\r
        <Button variant="ghost" ghostHover="outline" {...rest}>\r
          {children}\r
        </Button>\r
        <Button variant="ghost" ghostHover="contrasting" {...rest}>\r
          {children}\r
        </Button>\r
      </>;
  },
  args: {
    children: "Button"
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    ghostHover: {
      table: {
        disable: true
      }
    }
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getAllByText("Button")[0];
    const wrapper = button.parentElement;
    await expect(wrapper?.classList.contains("cursor-not-allowed"), "shows not allowed cursor on hover").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <>\r
        <Button disabled {...rest}>\r
          {children}\r
        </Button>\r
        <Button loading {...rest}>\r
          {children}\r
        </Button>\r
      </>;
  },
  args: {
    children: "Button"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await expect(canvas.queryByText("Button", {
      selector: "button"
    })).toBeNull();
  },
  render: ({
    ...rest
  }) => {
    return <>\r
        <FloatingDelayGroupContextProvider>\r
          <Tooltip isLabel>\r
            <TooltipTrigger>\r
              <Button aria-label="love" radius="pill" startIcon={<PiHeart />} {...rest}></Button>\r
            </TooltipTrigger>\r
            <TooltipContent>Love</TooltipContent>\r
          </Tooltip>\r
          <Tooltip isLabel>\r
            <TooltipTrigger>\r
              <Button aria-label="like" radius="none" variant="outline" startIcon={<PiThumbsUp />} {...rest}></Button>\r
            </TooltipTrigger>\r
            <TooltipContent>Like</TooltipContent>\r
          </Tooltip>\r
          <Tooltip isLabel>\r
            <TooltipTrigger>\r
              <Button aria-label="save" variant="ghost" ghostHover="fill" startIcon={<PiBookmark />} {...rest}></Button>\r
            </TooltipTrigger>\r
            <TooltipContent>Save</TooltipContent>\r
          </Tooltip>\r
        </FloatingDelayGroupContextProvider>\r
      </>;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(10);
  },
  render: ({
    children,
    ...rest
  }) => {
    return <>\r
        <Button color="main" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="light" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="dark" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="primary" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="secondary" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="accent" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="info" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="success" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="warning" {...rest}>\r
          {children}\r
        </Button>\r
        <Button color="error" {...rest}>\r
          {children}\r
        </Button>\r
      </>;
  },
  args: {
    children: "Button"
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="flex flex-col gap-4">\r
        <div className="flex flex-wrap items-end justify-center gap-2">\r
          <Button {...rest} startIcon={<PiHeart />} size="xs">\r
            Button\r
          </Button>\r
          <Button {...rest} startIcon={<PiHeart />} size="sm">\r
            Button\r
          </Button>\r
          <Button {...rest} size="md">\r
            <PiHeart />\r
            Button\r
          </Button>\r
          <Button {...rest} size="lg">\r
            <PiHeart />\r
            Button\r
          </Button>\r
          <Button {...rest} size="xl">\r
            <PiHeart />\r
            Button\r
          </Button>\r
        </div>\r
        <div className="flex flex-wrap items-start justify-center gap-2">\r
          <Button aria-label="like" {...rest} startIcon={<PiHeart />} size="xs"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<PiHeart />} size="sm"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<PiHeart />} size="md"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<PiHeart />} size="lg"></Button>\r
          <Button aria-label="like" {...rest} startIcon={<PiHeart />} size="xl"></Button>\r
        </div>\r
        <div className="flex w-full items-start justify-center gap-2">\r
          <Button {...rest} className="btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">\r
            responsive\r
          </Button>\r
          <Button aria-label="like" {...rest} className="btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl" startIcon={<PiHeart />}></Button>\r
        </div>\r
      </div>;
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const A=["Default","Variants","Ghost","Disabled","Icon","Colors","Sizes"];export{g as Colors,i as Default,d as Disabled,u as Ghost,p as Icon,b as Sizes,c as Variants,A as __namedExportsOrder,S as default};
