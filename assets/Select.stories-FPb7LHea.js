import{j as e}from"./iframe-C8KOGUx2.js";import{c as r,d as y,b as s,a as i,S as c}from"./SelectOption-BEOe9FU9.js";import{a as g}from"./index-DttbUWqL.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-BRq2mKe4.js";import"./icons-C8I_aUnW.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-BldbZDxN.js";import"./Divider-CP-4uY48.js";import"./FloatingElementContent-BfnogGtk.js";import"./useIsMobile-DfGPh0Mw.js";import"./Badge-CI2II2jK.js";import"./helpers-KWlkL90F.js";const{expect:m,within:S}=__STORYBOOK_MODULE_TEST__,G={title:"Components/Select",tags:["autodocs"],component:c,subcomponents:{SelectContent:i,SelectGroup:s,SelectGroupTitle:y,SelectOption:r},decorators:n=>e.jsx("div",{className:"storybookContainer",children:e.jsx(n,{})}),args:{name:"select","aria-label":"Select fruit",placeholder:"Select fruit"},argTypes:{"aria-label":{table:{disable:!0}},color:{options:g,control:{type:"select"},table:{category:"controls"}},label:{table:{category:"controls"}},error:{table:{category:"controls"}},multiple:{table:{category:"controls"}},isOpen:{table:{category:"controls"}},placeholder:{table:{category:"controls"}},strategy:{table:{category:"controls"}},placement:{table:{category:"controls"}},disabled:{table:{category:"controls"}},mobileSheet:{table:{category:"controls"}},mobileSheetPlacement:{table:{category:"controls"}},items:{control:!1,table:{category:"docs"}},name:{control:!1,table:{category:"docs"}},onOpenChange:{control:!1,table:{category:"docs"}},initialSelectedIndex:{control:!1,table:{category:"docs"}},initialSelectedIndices:{control:!1,table:{category:"docs"}},onSelectedIndexChange:{control:!1,table:{category:"docs"}},inputRef:{control:!1,table:{category:"docs"}},labelClassName:{control:!1,table:{category:"docs"}},errorClassName:{control:!1,table:{category:"docs"}},wrapperClassName:{control:!1,table:{category:"docs"}},wrapperStyle:{control:!1,table:{category:"docs"}},removeAllItemsAriaLabel:{control:!1,table:{category:"docs"}},removeItemAriaLabel:{control:!1,table:{category:"docs"}}}},l=["Apple","Banana","Cherry","Grape","Kiwi","Mango","Orange","Papaya","Pear","Strawberry"],b={play:async({canvasElement:n})=>{const a=S(n).getByText("Select fruit");await m(a,"renders").toBeTruthy()},render:({...n})=>e.jsx(c,{...n,items:l,children:e.jsxs(i,{children:[e.jsx(y,{children:"Fruits"}),e.jsx(s,{children:l.map((t,a)=>e.jsx(r,{index:a,disabled:a===3,children:t},t))})]})}),args:{}},o={play:async({canvasElement:n})=>{const a=S(n).getByText("Select fruit");await m(a,"renders").toBeTruthy()},render:({...n})=>e.jsx(c,{...n,items:l,children:e.jsxs(i,{children:[e.jsx(y,{children:"Fruits"}),e.jsx(s,{children:l.map((t,a)=>e.jsx(r,{index:a,children:t},t))})]})}),args:{multiple:!0},argTypes:{multiple:{table:{disable:!0}},items:{table:{disable:!0}},name:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},inputRef:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},removeAllItemsAriaLabel:{table:{disable:!0}},removeItemAriaLabel:{table:{disable:!0}}}},d={play:async({canvasElement:n})=>{const a=S(n).getByText("Select fruit");await m(a,"renders").toBeTruthy()},render:({...n})=>e.jsx(c,{...n,items:l,children:e.jsx(i,{children:e.jsx(s,{children:l.map((t,a)=>e.jsx(r,{index:a,children:t},t))})})}),args:{label:"Select"},argTypes:{items:{table:{disable:!0}},name:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},inputRef:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},removeAllItemsAriaLabel:{table:{disable:!0}},removeItemAriaLabel:{table:{disable:!0}}}},u={play:async({canvasElement:n})=>{const a=S(n).getByText("Select fruit");await m(a,"renders").toBeTruthy()},render:({...n})=>e.jsx(c,{...n,items:l,children:e.jsx(i,{children:e.jsx(s,{children:l.map((t,a)=>e.jsx(r,{index:a,children:t},t))})})}),args:{label:"Select",disabled:!0},argTypes:{items:{table:{disable:!0}},disabled:{table:{disable:!0}},name:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},inputRef:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},removeAllItemsAriaLabel:{table:{disable:!0}},removeItemAriaLabel:{table:{disable:!0}}}},p={render:({...n})=>e.jsx(e.Fragment,{children:g.map(t=>e.jsx(c,{label:t,color:t,...n,items:l,children:e.jsx(i,{children:e.jsx(s,{children:l.map((a,x)=>e.jsx(r,{index:x,children:a},a))})})},t))}),argTypes:{items:{table:{disable:!0}},color:{table:{disable:!0}},disabled:{table:{disable:!0}},name:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},initialSelectedIndex:{table:{disable:!0}},initialSelectedIndices:{table:{disable:!0}},onSelectedIndexChange:{table:{disable:!0}},inputRef:{table:{disable:!0}},labelClassName:{table:{disable:!0}},errorClassName:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}},removeAllItemsAriaLabel:{table:{disable:!0}},removeItemAriaLabel:{table:{disable:!0}}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const E=["Default","Multiple","WithLabel","Disabled","Colors"];export{p as Colors,b as Default,u as Disabled,o as Multiple,d as WithLabel,E as __namedExportsOrder,G as default};
