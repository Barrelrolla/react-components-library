import{j as e}from"./iframe-MZB_caGF.js";import{d as s,b as n,a,e as l,c as m,H as c}from"./HeroText-BJFcqUOy.js";import{B as i}from"./Button-DZTzONxe.js";import"./ButtonGroup-0IbGhgEV.js";import{c as p,a as d}from"./index-Ccfv0_tG.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./icons-C6YbZSVv.js";import"./Divider-Df6SaE8Q.js";import"./floating-ui.react-DDLLzMxe.js";const w={title:"Components/Hero",tags:["autodocs"],component:c,subcomponents:{HeroActions:m,HeroImageSection:l,HeroSection:a,HeroTitle:n,HeroText:s},argTypes:{children:{table:{disable:!0}},color:{control:{type:"select"},options:d},textAlign:{control:{type:"inline-radio"}},actionsAlign:{control:{type:"inline-radio"}},responsiveAt:{control:{type:"inline-radio"},options:p},wrapperClasses:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}}},r={render:({...t})=>e.jsx("div",{className:"bg-main",children:e.jsx(c,{...t,children:e.jsxs(a,{children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(m,{children:[e.jsx(i,{children:"action"}),e.jsx(i,{children:"action"})]})]})})})},o={render:({...t})=>e.jsx("div",{className:"bg-main",children:e.jsxs(c,{...t,children:[e.jsxs(a,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(m,{children:[e.jsx(i,{children:"action"}),e.jsx(i,{children:"action"})]})]}),e.jsx(l,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50vw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  }
}`,...o.parameters?.docs?.source}}};const B=["Default","WithImage"];export{r as Default,o as WithImage,B as __namedExportsOrder,w as default};
