import{j as n}from"./iframe-_eeK6Xjw.js";import{R as g,G as b,L as v}from"./icons-CKivjK5h.js";import{F as i,a,b as s,c as e,d as p,e as c,f as j,g as k,h}from"./FooterLinksTitle-Cxulo68-.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";import"./Anchor-Bt51czn-.js";import"./Divider-Dz-lriwz.js";const{expect:m,within:T}=__STORYBOOK_MODULE_TEST__,R={title:"Components/Footer",tags:["autodocs"],component:h,subcomponents:{FooterBrand:k,FooterDivider:j,FooterFullSection:c,FooterIconsContainer:p,FooterLink:e,FooterLinkGroup:s,FooterLinksSection:a,FooterLinksTitle:i},argTypes:{containerClasses:{if:{arg:"false",eq:"true"}},className:{if:{arg:"false",eq:"true"}}}},o={play:async({canvasElement:r})=>{const l=T(r).getByText("Test");await m(l,"renders").toBeTruthy()},render:({...r})=>n.jsxs(h,{...r,children:[n.jsxs(k,{href:"#",children:[n.jsx(g,{})," Test"]}),n.jsxs(a,{children:[n.jsx(e,{}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsx(c,{className:"justify-center",children:"copyright stuff"})]})},t={play:async({canvasElement:r})=>{const l=T(r).getByText("Test");await m(l,"renders").toBeTruthy()},render:({...r})=>n.jsxs(h,{...r,children:[n.jsxs(k,{href:"#",children:[n.jsx(g,{})," Test"]}),n.jsxs(a,{children:[n.jsxs(s,{children:[n.jsx(i,{children:"long section name 1"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 2"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 3"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]})]}),n.jsx(j,{}),n.jsxs(c,{children:[n.jsx("span",{children:"copyright stuff"}),n.jsxs(p,{children:[n.jsx(e,{href:"#",children:n.jsx(b,{"aria-label":"github logo"})}),n.jsx(e,{href:"#",children:n.jsx(v,{"aria-label":"linkedin logo"})})]})]})]})};var F,x,d;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
          <FooterLink></FooterLink>\r
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
              <GitHubIcon aria-label="github logo" />\r
            </FooterLink>\r
            <FooterLink href="#">\r
              <LinkedInIcon aria-label="linkedin logo" />\r
            </FooterLink>\r
          </FooterIconsContainer>\r
        </FooterFullSection>\r
      </Footer>;
  }
}`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const C=["Default","WithLinkGroups"];export{o as Default,t as WithLinkGroups,C as __namedExportsOrder,R as default};
