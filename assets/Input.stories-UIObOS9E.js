import{j as e}from"./iframe-2xTwKzkK.js";import{S as c}from"./icons-CdlL9hCZ.js";import{I as n}from"./Input-Lfv5ViQh.js";import"./bundle-mjs-CFgYV38x.js";const{expect:w,within:L}=__STORYBOOK_MODULE_TEST__,q={title:"Components/Input",tags:["autodocs"],component:n,decorators:r=>e.jsx("div",{className:"storybookContainer",children:e.jsx(r,{})}),argTypes:{startIcon:{control:{disable:!0}},endIcon:{control:{disable:!0}},labelClasses:{control:{disable:!0}},wrapperClasses:{control:{disable:!0}},errorClasses:{control:{disable:!0}},inputContainerClasses:{control:{disable:!0}}}},a={play:async({canvasElement:r})=>{const W=L(r).getByTestId("default");await w(W,"renders").toBeTruthy()},render:r=>e.jsx(n,{"data-testid":"default",...r}),args:{placeholder:"Input"}},o={render:r=>e.jsx(n,{id:"WithLabel",...r}),args:{placeholder:"Input",label:"Label"}},s={render:r=>e.jsx(n,{id:"WithIcon",...r}),args:{startIcon:e.jsx(c,{}),placeholder:"Input",label:"Label"}},t={render:r=>e.jsx(n,{id:"WithError",...r}),args:{startIcon:e.jsx(c,{}),placeholder:"Input",label:"Label",color:"error",error:"Error"}},l={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"main",id:"main",color:"main",...r}),e.jsx(n,{label:"light",id:"light",color:"light",...r}),e.jsx(n,{label:"dark",id:"dark",color:"dark",...r}),e.jsx(n,{label:"primary",id:"primary",color:"primary",...r}),e.jsx(n,{label:"secondary",id:"secondary",color:"secondary",...r}),e.jsx(n,{label:"accent",id:"accent",color:"accent",...r}),e.jsx(n,{label:"info",id:"info",color:"info",...r}),e.jsx(n,{label:"success",id:"success",color:"success",...r}),e.jsx(n,{label:"warning",id:"warning",color:"warning",...r}),e.jsx(n,{label:"error",id:"error",color:"error",...r})]}),args:{startIcon:e.jsx(c,{}),placeholder:"Input",error:"Error"},argTypes:{color:{if:{arg:"false",eq:!0}},id:{if:{arg:"false",eq:!0}},label:{if:{arg:"false",eq:!0}}}};var i,d,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,b,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => {
    return <Input id="WithLabel" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...(m=(b=o.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var I,g,h;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    return <Input id="WithIcon" {...props} />;
  },
  args: {
    startIcon: <SearchIcon />,
    placeholder: "Input",
    label: "Label"
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,x,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,E,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const B=["Default","WithLabel","WithIcon","WithError","Colors"];export{l as Colors,a as Default,t as WithError,s as WithIcon,o as WithLabel,B as __namedExportsOrder,q as default};
