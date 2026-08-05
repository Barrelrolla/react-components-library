import{r as c,j as e}from"./iframe-DCjAJg5B.js";import{P as h,a as C,b as j}from"./index-CWgLyS6G.js";import{B as a}from"./Button-DsEq-CQ3.js";import{B as u}from"./ButtonGroup-df_20-Fx.js";import{b as S,a as y}from"./index-COUSODbC.js";import{T as x,a as f,b as B}from"./TooltipContent-BCh8nZC2.js";import{a as H}from"./buttonTypes-88wVwBmo.js";import"./preload-helper-PPVm8Dsz.js";import"./icons-0oWFvTNH.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-BldbZDxN.js";import"./FloatingContext-BO2a_1wd.js";import"./Divider-Dlv50YdB.js";import"./FloatingElementContent-BldKVV4G.js";import"./useIsMobile-CwD7tomY.js";import"./Slot-CvCNZias.js";const{expect:d,within:g}=__STORYBOOK_MODULE_TEST__,K={title:"Components/ButtonGroup",tags:["autodocs"],component:u,decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}},color:{control:{type:"select"},options:y},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"},options:S},radius:{control:{type:"inline-radio"}},children:{table:{disable:!0}}}},p={play:async({canvasElement:t})=>{const n=g(t).getAllByRole("button");await d(n).toHaveLength(3),await n[0].click(),await d(n[0]).toHaveAttribute("data-selected","true")},render:({selection:t,...l})=>{const[n,i]=c.useState(void 0);c.useEffect(()=>{t||i(void 0)},[t]);const o=r=>{t&&i(r)};return e.jsxs(u,{...l,children:[e.jsx(a,{selected:n===0,onClick:()=>o(0),children:"button"}),e.jsx(a,{selected:n===1,onClick:()=>o(1),children:"button"}),e.jsx(a,{selected:n===2,onClick:()=>o(2),children:"button"})]})}},b={render:({selection:t,...l})=>{const[n,i]=c.useState(void 0);c.useEffect(()=>{t||i(void 0)},[t]);const o=r=>{t&&i(r)};return e.jsx(e.Fragment,{children:H.map((r,s)=>c.createElement(u,{...l,key:r,variant:r},e.jsx(a,{selected:n===0+3*s,onClick:()=>o(0+3*s),children:r}),e.jsx(a,{selected:n===1+3*s,onClick:()=>o(1+3*s),children:r}),e.jsx(a,{selected:n===2+3*s,onClick:()=>o(2+3*s),children:r})))})}},m={play:async({canvasElement:t})=>{const n=g(t).getByTestId("button-group");await d(n).toHaveClass("flex-col")},render:({selection:t,variant:l="outline",vertical:n=!0,...i})=>{const[o,r]=c.useState(void 0);c.useEffect(()=>{t||r(void 0)},[t]);const s=T=>{t&&r(T)};return e.jsxs(u,{variant:l,vertical:n,...i,"data-testid":"button-group",children:[e.jsx(a,{selected:o===0,onClick:()=>s(0),children:"button"}),e.jsx(a,{selected:o===1,onClick:()=>s(1),children:"button"}),e.jsx(a,{selected:o===2,onClick:()=>s(2),children:"button"})]})}},v={play:async({canvasElement:t})=>{const n=g(t).getAllByRole("button");await d(n).toHaveLength(3),await d(n[0]).toHaveClass("btn-icon-md")},render:({variant:t="solid",radius:l="pill",selection:n,...i})=>{const[o,r]=c.useState(void 0);c.useEffect(()=>{n||r(void 0)},[n]);const s=T=>{n&&r(T)};return e.jsxs(u,{variant:t,radius:l,...i,children:[e.jsxs(x,{isLabel:!0,children:[e.jsx(f,{children:e.jsx(a,{"aria-label":"love",selected:o===0,onClick:()=>s(0),startIcon:e.jsx(h,{})})}),e.jsx(B,{children:"Love"})]}),e.jsxs(x,{isLabel:!0,children:[e.jsx(f,{children:e.jsx(a,{"aria-label":"like",selected:o===1,onClick:()=>s(1),startIcon:e.jsx(C,{})})}),e.jsx(B,{children:"Like"})]}),e.jsxs(x,{isLabel:!0,children:[e.jsx(B,{children:"Save"}),e.jsx(f,{children:e.jsx(a,{"aria-label":"save",selected:o===2,onClick:()=>s(2),startIcon:e.jsx(j,{})})})]})]})}},k={play:async({canvasElement:t})=>{const n=g(t).getAllByRole("button");await d(n).toHaveLength(2)},render:({variant:t="solid",radius:l="pill",...n})=>e.jsxs(u,{...n,variant:t,radius:l,children:[e.jsx(a,{className:"",children:"Button"}),e.jsxs(x,{isLabel:!0,children:[e.jsx(B,{children:"Like"}),e.jsx(f,{children:e.jsx(a,{"aria-label":"like",startIcon:e.jsx(h,{})})})]})]}),args:{selection:void 0},argTypes:{selection:{table:{disable:!0}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const M=["Default","Varinats","Vertical","Icon","SplitButton"];export{p as Default,v as Icon,k as SplitButton,b as Varinats,m as Vertical,M as __namedExportsOrder,K as default};
