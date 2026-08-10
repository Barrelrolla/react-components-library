import{j as e}from"./iframe-seTiTV_v.js";import{d as s,b as n,a,e as l,c as m,H as c}from"./HeroText-Cepi5NkA.js";import{B as i}from"./ButtonGroup-cvsoB710.js";import{c as p}from"./index-COUSODbC.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-D9XKdwam.js";import"./cssColorProps-D-Xi89r8.js";import"./Divider-DXQtVhka.js";const S={title:"Components/Hero",tags:["autodocs"],component:c,subcomponents:{HeroActions:m,HeroImageSection:l,HeroSection:a,HeroTitle:n,HeroText:s},argTypes:{children:{table:{disable:!0}},textAlign:{control:{type:"inline-radio"}},actionsAlign:{control:{type:"inline-radio"}},responsiveAt:{control:{type:"inline-radio"},options:p},wrapperClassName:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}}},r={render:({...t})=>e.jsx("div",{className:"bg-main",children:e.jsx(c,{...t,children:e.jsxs(a,{children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(m,{children:[e.jsx(i,{children:"action"}),e.jsx(i,{children:"action"})]})]})})})},o={render:({...t})=>e.jsx("div",{className:"bg-main",children:e.jsxs(c,{...t,children:[e.jsxs(a,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(m,{children:[e.jsx(i,{children:"action"}),e.jsx(i,{children:"action"})]})]}),e.jsx(l,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50vw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const v=["Default","WithImage"];export{r as Default,o as WithImage,v as __namedExportsOrder,S as default};
