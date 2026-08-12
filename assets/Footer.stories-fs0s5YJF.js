import{j as n}from"./iframe-C8KOGUx2.js";import{e as m,f as j,g as b}from"./index-x6WoGDPP.js";import{d as y,a as v}from"./index-DttbUWqL.js";import{A as d}from"./Anchor-rFKeucJX.js";import"./Badge-CI2II2jK.js";import"./ButtonGroup-BRq2mKe4.js";import"./PopoverTrigger-CxdIAyBJ.js";import"./DarkModeToggle-tHC05-bQ.js";import"./DarkModeSelector-oDWjdH7u.js";import{F as i,j as c,k as s,l as o,m as u,n as h,o as L,p,q as k}from"./Combobox-Cew3lWqX.js";import"./Divider-CP-4uY48.js";import"./HamburgerButton-Bzg7zkAZ.js";import"./AutocompleteInput-BZUGZvUV.js";import"./Checkbox-nTJdBJuY.js";import"./RadioGroup-CdUkHJVG.js";import{T as x,a as F,b as g}from"./TooltipContent-tg41VTgy.js";import"./SidemenuItem-Bg2UdGfL.js";import"./SelectOption-BEOe9FU9.js";import"./Skeleton-DBNVPYgH.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-BldbZDxN.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-C8I_aUnW.js";import"./FloatingElementContent-BfnogGtk.js";import"./useIsMobile-DfGPh0Mw.js";import"./helpers-KWlkL90F.js";const{expect:f,within:T}=__STORYBOOK_MODULE_TEST__,Z={title:"Components/Footer",tags:["autodocs"],component:k,subcomponents:{FooterBrand:p,FooterDivider:L,FooterFullSection:h,FooterIconsContainer:u,FooterLink:o,FooterLinkGroup:s,FooterLinksSection:c,FooterLinksTitle:i},argTypes:{color:{control:{type:"select"},options:v,table:{category:"controls"}},responsiveAt:{control:{type:"inline-radio"},options:y,table:{category:"controls"}},decorations:{table:{category:"controls"}},containerStyle:{control:!1,table:{category:"docs"}},containerClassName:{control:!1,table:{category:"docs"}},className:{control:!1,table:{category:"docs"}}}},r={play:async({canvasElement:e})=>{const a=T(e).getByText("Test");await f(a,"renders").toBeTruthy()},render:({...e})=>n.jsxs(k,{...e,children:[n.jsxs(p,{href:"#",children:[n.jsx(m,{})," Test"]}),n.jsxs(c,{children:[n.jsx(o,{}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]}),n.jsx(h,{className:"justify-center",children:"copyright stuff"})]})},t={play:async({canvasElement:e})=>{const a=T(e).getByText("Test");await f(a,"renders").toBeTruthy()},render:({color:e,...l})=>n.jsxs(k,{color:e,...l,children:[n.jsxs(p,{href:"#",children:[n.jsx(m,{})," Test"]}),n.jsxs(c,{children:[n.jsxs(s,{children:[n.jsx(i,{children:"long section name 1"}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 2"}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 3"}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]})]}),n.jsx(L,{}),n.jsxs(h,{children:[n.jsx("span",{children:"copyright stuff"}),n.jsxs(u,{children:[n.jsxs(x,{isLabel:!0,color:e||"neutral",children:[n.jsx(F,{children:n.jsx(d,{color:e||"main",href:"#",children:n.jsx(j,{"aria-label":"github logo"})})}),n.jsx(g,{children:"Github"})]}),n.jsxs(x,{isLabel:!0,color:e||"neutral",children:[n.jsx(F,{children:n.jsx(d,{color:e||"main",href:"#",children:n.jsx(b,{"aria-label":"linkedin logo"})})}),n.jsx(g,{children:"LinkedIn"})]})]})]})]}),argTypes:{containerStyle:{table:{disable:!0}},containerClassName:{table:{disable:!0}},className:{table:{disable:!0}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  },
  argTypes: {
    containerStyle: {
      table: {
        disable: true
      }
    },
    containerClassName: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const $=["Default","WithLinkGroups"];export{r as Default,t as WithLinkGroups,$ as __namedExportsOrder,Z as default};
