import{j as e}from"./iframe-CDHsy3Ml.js";import{S as i,a as d,b as o}from"./SidemenuItem-D3ZyAOB-.js";import{a as m}from"./index-CikE6BH2.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./useIsMobile-BX6WO052.js";import"./index-CmwpRwF-.js";import"./Button-CVFIN_5P.js";import"./icons-BCm9C10O.js";import"./FloatingContext-Ci8s2TSX.js";import"./ButtonGroup-Blk0HI9n.js";import"./Divider-CfjUBzdH.js";const{expect:c,within:l}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Sidemenu",tags:["autodocs"],component:i,decorators:r=>e.jsx("div",{className:"storybookContainer",children:e.jsx(r,{})}),argTypes:{children:{name:"text"},color:{options:m,control:{type:"select"}}}},s={play:async({canvasElement:r})=>{const t=l(r).getByText("Sidemenu");await c(t,"renders").toBeTruthy()},render:()=>{const r=Array.from({length:12},(n,t)=>`Item ${t+1}`);return e.jsx(i,{wrapperClassName:"w-full sm:w-60",children:e.jsxs(d,{children:[e.jsx(o,{index:0,children:"Sidemenu"}),r.map((n,t)=>e.jsx(o,{index:t+1,children:n},n))]})})},args:{children:"sidemenu"}},a={render:({...r})=>e.jsx(e.Fragment,{children:m.map(n=>e.jsx(i,{color:n,...r,children:n},n))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    return <Sidemenu wrapperClassName="w-full sm:w-60">\r
        <SidemenuSection>\r
          <SidemenuItem index={0}>Sidemenu</SidemenuItem>\r
          {items.map((item, index) => {
          return <SidemenuItem key={item} index={index + 1}>\r
                {item}\r
              </SidemenuItem>;
        })}\r
        </SidemenuSection>\r
      </Sidemenu>;
  },
  args: {
    children: "sidemenu"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const v=["Default","Colors"];export{a as Colors,s as Default,v as __namedExportsOrder,_ as default};
