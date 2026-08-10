import{j as e}from"./iframe-seTiTV_v.js";import{S as o,a as i,b as d,c as p,d as g}from"./SelectOption-DKn4XGZp.js";import{a as T}from"./index-COUSODbC.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-cvsoB710.js";import"./icons-D9XKdwam.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-D-Xi89r8.js";import"./Divider-DXQtVhka.js";import"./FloatingElementContent-DqORj6EY.js";import"./useIsMobile-BPT4M8Vw.js";import"./getSelectClasses-BWZGqEYj.js";import"./Badge-CKO4wwAY.js";import"./helpers-DuDVA4ff.js";const{expect:y,within:h}=__STORYBOOK_MODULE_TEST__,L={title:"Components/Select",tags:["autodocs"],component:o,decorators:r=>e.jsx("div",{className:"storybookContainer",children:e.jsx(r,{})}),argTypes:{children:{name:"text"},color:{options:T,control:{type:"select"}}}},l=["Apple","Banana","Cherry","Grape","Kiwi","Mango","Orange","Papaya","Pear","Strawberry"],u={play:async({canvasElement:r})=>{const t=h(r).getByText("Select...");await y(t,"renders").toBeTruthy()},render:({color:r,error:n,disabled:t,...a})=>e.jsx(o,{"aria-label":"select",color:r,error:n,disabled:t,name:"select",...a,items:l,children:e.jsxs(i,{children:[e.jsx(g,{children:"Fruits"}),e.jsx(d,{children:l.map((s,c)=>e.jsx(p,{index:c,disabled:c===3,children:s},s))})]})}),args:{}},m={play:async({canvasElement:r})=>{const t=h(r).getByText("Select fruit");await y(t,"renders").toBeTruthy()},render:({color:r,error:n,disabled:t,...a})=>e.jsx(o,{"aria-label":"select-multiple",color:r,error:n,disabled:t,name:"select",...a,placeholder:"Select fruit",multiple:!0,items:l,children:e.jsxs(i,{children:[e.jsx(g,{children:"Fruits"}),e.jsx(d,{children:l.map((s,c)=>e.jsx(p,{index:c,children:s},s))})]})}),argTypes:{multiple:{table:{disable:!0}}},args:{}},S={play:async({canvasElement:r})=>{const t=h(r).getByText("Select...");await y(t,"renders").toBeTruthy()},render:({color:r,error:n,disabled:t,...a})=>e.jsx(o,{color:r,error:n,disabled:t,label:"Select",name:"select",...a,items:l,children:e.jsx(i,{children:e.jsx(d,{children:l.map((s,c)=>e.jsx(p,{index:c,children:s},s))})})}),args:{}},x={play:async({canvasElement:r})=>{const t=h(r).getByText("Select...");await y(t,"renders").toBeTruthy()},render:({color:r,error:n,...t})=>e.jsx(o,{color:r,error:n,disabled:!0,label:"Select",name:"select",...t,items:l,children:e.jsx(i,{children:e.jsx(d,{children:l.map((a,s)=>e.jsx(p,{index:s,children:a},a))})})}),argTypes:{disabled:{table:{disable:!0}}},args:{}},b={render:({...r})=>e.jsx(e.Fragment,{children:T.map(n=>e.jsx(o,{label:n,color:n,...r,items:["option"],children:e.jsx(i,{children:e.jsx(d,{children:e.jsx(p,{index:0,value:"option",children:"option"})})})},n))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    return <Select aria-label="select" color={color} error={error} disabled={disabled} name="select" {...rest} items={fruits}>\r
        <SelectContent>\r
          <SelectGroupTitle>Fruits</SelectGroupTitle>\r
          <SelectGroup>\r
            {fruits.map((fruit, index) => {
            return <SelectOption key={fruit} index={index} disabled={index === 3}>\r
                  {fruit}\r
                </SelectOption>;
          })}\r
          </SelectGroup>\r
        </SelectContent>\r
      </Select>;
  },
  args: {}
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select fruit");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({
    color,
    error,
    disabled,
    ...rest
  }) => {
    return <Select aria-label="select-multiple" color={color} error={error} disabled={disabled} name="select" {...rest} placeholder="Select fruit" multiple items={fruits}>\r
        <SelectContent>\r
          <SelectGroupTitle>Fruits</SelectGroupTitle>\r
          <SelectGroup>\r
            {fruits.map((fruit, index) => {
            return <SelectOption key={fruit} index={index}>\r
                  {fruit}\r
                </SelectOption>;
          })}\r
          </SelectGroup>\r
        </SelectContent>\r
      </Select>;
  },
  argTypes: {
    multiple: {
      table: {
        disable: true
      }
    }
  },
  args: {}
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    return <Select color={color} error={error} disabled={disabled} label="Select" name="select" {...rest} items={fruits}>\r
        <SelectContent>\r
          <SelectGroup>\r
            {fruits.map((fruit, index) => {
            return <SelectOption key={fruit} index={index}>\r
                  {fruit}\r
                </SelectOption>;
          })}\r
          </SelectGroup>\r
        </SelectContent>\r
      </Select>;
  },
  args: {}
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    ...rest
  }) => {
    return <Select color={color} error={error} disabled label="Select" name="select" {...rest} items={fruits}>\r
        <SelectContent>\r
          <SelectGroup>\r
            {fruits.map((fruit, index) => {
            return <SelectOption key={fruit} index={index}>\r
                  {fruit}\r
                </SelectOption>;
          })}\r
          </SelectGroup>\r
        </SelectContent>\r
      </Select>;
  },
  argTypes: {
    disabled: {
      table: {
        disable: true
      }
    }
  },
  args: {}
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => <Select label={color} color={color} key={color} {...rest} items={["option"]}>\r
            <SelectContent>\r
              <SelectGroup>\r
                <SelectOption index={0} value={"option"}>\r
                  option\r
                </SelectOption>\r
              </SelectGroup>\r
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
}`,...b.parameters?.docs?.source}}};const K=["Default","Multiple","WithLabel","Disabled","Colors"];export{b as Colors,u as Default,x as Disabled,m as Multiple,S as WithLabel,K as __namedExportsOrder,L as default};
