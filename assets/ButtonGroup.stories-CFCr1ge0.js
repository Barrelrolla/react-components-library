import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BKyFwriW.js";import{B as o,C as k}from"./Button-DoQ_5DKt.js";import{B as a}from"./ButtonGroup-sIvpTzgw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-CzQ_9dh3.js";const z={title:"Components/ButtonGroup",tags:["autodocs"],component:a,args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}},color:{control:{type:"inline-radio"}},variant:{control:{type:"inline-radio"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},children:{if:{arg:"false",exists:!0}}}},u={render:({selection:s,...n})=>{const[t,r]=l.useState(void 0);l.useEffect(()=>{s||r(void 0)},[s]);const c=i=>{s&&r(i)};return e.jsx("div",{className:"storybookContainer",children:e.jsxs(a,{...n,children:[e.jsx(o,{...n,selected:t===0,onClick:()=>c(0),children:"button"}),e.jsx(o,{...n,selected:t===1,onClick:()=>c(1),children:"button"}),e.jsx(o,{...n,selected:t===2,onClick:()=>c(2),children:"button"})]})})}},p={render:({selection:s,variant:n="ghost",vertical:t=!0,...r})=>{const[c,i]=l.useState(void 0);l.useEffect(()=>{s||i(void 0)},[s]);const d=G=>{s&&i(G)};return e.jsx("div",{className:"storybookContainer",children:e.jsxs(a,{variant:n,vertical:t,...r,children:[e.jsx(o,{...r,selected:c===0,onClick:()=>d(0),children:"button"}),e.jsx(o,{...r,selected:c===1,onClick:()=>d(1),children:"button"}),e.jsx(o,{...r,selected:c===2,onClick:()=>d(2),children:"button"})]})})}},m={render:({radius:s="pill",selection:n,...t})=>{const[r,c]=l.useState(void 0);l.useEffect(()=>{n||c(void 0)},[n]);const i=d=>{n&&c(d)};return e.jsx("div",{className:"storybookContainer",children:e.jsxs(a,{radius:s,children:[e.jsx(o,{...t,selected:r===0,onClick:()=>i(0),startIcon:e.jsx(k,{})}),e.jsx(o,{...t,selected:r===1,onClick:()=>i(1),startIcon:e.jsx(k,{})}),e.jsx(o,{...t,selected:r===2,onClick:()=>i(2),startIcon:e.jsx(k,{})})]})})}},f={render:({selection:s,radius:n="pill",...t})=>e.jsx("div",{className:"storybookContainer",children:e.jsxs(a,{...t,radius:n,children:[e.jsx(o,{className:"",children:"Button"}),e.jsx(o,{startIcon:e.jsx(k,{})})]})})};var x,B,C;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    return <div className="storybookContainer">\r
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
}`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var b,v,j;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    return <div className="storybookContainer">\r
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
}`,...(j=(v=p.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var h,S,y;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    return <div className="storybookContainer">\r
        <ButtonGroup radius={radius}>\r
          <Button {...rest} selected={selected === 0} onClick={() => clickHandler(0)} startIcon={<ComputerIcon />} />\r
          <Button {...rest} selected={selected === 1} onClick={() => clickHandler(1)} startIcon={<ComputerIcon />} />\r
          <Button {...rest} selected={selected === 2} onClick={() => clickHandler(2)} startIcon={<ComputerIcon />} />\r
        </ButtonGroup>\r
      </div>;
  }
}`,...(y=(S=m.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var H,I,g;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: ({
    selection,
    radius = "pill",
    ...rest
  }) => {
    return <div className="storybookContainer">\r
        <ButtonGroup {...rest} radius={radius}>\r
          <Button className="">Button</Button>\r
          <Button startIcon={<ComputerIcon />} />\r
        </ButtonGroup>\r
      </div>;
  }
}`,...(g=(I=f.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};const O=["Default","Ghost","Icon","Fancy"];export{u as Default,f as Fancy,p as Ghost,m as Icon,O as __namedExportsOrder,z as default};
