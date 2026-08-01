import{j as e}from"./iframe-DqSxrya1.js";import{g as d}from"./index-BOcfcWFa.js";import{I as a}from"./Input-BawG1YnC.js";import{a as b}from"./index-CikE6BH2.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./Button-DIZNnSEb.js";import"./icons-DvkMP2D8.js";import"./FloatingContext-BNvFg4Nv.js";import"./ButtonGroup-E6EBIcDk.js";import"./Divider-ULoo0Bda.js";const{expect:g,within:m}=__STORYBOOK_MODULE_TEST__,C={title:"Components/Input",tags:["autodocs"],component:a,decorators:r=>e.jsx("div",{className:"storybookContainer",children:e.jsx(r,{})}),argTypes:{color:{control:{type:"select"},options:b},bgFillOnError:{control:{type:"boolean"}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},labelClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},inputContainerClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},as:{table:{disable:!0}},inputContainerStyle:{table:{disable:!0}}}},n={play:async({canvasElement:r})=>{const u=m(r).getByTestId("default");await g(u,"renders").toBeTruthy()},render:r=>e.jsx(a,{"data-testid":"default",...r}),args:{placeholder:"Input"}},s={render:r=>e.jsx(a,{...r}),args:{placeholder:"Input",label:"Label"}},t={render:r=>e.jsx(a,{...r}),args:{startIcon:e.jsx(d,{}),placeholder:"Input",label:"Label"}},l={render:r=>e.jsx(a,{...r}),args:{startIcon:e.jsx(d,{}),placeholder:"Input",label:"Label",error:"Error"}},o={render:r=>e.jsx(a,{as:"textarea",...r}),args:{placeholder:"Input",label:"Label"}},i={render:r=>e.jsx(a,{type:"number",...r}),args:{placeholder:"Input",label:"Label"}},c={render:r=>e.jsx(a,{disabled:!0,...r}),args:{startIcon:e.jsx(d,{}),placeholder:"Input",label:"Label"}},p={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(a,{validating:!1,label:"main",id:"main",color:"main",...r}),e.jsx(a,{validating:!1,label:"light",id:"light",color:"light",...r}),e.jsx(a,{validating:!1,label:"dark",id:"dark",color:"dark",...r}),e.jsx(a,{validating:!1,label:"primary",id:"primary",color:"primary",...r}),e.jsx(a,{validating:!1,label:"secondary",id:"secondary",color:"secondary",...r}),e.jsx(a,{validating:!1,label:"accent",id:"accent",color:"accent",...r}),e.jsx(a,{validating:!1,label:"info",id:"info",color:"info",...r}),e.jsx(a,{validating:!1,label:"success",id:"success",color:"success",...r}),e.jsx(a,{validating:!1,label:"warning",id:"warning",color:"warning",...r}),e.jsx(a,{validating:!1,label:"error",id:"error",color:"error",...r})]}),args:{startIcon:e.jsx(d,{}),placeholder:"Input",error:"Error"},argTypes:{color:{if:{arg:"false",eq:!0}},id:{if:{arg:"false",eq:!0}},label:{if:{arg:"false",eq:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label",
    error: "Error"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input as="textarea" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input type="number" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input disabled {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const _=["Default","WithLabel","WithIcon","WithError","Textarea","Number","Disabled","Colors"];export{p as Colors,n as Default,c as Disabled,i as Number,o as Textarea,l as WithError,t as WithIcon,s as WithLabel,_ as __namedExportsOrder,C as default};
