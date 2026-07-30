import{j as o}from"./iframe-GSqt7Knk.js";import{d as L,e as j,f as b}from"./index-DRx84jDc.js";import{F as i,a as c,b as s,c as e,d as u,e as h,f,g as k,h as d}from"./FooterLinksTitle-BpxaWzKZ.js";import{c as y,a as v}from"./index-CikE6BH2.js";import{T as x,a as F,b as p}from"./TooltipContent-CKc1JTVS.js";import{A as g}from"./Anchor-DwgTLvHg.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./Divider-D3Xpdd6g.js";import"./FloatingContext-CB5Cn1_T.js";import"./FloatingElementContent-BVvFzaQQ.js";import"./useIsMobile-BKws4lUq.js";const{expect:m,within:T}=__STORYBOOK_MODULE_TEST__,O={title:"Components/Footer",tags:["autodocs"],component:d,subcomponents:{FooterBrand:k,FooterDivider:f,FooterFullSection:h,FooterIconsContainer:u,FooterLink:e,FooterLinkGroup:s,FooterLinksSection:c,FooterLinksTitle:i},argTypes:{color:{control:{type:"select"},options:v},responsiveAt:{control:{type:"inline-radio"},options:y},containerStyle:{table:{disable:!0}},containerClassName:{table:{disable:!0}},className:{table:{disable:!0}}}},t={play:async({canvasElement:r})=>{const a=T(r).getByText("Test");await m(a,"renders").toBeTruthy()},render:({...r})=>o.jsxs(d,{...r,children:[o.jsxs(k,{href:"#",children:[o.jsx(L,{})," Test"]}),o.jsxs(c,{children:[o.jsx(e,{}),o.jsx(e,{href:"#",children:"long link text 1"}),o.jsx(e,{href:"#",children:"long link text 2"}),o.jsx(e,{href:"#",children:"long link text 3"})]}),o.jsx(h,{className:"justify-center",children:"copyright stuff"})]})},n={play:async({canvasElement:r})=>{const a=T(r).getByText("Test");await m(a,"renders").toBeTruthy()},render:({color:r,...l})=>o.jsxs(d,{color:r,...l,children:[o.jsxs(k,{href:"#",children:[o.jsx(L,{})," Test"]}),o.jsxs(c,{children:[o.jsxs(s,{children:[o.jsx(i,{children:"long section name 1"}),o.jsx(e,{href:"#",children:"long link text 1"}),o.jsx(e,{href:"#",children:"long link text 2"}),o.jsx(e,{href:"#",children:"long link text 3"})]}),o.jsxs(s,{children:[o.jsx(i,{children:"long section name 2"}),o.jsx(e,{href:"#",children:"long link text 1"}),o.jsx(e,{href:"#",children:"long link text 2"}),o.jsx(e,{href:"#",children:"long link text 3"})]}),o.jsxs(s,{children:[o.jsx(i,{children:"long section name 3"}),o.jsx(e,{href:"#",children:"long link text 1"}),o.jsx(e,{href:"#",children:"long link text 2"}),o.jsx(e,{href:"#",children:"long link text 3"})]})]}),o.jsx(f,{}),o.jsxs(h,{children:[o.jsx("span",{children:"copyright stuff"}),o.jsxs(u,{children:[o.jsxs(x,{isLabel:!0,color:"dark",children:[o.jsx(F,{children:o.jsx(g,{color:r||"main",href:"#",children:o.jsx(j,{"aria-label":"github logo"})})}),o.jsx(p,{children:"Github"})]}),o.jsxs(x,{isLabel:!0,color:"dark",children:[o.jsx(F,{children:o.jsx(g,{color:r||"main",href:"#",children:o.jsx(b,{"aria-label":"linkedin logo"})})}),o.jsx(p,{children:"LinkedIn"})]})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Test");
    await expect(button, "renders").toBeTruthy();
  },
  render: ({
    color,
    ...rest
  }) => {
    return <Footer color={color} {...rest}>\r
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
            <Tooltip isLabel color="dark">\r
              <TooltipTrigger>\r
                <Anchor color={color || 'main'} href="#">\r
                  <PiGithubLogo aria-label="github logo" />\r
                </Anchor>\r
              </TooltipTrigger>\r
              <TooltipContent>Github</TooltipContent>\r
            </Tooltip>\r
            <Tooltip isLabel color="dark">\r
              <TooltipTrigger>\r
                <Anchor color={color || 'main'} href="#">\r
                  <PiLinkedinLogo aria-label="linkedin logo" />\r
                </Anchor>\r
              </TooltipTrigger>\r
              <TooltipContent>LinkedIn</TooltipContent>\r
            </Tooltip>\r
          </FooterIconsContainer>\r
        </FooterFullSection>\r
      </Footer>;
  }
}`,...n.parameters?.docs?.source}}};const N=["Default","WithLinkGroups"];export{t as Default,n as WithLinkGroups,N as __namedExportsOrder,O as default};
