import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{w as g,e as p}from"./index-D_lHLW6D.js";import{R as m,G as v,L as B}from"./icons-B4SbTHPB.js";import{F as s,a as c,b as i,c as e,d as j,e as a,f as T,g as k,h}from"./FooterLinksTitle-DOwj8YGm.js";import"./bundle-mjs-CFgYV38x.js";import"./Anchor-XDKq8nxi.js";import"./Divider-C9_WKfr7.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const N={title:"Components/Footer",tags:["autodocs"],component:h,subcomponents:{FooterBrand:k,FooterDivider:T,FooterFullSection:a,FooterIconsContainer:j,FooterLink:e,FooterLinkGroup:i,FooterLinksSection:c,FooterLinksTitle:s},argTypes:{containerClasses:{if:{arg:"false",eq:"true"}},className:{if:{arg:"false",eq:"true"}}}},o={play:async({canvasElement:r})=>{const l=g(r).getByText("Test");await p(l,"renders").toBeTruthy()},render:({...r})=>n.jsxs(h,{...r,children:[n.jsxs(k,{href:"#",children:[n.jsx(m,{})," Test"]}),n.jsxs(c,{children:[n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsx(a,{className:"justify-center",children:"copyright stuff"})]})},t={play:async({canvasElement:r})=>{const l=g(r).getByText("Test");await p(l,"renders").toBeTruthy()},render:({...r})=>n.jsxs(h,{...r,children:[n.jsxs(k,{href:"#",children:[n.jsx(m,{})," Test"]}),n.jsxs(c,{children:[n.jsxs(i,{children:[n.jsx(s,{children:"long section name 1"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsxs(i,{children:[n.jsx(s,{children:"long section name 2"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsxs(i,{children:[n.jsx(s,{children:"long section name 3"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]})]}),n.jsx(T,{}),n.jsxs(a,{children:[n.jsx("span",{children:"copyright stuff"}),n.jsxs(j,{children:[n.jsx(e,{href:"#",children:n.jsx(v,{})}),n.jsx(e,{href:"#",children:n.jsx(B,{})})]})]})]})};var F,x,d;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Test");
    await expect(button, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    return <Footer {...rest}>\r
        <FooterBrand href="#">\r
          <RocketIcon /> Test\r
        </FooterBrand>\r
        <FooterLinksSection>\r
          <FooterLink href="#">long link text 1</FooterLink>\r
          <FooterLink href="#">long link text 2</FooterLink>\r
          <FooterLink href="#">long link text 3</FooterLink>\r
        </FooterLinksSection>\r
        <FooterFullSection className="justify-center">\r
          copyright stuff\r
        </FooterFullSection>\r
      </Footer>;
  }
}`,...(d=(x=o.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var L,f,u;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Test");
    await expect(button, "renders").toBeTruthy();
  },
  render: ({
    ...rest
  }) => {
    return <Footer {...rest}>\r
        <FooterBrand href="#">\r
          <RocketIcon /> Test\r
        </FooterBrand>\r
        <FooterLinksSection>\r
          <FooterLinkGroup>\r
            <FooterLinksTitle>long section name 1</FooterLinksTitle>\r
            <FooterLink href="#">long link text 1</FooterLink>\r
            <FooterLink href="#">long link text 2</FooterLink>\r
            <FooterLink href="#">long link text 3</FooterLink>\r
          </FooterLinkGroup>\r
          <FooterLinkGroup>\r
            <FooterLinksTitle>long section name 2</FooterLinksTitle>\r
            <FooterLink href="#">long link text 1</FooterLink>\r
            <FooterLink href="#">long link text 2</FooterLink>\r
            <FooterLink href="#">long link text 3</FooterLink>\r
          </FooterLinkGroup>\r
          <FooterLinkGroup>\r
            <FooterLinksTitle>long section name 3</FooterLinksTitle>\r
            <FooterLink href="#">long link text 1</FooterLink>\r
            <FooterLink href="#">long link text 2</FooterLink>\r
            <FooterLink href="#">long link text 3</FooterLink>\r
          </FooterLinkGroup>\r
        </FooterLinksSection>\r
        <FooterDivider />\r
        <FooterFullSection>\r
          <span>copyright stuff</span>\r
          <FooterIconsContainer>\r
            <FooterLink href="#">\r
              <GitHubIcon />\r
            </FooterLink>\r
            <FooterLink href="#">\r
              <LinkedInLogo />\r
            </FooterLink>\r
          </FooterIconsContainer>\r
        </FooterFullSection>\r
      </Footer>;
  }
}`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const q=["Default","WithLinkGroups"];export{o as Default,t as WithLinkGroups,q as __namedExportsOrder,N as default};
