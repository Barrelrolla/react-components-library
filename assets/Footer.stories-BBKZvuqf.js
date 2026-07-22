import{j as n}from"./iframe-P8Y-PKRI.js";import{c as p,d as j,e as m}from"./index-9auVffcn.js";import{F as i,a,b as s,c as e,d as L,e as c,f as g,g as k,h}from"./FooterLinksTitle-CTEMRDe9.js";import{c as b,a as y}from"./index-Ccfv0_tG.js";import{T as d,a as x,b as F}from"./TooltipContent-Bjo8adfM.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./Anchor-Dd4JGHe1.js";import"./Divider-Cr233sTN.js";import"./FloatingDelayGroup-BsC5jfKa.js";import"./floating-ui.react-BaWSq7yJ.js";const{expect:u,within:f}=__STORYBOOK_MODULE_TEST__,I={title:"Components/Footer",tags:["autodocs"],component:h,subcomponents:{FooterBrand:k,FooterDivider:g,FooterFullSection:c,FooterIconsContainer:L,FooterLink:e,FooterLinkGroup:s,FooterLinksSection:a,FooterLinksTitle:i},argTypes:{color:{control:{type:"select"},options:y},responsiveAt:{control:{type:"inline-radio"},options:b},containerStyle:{table:{disable:!0}},containerClasses:{table:{disable:!0}},className:{table:{disable:!0}}}},r={play:async({canvasElement:o})=>{const l=f(o).getByText("Test");await u(l,"renders").toBeTruthy()},render:({...o})=>n.jsxs(h,{...o,children:[n.jsxs(k,{href:"#",children:[n.jsx(p,{})," Test"]}),n.jsxs(a,{children:[n.jsx(e,{}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsx(c,{className:"justify-center",children:"copyright stuff"})]})},t={play:async({canvasElement:o})=>{const l=f(o).getByText("Test");await u(l,"renders").toBeTruthy()},render:({...o})=>n.jsxs(h,{...o,children:[n.jsxs(k,{href:"#",children:[n.jsx(p,{})," Test"]}),n.jsxs(a,{children:[n.jsxs(s,{children:[n.jsx(i,{children:"long section name 1"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 2"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsxs(s,{children:[n.jsx(i,{children:"long section name 3"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]})]}),n.jsx(g,{}),n.jsxs(c,{children:[n.jsx("span",{children:"copyright stuff"}),n.jsxs(L,{children:[n.jsxs(d,{isLabel:!0,color:"dark",children:[n.jsx(x,{children:n.jsx(e,{href:"#",children:n.jsx(j,{"aria-label":"github logo"})})}),n.jsx(F,{children:"Github"})]}),n.jsxs(d,{isLabel:!0,color:"dark",children:[n.jsx(x,{children:n.jsx(e,{href:"#",children:n.jsx(m,{"aria-label":"linkedin logo"})})}),n.jsx(F,{children:"LinkedIn"})]})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
            <Tooltip isLabel color="dark">\r
              <TooltipTrigger>\r
                <FooterLink href="#">\r
                  <PiGithubLogo aria-label="github logo" />\r
                </FooterLink>\r
              </TooltipTrigger>\r
              <TooltipContent>Github</TooltipContent>\r
            </Tooltip>\r
            <Tooltip isLabel color="dark">\r
              <TooltipTrigger>\r
                <FooterLink href="#">\r
                  <PiLinkedinLogo aria-label="linkedin logo" />\r
                </FooterLink>\r
              </TooltipTrigger>\r
              <TooltipContent>LinkedIn</TooltipContent>\r
            </Tooltip>\r
          </FooterIconsContainer>\r
        </FooterFullSection>\r
      </Footer>;
  }
}`,...t.parameters?.docs?.source}}};const O=["Default","WithLinkGroups"];export{r as Default,t as WithLinkGroups,O as __namedExportsOrder,I as default};
