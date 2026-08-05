import{j as e}from"./iframe-DCjAJg5B.js";import{u as b,S as i,a as s}from"./SelectOption-CA3U0s91.js";import{a as p}from"./index-COUSODbC.js";import{F as v}from"./FloatingElementContent-BldKVV4G.js";import{b as y}from"./FloatingContext-BO2a_1wd.js";import{u as g}from"./useIsMobile-CwD7tomY.js";import{g as O}from"./helpers-SWSGHJaD.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-BldbZDxN.js";import"./icons-0oWFvTNH.js";import"./bundle-mjs-Ct12j0u0.js";function d({style:t,children:n,...r}){const o=b(),S=g();if(!o)throw new Error("Please use the Select Content only inside a Select component!");const h=o.data.elements.domReference?.clientWidth||0,x={...t,width:S?void 0:h};return e.jsx(v,{context:o,getClasses:O,style:x,...r,children:e.jsx(y,{elementsRef:o.listRef,labelsRef:o.labelsRef,children:e.jsx("ul",{children:n})})})}d.__docgenInfo={description:"",methods:[],displayName:"SelectContent"};const{expect:m,within:u}=__STORYBOOK_MODULE_TEST__,L={title:"Components/Select",tags:["autodocs"],component:i,decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{children:{name:"text"},color:{options:p,control:{type:"select"}}}},l={play:async({canvasElement:t})=>{const r=u(t).getByText("Select...");await m(r,"renders").toBeTruthy()},render:({color:t,error:n,disabled:r,...o})=>e.jsx(i,{color:t,error:n,disabled:r,name:"select",...o,children:e.jsxs(d,{children:[e.jsx(s,{value:"one",children:"One"}),e.jsx(s,{disabled:!0,value:"two",children:"Two"}),e.jsx(s,{value:"three",children:"Three"})]})}),args:{}},a={play:async({canvasElement:t})=>{const r=u(t).getByText("Select...");await m(r,"renders").toBeTruthy()},render:({color:t,error:n,disabled:r,...o})=>e.jsx(i,{color:t,error:n,disabled:r,label:"Select",name:"select",...o,children:e.jsxs(d,{children:[e.jsx(s,{value:"one",children:"One"}),e.jsx(s,{disabled:!0,value:"two",children:"Two"}),e.jsx(s,{value:"three",children:"Three"})]})}),args:{}},c={render:({...t})=>e.jsx(e.Fragment,{children:p.map(n=>e.jsx(i,{label:n,color:n,...t,children:e.jsx(d,{children:e.jsx(s,{value:"option",children:"option"})})},n))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const M=["Default","WithLabel","Colors"];export{c as Colors,l as Default,a as WithLabel,M as __namedExportsOrder,L as default};
