import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{H as s,a as n,b as u,c as x,d as H}from"./HeroSection-CXIwU38t.js";import{B as i}from"./Button-DoQ_5DKt.js";import"./ButtonGroup-sIvpTzgw.js";import"./ThemeContext-CzQ_9dh3.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const q={title:"Components/Hero",component:s,argTypes:{children:{if:{arg:"false",exists:!0}},textAlign:{control:{type:"inline-radio"}},actionsAlign:{control:{type:"inline-radio"}},responsiveAt:{control:{type:"inline-radio"}}}},e={render:({...t})=>r.jsx("div",{className:"bg-main",children:r.jsx(s,{...t,children:r.jsxs(n,{children:[r.jsx(u,{children:"Lorem ipsum dolor sit amet."}),r.jsx(x,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),r.jsxs(H,{children:[r.jsx(i,{children:"action"}),r.jsx(i,{children:"action"})]})]})})})},o={render:({...t})=>r.jsx("div",{className:"bg-main",children:r.jsxs(s,{...t,children:[r.jsxs(n,{children:[r.jsx(u,{children:"Lorem ipsum dolor sit amet."}),r.jsx(x,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),r.jsxs(H,{children:[r.jsx(i,{children:"action"}),r.jsx(i,{children:"action"})]})]}),r.jsx(n,{children:r.jsx("img",{className:"hero-image",src:"https://picsum.photos/1400/1400?grayscale"})})]})})};var c,a,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const A=["Default","WithImage"];export{e as Default,o as WithImage,A as __namedExportsOrder,q as default};
