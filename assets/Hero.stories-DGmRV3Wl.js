import{j as e}from"./iframe-CpemLjPm.js";import{d as l}from"./index-DttbUWqL.js";import"./Anchor-bYtcX1ns.js";import"./Badge-Co8xWE66.js";import{B as t}from"./ButtonGroup-CxLLG3mH.js";import"./PopoverTrigger-BiDPcGRO.js";import"./DarkModeToggle-B66pJPp3.js";import"./DarkModeSelector-Dr9FY3q7.js";import{H as s,o as n,p as a,q as p,r as m,s as c}from"./DropdownTrigger-Ct-T0pMT.js";import"./Divider-BQkHCiSY.js";import"./HamburgerButton-BpoWcZfu.js";import"./AutocompleteInput-DhyNwgwe.js";import"./Checkbox-BQnBaDGH.js";import"./RadioGroup-DJEkjqK0.js";import"./TooltipContent-CUE08K7p.js";import"./SidemenuItem-Bo2RdnFM.js";import"./SelectOption-BRqXND_e.js";import"./Skeleton-Dc6pL2zE.js";import"./AutocompleteTrigger-Djkz8oIi.js";import"./Combobox-DPpyekQi.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-CDFVRKfG.js";import"./FloatingElementContent-inUOiRJu.js";import"./useIsMobile-D4Isz1Ul.js";import"./Slot-puw9ipcw.js";import"./helpers-Bu78j2zP.js";import"./getSelectClasses-DPonTTp7.js";const F={title:"Components/Hero",tags:["autodocs"],component:c,subcomponents:{HeroActions:m,HeroImageSection:p,HeroSection:a,HeroTitle:n,HeroText:s},argTypes:{children:{table:{disable:!0}},textAlign:{control:{type:"inline-radio"},table:{category:"controls"}},actionsAlign:{control:{type:"inline-radio"},table:{category:"controls"}},responsiveAt:{control:{type:"inline-radio"},options:l,table:{category:"controls"}},wrapperClassName:{control:!1,table:{category:"docs"}},wrapperStyle:{control:!1,table:{category:"docs"}}}},r={render:({...i})=>e.jsx("div",{className:"bg-main",children:e.jsx(c,{...i,children:e.jsxs(a,{children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(m,{children:[e.jsx(t,{children:"action"}),e.jsx(t,{children:"action"})]})]})})})},o={render:({...i})=>e.jsx("div",{className:"bg-main",children:e.jsxs(c,{...i,children:[e.jsxs(a,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(m,{children:[e.jsx(t,{children:"action"}),e.jsx(t,{children:"action"})]})]}),e.jsx(p,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50vw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]})}),argTypes:{wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
