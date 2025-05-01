import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{H as s,a as c,b as a,c as i,d as m}from"./HeroSection-CjVE_nKg.js";import{B as t}from"./Button-dQQngyAZ.js";import"./ButtonGroup-B9WW19Th.js";import"./ThemeContext-EqqjHPk4.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const q={title:"Components/Hero",tags:["autodocs"],component:m,subcomponents:{HeroSection:i,HeroTitle:a,HeroText:c,HeroActions:s},argTypes:{children:{if:{arg:"false",exists:!0}},textAlign:{control:{type:"inline-radio"}},actionsAlign:{control:{type:"inline-radio"}},responsiveAt:{control:{type:"inline-radio"}}}},e={render:({...n})=>r.jsx("div",{className:"bg-main",children:r.jsx(m,{...n,children:r.jsxs(i,{children:[r.jsx(a,{children:"Lorem ipsum dolor sit amet."}),r.jsx(c,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),r.jsxs(s,{children:[r.jsx(t,{children:"action"}),r.jsx(t,{children:"action"})]})]})})})},o={render:({...n})=>r.jsx("div",{className:"bg-main",children:r.jsxs(m,{...n,children:[r.jsxs(i,{children:[r.jsx(a,{children:"Lorem ipsum dolor sit amet."}),r.jsx(c,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),r.jsxs(s,{children:[r.jsx(t,{children:"action"}),r.jsx(t,{children:"action"})]})]}),r.jsx(i,{children:r.jsx("img",{className:"hero-image",src:"https://picsum.photos/1400/1400?grayscale"})})]})})};var l,p,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,x,H;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          <HeroSection>\r
            <img className="hero-image" src="https://picsum.photos/1400/1400?grayscale" />\r
          </HeroSection>\r
        </Hero>\r
      </div>;
  }
}`,...(H=(x=o.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};const A=["Default","WithImage"];export{e as Default,o as WithImage,A as __namedExportsOrder,q as default};
