import{j as n}from"./iframe-DnygXqbo.js";import{e as u,f as j,g as b}from"./index-Cj71YE4b.js";import{F as i,a as c,b as s,c as o,d as L,e as h,f,g as k,h as x}from"./FooterLinksTitle-CTadiy9Y.js";import{c as y,a as v}from"./index-COUSODbC.js";import{T as p,a as F,b as d}from"./TooltipContent-BAhrOPc9.js";import{A as g}from"./Anchor-C1I-CcHW.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./Divider-D3dyumf4.js";import"./bundle-mjs-Ct12j0u0.js";import"./ButtonGroup-Bk0e2Nce.js";import"./icons-Clz5e0bR.js";import"./FloatingElementContent-DLDJtV6V.js";import"./useIsMobile-NWL8FdQt.js";import"./Slot-__QRpQAC.js";const{expect:m,within:T}=__STORYBOOK_MODULE_TEST__,z={title:"Components/Footer",tags:["autodocs"],component:x,subcomponents:{FooterBrand:k,FooterDivider:f,FooterFullSection:h,FooterIconsContainer:L,FooterLink:o,FooterLinkGroup:s,FooterLinksSection:c,FooterLinksTitle:i},argTypes:{color:{control:{type:"select"},options:v},responsiveAt:{control:{type:"inline-radio"},options:y},containerStyle:{table:{disable:!0}},containerClassName:{table:{disable:!0}},className:{table:{disable:!0}}}},r={play:async({canvasElement:e})=>{const a=T(e).getByText("Test");await m(a,"renders").toBeTruthy()},render:({...e})=>n.jsxs(x,{...e,children:[n.jsxs(k,{href:"#",children:[n.jsx(u,{})," Test"]}),n.jsxs(c,{children:[n.jsx(o,{}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]}),n.jsx(h,{className:"justify-center",children:"copyright stuff"})]})},t={play:async({canvasElement:e})=>{const a=T(e).getByText("Test");await m(a,"renders").toBeTruthy()},render:({color:e,...l})=>n.jsxs(x,{color:e,...l,children:[n.jsxs(k,{href:"#",children:[n.jsx(u,{})," Test"]}),n.jsxs(c,{children:[n.jsxs(s,{children:[n.jsx(i,{children:"long section name 1"}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 2"}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 3"}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]})]}),n.jsx(f,{}),n.jsxs(h,{children:[n.jsx("span",{children:"copyright stuff"}),n.jsxs(L,{children:[n.jsxs(p,{isLabel:!0,color:e||"neutral",children:[n.jsx(F,{children:n.jsx(g,{color:e||"main",href:"#",children:n.jsx(j,{"aria-label":"github logo"})})}),n.jsx(d,{children:"Github"})]}),n.jsxs(p,{isLabel:!0,color:e||"neutral",children:[n.jsx(F,{children:n.jsx(g,{color:e||"main",href:"#",children:n.jsx(b,{"aria-label":"linkedin logo"})})}),n.jsx(d,{children:"LinkedIn"})]})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
            <Tooltip isLabel color={color || "neutral"}>\r
              <TooltipTrigger>\r
                <Anchor color={color || "main"} href="#">\r
                  <PiGithubLogo aria-label="github logo" />\r
                </Anchor>\r
              </TooltipTrigger>\r
              <TooltipContent>Github</TooltipContent>\r
            </Tooltip>\r
            <Tooltip isLabel color={color || "neutral"}>\r
              <TooltipTrigger>\r
                <Anchor color={color || "main"} href="#">\r
                  <PiLinkedinLogo aria-label="linkedin logo" />\r
                </Anchor>\r
              </TooltipTrigger>\r
              <TooltipContent>LinkedIn</TooltipContent>\r
            </Tooltip>\r
          </FooterIconsContainer>\r
        </FooterFullSection>\r
      </Footer>;
  }
}`,...t.parameters?.docs?.source}}};const K=["Default","WithLinkGroups"];export{r as Default,t as WithLinkGroups,K as __namedExportsOrder,z as default};
