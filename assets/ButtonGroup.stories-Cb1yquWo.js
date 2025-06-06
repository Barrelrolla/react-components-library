import{j as e,r as i}from"./iframe-2xTwKzkK.js";import{H as B}from"./icons-CdlL9hCZ.js";import{B as t}from"./Button-D6w_sEDH.js";import{B as a}from"./ButtonGroup-Cc9cTTKs.js";import"./bundle-mjs-CFgYV38x.js";import"./Divider-xEzdXBiL.js";const z={title:"Components/ButtonGroup",tags:["autodocs"],component:a,decorators:n=>e.jsx("div",{className:"storybookContainer",children:e.jsx(n,{})}),args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}},color:{control:{type:"select"}},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},children:{if:{arg:"false",exists:!0}}}},u={render:({selection:n,...o})=>{const[l,c]=i.useState(void 0);i.useEffect(()=>{n||c(void 0)},[n]);const r=s=>{n&&c(s)};return e.jsxs(a,{...o,children:[e.jsx(t,{selected:l===0,onClick:()=>r(0),children:"button"}),e.jsx(t,{selected:l===1,onClick:()=>r(1),children:"button"}),e.jsx(t,{selected:l===2,onClick:()=>r(2),children:"button"})]})}},p={render:({selection:n,variant:o="outline",vertical:l=!0,...c})=>{const[r,s]=i.useState(void 0);i.useEffect(()=>{n||s(void 0)},[n]);const d=E=>{n&&s(E)};return e.jsxs(a,{variant:o,vertical:l,...c,children:[e.jsx(t,{selected:r===0,onClick:()=>d(0),children:"button"}),e.jsx(t,{selected:r===1,onClick:()=>d(1),children:"button"}),e.jsx(t,{selected:r===2,onClick:()=>d(2),children:"button"})]})}},f={render:({radius:n="pill",selection:o,...l})=>{const[c,r]=i.useState(void 0);i.useEffect(()=>{o||r(void 0)},[o]);const s=d=>{o&&r(d)};return e.jsxs(a,{radius:n,...l,children:[e.jsx(t,{selected:c===0,onClick:()=>s(0),startIcon:e.jsx(B,{})}),e.jsx(t,{selected:c===1,onClick:()=>s(1),startIcon:e.jsx(B,{})}),e.jsx(t,{selected:c===2,onClick:()=>s(2),startIcon:e.jsx(B,{})})]})}},m={render:({radius:n="pill",...o})=>e.jsxs(a,{...o,radius:n,children:[e.jsx(t,{className:"",children:"Button"}),e.jsx(t,{startIcon:e.jsx(B,{})})]})};var k,x,S;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    return <ButtonGroup radius={radius} {...rest}>\r
        <Button selected={selected === 0} onClick={() => clickHandler(0)} startIcon={<HeartIcon />} />\r
        <Button selected={selected === 1} onClick={() => clickHandler(1)} startIcon={<HeartIcon />} />\r
        <Button selected={selected === 2} onClick={() => clickHandler(2)} startIcon={<HeartIcon />} />\r
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
}`,...(G=(g=m.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};const O=["Default","Vertical","Icon","SplitButton"];export{u as Default,f as Icon,m as SplitButton,p as Vertical,O as __namedExportsOrder,z as default};
