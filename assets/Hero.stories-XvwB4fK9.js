import{j as e}from"./iframe-DkV00Eji.js";import{d as l}from"./index-DttbUWqL.js";import"./Anchor-BCVEYjdO.js";import"./Badge-B0hgzdTf.js";import{B as t}from"./ButtonGroup-DkDPmCEJ.js";import"./PopoverTrigger-PhB3VjEU.js";import"./DarkModeToggle-O43ceUj3.js";import"./DarkModeSelector-BVT9MYdt.js";import{H as s,o as n,p as a,q as p,r as m,s as c}from"./DropdownTrigger-DK647_WD.js";import"./Divider-C8B2a_bR.js";import"./HamburgerButton-Cjb6VuBq.js";import"./AutocompleteInput-Bpi6abCq.js";import"./Checkbox-B6Hj7WrL.js";import"./RadioGroup-BJfwS5HL.js";import"./TooltipContent-DDRQzLUP.js";import"./SidemenuItem-CdbzwD7n.js";import"./SelectOption-DebHXGPH.js";import"./Skeleton-CbgCG-Sw.js";import"./AutocompleteTrigger-BpOUadtC.js";import"./Combobox-BD3VQY1i.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-BXr59Awb.js";import"./FloatingElementContent-Cl0oX9qF.js";import"./useIsMobile-CLzWy3IZ.js";import"./Slot-BAM__hAi.js";import"./helpers-MrnSjZQp.js";import"./getSelectClasses-C3fsFZGJ.js";const F={title:"Components/Hero",tags:["autodocs"],component:c,subcomponents:{HeroActions:m,HeroImageSection:p,HeroSection:a,HeroTitle:n,HeroText:s},argTypes:{children:{table:{disable:!0}},textAlign:{control:{type:"inline-radio"},table:{category:"controls"}},actionsAlign:{control:{type:"inline-radio"},table:{category:"controls"}},responsiveAt:{control:{type:"inline-radio"},options:l,table:{category:"controls"}},wrapperClassName:{control:!1,table:{category:"docs"}},wrapperStyle:{control:!1,table:{category:"docs"}}}},r={render:({...i})=>e.jsx("div",{className:"bg-main",children:e.jsx(c,{...i,children:e.jsxs(a,{children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(m,{children:[e.jsx(t,{children:"action"}),e.jsx(t,{children:"action"})]})]})})})},o={render:({...i})=>e.jsx("div",{className:"bg-main",children:e.jsxs(c,{...i,children:[e.jsxs(a,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(m,{children:[e.jsx(t,{children:"action"}),e.jsx(t,{children:"action"})]})]}),e.jsx(p,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50vw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]})}),argTypes:{wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => {
    return <div className="bg-main">\r
        <Hero {...props}>\r
          <HeroSection>\r
            <HeroTitle>Lorem ipsum dolor sit amet.</HeroTitle>\r
            <HeroText>\r
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore\r
              ex, corporis rem dolores culpa quo corrupti doloremque minima\r
              excepturi molestiae.\r
            </HeroText>\r
            <HeroActions>\r
              <Button>action</Button>\r
              <Button>action</Button>\r
            </HeroActions>\r
          </HeroSection>\r
        </Hero>\r
      </div>;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => {
    return <div className="bg-main">\r
        <Hero {...props}>\r
          <HeroSection className="max-md:h-1/2 md:w-1/2">\r
            <HeroTitle>Lorem ipsum dolor sit amet.</HeroTitle>\r
            <HeroText>\r
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore\r
              ex, corporis rem dolores culpa quo corrupti doloremque minima\r
              excepturi molestiae.\r
            </HeroText>\r
            <HeroActions>\r
              <Button>action</Button>\r
              <Button>action</Button>\r
            </HeroActions>\r
          </HeroSection>\r
          <HeroImageSection className="max-md:h-1/2 md:w-1/2">\r
            <img className="hero-image md:w-[50vw]" src="https://picsum.photos/1400/1400" alt="placeholder image" />\r
          </HeroImageSection>\r
        </Hero>\r
      </div>;
  },
  argTypes: {
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
}`,...o.parameters?.docs?.source}}};const G=["Default","WithImage"];export{r as Default,o as WithImage,G as __namedExportsOrder,F as default};
