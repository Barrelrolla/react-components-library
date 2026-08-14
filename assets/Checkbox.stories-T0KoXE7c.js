import{j as n}from"./iframe-Bpwjnk3u.js";import{a as c}from"./index-DttbUWqL.js";import{C as l}from"./Checkbox-mVMoJrkL.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-D6yzrnYJ.js";const{expect:b,within:d}=__STORYBOOK_MODULE_TEST__,y={title:"Components/Checkbox",tags:["autodocs"],component:l,decorators:e=>n.jsx("div",{className:"storybookContainer",children:n.jsx(e,{})}),argTypes:{children:{name:"text",table:{category:"storybook"}},color:{options:c,control:{type:"select"},table:{category:"controls"}},size:{table:{category:"controls"}},defaultChecked:{control:!1,table:{category:"docs"}},labelStyle:{control:!1,table:{category:"docs"}},labelClassName:{control:!1,table:{category:"docs"}},wrapperClassName:{control:!1,table:{category:"docs"}}}},r={play:async({canvasElement:e})=>{const o=d(e).getByText("Checkbox");await b(o,"renders").toBeTruthy()},render:({children:e,...a})=>n.jsx(l,{...a,children:e}),args:{children:"Checkbox"}},t={play:async({canvasElement:e})=>{const o=d(e).getByText("Checkbox");await b(o,"renders").toBeTruthy()},render:({children:e,...a})=>n.jsx(l,{disabled:!0,...a,children:e}),args:{children:"Checkbox"},argTypes:{defaultChecked:{table:{disable:!0}},labelStyle:{table:{disable:!0}},labelClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},s={render:({...e})=>n.jsx("div",{className:"flex flex-wrap gap-2",children:c.map(a=>n.jsx(l,{color:a,defaultChecked:!0,...e,children:a},a))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}},defaultChecked:{table:{disable:!0}},labelStyle:{table:{disable:!0}},labelClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByText("Checkbox");
    await expect(checkbox, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Checkbox {...rest}>{children}</Checkbox>;
  },
  args: {
    children: "Checkbox"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByText("Checkbox");
    await expect(checkbox, "renders").toBeTruthy();
  },
  render: ({
    children,
    ...rest
  }) => {
    return <Checkbox disabled {...rest}>\r
        {children}\r
      </Checkbox>;
  },
  args: {
    children: "Checkbox"
  },
  argTypes: {
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
    return <div className="flex flex-wrap gap-2">\r
        {availableColors.map(color => <Checkbox color={color} key={color} defaultChecked {...rest}>\r
            {color}\r
          </Checkbox>)}\r
      </div>;
  },
  args: {},
  argTypes: {
    color: {
      table: {
        disable: true
      }
    },
    children: {
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
}`,...s.parameters?.docs?.source}}};const k=["Default","Disabled","Colors"];export{s as Colors,r as Default,t as Disabled,k as __namedExportsOrder,y as default};
