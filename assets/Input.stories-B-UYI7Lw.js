import{j as e}from"./iframe-BJiJRBRH.js";import{a as c}from"./icons-CLNt07g9.js";import{I as a}from"./Input-t036BszA.js";import{a as W}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";const{expect:C,within:L}=__STORYBOOK_MODULE_TEST__,D={title:"Components/Input",tags:["autodocs"],component:a,decorators:r=>e.jsx("div",{className:"storybookContainer",children:e.jsx(r,{})}),argTypes:{color:{control:{type:"select"},options:W},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},labelClasses:{table:{disable:!0}},wrapperClasses:{table:{disable:!0}},errorClasses:{table:{disable:!0}},inputContainerClasses:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},inputContainerStyle:{table:{disable:!0}},bgFillOnError:{control:{type:"boolean"}}}},n={play:async({canvasElement:r})=>{const w=L(r).getByTestId("default");await C(w,"renders").toBeTruthy()},render:r=>e.jsx(a,{"data-testid":"default",...r}),args:{placeholder:"Input"}},o={render:r=>e.jsx(a,{id:"WithLabel",...r}),args:{placeholder:"Input",label:"Label"}},t={render:r=>e.jsx(a,{id:"WithIcon",...r}),args:{startIcon:e.jsx(c,{}),placeholder:"Input",label:"Label"}},s={render:r=>e.jsx(a,{id:"WithError",...r}),args:{startIcon:e.jsx(c,{}),placeholder:"Input",label:"Label",color:"error",error:"Error"}},l={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"main",id:"main",color:"main",...r}),e.jsx(a,{label:"light",id:"light",color:"light",...r}),e.jsx(a,{label:"dark",id:"dark",color:"dark",...r}),e.jsx(a,{label:"primary",id:"primary",color:"primary",...r}),e.jsx(a,{label:"secondary",id:"secondary",color:"secondary",...r}),e.jsx(a,{label:"accent",id:"accent",color:"accent",...r}),e.jsx(a,{label:"info",id:"info",color:"info",...r}),e.jsx(a,{label:"success",id:"success",color:"success",...r}),e.jsx(a,{label:"warning",id:"warning",color:"warning",...r}),e.jsx(a,{label:"error",id:"error",color:"error",...r})]}),args:{startIcon:e.jsx(c,{}),placeholder:"Input",error:"Error"},argTypes:{color:{if:{arg:"false",eq:!0}},id:{if:{arg:"false",eq:!0}},label:{if:{arg:"false",eq:!0}}}};var i,p,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("default");
    await expect(button, "renders").toBeTruthy();
  },
  render: props => {
    return <Input data-testid="default" {...props} />;
  },
  args: {
    placeholder: "Input"
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,b,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => {
    return <Input id="WithLabel" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...(m=(b=o.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var I,g,h;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    return <Input id="WithIcon" {...props} />;
  },
  args: {
    startIcon: <SearchIcon />,
    placeholder: "Input",
    label: "Label"
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => {
    return <Input id="WithError" {...props} />;
  },
  args: {
    startIcon: <SearchIcon />,
    placeholder: "Input",
    label: "Label",
    color: "error",
    error: "Error"
  }
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var j,E,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => {
    return <>\r
        <Input label="main" id="main" color="main" {...props} />\r
        <Input label="light" id="light" color="light" {...props} />\r
        <Input label="dark" id="dark" color="dark" {...props} />\r
        <Input label="primary" id="primary" color="primary" {...props} />\r
        <Input label="secondary" id="secondary" color="secondary" {...props} />\r
        <Input label="accent" id="accent" color="accent" {...props} />\r
        <Input label="info" id="info" color="info" {...props} />\r
        <Input label="success" id="success" color="success" {...props} />\r
        <Input label="warning" id="warning" color="warning" {...props} />\r
        <Input label="error" id="error" color="error" {...props} />\r
      </>;
  },
  args: {
    startIcon: <SearchIcon />,
    placeholder: "Input",
    error: "Error"
  },
  argTypes: {
    color: {
      if: {
        arg: "false",
        eq: true
      }
    },
    id: {
      if: {
        arg: "false",
        eq: true
      }
    },
    label: {
      if: {
        arg: "false",
        eq: true
      }
    }
  }
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const F=["Default","WithLabel","WithIcon","WithError","Colors"];export{l as Colors,n as Default,s as WithError,t as WithIcon,o as WithLabel,F as __namedExportsOrder,D as default};
