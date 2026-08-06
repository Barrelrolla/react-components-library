import{j as e}from"./iframe-DjrizWL9.js";import{S as c,a as o}from"./SelectOption-DXzLLyPL.js";import{a as p}from"./index-COUSODbC.js";import{S as d}from"./SelectContent-B0qM7gX2.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-DoHF2o8H.js";import"./icons-BGFAW_Lx.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-BldbZDxN.js";import"./Divider-BvYcTTEa.js";import"./FloatingElementContent-JERVoKqN.js";import"./useIsMobile-BX4diqlI.js";import"./helpers-DdlamiXa.js";const{expect:m,within:u}=__STORYBOOK_MODULE_TEST__,E={title:"Components/Select",tags:["autodocs"],component:c,decorators:n=>e.jsx("div",{className:"storybookContainer",children:e.jsx(n,{})}),argTypes:{children:{name:"text"},color:{options:p,control:{type:"select"}}}},a={play:async({canvasElement:n})=>{const r=u(n).getByText("Select...");await m(r,"renders").toBeTruthy()},render:({color:n,error:t,disabled:r,...i})=>e.jsx(c,{color:n,error:t,disabled:r,name:"select",...i,children:e.jsxs(d,{children:[e.jsx(o,{value:"one",children:"One"}),e.jsx(o,{disabled:!0,value:"two",children:"Two"}),e.jsx(o,{value:"three",children:"Three"})]})}),args:{}},l={play:async({canvasElement:n})=>{const r=u(n).getByText("Select...");await m(r,"renders").toBeTruthy()},render:({color:n,error:t,disabled:r,...i})=>e.jsx(c,{color:n,error:t,disabled:r,label:"Select",name:"select",...i,children:e.jsxs(d,{children:[e.jsx(o,{value:"one",children:"One"}),e.jsx(o,{disabled:!0,value:"two",children:"Two"}),e.jsx(o,{value:"three",children:"Three"})]})}),args:{}},s={render:({...n})=>e.jsx(e.Fragment,{children:p.map(t=>e.jsx(c,{label:t,color:t,...n,children:e.jsx(d,{children:e.jsx(o,{value:"option",children:"option"})})},t))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select...");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({
    color,
    error,
    disabled,
    ...rest
  }) => {
    return <Select color={color} error={error} disabled={disabled} name="select" {...rest}>\r
        <SelectContent>\r
          <SelectOption value={"one"}>One</SelectOption>\r
          <SelectOption disabled value={"two"}>\r
            Two\r
          </SelectOption>\r
          <SelectOption value={"three"}>Three</SelectOption>\r
        </SelectContent>\r
      </Select>;
  },
  args: {}
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select...");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({
    color,
    error,
    disabled,
    ...rest
  }) => {
    return <Select color={color} error={error} disabled={disabled} label="Select" name="select" {...rest}>\r
        <SelectContent>\r
          <SelectOption value={"one"}>One</SelectOption>\r
          <SelectOption disabled value={"two"}>\r
            Two\r
          </SelectOption>\r
          <SelectOption value={"three"}>Three</SelectOption>\r
        </SelectContent>\r
      </Select>;
  },
  args: {}
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => <Select label={color} color={color} key={color} {...rest}>\r
            <SelectContent>\r
              <SelectOption value={"option"}>option</SelectOption>\r
            </SelectContent>\r
          </Select>)}\r
      </>;
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
    }
  }
}`,...s.parameters?.docs?.source}}};const _=["Default","WithLabel","Colors"];export{s as Colors,a as Default,l as WithLabel,_ as __namedExportsOrder,E as default};
