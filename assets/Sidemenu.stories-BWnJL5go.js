import{j as s}from"./iframe-wXjdf4Kb.js";import{S as n}from"./Sidemenu-Dmn0-np-.js";import{a as m}from"./index-CikE6BH2.js";import{B as e}from"./Button-DWsuvrTI.js";import{B as u}from"./ButtonGroup-B3x7Hoes.js";import{u as o}from"./useIsMobile-JsJW3NJQ.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./index-DbEQg-CE.js";import"./icons-CNOMk5uR.js";import"./FloatingContext-DyVC0_1Q.js";import"./Divider-CfAUucPC.js";const{expect:c,within:d}=__STORYBOOK_MODULE_TEST__,S={title:"Components/Sidemenu",tags:["autodocs"],component:n,decorators:r=>s.jsx("div",{className:"storybookContainer",children:s.jsx(r,{})}),argTypes:{children:{name:"text"},color:{options:m,control:{type:"select"}}}},a={play:async({canvasElement:r})=>{const i=d(r).getByText("Sidemenu");await c(i,"renders").toBeTruthy()},render:()=>{const r=o();return s.jsx(n,{wrapperClassName:"w-full sm:w-60",children:s.jsxs(u,{variant:"ghost",className:"w-full",vertical:!r,divider:r,children:[s.jsx(e,{wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"Sidemenu"}),s.jsx(e,{wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"item"}),s.jsx(e,{wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"item"}),s.jsx(e,{wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"item"}),s.jsx(e,{wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"item"}),s.jsx(e,{wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"item"}),s.jsx(e,{wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"item"}),s.jsx(e,{selected:!0,wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"item"}),s.jsx(e,{wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"item"}),s.jsx(e,{wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"item"}),s.jsx(e,{wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"item"}),s.jsx(e,{wrapperClassName:"sm:w-full",className:"w-full sm:justify-start",children:"item"})]})})},args:{children:"sidemenu"}},l={render:({...r})=>s.jsx(s.Fragment,{children:m.map(t=>s.jsx(n,{color:t,...r,children:t},t))}),args:{},argTypes:{color:{table:{disable:!0}},children:{table:{disable:!0}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sidemenu = canvas.getByText("Sidemenu");
    await expect(sidemenu, "renders").toBeTruthy();
  },
  render: () => {
    const isMobile = useIsMobile();
    return <Sidemenu wrapperClassName="w-full sm:w-60">\r
        <ButtonGroup variant="ghost" className="w-full" vertical={!isMobile} divider={isMobile}>\r
          <Button wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            Sidemenu\r
          </Button>\r
          <Button wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            item\r
          </Button>\r
          <Button wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            item\r
          </Button>\r
          <Button wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            item\r
          </Button>\r
          <Button wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            item\r
          </Button>\r
          <Button wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            item\r
          </Button>\r
          <Button wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            item\r
          </Button>\r
          <Button selected wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            item\r
          </Button>\r
          <Button wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            item\r
          </Button>\r
          <Button wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            item\r
          </Button>\r
          <Button wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            item\r
          </Button>\r
          <Button wrapperClassName="sm:w-full" className="w-full sm:justify-start">\r
            item\r
          </Button>\r
        </ButtonGroup>\r
        {/* <div>Sidemenu</div>\r
         <div>item</div>\r
         <div>item</div>\r
         <div>item</div>\r
         <div>item</div>\r
         <div>item</div>\r
         <div>item</div>\r
         <div>item</div>\r
         <div>item</div>\r
         <div>item</div>\r
         <div>item</div>\r
         <div>item</div>\r
         <div>item</div>\r
         <div>item</div> */}\r
      </Sidemenu>;
  },
  args: {
    children: "sidemenu"
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const g=["Default","Colors"];export{l as Colors,a as Default,g as __namedExportsOrder,S as default};
