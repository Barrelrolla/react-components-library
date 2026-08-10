import{j as e,r as u}from"./iframe-DnygXqbo.js";import{S as o,a as l,b as a}from"./SidemenuItem-nN-VaVZW.js";import{a as x}from"./index-COUSODbC.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-Bk0e2Nce.js";import"./icons-Clz5e0bR.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-D-Xi89r8.js";import"./Divider-D3dyumf4.js";import"./useIsMobile-NWL8FdQt.js";const{expect:S,within:p}=__STORYBOOK_MODULE_TEST__,A={title:"Components/Sidemenu",tags:["autodocs"],component:o,decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{children:{name:"text"},color:{options:x,control:{type:"select"}}}},m={play:async({canvasElement:t})=>{const n=p(t).getByText("Sidemenu");await S(n,"renders").toBeTruthy()},render:()=>{const[t,r]=u.useState(0),n=Array.from({length:12},(i,s)=>`Item ${s+1}`);return e.jsx("div",{className:"w-full sm:w-auto",children:e.jsx(o,{className:"max-h-100",initialActiveIndex:t,onActiveIndexChange:r,children:e.jsxs(l,{children:[e.jsx(a,{index:0,children:"Sidemenu"}),n.map((i,s)=>e.jsx(a,{index:s+1,children:i},i))]})})})},args:{children:"sidemenu"}},d={play:async({canvasElement:t})=>{const n=p(t).getByText("Sidemenu");await S(n,"renders").toBeTruthy()},render:()=>{const t=Array.from({length:12},(r,n)=>`Item ${n+1}`);return e.jsx("div",{className:"w-full sm:w-auto",children:e.jsx(o,{fillOnSelect:!0,className:"max-h-100",children:e.jsxs(l,{children:[e.jsx(a,{index:0,children:"Sidemenu"}),t.map((r,n)=>e.jsx(a,{index:n+1,children:r},r))]})})})}},c={render:({...t})=>{const r=Array.from({length:3},(n,i)=>`Item ${i+1}`);return e.jsx(e.Fragment,{children:x.map(n=>u.createElement(o,{...t,key:n,color:n,className:"max-h-100"},e.jsx(l,{children:r.map((i,s)=>e.jsx(a,{index:s,children:i},i))})))})},args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidemenu = canvas.getByText("Sidemenu");
    await expect(sidemenu, "renders").toBeTruthy();
  },
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
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
    const items = Array.from({
      length: 12
    }, (_item, index) => "Item" + \` \${index + 1}\`);
    return <div className="w-full sm:w-auto">\r
        <Sidemenu fillOnSelect className="max-h-100">\r
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
}`,...c.parameters?.docs?.source}}};const b=["Default","Fill","Colors"];export{c as Colors,m as Default,d as Fill,b as __namedExportsOrder,A as default};
