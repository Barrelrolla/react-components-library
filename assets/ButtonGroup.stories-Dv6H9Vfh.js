import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{H as B}from"./icons-DeaS2o7k.js";import{B as c}from"./Button-QGt2rWtV.js";import{B as a}from"./ButtonGroup-YNQq3nrd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-EqqjHPk4.js";const O={title:"Components/ButtonGroup",tags:["autodocs"],component:a,decorators:n=>e.jsx("div",{className:"storybookContainer",children:e.jsx(n,{})}),args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}},color:{control:{type:"select"}},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},children:{if:{arg:"false",exists:!0}}}},u={render:({selection:n,...t})=>{const[r,o]=i.useState(void 0);i.useEffect(()=>{n||o(void 0)},[n]);const s=l=>{n&&o(l)};return e.jsxs(a,{...t,children:[e.jsx(c,{...t,selected:r===0,onClick:()=>s(0),children:"button"}),e.jsx(c,{...t,selected:r===1,onClick:()=>s(1),children:"button"}),e.jsx(c,{...t,selected:r===2,onClick:()=>s(2),children:"button"})]})}},p={render:({selection:n,variant:t="outline",vertical:r=!0,...o})=>{const[s,l]=i.useState(void 0);i.useEffect(()=>{n||l(void 0)},[n]);const d=E=>{n&&l(E)};return e.jsxs(a,{variant:t,vertical:r,...o,children:[e.jsx(c,{...o,selected:s===0,onClick:()=>d(0),children:"button"}),e.jsx(c,{...o,selected:s===1,onClick:()=>d(1),children:"button"}),e.jsx(c,{...o,selected:s===2,onClick:()=>d(2),children:"button"})]})}},f={render:({radius:n="pill",selection:t,...r})=>{const[o,s]=i.useState(void 0);i.useEffect(()=>{t||s(void 0)},[t]);const l=d=>{t&&s(d)};return e.jsxs(a,{radius:n,children:[e.jsx(c,{...r,selected:o===0,onClick:()=>l(0),startIcon:e.jsx(B,{})}),e.jsx(c,{...r,selected:o===1,onClick:()=>l(1),startIcon:e.jsx(B,{})}),e.jsx(c,{...r,selected:o===2,onClick:()=>l(2),startIcon:e.jsx(B,{})})]})}},m={render:({selection:n,radius:t="pill",...r})=>e.jsxs(a,{...r,radius:t,children:[e.jsx(c,{className:"",children:"Button"}),e.jsx(c,{startIcon:e.jsx(B,{})})]})};var k,x,S;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(x=u.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,H,b;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(b=(H=p.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var C,v,h;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        <Button {...rest} selected={selected === 0} onClick={() => clickHandler(0)} startIcon={<HeartIcon />} />\r
        <Button {...rest} selected={selected === 1} onClick={() => clickHandler(1)} startIcon={<HeartIcon />} />\r
        <Button {...rest} selected={selected === 2} onClick={() => clickHandler(2)} startIcon={<HeartIcon />} />\r
      </ButtonGroup>;
  }
}`,...(h=(v=f.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var I,g,G;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: ({
    selection,
    radius = "pill",
    ...rest
  }) => {
    return <ButtonGroup {...rest} radius={radius}>\r
        <Button className="">Button</Button>\r
        <Button startIcon={<HeartIcon />} />\r
      </ButtonGroup>;
  }
}`,...(G=(g=m.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};const R=["Default","Vertical","Icon","SplitButton"];export{u as Default,f as Icon,m as SplitButton,p as Vertical,R as __namedExportsOrder,O as default};
