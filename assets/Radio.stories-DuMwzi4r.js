import{j as r}from"./iframe-CUtd1n4L.js";import{a as d}from"./index-DttbUWqL.js";import{R as l,a as b}from"./RadioGroup-CcqGwqmw.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-BldbZDxN.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-DdSbJd4H.js";const{expect:c,within:i}=__STORYBOOK_MODULE_TEST__,R={title:"Components/Radio",tags:["autodocs"],component:l,decorators:e=>r.jsx("div",{className:"storybookContainer",children:r.jsx(e,{})}),argTypes:{children:{name:"text",table:{category:"storybook"}},color:{options:d,control:{type:"select"},table:{category:"controls"}},size:{table:{category:"controls"}},disabled:{control:{type:"boolean"},table:{category:"controls"}},defaultChecked:{control:!1,table:{category:"docs"}},labelStyle:{control:!1,table:{category:"docs"}},labelClassName:{control:!1,table:{category:"docs"}},wrapperClassName:{control:!1,table:{category:"docs"}}}},n={play:async({canvasElement:e})=>{const o=i(e).getByText("Radio");await c(o,"renders").toBeTruthy()},render:({children:e,...a})=>r.jsx(l,{...a,children:e}),args:{children:"Radio",size:20}},t={play:async({canvasElement:e})=>{const o=i(e).getByText("Radio");await c(o,"renders").toBeTruthy()},render:({children:e,...a})=>r.jsx(l,{disabled:!0,...a,children:e}),args:{children:"Radio",size:20},argTypes:{disabled:{table:{disable:!0}},defaultChecked:{table:{disable:!0}},labelStyle:{table:{disable:!0}},labelClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},s={render:({...e})=>r.jsx(b,{name:"colors",title:"",className:"flex flex-wrap gap-2",children:d.map(a=>r.jsx(l,{color:a,...e,children:a},a))}),argTypes:{children:{table:{disable:!0}},color:{table:{disable:!0}},defaultChecked:{table:{disable:!0}},labelStyle:{table:{disable:!0}},labelClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByText("Radio");
    await expect(radio, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Radio {...rest}>{children}</Radio>;
  },
  args: {
    children: "Radio",
    size: 20
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByText("Radio");
    await expect(radio, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Radio disabled {...rest}>\r
        {children}\r
      </Radio>;
  },
  args: {
    children: "Radio",
    size: 20
  },
  argTypes: {
    disabled: {
      table: {
        disable: true
      }
    },
    defaultChecked: {
      table: {
        disable: true
      }
    },
    labelStyle: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <RadioGroup name="colors" title="" className="flex flex-wrap gap-2">\r
        {availableColors.map(color => <Radio color={color} key={color} {...rest}>\r
            {color}\r
          </Radio>)}\r
      </RadioGroup>;
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    defaultChecked: {
      table: {
        disable: true
      }
    },
    labelStyle: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const C=["Default","Disabled","Colors"];export{s as Colors,n as Default,t as Disabled,C as __namedExportsOrder,R as default};
