import{j as e,r as u}from"./iframe-CUtd1n4L.js";import{P as d,a as B,b as j}from"./index-FWRblT-m.js";import{B as a,F as I}from"./ButtonGroup-SfHTwtbh.js";import{c as x,a as y}from"./index-DttbUWqL.js";import{a as v}from"./buttonTypes-88wVwBmo.js";import"./Anchor-B4feZRmL.js";import"./Badge-CKrS2qgj.js";import"./PopoverTrigger-PUbzPO3C.js";import"./DarkModeToggle-5jOc5FFT.js";import"./DarkModeSelector-DUF4ayQJ.js";import"./Combobox-fjTgddMy.js";import"./Divider-CijQ5Lkn.js";import"./HamburgerButton-CJK5PwfY.js";import"./AutocompleteInput-NbDvs0g-.js";import"./Checkbox-BMRiJcSG.js";import"./RadioGroup-CcqGwqmw.js";import{T as p,a as m,b as g}from"./TooltipContent-CI3TSE9k.js";import"./SidemenuItem-b6zpPHtB.js";import"./SelectOption-Dq0gTlrk.js";import"./Skeleton-1vKfRerP.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-DdSbJd4H.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-BldbZDxN.js";import"./FloatingElementContent-DN09I3ti.js";import"./useIsMobile-B3cQGu-U.js";import"./helpers-Csz2bOlM.js";const{expect:h,within:T}=__STORYBOOK_MODULE_TEST__,X={title:"Components/Button",component:a,tags:["autodocs"],decorators:n=>e.jsx("div",{className:"storybookContainer",children:e.jsx(n,{})}),argTypes:{children:{name:"text",table:{category:"storybook"}},color:{control:{type:"select"},options:y,table:{category:"controls"}},variant:{control:{type:"inline-radio"},table:{category:"controls"}},size:{control:{type:"inline-radio"},options:x,table:{category:"controls"}},radius:{control:{type:"inline-radio"},table:{category:"controls"}},loadingPosition:{control:{type:"inline-radio"},table:{category:"controls"}},retainFocusState:{table:{category:"controls"}},scaling:{table:{category:"controls"}},disabled:{table:{category:"controls"}},loading:{table:{category:"controls"}},useGroup:{control:!1,table:{category:"docs"}},wrapperClassName:{control:!1,table:{category:"docs"}},selected:{control:!1,table:{category:"docs"}},startIcon:{control:!1,table:{category:"docs"}},endIcon:{control:!1,table:{category:"docs"}},as:{table:{category:"docs"}},ref:{table:{category:"docs"}}}},s={play:async({canvasElement:n})=>{const r=T(n).getByText("Button");await h(r,"renders").toBeTruthy()},render:({children:n,...t})=>e.jsx(a,{...t,children:n}),args:{children:"Button"}},l={render:({...n})=>e.jsx(e.Fragment,{children:v.map(t=>u.createElement(a,{...n,variant:t,key:t},t))}),argTypes:{children:{table:{disable:!0}},variant:{table:{disable:!0}},selected:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},useGroup:{table:{disable:!0}},as:{table:{disable:!0}},ref:{table:{disable:!0}}}},o={play:async({canvasElement:n})=>{const f=T(n).getAllByText("Button")[0].parentElement;await h(f?.classList.contains("cursor-not-allowed"),"shows not allowed cursor on hover").toBeTruthy()},render:({children:n,...t})=>e.jsxs(e.Fragment,{children:[e.jsx(a,{disabled:!0,...t,children:n}),e.jsx(a,{loading:!0,...t,children:n})]}),args:{children:"Button"},argTypes:{disabled:{table:{disable:!0}},loading:{table:{disable:!0}},retainFocusState:{table:{disable:!0}},selected:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},useGroup:{table:{disable:!0}},as:{table:{disable:!0}},ref:{table:{disable:!0}}}},i={render:({...n})=>e.jsx(e.Fragment,{children:e.jsxs(I,{children:[e.jsxs(p,{isLabel:!0,children:[e.jsx(m,{children:e.jsx(a,{"aria-label":"love",radius:"pill",startIcon:e.jsx(d,{}),...n})}),e.jsx(g,{children:"Love"})]}),e.jsxs(p,{isLabel:!0,children:[e.jsx(m,{children:e.jsx(a,{"aria-label":"like",radius:"none",variant:"outline",startIcon:e.jsx(B,{}),...n})}),e.jsx(g,{children:"Like"})]}),e.jsxs(p,{isLabel:!0,children:[e.jsx(m,{children:e.jsx(a,{"aria-label":"save",variant:"ghost",startIcon:e.jsx(j,{}),...n})}),e.jsx(g,{children:"Save"})]})]})}),argTypes:{loadingPosition:{table:{disable:!0}},radius:{table:{disable:!0}},children:{table:{disable:!0}},selected:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},useGroup:{table:{disable:!0}},as:{table:{disable:!0}},ref:{table:{disable:!0}}}},b={render:({...n})=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex flex-wrap items-end justify-center gap-2",children:x.map(t=>u.createElement(a,{...n,startIcon:e.jsx(d,{}),key:t,size:t},"Button"))}),e.jsx("div",{className:"flex flex-wrap items-start justify-center gap-2",children:x.map(t=>u.createElement(a,{"aria-label":"like",...n,startIcon:e.jsx(d,{}),key:t,size:t}))}),e.jsxs("div",{className:"flex w-full items-start justify-center gap-2",children:[e.jsx(a,{...n,className:"btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl",children:"responsive"}),e.jsx(a,{"aria-label":"like",...n,className:"btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl",startIcon:e.jsx(d,{})})]})]}),argTypes:{size:{table:{disable:!0}},selected:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},useGroup:{table:{disable:!0}},children:{table:{disable:!0}},as:{table:{disable:!0}},ref:{table:{disable:!0}}}},c={render:({...n})=>e.jsx(e.Fragment,{children:y.map(t=>e.jsx("div",{className:"flex flex-col gap-2",children:v.map(r=>u.createElement(a,{...n,key:`${r}-${t}`,color:t,variant:r},t))},t))}),argTypes:{children:{table:{disable:!0}},color:{table:{disable:!0}},variant:{table:{disable:!0}},selected:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},useGroup:{table:{disable:!0}},as:{table:{disable:!0}},ref:{table:{disable:!0}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    },
    selected: {
      table: {
        disable: true
      }
    },
    startIcon: {
      table: {
        disable: true
      }
    },
    endIcon: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    useGroup: {
      table: {
        disable: true
      }
    },
    as: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  },
  argTypes: {
    disabled: {
      table: {
        disable: true
      }
    },
    loading: {
      table: {
        disable: true
      }
    },
    retainFocusState: {
      table: {
        disable: true
      }
    },
    selected: {
      table: {
        disable: true
      }
    },
    startIcon: {
      table: {
        disable: true
      }
    },
    endIcon: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    useGroup: {
      table: {
        disable: true
      }
    },
    as: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  },
  argTypes: {
    loadingPosition: {
      table: {
        disable: true
      }
    },
    radius: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    selected: {
      table: {
        disable: true
      }
    },
    startIcon: {
      table: {
        disable: true
      }
    },
    endIcon: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    useGroup: {
      table: {
        disable: true
      }
    },
    as: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    },
    selected: {
      table: {
        disable: true
      }
    },
    startIcon: {
      table: {
        disable: true
      }
    },
    endIcon: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    useGroup: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    as: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    },
    variant: {
      table: {
        disable: true
      }
    },
    selected: {
      table: {
        disable: true
      }
    },
    startIcon: {
      table: {
        disable: true
      }
    },
    endIcon: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    useGroup: {
      table: {
        disable: true
      }
    },
    as: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const Z=["Default","Variants","Disabled","Icon","Sizes","Colors"];export{c as Colors,s as Default,o as Disabled,i as Icon,b as Sizes,l as Variants,Z as __namedExportsOrder,X as default};
