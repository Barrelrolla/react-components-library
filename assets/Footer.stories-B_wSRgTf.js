import{j as o}from"./iframe-DCRt2oWE.js";import{e as g,f as j,g as b}from"./index-RU3XNW_o.js";import{d as y,a as v}from"./index-DttbUWqL.js";import{A as d}from"./Anchor-i9JNRTbe.js";import"./Badge-CNomvg3q.js";import"./Button-B5_unbmz.js";import"./ButtonGroup-C3YWnsCK.js";import"./PopoverTrigger-DW0jKCt8.js";import"./DarkModeToggle-CjmAqkad.js";import"./DarkModeSelector-C735-4aQ.js";import{F as i,g as c,h as s,i as n,j as u,k as h,l as L,m as p,n as k}from"./DropdownTrigger-D1vihTfy.js";import"./Divider-ZeBL1tFL.js";import"./HamburgerButton-Dgexjen9.js";import"./AutocompleteInput-C2YBKoqN.js";import"./Checkbox-BIt93RA2.js";import"./RadioGroup-BQJdSOWi.js";import{T as x,a as m,b as F}from"./TooltipContent-T1AsKtVi.js";import"./SidemenuItem-FGgnpTth.js";import"./SelectOption-DJ9cT8L8.js";import"./Skeleton-BCa2fM1G.js";import"./AutocompleteTrigger-Bq9cnuJM.js";import"./Combobox-BAUvNXQu.js";import"./Pagination-5YTu5dKR.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-BZJ4X8ZB.js";import"./FloatingElementContent-CM0mSiIi.js";import"./useIsMobile-DmLq_fiQ.js";import"./Slot-BRre2ycY.js";import"./helpers-5FOpjoj6.js";import"./getSelectClasses-MX-K2UVy.js";const{expect:f,within:T}=__STORYBOOK_MODULE_TEST__,to={title:"Components/Footer",tags:["autodocs"],component:k,subcomponents:{FooterBrand:p,FooterDivider:L,FooterFullSection:h,FooterIconsContainer:u,FooterLink:n,FooterLinkGroup:s,FooterLinksSection:c,FooterLinksTitle:i},argTypes:{color:{control:{type:"select"},options:v,table:{category:"controls"}},responsiveAt:{control:{type:"inline-radio"},options:y,table:{category:"controls"}},decorations:{table:{category:"controls"}},containerStyle:{control:!1,table:{category:"docs"}},containerClassName:{control:!1,table:{category:"docs"}},className:{control:!1,table:{category:"docs"}}}},r={play:async({canvasElement:e})=>{const a=T(e).getByText("Test");await f(a,"renders").toBeTruthy()},render:({...e})=>o.jsxs(k,{...e,children:[o.jsxs(p,{href:"#",children:[o.jsx(g,{})," Test"]}),o.jsxs(c,{children:[o.jsx(n,{}),o.jsx(n,{href:"#",children:"long link text 1"}),o.jsx(n,{href:"#",children:"long link text 2"}),o.jsx(n,{href:"#",children:"long link text 3"})]}),o.jsx(h,{className:"justify-center",children:"copyright stuff"})]})},t={play:async({canvasElement:e})=>{const a=T(e).getByText("Test");await f(a,"renders").toBeTruthy()},render:({color:e,...l})=>o.jsxs(k,{color:e,...l,children:[o.jsxs(p,{href:"#",children:[o.jsx(g,{})," Test"]}),o.jsxs(c,{children:[o.jsxs(s,{children:[o.jsx(i,{children:"long section name 1"}),o.jsx(n,{href:"#",children:"long link text 1"}),o.jsx(n,{href:"#",children:"long link text 2"}),o.jsx(n,{href:"#",children:"long link text 3"})]}),o.jsxs(s,{children:[o.jsx(i,{children:"long section name 2"}),o.jsx(n,{href:"#",children:"long link text 1"}),o.jsx(n,{href:"#",children:"long link text 2"}),o.jsx(n,{href:"#",children:"long link text 3"})]}),o.jsxs(s,{children:[o.jsx(i,{children:"long section name 3"}),o.jsx(n,{href:"#",children:"long link text 1"}),o.jsx(n,{href:"#",children:"long link text 2"}),o.jsx(n,{href:"#",children:"long link text 3"})]})]}),o.jsx(L,{}),o.jsxs(h,{children:[o.jsx("span",{children:"copyright stuff"}),o.jsxs(u,{children:[o.jsxs(x,{isLabel:!0,color:e||"neutral",children:[o.jsx(m,{children:o.jsx(d,{color:e||"main",href:"#",children:o.jsx(j,{"aria-label":"github logo"})})}),o.jsx(F,{children:"Github"})]}),o.jsxs(x,{isLabel:!0,color:e||"neutral",children:[o.jsx(m,{children:o.jsx(d,{color:e||"main",href:"#",children:o.jsx(b,{"aria-label":"linkedin logo"})})}),o.jsx(F,{children:"LinkedIn"})]})]})]})]}),argTypes:{containerStyle:{table:{disable:!0}},containerClassName:{table:{disable:!0}},className:{table:{disable:!0}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
