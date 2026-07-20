import{j as n}from"./iframe-DujcHZrp.js";import{c as p,d as b,e as v}from"./index-DuVvtshk.js";import{F as i,a,b as s,c as e,d as f,e as c,f as j,g as k,h}from"./FooterLinksTitle-D5S1NEAu.js";import{c as S,a as B}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";import"./Anchor-COQP4eie.js";import"./Divider-poqsmb5L.js";const{expect:m,within:T}=__STORYBOOK_MODULE_TEST__,O={title:"Components/Footer",tags:["autodocs"],component:h,subcomponents:{FooterBrand:k,FooterDivider:j,FooterFullSection:c,FooterIconsContainer:f,FooterLink:e,FooterLinkGroup:s,FooterLinksSection:a,FooterLinksTitle:i},argTypes:{color:{control:{type:"select"},options:B},responsiveAt:{control:{type:"inline-radio"},options:S},containerStyle:{table:{disable:!0}},containerClasses:{table:{disable:!0}},className:{table:{disable:!0}}}},r={play:async({canvasElement:o})=>{const l=T(o).getByText("Test");await m(l,"renders").toBeTruthy()},render:({...o})=>n.jsxs(h,{...o,children:[n.jsxs(k,{href:"#",children:[n.jsx(p,{})," Test"]}),n.jsxs(a,{children:[n.jsx(e,{}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsx(c,{className:"justify-center",children:"copyright stuff"})]})},t={play:async({canvasElement:o})=>{const l=T(o).getByText("Test");await m(l,"renders").toBeTruthy()},render:({...o})=>n.jsxs(h,{...o,children:[n.jsxs(k,{href:"#",children:[n.jsx(p,{})," Test"]}),n.jsxs(a,{children:[n.jsxs(s,{children:[n.jsx(i,{children:"long section name 1"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 2"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 3"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]})]}),n.jsx(j,{}),n.jsxs(c,{children:[n.jsx("span",{children:"copyright stuff"}),n.jsxs(f,{children:[n.jsx(e,{href:"#",children:n.jsx(b,{"aria-label":"github logo"})}),n.jsx(e,{href:"#",children:n.jsx(v,{"aria-label":"linkedin logo"})})]})]})]})};var F,x,d;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
          <PiRocket /> Test\r
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
}`,...(d=(x=r.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var L,g,u;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <PiRocket /> Test\r
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
              <PiGithubLogo aria-label="github logo" />\r
            </FooterLink>\r
            <FooterLink href="#">\r
              <PiLinkedinLogo aria-label="linkedin logo" />\r
            </FooterLink>\r
          </FooterIconsContainer>\r
        </FooterFullSection>\r
      </Footer>;
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const I=["Default","WithLinkGroups"];export{r as Default,t as WithLinkGroups,I as __namedExportsOrder,O as default};
