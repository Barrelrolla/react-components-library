import{r as c,j as e}from"./iframe-P8Y-PKRI.js";import{P as f,a as h,b as j}from"./index-9auVffcn.js";import{B as r}from"./Button-Cizlvhco.js";import{B as u}from"./ButtonGroup-SOtbuPFx.js";import{a as C}from"./index-Ccfv0_tG.js";import{T as x,a as g,b as k}from"./TooltipContent-Bjo8adfM.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-D2r-zf0o.js";import"./bundle-mjs-169JcMJR.js";import"./floating-ui.react-BaWSq7yJ.js";import"./Divider-Cr233sTN.js";const{expect:i,within:B}=__STORYBOOK_MODULE_TEST__,_={title:"Components/ButtonGroup",tags:["autodocs"],component:u,decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}},color:{control:{type:"select"},options:C},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},children:{table:{disable:!0}}}},p={play:async({canvasElement:t})=>{const n=B(t).getAllByRole("button");await i(n).toHaveLength(3),await n[0].click(),await i(n[0]).toHaveAttribute("data-selected","true")},render:({selection:t,...o})=>{const[n,a]=c.useState(void 0);c.useEffect(()=>{t||a(void 0)},[t]);const s=l=>{t&&a(l)};return e.jsxs(u,{...o,children:[e.jsx(r,{selected:n===0,onClick:()=>s(0),children:"button"}),e.jsx(r,{selected:n===1,onClick:()=>s(1),children:"button"}),e.jsx(r,{selected:n===2,onClick:()=>s(2),children:"button"})]})}},b={play:async({canvasElement:t})=>{const n=B(t).getByTestId("button-group");await i(n).toHaveClass("flex-col")},render:({selection:t,variant:o="outline",vertical:n=!0,...a})=>{const[s,l]=c.useState(void 0);c.useEffect(()=>{t||l(void 0)},[t]);const d=T=>{t&&l(T)};return e.jsxs(u,{variant:o,vertical:n,...a,"data-testid":"button-group",children:[e.jsx(r,{selected:s===0,onClick:()=>d(0),children:"button"}),e.jsx(r,{selected:s===1,onClick:()=>d(1),children:"button"}),e.jsx(r,{selected:s===2,onClick:()=>d(2),children:"button"})]})}},m={play:async({canvasElement:t})=>{const n=B(t).getAllByRole("button");await i(n).toHaveLength(3),await i(n[0]).toHaveClass("btn-icon-md")},render:({radius:t="pill",selection:o,...n})=>{const[a,s]=c.useState(void 0);c.useEffect(()=>{o||s(void 0)},[o]);const l=d=>{o&&s(d)};return e.jsxs(u,{radius:t,...n,children:[e.jsxs(x,{isLabel:!0,children:[e.jsx(g,{children:e.jsx(r,{"aria-label":"love",selected:a===0,onClick:()=>l(0),startIcon:e.jsx(f,{})})}),e.jsx(k,{children:"Love"})]}),e.jsxs(x,{isLabel:!0,children:[e.jsx(g,{children:e.jsx(r,{"aria-label":"like",selected:a===1,onClick:()=>l(1),startIcon:e.jsx(h,{})})}),e.jsx(k,{children:"Like"})]}),e.jsxs(x,{isLabel:!0,children:[e.jsx(g,{children:e.jsx(r,{"aria-label":"save",selected:a===2,onClick:()=>l(2),startIcon:e.jsx(j,{})})}),e.jsx(k,{children:"Save"})]})]})}},v={play:async({canvasElement:t})=>{const n=B(t).getAllByRole("button");await i(n).toHaveLength(2)},render:({radius:t="pill",...o})=>e.jsxs(u,{...o,radius:t,children:[e.jsx(r,{className:"",children:"Button"}),e.jsxs(x,{isLabel:!0,children:[e.jsx(g,{children:e.jsx(r,{"aria-label":"like",startIcon:e.jsx(f,{})})}),e.jsx(k,{children:"Like"})]})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  }
}`,...v.parameters?.docs?.source}}};const O=["Default","Vertical","Icon","SplitButton"];export{p as Default,m as Icon,v as SplitButton,b as Vertical,O as __namedExportsOrder,_ as default};
