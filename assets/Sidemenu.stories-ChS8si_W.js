import{j as e,r as l}from"./iframe-B5jaPjA8.js";import{S as m,a as u,b as d}from"./SidemenuItem-D4Xao8Se.js";import{a as c}from"./index-CikE6BH2.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./useIsMobile-D5_SRNMk.js";import"./icons-DKdFdX5B.js";import"./Button-BduNIiKz.js";import"./FloatingContext-BVu2UwIX.js";import"./ButtonGroup-DQjuQtMG.js";import"./Divider-BHHWRkmj.js";const{expect:x,within:p}=__STORYBOOK_MODULE_TEST__,A={title:"Components/Sidemenu",tags:["autodocs"],component:m,decorators:n=>e.jsx("div",{className:"storybookContainer",children:e.jsx(n,{})}),argTypes:{children:{name:"text"},color:{options:c,control:{type:"select"}}}},t={play:async({canvasElement:n})=>{const a=p(n).getByText("Sidemenu");await x(a,"renders").toBeTruthy()},render:()=>{const[n,r]=l.useState(5),a=Array.from({length:12},(i,o)=>`Item ${o+1}`);return e.jsx("div",{className:"w-full sm:w-auto",children:e.jsx(m,{className:"max-h-100",initialActiveIndex:n,onActiveIndexChange:r,children:e.jsxs(u,{children:[e.jsx(d,{index:0,children:"Sidemenu"}),a.map((i,o)=>e.jsx(d,{index:o+1,children:i},i))]})})})},args:{children:"sidemenu"}},s={render:({...n})=>e.jsx(e.Fragment,{children:c.map(r=>e.jsx(m,{color:r,...n,children:r},r))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    return <>\r
        {availableColors.map(color => <Sidemenu color={color} key={color} {...rest}>\r
            {color}\r
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
}`,...s.parameters?.docs?.source}}};const w=["Default","Colors"];export{s as Colors,t as Default,w as __namedExportsOrder,A as default};
