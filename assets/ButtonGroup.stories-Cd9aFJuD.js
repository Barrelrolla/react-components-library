import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{H as B}from"./icons-D2S3JZ5k.js";import{B as o}from"./Button-Dtvs2u5Y.js";import{B as a}from"./ButtonGroup-tc9g7Ma_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./bundle-mjs-CFgYV38x.js";import"./Divider-C9_WKfr7.js";const R={title:"Components/ButtonGroup",tags:["autodocs"],component:a,decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}},color:{control:{type:"select"}},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},children:{if:{arg:"false",exists:!0}}}},u={render:({selection:t,...n})=>{const[s,r]=i.useState(void 0);i.useEffect(()=>{t||r(void 0)},[t]);const c=l=>{t&&r(l)};return e.jsxs(a,{...n,children:[e.jsx(o,{...n,selected:s===0,onClick:()=>c(0),children:"button"}),e.jsx(o,{...n,selected:s===1,onClick:()=>c(1),children:"button"}),e.jsx(o,{...n,selected:s===2,onClick:()=>c(2),children:"button"})]})}},p={render:({selection:t,variant:n="outline",vertical:s=!0,...r})=>{const[c,l]=i.useState(void 0);i.useEffect(()=>{t||l(void 0)},[t]);const d=E=>{t&&l(E)};return e.jsxs(a,{variant:n,vertical:s,...r,children:[e.jsx(o,{...r,selected:c===0,onClick:()=>d(0),children:"button"}),e.jsx(o,{...r,selected:c===1,onClick:()=>d(1),children:"button"}),e.jsx(o,{...r,selected:c===2,onClick:()=>d(2),children:"button"})]})}},f={render:({radius:t="pill",selection:n,...s})=>{const[r,c]=i.useState(void 0);i.useEffect(()=>{n||c(void 0)},[n]);const l=d=>{n&&c(d)};return e.jsxs(a,{radius:t,children:[e.jsx(o,{...s,selected:r===0,onClick:()=>l(0),startIcon:e.jsx(B,{})}),e.jsx(o,{...s,selected:r===1,onClick:()=>l(1),startIcon:e.jsx(B,{})}),e.jsx(o,{...s,selected:r===2,onClick:()=>l(2),startIcon:e.jsx(B,{})})]})}},m={render:({radius:t="pill",...n})=>e.jsxs(a,{...n,radius:t,children:[e.jsx(o,{className:"",children:"Button"}),e.jsx(o,{startIcon:e.jsx(B,{})})]})};var k,x,S;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    radius = "pill",
    ...rest
  }) => {
    return <ButtonGroup {...rest} radius={radius}>\r
        <Button className="">Button</Button>\r
        <Button startIcon={<HeartIcon />} />\r
      </ButtonGroup>;
  }
}`,...(G=(g=m.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};const T=["Default","Vertical","Icon","SplitButton"];export{u as Default,f as Icon,m as SplitButton,p as Vertical,T as __namedExportsOrder,R as default};
