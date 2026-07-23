import{j as a}from"./iframe-CBMgLoGF.js";import{f as i}from"./index-BbMCJN-e.js";import{I as e}from"./Input-BLmKbAv-.js";import{a as d}from"./index-Ccfv0_tG.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";const{expect:p,within:u}=__STORYBOOK_MODULE_TEST__,v={title:"Components/Input",tags:["autodocs"],component:e,decorators:r=>a.jsx("div",{className:"storybookContainer",children:a.jsx(r,{})}),argTypes:{color:{control:{type:"select"},options:d},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},labelClasses:{table:{disable:!0}},wrapperClasses:{table:{disable:!0}},errorClasses:{table:{disable:!0}},inputContainerClasses:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},inputContainerStyle:{table:{disable:!0}},bgFillOnError:{control:{type:"boolean"}}}},n={play:async({canvasElement:r})=>{const c=u(r).getByTestId("default");await p(c,"renders").toBeTruthy()},render:r=>a.jsx(e,{"data-testid":"default",...r}),args:{placeholder:"Input"}},l={render:r=>a.jsx(e,{id:"WithLabel",...r}),args:{placeholder:"Input",label:"Label"}},s={render:r=>a.jsx(e,{id:"WithIcon",...r}),args:{startIcon:a.jsx(i,{}),placeholder:"Input",label:"Label"}},t={render:r=>a.jsx(e,{id:"WithError",...r}),args:{startIcon:a.jsx(i,{}),placeholder:"Input",label:"Label",error:"Error"}},o={render:r=>a.jsxs(a.Fragment,{children:[a.jsx(e,{validating:!1,label:"main",id:"main",color:"main",...r}),a.jsx(e,{validating:!1,label:"light",id:"light",color:"light",...r}),a.jsx(e,{validating:!1,label:"dark",id:"dark",color:"dark",...r}),a.jsx(e,{validating:!1,label:"primary",id:"primary",color:"primary",...r}),a.jsx(e,{validating:!1,label:"secondary",id:"secondary",color:"secondary",...r}),a.jsx(e,{validating:!1,label:"accent",id:"accent",color:"accent",...r}),a.jsx(e,{validating:!1,label:"info",id:"info",color:"info",...r}),a.jsx(e,{validating:!1,label:"success",id:"success",color:"success",...r}),a.jsx(e,{validating:!1,label:"warning",id:"warning",color:"warning",...r}),a.jsx(e,{validating:!1,label:"error",id:"error",color:"error",...r})]}),args:{startIcon:a.jsx(i,{}),placeholder:"Input",error:"Error"},argTypes:{color:{if:{arg:"false",eq:!0}},id:{if:{arg:"false",eq:!0}},label:{if:{arg:"false",eq:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input id="WithLabel" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input id="WithIcon" {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input id="WithError" {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label",
    error: "Error"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const x=["Default","WithLabel","WithIcon","WithError","Colors"];export{o as Colors,n as Default,t as WithError,s as WithIcon,l as WithLabel,x as __namedExportsOrder,v as default};
