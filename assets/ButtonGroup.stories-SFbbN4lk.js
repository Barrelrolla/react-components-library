import{r as c,j as e}from"./iframe-DnygXqbo.js";import{P as C,a as G,b as I,c as y}from"./index-Cj71YE4b.js";import{a as d,B as s}from"./ButtonGroup-Bk0e2Nce.js";import{b as w,a as E}from"./index-COUSODbC.js";import{T as u,a as p,b as m}from"./TooltipContent-BAhrOPc9.js";import{a as L}from"./buttonTypes-88wVwBmo.js";import{I as H}from"./AutocompleteInput-Cu63v6Bo.js";import{S as P,a as A,b as O,c as R}from"./SelectOption-nXIXaSkn.js";import{C as _}from"./Combobox-BlLmtXp9.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-Clz5e0bR.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-D-Xi89r8.js";import"./Divider-D3dyumf4.js";import"./FloatingElementContent-DLDJtV6V.js";import"./useIsMobile-NWL8FdQt.js";import"./Slot-__QRpQAC.js";import"./AutocompleteTrigger-eVlEMXM9.js";import"./helpers-BKzG62Xh.js";import"./getSelectClasses-B8Cw_bxZ.js";import"./Badge-BQ7U8t4m.js";const{expect:b,within:S}=__STORYBOOK_MODULE_TEST__,se={title:"Components/ButtonGroup",tags:["autodocs"],component:d,decorators:n=>e.jsx("div",{className:"storybookContainer",children:e.jsx(n,{})}),args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}},color:{control:{type:"select"},options:E},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"},options:w},radius:{control:{type:"inline-radio"}},children:{table:{disable:!0}}}},v={play:async({canvasElement:n})=>{const t=S(n).getAllByRole("button");await b(t).toHaveLength(3),await t[0].click(),await b(t[0]).toHaveAttribute("data-selected","true")},render:({selection:n,...r})=>{const[t,l]=c.useState(void 0);c.useEffect(()=>{n||l(void 0)},[n]);const o=a=>{n&&l(a)};return e.jsxs(d,{...r,children:[e.jsx(s,{selected:t===0,onClick:()=>o(0),children:"button"}),e.jsx(s,{selected:t===1,onClick:()=>o(1),children:"button"}),e.jsx(s,{selected:t===2,onClick:()=>o(2),children:"button"})]})}},x={render:({selection:n,...r})=>{const[t,l]=c.useState(void 0);c.useEffect(()=>{n||l(void 0)},[n]);const o=a=>{n&&l(a)};return e.jsx(e.Fragment,{children:L.map((a,i)=>c.createElement(d,{...r,key:a,variant:a},e.jsx(s,{selected:t===0+3*i,onClick:()=>o(0+3*i),children:a}),e.jsx(s,{selected:t===1+3*i,onClick:()=>o(1+3*i),children:a}),e.jsx(s,{selected:t===2+3*i,onClick:()=>o(2+3*i),children:a})))})}},g={play:async({canvasElement:n})=>{const t=S(n).getByTestId("button-group");await b(t).toHaveClass("flex-col")},render:({selection:n,variant:r="outline",vertical:t=!0,...l})=>{const[o,a]=c.useState(void 0);c.useEffect(()=>{n||a(void 0)},[n]);const i=j=>{n&&a(j)};return e.jsxs(d,{variant:r,vertical:t,...l,"data-testid":"button-group",children:[e.jsx(s,{selected:o===0,onClick:()=>i(0),children:"button"}),e.jsx(s,{selected:o===1,onClick:()=>i(1),children:"button"}),e.jsx(s,{selected:o===2,onClick:()=>i(2),children:"button"})]})}},h={play:async({canvasElement:n})=>{const t=S(n).getAllByRole("button");await b(t).toHaveLength(3),await b(t[0]).toHaveClass("btn-icon-md")},render:({variant:n="solid",radius:r="pill",selection:t,...l})=>{const[o,a]=c.useState(void 0);c.useEffect(()=>{t||a(void 0)},[t]);const i=j=>{t&&a(j)};return e.jsxs(d,{variant:n,radius:r,...l,children:[e.jsxs(u,{isLabel:!0,children:[e.jsx(p,{children:e.jsx(s,{"aria-label":"love",selected:o===0,onClick:()=>i(0),startIcon:e.jsx(C,{})})}),e.jsx(m,{children:"Love"})]}),e.jsxs(u,{isLabel:!0,children:[e.jsx(p,{children:e.jsx(s,{"aria-label":"like",selected:o===1,onClick:()=>i(1),startIcon:e.jsx(G,{})})}),e.jsx(m,{children:"Like"})]}),e.jsxs(u,{isLabel:!0,children:[e.jsx(m,{children:"Save"}),e.jsx(p,{children:e.jsx(s,{"aria-label":"save",selected:o===2,onClick:()=>i(2),startIcon:e.jsx(I,{})})})]})]})}},f={play:async({canvasElement:n})=>{const t=S(n).getAllByRole("button");await b(t).toHaveLength(2)},render:({variant:n="solid",radius:r="pill",...t})=>e.jsxs(d,{...t,variant:n,radius:r,children:[e.jsx(s,{className:"",children:"Button"}),e.jsxs(u,{isLabel:!0,children:[e.jsx(m,{children:"Like"}),e.jsx(p,{children:e.jsx(s,{"aria-label":"like",startIcon:e.jsx(C,{})})})]})]}),args:{selection:void 0},argTypes:{selection:{table:{disable:!0}}}},T={render:({variant:n="solid",...r})=>e.jsxs(d,{...r,variant:n,children:[e.jsx(H,{placeholder:"Type to search"}),e.jsxs(u,{children:[e.jsx(m,{children:"Search"}),e.jsx(p,{children:e.jsx(s,{"aria-label":"search",startIcon:e.jsx(y,{})})})]})]}),args:{selection:void 0},argTypes:{selection:{table:{disable:!0}}}},B={render:({variant:n="solid",...r})=>{const t=["Documents","Images"];return e.jsxs(d,{...r,variant:n,children:[e.jsx(H,{placeholder:"Choose file name"}),e.jsx(P,{items:t,placeholder:"Select file type",wrapperClassName:"w-50",children:e.jsx(A,{children:e.jsx(O,{children:t.map((l,o)=>e.jsx(R,{index:o,children:l},l))})})})]})},args:{selection:void 0},argTypes:{selection:{table:{disable:!0}}}},k={render:({variant:n="solid",...r})=>e.jsxs(d,{...r,variant:n,divider:!1,children:[e.jsx(_,{items:[]}),e.jsxs(u,{children:[e.jsx(m,{children:"Search"}),e.jsx(p,{children:e.jsx(s,{"aria-label":"search",startIcon:e.jsx(y,{})})})]})]}),args:{selection:void 0},argTypes:{selection:{table:{disable:!0}}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    }
  }
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    selection: undefined
  },
  argTypes: {
    selection: {
      table: {
        disable: true
      }
    }
  }
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: ({
    variant = "solid",
    ...rest
  }) => {
    const items = ["Documents", "Images"];
    return <ButtonGroup {...rest} variant={variant}>\r
        <Input placeholder="Choose file name" />\r
        <Select items={items} placeholder="Select file type" wrapperClassName="w-50">\r
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
    selection: undefined
  },
  argTypes: {
    selection: {
      table: {
        disable: true
      }
    }
  }
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: ({
    variant = "solid",
    ...rest
  }) => {
    return <ButtonGroup {...rest} variant={variant} divider={false}>\r
        <Combobox items={[]} />\r
        <Tooltip>\r
          <TooltipContent>Search</TooltipContent>\r
          <TooltipTrigger>\r
            <Button aria-label="search" startIcon={<PiMagnifyingGlass />} />\r
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
    }
  }
}`,...k.parameters?.docs?.source}}};const ae=["Default","Varinats","Vertical","Icon","SplitButton","WithInput","WithSelect","WithCombobox"];export{v as Default,h as Icon,f as SplitButton,x as Varinats,g as Vertical,k as WithCombobox,T as WithInput,B as WithSelect,ae as __namedExportsOrder,se as default};
