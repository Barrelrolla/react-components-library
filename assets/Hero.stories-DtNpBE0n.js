import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{H as n,a as s,b as m,c as H,d as a,e as c}from"./HeroText-sV3Y1aDb.js";import{B as i}from"./Button-CC5nJJLb.js";import"./ButtonGroup-BQv0KfiH.js";import"./bundle-mjs-CFgYV38x.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icons-De-RwRHq.js";import"./Divider-C9_WKfr7.js";const w={title:"Components/Hero",tags:["autodocs"],component:c,subcomponents:{HeroActions:a,HeroImageSection:H,HeroSection:m,HeroTitle:s,HeroText:n},argTypes:{children:{if:{arg:"false",exists:!0}},textAlign:{control:{type:"inline-radio"}},actionsAlign:{control:{type:"inline-radio"}},responsiveAt:{control:{type:"inline-radio"}}}},r={render:({...t})=>e.jsx("div",{className:"bg-main",children:e.jsx(c,{...t,children:e.jsxs(m,{children:[e.jsx(s,{children:"Lorem ipsum dolor sit amet."}),e.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(a,{children:[e.jsx(i,{children:"action"}),e.jsx(i,{children:"action"})]})]})})})},o={render:({...t})=>e.jsx("div",{className:"bg-main",children:e.jsxs(c,{...t,children:[e.jsxs(m,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(s,{children:"Lorem ipsum dolor sit amet."}),e.jsx(n,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(a,{children:[e.jsx(i,{children:"action"}),e.jsx(i,{children:"action"})]})]}),e.jsx(H,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50vw]",src:"https://picsum.photos/1400/1400"})})]})})};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
            <img className="hero-image md:w-[50vw]" src="https://picsum.photos/1400/1400" />\r
          </HeroImageSection>\r
        </Hero>\r
      </div>;
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const A=["Default","WithImage"];export{r as Default,o as WithImage,A as __namedExportsOrder,w as default};
