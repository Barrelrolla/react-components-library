import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BKyFwriW.js";import{B as s,C as x}from"./Button-B4yJPE4L.js";import{B as a}from"./ButtonGroup-KAUQFKNT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-CzQ_9dh3.js";const z={title:"Components/ButtonGroup",component:a,args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}},color:{control:{type:"inline-radio"}},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},children:{if:{arg:"false",exists:!0}}}},u={render:({selection:c,...n})=>{const[t,r]=l.useState(void 0);l.useEffect(()=>{c||r(void 0)},[c]);const o=i=>{c&&r(i)};return e.jsx("div",{className:"bg-main px-10 py-20",children:e.jsxs(a,{...n,children:[e.jsx(s,{...n,selected:t===0,onClick:()=>o(0),children:"button"}),e.jsx(s,{...n,selected:t===1,onClick:()=>o(1),children:"button"}),e.jsx(s,{...n,selected:t===2,onClick:()=>o(2),children:"button"})]})})}},p={render:({selection:c,variant:n="ghost",vertical:t=!0,...r})=>{const[o,i]=l.useState(void 0);l.useEffect(()=>{c||i(void 0)},[c]);const d=G=>{c&&i(G)};return e.jsx("div",{className:"bg-main px-10 py-20",children:e.jsxs(a,{variant:n,vertical:t,...r,children:[e.jsx(s,{...r,selected:o===0,onClick:()=>d(0),children:"button"}),e.jsx(s,{...r,selected:o===1,onClick:()=>d(1),children:"button"}),e.jsx(s,{...r,selected:o===2,onClick:()=>d(2),children:"button"})]})})}},m={render:({radius:c="pill",selection:n,...t})=>{const[r,o]=l.useState(void 0);l.useEffect(()=>{n||o(void 0)},[n]);const i=d=>{n&&o(d)};return e.jsx("div",{className:"bg-main px-10 py-20",children:e.jsxs(a,{radius:c,children:[e.jsx(s,{...t,selected:r===0,onClick:()=>i(0),startIcon:e.jsx(x,{})}),e.jsx(s,{...t,selected:r===1,onClick:()=>i(1),startIcon:e.jsx(x,{})}),e.jsx(s,{...t,selected:r===2,onClick:()=>i(2),startIcon:e.jsx(x,{})})]})})}},f={render:({selection:c,radius:n="pill",...t})=>e.jsx("div",{className:"bg-main px-10 py-20",children:e.jsxs(a,{...t,radius:n,children:[e.jsx(s,{className:"",children:"Button"}),e.jsx(s,{startIcon:e.jsx(x,{})})]})})};var k,B,b;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    return <div className="bg-main px-10 py-20">\r
        <ButtonGroup {...rest}>\r
          <Button {...rest} selected={selected === 0} onClick={() => clickHandler(0)}>\r
            button\r
          </Button>\r
          <Button {...rest} selected={selected === 1} onClick={() => clickHandler(1)}>\r
            button\r
          </Button>\r
          <Button {...rest} selected={selected === 2} onClick={() => clickHandler(2)}>\r
            button\r
          </Button>\r
        </ButtonGroup>\r
      </div>;
  }
}`,...(b=(B=u.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var v,j,C;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ({
    selection,
    variant = "ghost",
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
    return <div className="bg-main px-10 py-20">\r
        <ButtonGroup variant={variant} vertical={vertical} {...rest}>\r
          <Button {...rest} selected={selected === 0} onClick={() => clickHandler(0)}>\r
            button\r
          </Button>\r
          <Button {...rest} selected={selected === 1} onClick={() => clickHandler(1)}>\r
            button\r
          </Button>\r
          <Button {...rest} selected={selected === 2} onClick={() => clickHandler(2)}>\r
            button\r
          </Button>\r
        </ButtonGroup>\r
      </div>;
  }
}`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var h,S,g;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    return <div className="bg-main px-10 py-20">\r
        <ButtonGroup radius={radius}>\r
          <Button {...rest} selected={selected === 0} onClick={() => clickHandler(0)} startIcon={<ComputerIcon />} />\r
          <Button {...rest} selected={selected === 1} onClick={() => clickHandler(1)} startIcon={<ComputerIcon />} />\r
          <Button {...rest} selected={selected === 2} onClick={() => clickHandler(2)} startIcon={<ComputerIcon />} />\r
        </ButtonGroup>\r
      </div>;
  }
}`,...(g=(S=m.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var y,H,I;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    selection,
    radius = "pill",
    ...rest
  }) => {
    return <div className="bg-main px-10 py-20">\r
        <ButtonGroup {...rest} radius={radius}>\r
          <Button className="">Button</Button>\r
          <Button startIcon={<ComputerIcon />} />\r
        </ButtonGroup>\r
      </div>;
  }
}`,...(I=(H=f.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const O=["Default","Ghost","Icon","Fancy"];export{u as Default,f as Fancy,p as Ghost,m as Icon,O as __namedExportsOrder,z as default};
