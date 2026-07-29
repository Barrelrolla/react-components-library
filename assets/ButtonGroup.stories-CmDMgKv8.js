import{r as i,j as e}from"./iframe-wXjdf4Kb.js";import{P as f,a as h,b as j}from"./index-DbEQg-CE.js";import{B as r}from"./Button-DWsuvrTI.js";import{B as u}from"./ButtonGroup-B3x7Hoes.js";import{b as y,a as C}from"./index-CikE6BH2.js";import{T as g,a as x,b as k}from"./TooltipContent-SWALOwnx.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-CNOMk5uR.js";import"./bundle-mjs-169JcMJR.js";import"./FloatingContext-DyVC0_1Q.js";import"./Divider-CfAUucPC.js";import"./FloatingElementContent-Be3qqXpN.js";import"./useIsMobile-JsJW3NJQ.js";const{expect:c,within:T}=__STORYBOOK_MODULE_TEST__,N={title:"Components/ButtonGroup",tags:["autodocs"],component:u,decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}},color:{control:{type:"select"},options:C},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"},options:y},radius:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},children:{table:{disable:!0}}}},p={play:async({canvasElement:t})=>{const n=T(t).getAllByRole("button");await c(n).toHaveLength(3),await n[0].click(),await c(n[0]).toHaveAttribute("data-selected","true")},render:({selection:t,...o})=>{const[n,a]=i.useState(void 0);i.useEffect(()=>{t||a(void 0)},[t]);const s=l=>{t&&a(l)};return e.jsxs(u,{...o,children:[e.jsx(r,{selected:n===0,onClick:()=>s(0),children:"button"}),e.jsx(r,{selected:n===1,onClick:()=>s(1),children:"button"}),e.jsx(r,{selected:n===2,onClick:()=>s(2),children:"button"})]})}},b={play:async({canvasElement:t})=>{const n=T(t).getByTestId("button-group");await c(n).toHaveClass("flex-col")},render:({selection:t,variant:o="outline",vertical:n=!0,...a})=>{const[s,l]=i.useState(void 0);i.useEffect(()=>{t||l(void 0)},[t]);const d=B=>{t&&l(B)};return e.jsxs(u,{variant:o,vertical:n,...a,"data-testid":"button-group",children:[e.jsx(r,{selected:s===0,onClick:()=>d(0),children:"button"}),e.jsx(r,{selected:s===1,onClick:()=>d(1),children:"button"}),e.jsx(r,{selected:s===2,onClick:()=>d(2),children:"button"})]})}},m={play:async({canvasElement:t})=>{const n=T(t).getAllByRole("button");await c(n).toHaveLength(3),await c(n[0]).toHaveClass("btn-icon-md")},render:({radius:t="pill",selection:o,...n})=>{const[a,s]=i.useState(void 0);i.useEffect(()=>{o||s(void 0)},[o]);const l=d=>{o&&s(d)};return e.jsxs(u,{radius:t,...n,children:[e.jsxs(g,{isLabel:!0,children:[e.jsx(x,{children:e.jsx(r,{"aria-label":"love",selected:a===0,onClick:()=>l(0),startIcon:e.jsx(f,{})})}),e.jsx(k,{children:"Love"})]}),e.jsxs(g,{isLabel:!0,children:[e.jsx(x,{children:e.jsx(r,{"aria-label":"like",selected:a===1,onClick:()=>l(1),startIcon:e.jsx(h,{})})}),e.jsx(k,{children:"Like"})]}),e.jsxs(g,{isLabel:!0,children:[e.jsx(x,{children:e.jsx(r,{"aria-label":"save",selected:a===2,onClick:()=>l(2),startIcon:e.jsx(j,{})})}),e.jsx(k,{children:"Save"})]})]})}},v={play:async({canvasElement:t})=>{const n=T(t).getAllByRole("button");await c(n).toHaveLength(2)},render:({radius:t="pill",...o})=>e.jsxs(u,{...o,radius:t,children:[e.jsx(r,{className:"",children:"Button"}),e.jsxs(g,{isLabel:!0,children:[e.jsx(x,{children:e.jsx(r,{"aria-label":"like",startIcon:e.jsx(f,{})})}),e.jsx(k,{children:"Like"})]})]}),args:{selection:void 0},argTypes:{selection:{table:{disable:!0}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await expect(buttons[0]).toHaveClass("btn-icon-md");
  },
  render: ({
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
    return <ButtonGroup radius={radius} {...rest}>\r
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
          <TooltipTrigger>\r
            <Button aria-label="save" selected={selected === 2} onClick={() => clickHandler(2)} startIcon={<PiBookmark />} />\r
          </TooltipTrigger>\r
          <TooltipContent>Save</TooltipContent>\r
        </Tooltip>\r
      </ButtonGroup>;
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(2);
  },
  render: ({
    radius = "pill",
    ...rest
  }) => {
    return <ButtonGroup {...rest} radius={radius}>\r
        <Button className="">Button</Button>\r
        <Tooltip isLabel>\r
          <TooltipTrigger>\r
            <Button aria-label="like" startIcon={<PiHeart />} />\r
          </TooltipTrigger>\r
          <TooltipContent>Like</TooltipContent>\r
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
}`,...v.parameters?.docs?.source}}};const U=["Default","Vertical","Icon","SplitButton"];export{p as Default,m as Icon,v as SplitButton,b as Vertical,U as __namedExportsOrder,N as default};
