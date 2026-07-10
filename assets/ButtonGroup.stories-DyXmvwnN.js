import{r as l,j as t}from"./iframe-BSlgQXjc.js";import{H as f}from"./icons-B0NrFHDQ.js";import{B as s}from"./Button-C9ZbTKC8.js";import{B as u}from"./ButtonGroup-BWsX_s6I.js";import{a as A}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";import"./Divider-DdxXIhoD.js";const{expect:i,within:k}=__STORYBOOK_MODULE_TEST__,q={title:"Components/ButtonGroup",tags:["autodocs"],component:u,decorators:e=>t.jsx("div",{className:"storybookContainer",children:t.jsx(e,{})}),args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}},color:{control:{type:"select"},options:A},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},children:{table:{disable:!0}}}},p={play:async({canvasElement:e})=>{const n=k(e).getAllByRole("button");await i(n).toHaveLength(3),await n[0].click(),await i(n[0]).toHaveAttribute("data-selected","true")},render:({selection:e,...o})=>{const[n,c]=l.useState(void 0);l.useEffect(()=>{e||c(void 0)},[e]);const a=r=>{e&&c(r)};return t.jsxs(u,{...o,children:[t.jsx(s,{selected:n===0,onClick:()=>a(0),children:"button"}),t.jsx(s,{selected:n===1,onClick:()=>a(1),children:"button"}),t.jsx(s,{selected:n===2,onClick:()=>a(2),children:"button"})]})}},b={play:async({canvasElement:e})=>{const n=k(e).getByTestId("button-group");await i(n).toHaveClass("flex-col")},render:({selection:e,variant:o="outline",vertical:n=!0,...c})=>{const[a,r]=l.useState(void 0);l.useEffect(()=>{e||r(void 0)},[e]);const d=G=>{e&&r(G)};return t.jsxs(u,{variant:o,vertical:n,...c,"data-testid":"button-group",children:[t.jsx(s,{selected:a===0,onClick:()=>d(0),children:"button"}),t.jsx(s,{selected:a===1,onClick:()=>d(1),children:"button"}),t.jsx(s,{selected:a===2,onClick:()=>d(2),children:"button"})]})}},m={play:async({canvasElement:e})=>{const n=k(e).getAllByRole("button");await i(n).toHaveLength(3),await i(n[0]).toHaveClass("btn-icon-md")},render:({radius:e="pill",selection:o,...n})=>{const[c,a]=l.useState(void 0);l.useEffect(()=>{o||a(void 0)},[o]);const r=d=>{o&&a(d)};return t.jsxs(u,{radius:e,...n,children:[t.jsx(s,{"aria-label":"like",selected:c===0,onClick:()=>r(0),startIcon:t.jsx(f,{})}),t.jsx(s,{"aria-label":"like",selected:c===1,onClick:()=>r(1),startIcon:t.jsx(f,{})}),t.jsx(s,{"aria-label":"like",selected:c===2,onClick:()=>r(2),startIcon:t.jsx(f,{})})]})}},v={play:async({canvasElement:e})=>{const n=k(e).getAllByRole("button");await i(n).toHaveLength(2)},render:({radius:e="pill",...o})=>t.jsxs(u,{...o,radius:e,children:[t.jsx(s,{className:"",children:"Button"}),t.jsx(s,{"aria-label":"like",startIcon:t.jsx(f,{})})]})};var B,x,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(x=p.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var y,g,h;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(g=b.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,C,j;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        <Button aria-label="like" selected={selected === 0} onClick={() => clickHandler(0)} startIcon={<HeartIcon />} />\r
        <Button aria-label="like" selected={selected === 1} onClick={() => clickHandler(1)} startIcon={<HeartIcon />} />\r
        <Button aria-label="like" selected={selected === 2} onClick={() => clickHandler(2)} startIcon={<HeartIcon />} />\r
      </ButtonGroup>;
  }
}`,...(j=(C=m.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var w,E,I;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
        <Button aria-label="like" startIcon={<HeartIcon />} />\r
      </ButtonGroup>;
  }
}`,...(I=(E=v.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const z=["Default","Vertical","Icon","SplitButton"];export{p as Default,m as Icon,v as SplitButton,b as Vertical,z as __namedExportsOrder,q as default};
