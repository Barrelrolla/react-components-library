import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{w as u,e as g}from"./index-D_lHLW6D.js";import{F as a}from"./Footer-fZ3bqxLN.js";import{F as L,a as p,b as e,c as m,d as i,e as l}from"./FooterFullSection-BObeY9lc.js";import{R as j,G as y,L as B}from"./icons-B-89rpp_.js";import{A as c}from"./Anchor-DJVMO5w5.js";import"./ThemeContext-EqqjHPk4.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const N={title:"Components/Footer",tags:["autodocs"],component:a,argTypes:{containerClasses:{if:{arg:"false",eq:"true"}},className:{if:{arg:"false",eq:"true"}}}},o={play:async({canvasElement:r})=>{const s=u(r).getByText("Test");await g(s,"renders").toBeTruthy()},render:({...r})=>n.jsxs(a,{...r,children:[n.jsxs(L,{href:"#",children:[n.jsx(j,{})," Test"]}),n.jsxs(p,{children:[n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsx(m,{className:"justify-center",children:"copyright stuff"})]})},t={play:async({canvasElement:r})=>{const s=u(r).getByText("Test");await g(s,"renders").toBeTruthy()},render:({...r})=>n.jsxs(a,{...r,children:[n.jsxs(L,{href:"#",children:[n.jsx(j,{})," Test"]}),n.jsxs(p,{children:[n.jsxs(i,{children:[n.jsx(l,{children:"long section name 1"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsxs(i,{children:[n.jsx(l,{children:"long section name 2"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]}),n.jsxs(i,{children:[n.jsx(l,{children:"long section name 3"}),n.jsx(e,{href:"#",children:"long link text 1"}),n.jsx(e,{href:"#",children:"long link text 2"}),n.jsx(e,{href:"#",children:"long link text 3"})]})]}),n.jsxs(m,{children:[n.jsx("span",{children:"copyright stuff"}),n.jsxs("div",{className:"flex gap-4 text-xl",children:[n.jsx(c,{href:"#",color:"dark",useBgColor:!1,children:n.jsx(y,{})}),n.jsx(c,{href:"#",color:"dark",useBgColor:!1,children:n.jsx(B,{})})]})]})]})};var h,k,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var F,d,f;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        <FooterFullSection>\r
          <span>copyright stuff</span>\r
          <div className="flex gap-4 text-xl">\r
            <Anchor href="#" color="dark" useBgColor={false}>\r
              <GitHubIcon />\r
            </Anchor>\r
            <Anchor href="#" color="dark" useBgColor={false}>\r
              <LinkedInLogo />\r
            </Anchor>\r
          </div>\r
        </FooterFullSection>\r
      </Footer>;
  }
}`,...(f=(d=t.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const R=["Default","WithLinkGroups"];export{o as Default,t as WithLinkGroups,R as __namedExportsOrder,N as default};
