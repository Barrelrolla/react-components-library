import{j as e,r as x}from"./iframe-U_biKzM6.js";import{S as d,a as i,b as c}from"./SidemenuItem-fiwAYN41.js";import{a as p}from"./index-DttbUWqL.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsMobile-DAPHmQmE.js";import"./icons-BtA_GlKR.js";import"./bundle-mjs-Ct12j0u0.js";import"./ButtonGroup-DBwaBVrY.js";import"./cssColorProps-D-Xi89r8.js";import"./Divider-BksbvRpE.js";const{expect:S,within:b}=__STORYBOOK_MODULE_TEST__,N={title:"Components/Sidemenu",tags:["autodocs"],component:c,subcomponents:{SidemenuItem:i,SidemenuSection:d},decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{color:{options:p,control:{type:"select"},table:{category:"controls"}},fillOnSelect:{control:{type:"boolean"},table:{category:"controls"}},initialActiveIndex:{control:!1,table:{category:"docs"}},onActiveIndexChange:{control:!1,table:{category:"docs"}},wrapperClassName:{control:!1,table:{category:"docs"}},wrapperStyle:{control:!1,table:{category:"docs"}}}},l={play:async({canvasElement:t})=>{const n=b(t).getByText("Sidemenu");await S(n,"renders").toBeTruthy()},render:({...t})=>{const[a,n]=x.useState(0),r=Array.from({length:12},(s,u)=>`Item ${u+1}`);return e.jsx("div",{className:"w-full sm:w-auto",children:e.jsx(c,{className:"max-h-100",initialActiveIndex:a,onActiveIndexChange:n,...t,children:e.jsxs(d,{children:[e.jsx(i,{index:0,children:"Sidemenu"}),r.map((s,u)=>e.jsx(i,{index:u+1,children:s},s))]})})})}},m={play:async({canvasElement:t})=>{const n=b(t).getByText("Sidemenu");await S(n,"renders").toBeTruthy()},render:({...t})=>{const a=Array.from({length:12},(n,r)=>`Item ${r+1}`);return e.jsx("div",{className:"w-full sm:w-auto",children:e.jsx(c,{className:"max-h-100",...t,children:e.jsxs(d,{children:[e.jsx(i,{index:0,children:"Sidemenu"}),a.map((n,r)=>e.jsx(i,{index:r+1,children:n},n))]})})})},args:{fillOnSelect:!0},argTypes:{fillOnSelect:{table:{disable:!0}},initialActiveIndex:{table:{disable:!0}},onActiveIndexChange:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}}},o={render:({...t})=>{const a=Array.from({length:3},(n,r)=>`Item ${r+1}`);return e.jsx(e.Fragment,{children:p.map(n=>x.createElement(c,{...t,key:n,color:n,className:"max-h-100"},e.jsx(d,{children:a.map((r,s)=>e.jsx(i,{index:s,children:r},r))})))})},argTypes:{color:{table:{disable:!0}},initialActiveIndex:{table:{disable:!0}},onActiveIndexChange:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidemenu = canvas.getByText("Sidemenu");
    await expect(sidemenu, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = Array.from({
      length: 12
    }, (_item, index) => "Item" + \` \${index + 1}\`);
    return <div className="w-full sm:w-auto">\r
        <Sidemenu className="max-h-100" initialActiveIndex={activeIndex} onActiveIndexChange={setActiveIndex} {...rest}>\r
          <SidemenuSection>\r
            <SidemenuItem index={0}>Sidemenu</SidemenuItem>\r
            {items.map((item, index) => {
            return <SidemenuItem key={item} index={index + 1}>\r
                  {item}\r
                </SidemenuItem>;
          })}\r
          </SidemenuSection>\r
        </Sidemenu>\r
      </div>;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidemenu = canvas.getByText("Sidemenu");
    await expect(sidemenu, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    const items = Array.from({
      length: 12
    }, (_item, index) => "Item" + \` \${index + 1}\`);
    return <div className="w-full sm:w-auto">\r
        <Sidemenu className="max-h-100" {...rest}>\r
          <SidemenuSection>\r
            <SidemenuItem index={0}>Sidemenu</SidemenuItem>\r
            {items.map((item, index) => {
            return <SidemenuItem key={item} index={index + 1}>\r
                  {item}\r
                </SidemenuItem>;
          })}\r
          </SidemenuSection>\r
        </Sidemenu>\r
      </div>;
  },
  args: {
    fillOnSelect: true
  },
  argTypes: {
    fillOnSelect: {
      table: {
        disable: true
      }
    },
    initialActiveIndex: {
      table: {
        disable: true
      }
    },
    onActiveIndexChange: {
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
    }
  }
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    const items = Array.from({
      length: 3
    }, (_item, index) => "Item" + \` \${index + 1}\`);
    return <>\r
        {availableColors.map(color => <Sidemenu {...rest} key={color} color={color} className="max-h-100">\r
            <SidemenuSection>\r
              {items.map((item, index) => {
            return <SidemenuItem key={item} index={index}>\r
                    {item}\r
                  </SidemenuItem>;
          })}\r
            </SidemenuSection>\r
          </Sidemenu>)}\r
      </>;
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    },
    initialActiveIndex: {
      table: {
        disable: true
      }
    },
    onActiveIndexChange: {
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
    }
  }
}`,...o.parameters?.docs?.source}}};const T=["Default","Fill","Colors"];export{o as Colors,l as Default,m as Fill,T as __namedExportsOrder,N as default};
