import{j as e}from"./iframe-k1U2xSHC.js";import{c as r,d as C,b as s,a as i,S as b}from"./SelectOption-CPV1YlKi.js";import{a as h,c as f}from"./index-DttbUWqL.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-CWAI0kFb.js";import"./icons-B4UzUjUo.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-BldbZDxN.js";import"./Divider-CSei7Oeg.js";import"./FloatingElementContent-CI_BPQ-0.js";import"./useIsMobile-5YnFfgaT.js";import"./Badge-B3QV1DSW.js";import"./helpers-BMSh6Jd-.js";const{expect:d,within:c}=__STORYBOOK_MODULE_TEST__,k={title:"Components/Select",tags:["autodocs"],component:b,subcomponents:{SelectContent:i,SelectGroup:s,SelectGroupTitle:C,SelectOption:r},decorators:a=>e.jsx("div",{className:"storybookContainer",children:e.jsx(a,{})}),args:{name:"select","aria-label":"Select fruit",placeholder:"Select fruit"},argTypes:{"aria-label":{table:{disable:!0}},color:{options:h,control:{type:"select"},table:{category:"controls"}},size:{control:{type:"inline-radio"},table:{category:"controls"}},label:{table:{category:"controls"}},error:{table:{category:"controls"}},multiple:{table:{category:"controls"}},isOpen:{table:{category:"controls"}},placeholder:{table:{category:"controls"}},strategy:{table:{category:"controls"}},placement:{table:{category:"controls"}},disabled:{table:{category:"controls"}},mobileSheet:{table:{category:"controls"}},mobileSheetPlacement:{table:{category:"controls"}},items:{control:!1,table:{category:"docs"}},name:{control:!1,table:{category:"docs"}},onOpenChange:{control:!1,table:{category:"docs"}},initialSelectedIndex:{control:!1,table:{category:"docs"}},initialSelectedIndices:{control:!1,table:{category:"docs"}},onSelectedIndexChange:{control:!1,table:{category:"docs"}},inputRef:{control:!1,table:{category:"docs"}},labelClassName:{control:!1,table:{category:"docs"}},errorClassName:{control:!1,table:{category:"docs"}},wrapperClassName:{control:!1,table:{category:"docs"}},wrapperStyle:{control:!1,table:{category:"docs"}},removeAllItemsAriaLabel:{control:!1,table:{category:"docs"}},removeItemAriaLabel:{control:!1,table:{category:"docs"}}}},l=["Apple","Banana","Cherry","Grape","Kiwi","Mango","Orange","Papaya","Pear","Strawberry"],o={play:async({canvasElement:a})=>{const t=c(a).getByText("Select fruit");await d(t,"renders").toBeTruthy()},render:({...a})=>e.jsx(b,{...a,items:l,children:e.jsxs(i,{children:[e.jsx(C,{children:"Fruits"}),e.jsx(s,{children:l.map((n,t)=>e.jsx(r,{index:t,disabled:t===3,children:n},n))})]})}),args:{}},u={play:async({canvasElement:a})=>{const t=c(a).getByText("Select fruit");await d(t,"renders").toBeTruthy()},render:({...a})=>e.jsx(b,{...a,items:l,children:e.jsxs(i,{children:[e.jsx(C,{children:"Fruits"}),e.jsx(s,{children:l.map((n,t)=>e.jsx(r,{index:t,children:n},n))})]})}),args:{multiple:!0},argTypes:{multiple:{table:{disable:!0}},items:{table:{disable:!0}},name:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},inputRef:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},removeAllItemsAriaLabel:{table:{disable:!0}},removeItemAriaLabel:{table:{disable:!0}}}},p={play:async({canvasElement:a})=>{const t=c(a).getByText("Select fruit");await d(t,"renders").toBeTruthy()},render:({...a})=>e.jsx(b,{...a,items:l,children:e.jsx(i,{children:e.jsx(s,{children:l.map((n,t)=>e.jsx(r,{index:t,children:n},n))})})}),args:{label:"Select"},argTypes:{items:{table:{disable:!0}},name:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},inputRef:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},removeAllItemsAriaLabel:{table:{disable:!0}},removeItemAriaLabel:{table:{disable:!0}}}},m={play:async({canvasElement:a})=>{const t=c(a).getByText("Select fruit");await d(t,"renders").toBeTruthy()},render:({...a})=>e.jsx(b,{...a,items:l,children:e.jsx(i,{children:e.jsx(s,{children:l.map((n,t)=>e.jsx(r,{index:t,children:n},n))})})}),args:{label:"Select",error:"Error"},argTypes:{items:{table:{disable:!0}},name:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},inputRef:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},removeAllItemsAriaLabel:{table:{disable:!0}},removeItemAriaLabel:{table:{disable:!0}}}},S={play:async({canvasElement:a})=>{const t=c(a).getByText("Select fruit");await d(t,"renders").toBeTruthy()},render:({...a})=>e.jsx(b,{...a,items:l,children:e.jsx(i,{children:e.jsx(s,{children:l.map((n,t)=>e.jsx(r,{index:t,children:n},n))})})}),args:{label:"Select",disabled:!0},argTypes:{items:{table:{disable:!0}},disabled:{table:{disable:!0}},name:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},inputRef:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},removeAllItemsAriaLabel:{table:{disable:!0}},removeItemAriaLabel:{table:{disable:!0}}}},y={render:({...a})=>e.jsx("div",{className:"grid gap-4",children:f.map(n=>e.jsx(b,{label:n,size:n,...a,items:l,children:e.jsx(i,{children:e.jsx(s,{children:l.map((t,x)=>e.jsx(r,{index:x,children:t},t))})})},n))}),argTypes:{items:{table:{disable:!0}},size:{table:{disable:!0}},label:{table:{disable:!0}},disabled:{table:{disable:!0}},name:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},inputRef:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},removeAllItemsAriaLabel:{table:{disable:!0}},removeItemAriaLabel:{table:{disable:!0}}}},g={render:({...a})=>e.jsx(e.Fragment,{children:h.map(n=>e.jsx(b,{label:n,color:n,...a,items:l,children:e.jsx(i,{children:e.jsx(s,{children:l.map((t,x)=>e.jsx(r,{index:x,children:t},t))})})},n))}),argTypes:{items:{table:{disable:!0}},color:{table:{disable:!0}},disabled:{table:{disable:!0}},name:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},inputRef:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},removeAllItemsAriaLabel:{table:{disable:!0}},removeItemAriaLabel:{table:{disable:!0}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select fruit");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    return <Select {...rest} items={fruits}>\r
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
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select fruit");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    return <Select {...rest} items={fruits}>\r
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
  args: {
    multiple: true
  },
  argTypes: {
    multiple: {
      table: {
        disable: true
      }
    },
    items: {
      table: {
        disable: true
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    onOpenChange: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    inputRef: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    },
    removeAllItemsAriaLabel: {
      table: {
        disable: true
      }
    },
    removeItemAriaLabel: {
      table: {
        disable: true
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select fruit");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    return <Select {...rest} items={fruits}>\r
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
  args: {
    label: "Select"
  },
  argTypes: {
    items: {
      table: {
        disable: true
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    onOpenChange: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    inputRef: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    },
    removeAllItemsAriaLabel: {
      table: {
        disable: true
      }
    },
    removeItemAriaLabel: {
      table: {
        disable: true
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select fruit");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    return <Select {...rest} items={fruits}>\r
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
  args: {
    label: "Select",
    error: "Error"
  },
  argTypes: {
    items: {
      table: {
        disable: true
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    onOpenChange: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    inputRef: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    },
    removeAllItemsAriaLabel: {
      table: {
        disable: true
      }
    },
    removeItemAriaLabel: {
      table: {
        disable: true
      }
    }
  }
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select fruit");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    return <Select {...rest} items={fruits}>\r
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
  args: {
    label: "Select",
    disabled: true
  },
  argTypes: {
    items: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    onOpenChange: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    inputRef: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    },
    removeAllItemsAriaLabel: {
      table: {
        disable: true
      }
    },
    removeItemAriaLabel: {
      table: {
        disable: true
      }
    }
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <div className="grid gap-4">\r
        {availableSizes.map(size => <Select label={size} size={size} key={size} {...rest} items={fruits}>\r
            <SelectContent>\r
              <SelectGroup>\r
                {fruits.map((fruit, index) => {
              return <SelectOption key={fruit} index={index}>\r
                      {fruit}\r
                    </SelectOption>;
            })}\r
              </SelectGroup>\r
            </SelectContent>\r
          </Select>)}\r
      </div>;
  },
  argTypes: {
    items: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    },
    label: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    onOpenChange: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    inputRef: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    },
    removeAllItemsAriaLabel: {
      table: {
        disable: true
      }
    },
    removeItemAriaLabel: {
      table: {
        disable: true
      }
    }
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => <Select label={color} color={color} key={color} {...rest} items={fruits}>\r
            <SelectContent>\r
              <SelectGroup>\r
                {fruits.map((fruit, index) => {
              return <SelectOption key={fruit} index={index}>\r
                      {fruit}\r
                    </SelectOption>;
            })}\r
              </SelectGroup>\r
            </SelectContent>\r
          </Select>)}\r
      </>;
  },
  argTypes: {
    items: {
      table: {
        disable: true
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    onOpenChange: {
      table: {
        disable: true
      }
    },
    initialSelectedIndex: {
      table: {
        disable: true
      }
    },
    initialSelectedIndices: {
      table: {
        disable: true
      }
    },
    onSelectedIndexChange: {
      table: {
        disable: true
      }
    },
    inputRef: {
      table: {
        disable: true
      }
    },
    labelClassName: {
      table: {
        disable: true
      }
    },
    errorClassName: {
      table: {
        disable: true
      }
    },
    wrapperClassName: {
      table: {
        disable: true
      }
    },
    wrapperStyle: {
      table: {
        disable: true
      }
    },
    removeAllItemsAriaLabel: {
      table: {
        disable: true
      }
    },
    removeItemAriaLabel: {
      table: {
        disable: true
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const z=["Default","Multiple","WithLabel","WithError","Disabled","Sizes","Colors"];export{g as Colors,o as Default,S as Disabled,u as Multiple,y as Sizes,m as WithError,p as WithLabel,z as __namedExportsOrder,k as default};
