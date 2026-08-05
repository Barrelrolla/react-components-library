import{j as r,r as g}from"./iframe-DCjAJg5B.js";import{g as i}from"./index-CWgLyS6G.js";import{I as a}from"./Input-BQDQcJl5.js";import{a as b}from"./index-COUSODbC.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ct12j0u0.js";import"./Button-DsEq-CQ3.js";import"./icons-0oWFvTNH.js";import"./cssColorProps-BldbZDxN.js";import"./FloatingContext-BO2a_1wd.js";import"./ButtonGroup-df_20-Fx.js";import"./Divider-Dlv50YdB.js";const{expect:I,within:h}=__STORYBOOK_MODULE_TEST__,w={title:"Components/Input",tags:["autodocs"],component:a,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{color:{control:{type:"select"},options:b},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},labelClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},inputContainerClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},as:{table:{disable:!0}},inputContainerStyle:{table:{disable:!0}}}},t={play:async({canvasElement:e})=>{const m=h(e).getByTestId("default");await I(m,"renders").toBeTruthy()},render:e=>r.jsx(a,{"data-testid":"default",...e}),args:{placeholder:"Input"}},s={render:e=>r.jsx(a,{...e}),args:{placeholder:"Input",label:"Label"}},o={render:e=>r.jsx(a,{...e}),args:{startIcon:r.jsx(i,{}),placeholder:"Input",label:"Label"}},l={render:e=>r.jsx(a,{...e}),args:{startIcon:r.jsx(i,{}),placeholder:"Input",label:"Label",error:"Error"}},p={render:e=>r.jsx(a,{as:"textarea",...e}),args:{placeholder:"Input",label:"Label"}},c={render:e=>r.jsx(a,{type:"number",...e}),args:{placeholder:"Input",label:"Label"}},u={render:e=>r.jsx(a,{disabled:!0,...e}),args:{startIcon:r.jsx(i,{}),placeholder:"Input",label:"Label"}},d={render:e=>r.jsx(r.Fragment,{children:b.map(n=>g.createElement(a,{...e,key:n,label:n,color:n}))}),args:{startIcon:r.jsx(i,{}),placeholder:"Input"},argTypes:{color:{table:{disable:!0}},id:{table:{disable:!0}},label:{table:{disable:!0}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label",
    error: "Error"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input as="textarea" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input type="number" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Input disabled {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <>\r
        {availableColors.map(color => {
        return <Input {...props} key={color} label={color} color={color} />;
      })}\r
      </>;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input"
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    },
    id: {
      table: {
        disable: true
      }
    },
    label: {
      table: {
        disable: true
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const M=["Default","WithLabel","WithIcon","WithError","Textarea","Number","Disabled","Colors"];export{d as Colors,t as Default,u as Disabled,c as Number,p as Textarea,l as WithError,o as WithIcon,s as WithLabel,M as __namedExportsOrder,w as default};
