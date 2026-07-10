import{j as e}from"./iframe-BSlgQXjc.js";import{d as s,b as n,a,e as H,c as m,H as c}from"./HeroText-D5Vw0FsY.js";import{B as i}from"./Button-C9ZbTKC8.js";import"./ButtonGroup-BWsX_s6I.js";import{c as g,a as j}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";import"./icons-B0NrFHDQ.js";import"./Divider-DdxXIhoD.js";const L={title:"Components/Hero",tags:["autodocs"],component:c,subcomponents:{HeroActions:m,HeroImageSection:H,HeroSection:a,HeroTitle:n,HeroText:s},argTypes:{children:{table:{disable:!0}},color:{control:{type:"select"},options:j},textAlign:{control:{type:"inline-radio"}},actionsAlign:{control:{type:"inline-radio"}},responsiveAt:{control:{type:"inline-radio"},options:g},wrapperClasses:{table:{disable:!0}},wrapperStyle:{table:{disable:!0}}}},r={render:({...t})=>e.jsx("div",{className:"bg-main",children:e.jsx(c,{...t,children:e.jsxs(a,{children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(m,{children:[e.jsx(i,{children:"action"}),e.jsx(i,{children:"action"})]})]})})})},o={render:({...t})=>e.jsx("div",{className:"bg-main",children:e.jsxs(c,{...t,children:[e.jsxs(a,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(n,{children:"Lorem ipsum dolor sit amet."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(m,{children:[e.jsx(i,{children:"action"}),e.jsx(i,{children:"action"})]})]}),e.jsx(H,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50vw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]})})};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const f=["Default","WithImage"];export{r as Default,o as WithImage,f as __namedExportsOrder,L as default};
