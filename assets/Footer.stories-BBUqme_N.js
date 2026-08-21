import{j as n}from"./iframe-DkV00Eji.js";import{e as g,f as j,g as b}from"./index-BECPNufg.js";import{d as y,a as v}from"./index-DttbUWqL.js";import{A as d}from"./Anchor-BCVEYjdO.js";import"./Badge-B0hgzdTf.js";import"./ButtonGroup-DkDPmCEJ.js";import"./PopoverTrigger-PhB3VjEU.js";import"./DarkModeToggle-O43ceUj3.js";import"./DarkModeSelector-BVT9MYdt.js";import{F as i,g as c,h as s,i as o,j as u,k as h,l as L,m as p,n as k}from"./DropdownTrigger-DK647_WD.js";import"./Divider-C8B2a_bR.js";import"./HamburgerButton-Cjb6VuBq.js";import"./AutocompleteInput-Bpi6abCq.js";import"./Checkbox-B6Hj7WrL.js";import"./RadioGroup-BJfwS5HL.js";import{T as x,a as m,b as F}from"./TooltipContent-DDRQzLUP.js";import"./SidemenuItem-CdbzwD7n.js";import"./SelectOption-DebHXGPH.js";import"./Skeleton-CbgCG-Sw.js";import"./AutocompleteTrigger-BpOUadtC.js";import"./Combobox-BD3VQY1i.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-BXr59Awb.js";import"./FloatingElementContent-Cl0oX9qF.js";import"./useIsMobile-CLzWy3IZ.js";import"./Slot-BAM__hAi.js";import"./helpers-MrnSjZQp.js";import"./getSelectClasses-C3fsFZGJ.js";const{expect:f,within:T}=__STORYBOOK_MODULE_TEST__,en={title:"Components/Footer",tags:["autodocs"],component:k,subcomponents:{FooterBrand:p,FooterDivider:L,FooterFullSection:h,FooterIconsContainer:u,FooterLink:o,FooterLinkGroup:s,FooterLinksSection:c,FooterLinksTitle:i},argTypes:{color:{control:{type:"select"},options:v,table:{category:"controls"}},responsiveAt:{control:{type:"inline-radio"},options:y,table:{category:"controls"}},decorations:{table:{category:"controls"}},containerStyle:{control:!1,table:{category:"docs"}},containerClassName:{control:!1,table:{category:"docs"}},className:{control:!1,table:{category:"docs"}}}},r={play:async({canvasElement:e})=>{const a=T(e).getByText("Test");await f(a,"renders").toBeTruthy()},render:({...e})=>n.jsxs(k,{...e,children:[n.jsxs(p,{href:"#",children:[n.jsx(g,{})," Test"]}),n.jsxs(c,{children:[n.jsx(o,{}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]}),n.jsx(h,{className:"justify-center",children:"copyright stuff"})]})},t={play:async({canvasElement:e})=>{const a=T(e).getByText("Test");await f(a,"renders").toBeTruthy()},render:({color:e,...l})=>n.jsxs(k,{color:e,...l,children:[n.jsxs(p,{href:"#",children:[n.jsx(g,{})," Test"]}),n.jsxs(c,{children:[n.jsxs(s,{children:[n.jsx(i,{children:"long section name 1"}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 2"}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 3"}),n.jsx(o,{href:"#",children:"long link text 1"}),n.jsx(o,{href:"#",children:"long link text 2"}),n.jsx(o,{href:"#",children:"long link text 3"})]})]}),n.jsx(L,{}),n.jsxs(h,{children:[n.jsx("span",{children:"copyright stuff"}),n.jsxs(u,{children:[n.jsxs(x,{isLabel:!0,color:e||"neutral",children:[n.jsx(m,{children:n.jsx(d,{color:e||"main",href:"#",children:n.jsx(j,{"aria-label":"github logo"})})}),n.jsx(F,{children:"Github"})]}),n.jsxs(x,{isLabel:!0,color:e||"neutral",children:[n.jsx(m,{children:n.jsx(d,{color:e||"main",href:"#",children:n.jsx(b,{"aria-label":"linkedin logo"})})}),n.jsx(F,{children:"LinkedIn"})]})]})]})]}),argTypes:{containerStyle:{table:{disable:!0}},containerClassName:{table:{disable:!0}},className:{table:{disable:!0}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const rn=["Default","WithLinkGroups"];export{r as Default,t as WithLinkGroups,rn as __namedExportsOrder,en as default};
