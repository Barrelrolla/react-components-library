import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{B as c,C as B}from"./Button-sCi0Z3AI.js";import{B as u}from"./ButtonGroup-zt3CRLsX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-CzQ_9dh3.js";const q={title:"Components/ButtonGroup",tags:["autodocs"],component:u,decorators:n=>e.jsx("div",{className:"storybookContainer",children:e.jsx(n,{})}),args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}},color:{control:{type:"select"}},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},children:{if:{arg:"false",exists:!0}}}},a={render:({selection:n,...t})=>{const[r,o]=i.useState(void 0);i.useEffect(()=>{n||o(void 0)},[n]);const s=l=>{n&&o(l)};return e.jsxs(u,{...t,children:[e.jsx(c,{...t,selected:r===0,onClick:()=>s(0),children:"button"}),e.jsx(c,{...t,selected:r===1,onClick:()=>s(1),children:"button"}),e.jsx(c,{...t,selected:r===2,onClick:()=>s(2),children:"button"})]})}},p={render:({selection:n,variant:t="outline",vertical:r=!0,...o})=>{const[s,l]=i.useState(void 0);i.useEffect(()=>{n||l(void 0)},[n]);const d=E=>{n&&l(E)};return e.jsxs(u,{variant:t,vertical:r,...o,children:[e.jsx(c,{...o,selected:s===0,onClick:()=>d(0),children:"button"}),e.jsx(c,{...o,selected:s===1,onClick:()=>d(1),children:"button"}),e.jsx(c,{...o,selected:s===2,onClick:()=>d(2),children:"button"})]})}},m={render:({radius:n="pill",selection:t,...r})=>{const[o,s]=i.useState(void 0);i.useEffect(()=>{t||s(void 0)},[t]);const l=d=>{t&&s(d)};return e.jsxs(u,{radius:n,children:[e.jsx(c,{...r,selected:o===0,onClick:()=>l(0),startIcon:e.jsx(B,{})}),e.jsx(c,{...r,selected:o===1,onClick:()=>l(1),startIcon:e.jsx(B,{})}),e.jsx(c,{...r,selected:o===2,onClick:()=>l(2),startIcon:e.jsx(B,{})})]})}},f={render:({selection:n,radius:t="pill",...r})=>e.jsxs(u,{...r,radius:t,children:[e.jsx(c,{className:"",children:"Button"}),e.jsx(c,{startIcon:e.jsx(B,{})})]})};var k,x,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        <Button {...rest} selected={selected === 0} onClick={() => clickHandler(0)}>\r
          button\r
        </Button>\r
        <Button {...rest} selected={selected === 1} onClick={() => clickHandler(1)}>\r
          button\r
        </Button>\r
        <Button {...rest} selected={selected === 2} onClick={() => clickHandler(2)}>\r
          button\r
        </Button>\r
      </ButtonGroup>;
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var j,S,b;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    return <ButtonGroup variant={variant} vertical={vertical} {...rest}>\r
        <Button {...rest} selected={selected === 0} onClick={() => clickHandler(0)}>\r
          button\r
        </Button>\r
        <Button {...rest} selected={selected === 1} onClick={() => clickHandler(1)}>\r
          button\r
        </Button>\r
        <Button {...rest} selected={selected === 2} onClick={() => clickHandler(2)}>\r
          button\r
        </Button>\r
      </ButtonGroup>;
  }
}`,...(b=(S=p.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,I,v;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    return <ButtonGroup radius={radius}>\r
        <Button {...rest} selected={selected === 0} onClick={() => clickHandler(0)} startIcon={<ComputerIcon />} />\r
        <Button {...rest} selected={selected === 1} onClick={() => clickHandler(1)} startIcon={<ComputerIcon />} />\r
        <Button {...rest} selected={selected === 2} onClick={() => clickHandler(2)} startIcon={<ComputerIcon />} />\r
      </ButtonGroup>;
  }
}`,...(v=(I=m.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var H,g,G;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: ({
    selection,
    radius = "pill",
    ...rest
  }) => {
    return <ButtonGroup {...rest} radius={radius}>\r
        <Button className="">Button</Button>\r
        <Button startIcon={<ComputerIcon />} />\r
      </ButtonGroup>;
  }
}`,...(G=(g=f.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};const z=["Default","Vertical","Icon","ButtonWithIconButton"];export{f as ButtonWithIconButton,a as Default,m as Icon,p as Vertical,z as __namedExportsOrder,q as default};
