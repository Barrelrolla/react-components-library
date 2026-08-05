import{j as n,r as p}from"./iframe-DCjAJg5B.js";import{P as d,a as j,b as f}from"./index-CWgLyS6G.js";import{B as t}from"./Button-DsEq-CQ3.js";import{b as g,a as v}from"./index-COUSODbC.js";import{F as k}from"./FloatingContext-BO2a_1wd.js";import{T as m,a as b,b as x}from"./TooltipContent-BCh8nZC2.js";import{a as B}from"./buttonTypes-88wVwBmo.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-0oWFvTNH.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-BldbZDxN.js";import"./FloatingElementContent-BldKVV4G.js";import"./useIsMobile-CwD7tomY.js";import"./Slot-CvCNZias.js";const{expect:h,within:T}=__STORYBOOK_MODULE_TEST__,V={title:"Components/Button",component:t,tags:["autodocs"],decorators:e=>n.jsx("div",{className:"storybookContainer",children:n.jsx(e,{})}),argTypes:{children:{name:"text"},color:{control:{type:"select"},options:v},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"},options:g},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}}}},s={play:async({canvasElement:e})=>{const a=T(e).getByText("Button");await h(a,"renders").toBeTruthy()},render:({children:e,...r})=>n.jsx(t,{...r,children:e}),args:{children:"Button"}},o={render:({...e})=>n.jsx(n.Fragment,{children:B.map(r=>p.createElement(t,{...e,variant:r,key:r},r))}),argTypes:{children:{table:{disable:!0}},variant:{table:{disable:!0}}}},i={play:async({canvasElement:e})=>{const y=T(e).getAllByText("Button")[0].parentElement;await h(y?.classList.contains("cursor-not-allowed"),"shows not allowed cursor on hover").toBeTruthy()},render:({children:e,...r})=>n.jsxs(n.Fragment,{children:[n.jsx(t,{disabled:!0,...r,children:e}),n.jsx(t,{loading:!0,...r,children:e})]}),args:{children:"Button"}},l={render:({...e})=>n.jsx(n.Fragment,{children:n.jsxs(k,{children:[n.jsxs(m,{isLabel:!0,children:[n.jsx(b,{children:n.jsx(t,{"aria-label":"love",radius:"pill",startIcon:n.jsx(d,{}),...e})}),n.jsx(x,{children:"Love"})]}),n.jsxs(m,{isLabel:!0,children:[n.jsx(b,{children:n.jsx(t,{"aria-label":"like",radius:"none",variant:"outline",startIcon:n.jsx(j,{}),...e})}),n.jsx(x,{children:"Like"})]}),n.jsxs(m,{isLabel:!0,children:[n.jsx(b,{children:n.jsx(t,{"aria-label":"save",variant:"ghost",startIcon:n.jsx(f,{}),...e})}),n.jsx(x,{children:"Save"})]})]})})},c={render:({...e})=>n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx("div",{className:"flex flex-wrap items-end justify-center gap-2",children:g.map(r=>p.createElement(t,{...e,startIcon:n.jsx(d,{}),key:r,size:r},"Button"))}),n.jsx("div",{className:"flex flex-wrap items-start justify-center gap-2",children:g.map(r=>p.createElement(t,{"aria-label":"like",...e,startIcon:n.jsx(d,{}),key:r,size:r}))}),n.jsxs("div",{className:"flex w-full items-start justify-center gap-2",children:[n.jsx(t,{...e,className:"btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl",children:"responsive"}),n.jsx(t,{"aria-label":"like",...e,className:"btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl",startIcon:n.jsx(d,{})})]})]}),argTypes:{size:{table:{disable:!0}}}},u={render:({...e})=>n.jsx(n.Fragment,{children:v.map(r=>n.jsx("div",{className:"flex flex-col gap-2",children:B.map(a=>p.createElement(t,{...e,key:`${a}-${r}`,color:r,variant:a},r))},r))}),argTypes:{children:{table:{disable:!0}},color:{table:{disable:!0}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableButtonVariants.map(variant => {
        return <Button {...rest} variant={variant} key={variant}>\r
              {variant}\r
            </Button>;
      })}\r
      </>;
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    variant: {
      table: {
        disable: true
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
              <Button aria-label="save" variant="ghost" startIcon={<PiBookmark />} {...rest}></Button>\r
            </TooltipTrigger>\r
            <TooltipContent>Save</TooltipContent>\r
          </Tooltip>\r
        </FloatingDelayGroupContextProvider>\r
      </>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="flex flex-col gap-4">\r
        <div className="flex flex-wrap items-end justify-center gap-2">\r
          {availableSizes.map(size => {
          return <Button {...rest} startIcon={<PiHeart />} key={size} size={size}>\r
                Button\r
              </Button>;
        })}\r
        </div>\r
        <div className="flex flex-wrap items-start justify-center gap-2">\r
          {availableSizes.map(size => {
          return <Button aria-label="like" {...rest} startIcon={<PiHeart />} key={size} size={size}></Button>;
        })}\r
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => {
        return <div className="flex flex-col gap-2" key={color}>\r
              {availableButtonVariants.map(variant => {
            return <Button {...rest} key={\`\${variant}-\${color}\`} color={color} variant={variant}>\r
                    {color}\r
                  </Button>;
          })}\r
            </div>;
      })}\r
      </>;
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const $=["Default","Variants","Disabled","Icon","Sizes","Colors"];export{u as Colors,s as Default,i as Disabled,l as Icon,c as Sizes,o as Variants,$ as __namedExportsOrder,V as default};
