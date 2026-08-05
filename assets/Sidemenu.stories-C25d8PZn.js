import{j as e,r as l}from"./iframe-DCjAJg5B.js";import{S as o,a as u,b as a}from"./SidemenuItem-ZbgaGZ10.js";import{a as x}from"./index-COUSODbC.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsMobile-CwD7tomY.js";import"./icons-0oWFvTNH.js";import"./bundle-mjs-Ct12j0u0.js";import"./Button-DsEq-CQ3.js";import"./cssColorProps-BldbZDxN.js";import"./FloatingContext-BO2a_1wd.js";import"./ButtonGroup-df_20-Fx.js";import"./Divider-Dlv50YdB.js";const{expect:S,within:p}=__STORYBOOK_MODULE_TEST__,N={title:"Components/Sidemenu",tags:["autodocs"],component:o,decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{children:{name:"text"},color:{options:x,control:{type:"select"}}}},m={play:async({canvasElement:t})=>{const r=p(t).getByText("Sidemenu");await S(r,"renders").toBeTruthy()},render:()=>{const[t,s]=l.useState(5),r=Array.from({length:12},(n,i)=>`Item ${i+1}`);return e.jsx("div",{className:"w-full sm:w-auto",children:e.jsx(o,{className:"max-h-100",initialActiveIndex:t,onActiveIndexChange:s,children:e.jsxs(u,{children:[e.jsx(a,{index:0,children:"Sidemenu"}),r.map((n,i)=>e.jsx(a,{index:i+1,children:n},n))]})})})},args:{children:"sidemenu"}},d={play:async({canvasElement:t})=>{const r=p(t).getByText("Sidemenu");await S(r,"renders").toBeTruthy()},render:()=>{const[t,s]=l.useState(5),r=Array.from({length:12},(n,i)=>`Item ${i+1}`);return e.jsx("div",{className:"w-full sm:w-auto",children:e.jsx(o,{fillOnSelect:!0,className:"max-h-100",initialActiveIndex:t,onActiveIndexChange:s,children:e.jsxs(u,{children:[e.jsx(a,{index:0,children:"Sidemenu"}),r.map((n,i)=>e.jsx(a,{index:i+1,children:n},n))]})})})},args:{children:"sidemenu"}},c={render:({...t})=>{const s=Array.from({length:3},(r,n)=>`Item ${n+1}`);return e.jsx(e.Fragment,{children:x.map(r=>l.createElement(o,{...t,key:r,color:r,className:"max-h-100"},e.jsx(u,{children:s.map((n,i)=>e.jsx(a,{index:i,children:n},n))})))})},args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidemenu = canvas.getByText("Sidemenu");
    await expect(sidemenu, "renders").toBeTruthy();
  },
  render: () => {
    const [activeIndex, setActiveIndex] = useState(5);
    const items = Array.from({
      length: 12
    }, (_item, index) => "Item" + \` \${index + 1}\`);
    return <div className="w-full sm:w-auto">\r
        <Sidemenu className="max-h-100" initialActiveIndex={activeIndex} onActiveIndexChange={setActiveIndex}>\r
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
    children: "sidemenu"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidemenu = canvas.getByText("Sidemenu");
    await expect(sidemenu, "renders").toBeTruthy();
  },
  render: () => {
    const [activeIndex, setActiveIndex] = useState(5);
    const items = Array.from({
      length: 12
    }, (_item, index) => "Item" + \` \${index + 1}\`);
    return <div className="w-full sm:w-auto">\r
        <Sidemenu fillOnSelect className="max-h-100" initialActiveIndex={activeIndex} onActiveIndexChange={setActiveIndex}>\r
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
    children: "sidemenu"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const C=["Default","Fill","Colors"];export{c as Colors,m as Default,d as Fill,C as __namedExportsOrder,N as default};
