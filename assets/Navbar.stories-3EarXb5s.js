import{r as d,j as e}from"./iframe-DihAyM6x.js";import{N as g,a as f,b as v,c as L,d as j}from"./NavbarToggle-PT-E80i9.js";import{B as x}from"./Button-wfMEksPL.js";import"./ButtonGroup-BGgP2ctq.js";import{c as u,d as B,e as w}from"./index-B2Csn4eC.js";import{H,a as C,b as P,d as E,c as G,e as _}from"./HeroText-Bt6oMBNC.js";import{h as D,g as R,a as O,b as p,F as h,c as n,f as q,e as A}from"./FooterLinksTitle-DHVOvhlc.js";import{c as z}from"./bundle-mjs-169JcMJR.js";import{c as I,a as K}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./Anchor-lWvwwMED.js";import"./HamburgerButton-BmgUUp8l.js";import"./Divider-Cn1xnO3G.js";const{within:M,expect:U}=__STORYBOOK_MODULE_TEST__,se={title:"Components/Navbar",component:j,subcomponents:{NavbarBrand:L,NavbarToggle:v,NavbarCollapse:f,NavbarLink:g},tags:["autodocs"],args:{selected:void 0},argTypes:{color:{control:{type:"select"},options:K},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"},options:I},position:{control:{type:"inline-radio"}},backdropClasses:{table:{disable:!0}}}},a={play:async({canvasElement:r})=>{const t=M(r).getByText("Test");await U(t,"renders").toBeTruthy()},render:({fixed:r=!1,selected:o,...t})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[k,s]=d.useState(o);return d.useEffect(()=>{s(o)},[o]),e.jsx("div",{className:"bg-main",children:e.jsxs(j,{fixed:r,...t,children:[e.jsx(v,{}),e.jsxs(L,{href:"#",children:[e.jsx(u,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(f,{children:m.map((i,l)=>e.jsx(g,{href:"#",selected:k===l,onClick:()=>{s(l)},children:i},i))})]})})}},c={render:({color:r,selected:o,...t})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[k,s]=d.useState(o);return d.useEffect(()=>{s(o)},[o]),e.jsxs("div",{style:r?z(r):{},className:"bg-(--bg-color) pt-14 md:pt-0",children:[e.jsxs(j,{color:r,...t,children:[e.jsx(v,{}),e.jsxs(L,{href:"#",children:[e.jsx(u,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(f,{children:[m.map((i,l)=>e.jsx(g,{href:"#",selected:k===l,onClick:()=>{s(l)},children:i},i)),e.jsx(x,{variant:"outline",color:"primary",size:"sm",className:"w-full md:w-auto",children:"test"})]})]}),e.jsxs(H,{color:r,children:[e.jsxs(C,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(P,{children:"Lorem ipsum dolor sit amet."}),e.jsx(E,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(G,{children:[e.jsx(x,{children:"action"}),e.jsx(x,{children:"action"})]})]}),e.jsx(_,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50svw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]}),e.jsxs(D,{decorations:!0,color:r,children:[e.jsxs(R,{href:"#",children:[e.jsx(u,{})," Test"]}),e.jsxs(O,{children:[e.jsxs(p,{children:[e.jsx(h,{children:"long section name 1"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(p,{children:[e.jsx(h,{children:"long section name 2"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(p,{children:[e.jsx(h,{children:"long section name 3"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]})]}),e.jsx(q,{}),e.jsxs(A,{children:[e.jsx("span",{children:"copyright stuff"}),e.jsxs("div",{className:"flex gap-4 text-xl",children:[e.jsx(n,{href:"#",children:e.jsx(B,{"aria-label":"github logo"})}),e.jsx(n,{href:"#",children:e.jsx(w,{"aria-label":"linkedin logo"})})]})]})]})]})}};var F,b,N;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByText("Test");
    await expect(navbar, "renders").toBeTruthy();
  },
  render: ({
    fixed = false,
    selected: storySelect,
    ...rest
  }) => {
    const links = ["link 1", "link 2", "link 3", "link 4", "link 5", "link 6"];
    const [selected, setSelected] = useState(storySelect);
    useEffect(() => {
      setSelected(storySelect);
    }, [storySelect]);
    return <div className="bg-main">\r
        <Navbar fixed={fixed} {...rest}>\r
          <NavbarToggle />\r
          <NavbarBrand href="#">\r
            <PiRocket /> Test\r
          </NavbarBrand>\r
          <div role="presentation" className="w-10 sm:hidden"></div>\r
          <NavbarCollapse>\r
            {links.map((link, index) => <NavbarLink key={link} href="#" selected={selected === index} onClick={() => {
            setSelected(index);
          }}>\r
                {link}\r
              </NavbarLink>)}\r
          </NavbarCollapse>\r
        </Navbar>\r
      </div>;
  }
}`,...(N=(b=a.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var T,S,y;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ({
    color,
    selected: storySelect,
    ...rest
  }) => {
    const links = ["link 1", "link 2", "link 3", "link 4", "link 5", "link 6"];
    const [selected, setSelected] = useState(storySelect);
    useEffect(() => {
      setSelected(storySelect);
    }, [storySelect]);
    return <div style={color ? cssColorProps(color) : {}} className="bg-(--bg-color) pt-14 md:pt-0">\r
        <Navbar color={color} {...rest}>\r
          <NavbarToggle />\r
          <NavbarBrand href="#">\r
            <PiRocket /> Test\r
          </NavbarBrand>\r
          <div role="presentation" className="w-10 sm:hidden"></div>\r
          <NavbarCollapse>\r
            {links.map((link, index) => <NavbarLink key={link} href="#" selected={selected === index} onClick={() => {
            setSelected(index);
          }}>\r
                {link}\r
              </NavbarLink>)}\r
            <Button variant="outline" color="primary" size="sm" className="w-full md:w-auto">\r
              test\r
            </Button>\r
          </NavbarCollapse>\r
        </Navbar>\r
        <Hero color={color}>\r
          <HeroSection className="max-md:h-1/2 md:w-1/2">\r
            <HeroTitle>Lorem ipsum dolor sit amet.</HeroTitle>\r
            <HeroText>\r
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore\r
              ex, corporis rem dolores culpa quo corrupti doloremque minima\r
              excepturi molestiae.\r
            </HeroText>\r
            <HeroActions>\r
              <Button>action</Button>\r
              <Button>action</Button>\r
            </HeroActions>\r
          </HeroSection>\r
          <HeroImageSection className="max-md:h-1/2 md:w-1/2">\r
            <img className="hero-image md:w-[50svw]" src="https://picsum.photos/1400/1400" alt="placeholder image" />\r
          </HeroImageSection>\r
        </Hero>\r
        <Footer decorations color={color}>\r
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
            <div className="flex gap-4 text-xl">\r
              <FooterLink href="#">\r
                <PiGithubLogo aria-label="github logo" />\r
              </FooterLink>\r
              <FooterLink href="#">\r
                <PiLinkedinLogo aria-label="linkedin logo" />\r
              </FooterLink>\r
            </div>\r
          </FooterFullSection>\r
        </Footer>\r
      </div>;
  }
}`,...(y=(S=c.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const ie=["Default","PageDemo"];export{a as Default,c as PageDemo,ie as __namedExportsOrder,se as default};
