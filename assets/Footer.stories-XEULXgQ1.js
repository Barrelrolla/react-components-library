import{j as o}from"./iframe-Zws2HjAc.js";import{e as g,f as j,g as b}from"./index-C_QYCR_c.js";import{d as y,a as v}from"./index-DttbUWqL.js";import{A as d}from"./Anchor-aFYMACbU.js";import"./Badge-6ivdWahA.js";import"./Button-BwuwvX7p.js";import"./ButtonGroup-ewVkGR4I.js";import"./PopoverTrigger-BuVj72Sx.js";import"./DarkModeToggle-BFJUekYB.js";import"./DarkModeSelector-BRQBZLt2.js";import{F as i,g as c,h as s,i as n,j as u,k as h,l as L,m as p,n as k}from"./DropdownTrigger-D4Yz3h-m.js";import"./Divider-DhYu-9Ob.js";import"./HamburgerButton-igQxh8Mr.js";import"./AutocompleteInput-D-fgyotg.js";import"./Checkbox-DF1HKIQZ.js";import"./RadioGroup-BlYMX7gH.js";import{T as x,a as m,b as F}from"./TooltipContent-CmR2UNbf.js";import"./SidemenuItem-DD8ZAOXl.js";import"./SelectOption-Bm7hy6zL.js";import"./Skeleton-D86HW7B9.js";import"./AutocompleteTrigger-CojaIBsu.js";import"./Combobox-DUaUMwJe.js";import"./Pagination-C1E7GEij.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-BH0j_R8N.js";import"./FloatingElementContent-DdA_R0vP.js";import"./useIsMobile-CU9Emrnj.js";import"./Slot-4WWoWA6Q.js";import"./helpers-BOK2crC4.js";import"./getSelectClasses-ODcP7xGF.js";const{expect:f,within:T}=__STORYBOOK_MODULE_TEST__,to={title:"Components/Footer",tags:["autodocs"],component:k,subcomponents:{FooterBrand:p,FooterDivider:L,FooterFullSection:h,FooterIconsContainer:u,FooterLink:n,FooterLinkGroup:s,FooterLinksSection:c,FooterLinksTitle:i},argTypes:{color:{control:{type:"select"},options:v,table:{category:"controls"}},responsiveAt:{control:{type:"inline-radio"},options:y,table:{category:"controls"}},decorations:{table:{category:"controls"}},containerStyle:{control:!1,table:{category:"docs"}},containerClassName:{control:!1,table:{category:"docs"}},className:{control:!1,table:{category:"docs"}}}},r={play:async({canvasElement:e})=>{const a=T(e).getByText("Test");await f(a,"renders").toBeTruthy()},render:({...e})=>o.jsxs(k,{...e,children:[o.jsxs(p,{href:"#",children:[o.jsx(g,{})," Test"]}),o.jsxs(c,{children:[o.jsx(n,{}),o.jsx(n,{href:"#",children:"long link text 1"}),o.jsx(n,{href:"#",children:"long link text 2"}),o.jsx(n,{href:"#",children:"long link text 3"})]}),o.jsx(h,{className:"justify-center",children:"copyright stuff"})]})},t={play:async({canvasElement:e})=>{const a=T(e).getByText("Test");await f(a,"renders").toBeTruthy()},render:({color:e,...l})=>o.jsxs(k,{color:e,...l,children:[o.jsxs(p,{href:"#",children:[o.jsx(g,{})," Test"]}),o.jsxs(c,{children:[o.jsxs(s,{children:[o.jsx(i,{children:"long section name 1"}),o.jsx(n,{href:"#",children:"long link text 1"}),o.jsx(n,{href:"#",children:"long link text 2"}),o.jsx(n,{href:"#",children:"long link text 3"})]}),o.jsxs(s,{children:[o.jsx(i,{children:"long section name 2"}),o.jsx(n,{href:"#",children:"long link text 1"}),o.jsx(n,{href:"#",children:"long link text 2"}),o.jsx(n,{href:"#",children:"long link text 3"})]}),o.jsxs(s,{children:[o.jsx(i,{children:"long section name 3"}),o.jsx(n,{href:"#",children:"long link text 1"}),o.jsx(n,{href:"#",children:"long link text 2"}),o.jsx(n,{href:"#",children:"long link text 3"})]})]}),o.jsx(L,{}),o.jsxs(h,{children:[o.jsx("span",{children:"copyright stuff"}),o.jsxs(u,{children:[o.jsxs(x,{isLabel:!0,color:e||"neutral",children:[o.jsx(m,{children:o.jsx(d,{color:e||"main",href:"#",children:o.jsx(j,{"aria-label":"github logo"})})}),o.jsx(F,{children:"Github"})]}),o.jsxs(x,{isLabel:!0,color:e||"neutral",children:[o.jsx(m,{children:o.jsx(d,{color:e||"main",href:"#",children:o.jsx(b,{"aria-label":"linkedin logo"})})}),o.jsx(F,{children:"LinkedIn"})]})]})]})]}),argTypes:{containerStyle:{table:{disable:!0}},containerClassName:{table:{disable:!0}},className:{table:{disable:!0}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const io=["Default","WithLinkGroups"];export{r as Default,t as WithLinkGroups,io as __namedExportsOrder,to as default};
