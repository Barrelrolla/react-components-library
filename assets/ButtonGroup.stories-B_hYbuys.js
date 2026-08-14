import{r as c,j as e}from"./iframe-DQouAEEm.js";import{P as B,a as H,b as N,c as j}from"./index-UTkCtMo0.js";import{c as G,a as I}from"./index-DttbUWqL.js";import{a as L}from"./buttonTypes-88wVwBmo.js";import"./Anchor-BYTPWMYg.js";import"./Badge-Dqfw397L.js";import{a as d,B as s}from"./ButtonGroup-CUTHd7TQ.js";import"./PopoverTrigger-DBzJYuKD.js";import"./DarkModeToggle-BX2DVi8v.js";import"./DarkModeSelector-CTWXEl9n.js";import"./DropdownTrigger-BpRZPIPv.js";import"./Divider-CucZEIcj.js";import"./HamburgerButton-D7hsfQ4H.js";import{I as w}from"./AutocompleteInput-ConIq13C.js";import"./Checkbox-BLYiEAyp.js";import"./RadioGroup-BRtivUP2.js";import{T as u,a as p,b}from"./TooltipContent-Cze3ragY.js";import"./SidemenuItem-Bmz103_2.js";import{S as E,a as P,b as A,c as O}from"./SelectOption-81dJL9y_.js";import"./Skeleton-8mdyUZcA.js";import"./AutocompleteTrigger-CFH4Iv6Y.js";import{C as D}from"./Combobox-GYj2lDux.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-7UZihqaI.js";import"./FloatingElementContent-BkL-JcUo.js";import"./useIsMobile-DUFZ7AiS.js";import"./Slot-BpKng9qt.js";import"./helpers-loWiP-OY.js";import"./getSelectClasses-BW9JhsD-.js";const{expect:m,within:S}=__STORYBOOK_MODULE_TEST__,ve={title:"Components/ButtonGroup",tags:["autodocs"],component:d,decorators:n=>e.jsx("div",{className:"storybookContainer",children:e.jsx(n,{})}),args:{selection:!0},argTypes:{selection:{control:{type:"boolean"},table:{category:"storybook"}},color:{control:{type:"select"},options:I,table:{category:"controls"}},variant:{control:{type:"inline-radio"},table:{category:"controls"}},size:{control:{type:"inline-radio"},options:G,table:{category:"controls"}},radius:{control:{type:"inline-radio"},table:{category:"controls"}},retainFocusState:{table:{category:"controls"}},divider:{table:{category:"controls"}},vertical:{table:{category:"controls"}},scaling:{table:{category:"controls"}},tooltipDelay:{table:{category:"controls"}},dividerClassName:{control:!1,table:{category:"docs"}},wrapperClassName:{control:!1,table:{category:"docs"}},children:{table:{disable:!0}}}},v={play:async({canvasElement:n})=>{const t=S(n).getAllByRole("button");await m(t).toHaveLength(3),await t[0].click(),await m(t[0]).toHaveAttribute("data-selected","true")},render:({selection:n,...r})=>{const[t,i]=c.useState(void 0);c.useEffect(()=>{n||i(void 0)},[n]);const a=l=>{n&&i(l)};return e.jsxs(d,{...r,children:[e.jsx(s,{selected:t===0,onClick:()=>a(0),children:"button"}),e.jsx(s,{selected:t===1,onClick:()=>a(1),children:"button"}),e.jsx(s,{selected:t===2,onClick:()=>a(2),children:"button"})]})}},g={render:({selection:n,...r})=>{const[t,i]=c.useState(void 0);c.useEffect(()=>{n||i(void 0)},[n]);const a=l=>{n&&i(l)};return e.jsx(e.Fragment,{children:L.map((l,o)=>c.createElement(d,{...r,key:l,variant:l},e.jsx(s,{selected:t===0+3*o,onClick:()=>a(0+3*o),children:l}),e.jsx(s,{selected:t===1+3*o,onClick:()=>a(1+3*o),children:l}),e.jsx(s,{selected:t===2+3*o,onClick:()=>a(2+3*o),children:l})))})},argTypes:{variant:{table:{disable:!0}},tooltipDelay:{table:{disable:!0}},dividerClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},x={play:async({canvasElement:n})=>{const t=S(n).getByTestId("button-group");await m(t).toHaveClass("flex-col")},render:({selection:n,variant:r="outline",vertical:t=!0,...i})=>{const[a,l]=c.useState(void 0);c.useEffect(()=>{n||l(void 0)},[n]);const o=k=>{n&&l(k)};return e.jsxs(d,{variant:r,vertical:t,...i,"data-testid":"button-group",children:[e.jsx(s,{selected:a===0,onClick:()=>o(0),children:"button"}),e.jsx(s,{selected:a===1,onClick:()=>o(1),children:"button"}),e.jsx(s,{selected:a===2,onClick:()=>o(2),children:"button"})]})},argTypes:{vertical:{table:{disable:!0}},dividerClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},C={play:async({canvasElement:n})=>{const t=S(n).getAllByRole("button");await m(t).toHaveLength(3),await m(t[0]).toHaveClass("btn-icon-md")},render:({variant:n="solid",radius:r="pill",selection:t,...i})=>{const[a,l]=c.useState(void 0);c.useEffect(()=>{t||l(void 0)},[t]);const o=k=>{t&&l(k)};return e.jsxs(d,{variant:n,radius:r,...i,children:[e.jsxs(u,{isLabel:!0,children:[e.jsx(p,{children:e.jsx(s,{"aria-label":"love",selected:a===0,onClick:()=>o(0),startIcon:e.jsx(B,{})})}),e.jsx(b,{children:"Love"})]}),e.jsxs(u,{isLabel:!0,children:[e.jsx(p,{children:e.jsx(s,{"aria-label":"like",selected:a===1,onClick:()=>o(1),startIcon:e.jsx(H,{})})}),e.jsx(b,{children:"Like"})]}),e.jsxs(u,{isLabel:!0,children:[e.jsx(b,{children:"Save"}),e.jsx(p,{children:e.jsx(s,{"aria-label":"save",selected:a===2,onClick:()=>o(2),startIcon:e.jsx(N,{})})})]})]})},argTypes:{dividerClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},h={play:async({canvasElement:n})=>{const t=S(n).getAllByRole("button");await m(t).toHaveLength(2)},render:({variant:n="solid",radius:r="pill",...t})=>e.jsxs(d,{...t,variant:n,radius:r,children:[e.jsx(s,{className:"",children:"Button"}),e.jsxs(u,{isLabel:!0,children:[e.jsx(b,{children:"Like"}),e.jsx(p,{children:e.jsx(s,{"aria-label":"like",startIcon:e.jsx(B,{})})})]})]}),args:{selection:void 0},argTypes:{selection:{table:{disable:!0}},dividerClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},T={render:({variant:n="solid",...r})=>e.jsxs(d,{...r,variant:n,children:[e.jsx(w,{placeholder:"Type to search"}),e.jsxs(u,{children:[e.jsx(b,{children:"Search"}),e.jsx(p,{children:e.jsx(s,{"aria-label":"search",startIcon:e.jsx(j,{})})})]})]}),args:{selection:void 0,divider:!1},argTypes:{selection:{table:{disable:!0}},dividerClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},f={render:({variant:n="solid",...r})=>{const t=["Documents","Images"];return e.jsxs(d,{...r,variant:n,children:[e.jsx(w,{placeholder:"Choose file name"}),e.jsx(E,{items:t,placeholder:"Select file type",wrapperClassName:"w-50","aria-label":"Select file type",children:e.jsx(P,{children:e.jsx(A,{children:t.map((i,a)=>e.jsx(O,{index:a,children:i},i))})})})]})},args:{selection:void 0,variant:"outline"},argTypes:{selection:{table:{disable:!0}},dividerClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},y={render:({variant:n="solid",...r})=>e.jsxs(d,{...r,variant:n,children:[e.jsx(D,{items:[],toggleOpenAriaLabel:"Toggle list","aria-label":"Search"}),e.jsxs(u,{children:[e.jsx(b,{children:"Search"}),e.jsx(p,{children:e.jsx(s,{"aria-label":"Search",startIcon:e.jsx(j,{})})})]})]}),args:{selection:void 0,divider:!1},argTypes:{selection:{table:{disable:!0}},dividerClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await buttons[0].click();
    await expect(buttons[0]).toHaveAttribute("data-selected", "true");
  },
  render: ({
    selection,
    ...rest
  }) => {
    const [selected, setSelected] = useState<number | undefined>(undefined);
    useEffect(() => {
      if (!selection) {
        setSelected(undefined);
      }
    }, [selection]);
    const clickHandler = (index: number) => {
      if (selection) {
        setSelected(index);
      }
    };
    return <ButtonGroup {...rest}>\r
        <Button selected={selected === 0} onClick={() => clickHandler(0)}>\r
          button\r
        </Button>\r
        <Button selected={selected === 1} onClick={() => clickHandler(1)}>\r
          button\r
        </Button>\r
        <Button selected={selected === 2} onClick={() => clickHandler(2)}>\r
          button\r
        </Button>\r
      </ButtonGroup>;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: ({
    selection,
    ...rest
  }) => {
    const [selected, setSelected] = useState<number | undefined>(undefined);
    useEffect(() => {
      if (!selection) {
        setSelected(undefined);
      }
    }, [selection]);
    const clickHandler = (index: number) => {
      if (selection) {
        setSelected(index);
      }
    };
    return <>\r
        {availableButtonVariants.map((variant, index) => {
        return <ButtonGroup {...rest} key={variant} variant={variant}>\r
              <Button selected={selected === 0 + 3 * index} onClick={() => clickHandler(0 + 3 * index)}>\r
                {variant}\r
              </Button>\r
              <Button selected={selected === 1 + 3 * index} onClick={() => clickHandler(1 + 3 * index)}>\r
                {variant}\r
              </Button>\r
              <Button selected={selected === 2 + 3 * index} onClick={() => clickHandler(2 + 3 * index)}>\r
                {variant}\r
              </Button>\r
            </ButtonGroup>;
      })}\r
      </>;
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    tooltipDelay: {
      table: {
        disable: true
      }
    },
    dividerClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByTestId("button-group");
    await expect(group).toHaveClass("flex-col");
  },
  render: ({
    selection,
    variant = "outline",
    vertical = true,
    ...rest
  }) => {
    const [selected, setSelected] = useState<number | undefined>(undefined);
    useEffect(() => {
      if (!selection) {
        setSelected(undefined);
      }
    }, [selection]);
    const clickHandler = (index: number) => {
      if (selection) {
        setSelected(index);
      }
    };
    return <ButtonGroup variant={variant} vertical={vertical} {...rest} data-testid="button-group">\r
        <Button selected={selected === 0} onClick={() => clickHandler(0)}>\r
          button\r
        </Button>\r
        <Button selected={selected === 1} onClick={() => clickHandler(1)}>\r
          button\r
        </Button>\r
        <Button selected={selected === 2} onClick={() => clickHandler(2)}>\r
          button\r
        </Button>\r
      </ButtonGroup>;
  },
  argTypes: {
    vertical: {
      table: {
        disable: true
      }
    },
    dividerClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    }
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await expect(buttons[0]).toHaveClass("btn-icon-md");
  },
  render: ({
    variant = "solid",
    radius = "pill",
    selection,
    ...rest
  }) => {
    const [selected, setSelected] = useState<number | undefined>(undefined);
    useEffect(() => {
      if (!selection) {
        setSelected(undefined);
      }
    }, [selection]);
    const clickHandler = (index: number) => {
      if (selection) {
        setSelected(index);
      }
    };
    return <ButtonGroup variant={variant} radius={radius} {...rest}>\r
        <Tooltip isLabel>\r
          <TooltipTrigger>\r
            <Button aria-label="love" selected={selected === 0} onClick={() => clickHandler(0)} startIcon={<PiHeart />} />\r
          </TooltipTrigger>\r
          <TooltipContent>Love</TooltipContent>\r
        </Tooltip>\r
        <Tooltip isLabel>\r
          <TooltipTrigger>\r
            <Button aria-label="like" selected={selected === 1} onClick={() => clickHandler(1)} startIcon={<PiThumbsUp />} />\r
          </TooltipTrigger>\r
          <TooltipContent>Like</TooltipContent>\r
        </Tooltip>\r
        <Tooltip isLabel>\r
          <TooltipContent>Save</TooltipContent>\r
          <TooltipTrigger>\r
            <Button aria-label="save" selected={selected === 2} onClick={() => clickHandler(2)} startIcon={<PiBookmark />} />\r
          </TooltipTrigger>\r
        </Tooltip>\r
      </ButtonGroup>;
  },
  argTypes: {
    dividerClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    }
  }
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(2);
  },
  render: ({
    variant = "solid",
    radius = "pill",
    ...rest
  }) => {
    return <ButtonGroup {...rest} variant={variant} radius={radius}>\r
        <Button className="">Button</Button>\r
        <Tooltip isLabel>\r
          <TooltipContent>Like</TooltipContent>\r
          <TooltipTrigger>\r
            <Button aria-label="like" startIcon={<PiHeart />} />\r
          </TooltipTrigger>\r
        </Tooltip>\r
      </ButtonGroup>;
  },
  args: {
    selection: undefined
  },
  argTypes: {
    selection: {
      table: {
        disable: true
      }
    },
    dividerClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    }
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: ({
    variant = "solid",
    ...rest
  }) => {
    return <ButtonGroup {...rest} variant={variant}>\r
        <Input placeholder="Type to search" />\r
        <Tooltip>\r
          <TooltipContent>Search</TooltipContent>\r
          <TooltipTrigger>\r
            <Button aria-label="search" startIcon={<PiMagnifyingGlass />} />\r
          </TooltipTrigger>\r
        </Tooltip>\r
      </ButtonGroup>;
  },
  args: {
    selection: undefined,
    divider: false
  },
  argTypes: {
    selection: {
      table: {
        disable: true
      }
    },
    dividerClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    }
  }
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: ({
    variant = "solid",
    ...rest
  }) => {
    const items = ["Documents", "Images"];
    return <ButtonGroup {...rest} variant={variant}>\r
        <Input placeholder="Choose file name" />\r
        <Select items={items} placeholder="Select file type" wrapperClassName="w-50" aria-label="Select file type">\r
          <SelectContent>\r
            <SelectGroup>\r
              {items.map((item, index) => {
              return <SelectOption index={index} key={item}>\r
                    {item}\r
                  </SelectOption>;
            })}\r
            </SelectGroup>\r
          </SelectContent>\r
        </Select>\r
      </ButtonGroup>;
  },
  args: {
    selection: undefined,
    variant: "outline"
  },
  argTypes: {
    selection: {
      table: {
        disable: true
      }
    },
    dividerClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: ({
    variant = "solid",
    ...rest
  }) => {
    return <ButtonGroup {...rest} variant={variant}>\r
        <Combobox items={[]} toggleOpenAriaLabel="Toggle list" aria-label="Search" />\r
        <Tooltip>\r
          <TooltipContent>Search</TooltipContent>\r
          <TooltipTrigger>\r
            <Button aria-label="Search" startIcon={<PiMagnifyingGlass />} />\r
          </TooltipTrigger>\r
        </Tooltip>\r
      </ButtonGroup>;
  },
  args: {
    selection: undefined,
    divider: false
  },
  argTypes: {
    selection: {
      table: {
        disable: true
      }
    },
    dividerClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const ge=["Default","Varinats","Vertical","Icon","SplitButton","WithInput","WithSelect","WithCombobox"];export{v as Default,C as Icon,h as SplitButton,g as Varinats,x as Vertical,y as WithCombobox,T as WithInput,f as WithSelect,ge as __namedExportsOrder,ve as default};
