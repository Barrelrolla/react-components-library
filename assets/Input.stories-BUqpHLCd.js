import{j as a}from"./iframe-KW3OR2Aq.js";import{f as i}from"./index-4BEx7pN8.js";import{I as e}from"./Input-sZL039S7.js";import{a as W}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";const{expect:C,within:L}=__STORYBOOK_MODULE_TEST__,M={title:"Components/Input",tags:["autodocs"],component:e,decorators:r=>a.jsx("div",{className:"storybookContainer",children:a.jsx(r,{})}),argTypes:{color:{control:{type:"select"},options:W},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},labelClasses:{table:{disable:!0}},wrapperClasses:{table:{disable:!0}},errorClasses:{table:{disable:!0}},inputContainerClasses:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},inputContainerStyle:{table:{disable:!0}},bgFillOnError:{control:{type:"boolean"}}}},n={play:async({canvasElement:r})=>{const w=L(r).getByTestId("default");await C(w,"renders").toBeTruthy()},render:r=>a.jsx(e,{"data-testid":"default",...r}),args:{placeholder:"Input"}},l={render:r=>a.jsx(e,{id:"WithLabel",...r}),args:{placeholder:"Input",label:"Label"}},s={render:r=>a.jsx(e,{id:"WithIcon",...r}),args:{startIcon:a.jsx(i,{}),placeholder:"Input",label:"Label"}},t={render:r=>a.jsx(e,{id:"WithError",...r}),args:{startIcon:a.jsx(i,{}),placeholder:"Input",label:"Label",error:"Error"}},o={render:r=>a.jsxs(a.Fragment,{children:[a.jsx(e,{validating:!1,label:"main",id:"main",color:"main",...r}),a.jsx(e,{validating:!1,label:"light",id:"light",color:"light",...r}),a.jsx(e,{validating:!1,label:"dark",id:"dark",color:"dark",...r}),a.jsx(e,{validating:!1,label:"primary",id:"primary",color:"primary",...r}),a.jsx(e,{validating:!1,label:"secondary",id:"secondary",color:"secondary",...r}),a.jsx(e,{validating:!1,label:"accent",id:"accent",color:"accent",...r}),a.jsx(e,{validating:!1,label:"info",id:"info",color:"info",...r}),a.jsx(e,{validating:!1,label:"success",id:"success",color:"success",...r}),a.jsx(e,{validating:!1,label:"warning",id:"warning",color:"warning",...r}),a.jsx(e,{validating:!1,label:"error",id:"error",color:"error",...r})]}),args:{startIcon:a.jsx(i,{}),placeholder:"Input",error:"Error"},argTypes:{color:{if:{arg:"false",eq:!0}},id:{if:{arg:"false",eq:!0}},label:{if:{arg:"false",eq:!0}}}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => {
    return <Input id="WithLabel" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,m,I;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => {
    return <Input id="WithIcon" {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label"
  }
}`,...(I=(m=s.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};var h,y,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => {
    return <Input id="WithError" {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label",
    error: "Error"
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,j,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => {
    return <>\r
        <Input validating={false} label="main" id="main" color="main" {...props} />\r
        <Input validating={false} label="light" id="light" color="light" {...props} />\r
        <Input validating={false} label="dark" id="dark" color="dark" {...props} />\r
        <Input validating={false} label="primary" id="primary" color="primary" {...props} />\r
        <Input validating={false} label="secondary" id="secondary" color="secondary" {...props} />\r
        <Input validating={false} label="accent" id="accent" color="accent" {...props} />\r
        <Input validating={false} label="info" id="info" color="info" {...props} />\r
        <Input validating={false} label="success" id="success" color="success" {...props} />\r
        <Input validating={false} label="warning" id="warning" color="warning" {...props} />\r
        <Input validating={false} label="error" id="error" color="error" {...props} />\r
      </>;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
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
}`,...(E=(j=o.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const G=["Default","WithLabel","WithIcon","WithError","Colors"];export{o as Colors,n as Default,t as WithError,s as WithIcon,l as WithLabel,G as __namedExportsOrder,M as default};
