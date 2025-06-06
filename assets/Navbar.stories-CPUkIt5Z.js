import{r as d,j as e}from"./iframe-2xTwKzkK.js";import{N as f,a as g,b as j,c as v,d as F}from"./NavbarToggle-9PKnSKGS.js";import{B as x}from"./Button-D6w_sEDH.js";import"./ButtonGroup-Cc9cTTKs.js";import{R as u,G as B,L as H}from"./icons-CdlL9hCZ.js";import{e as w,b as I,a as C,H as E,d as G,c as _}from"./HeroText-DlY5yKXy.js";import{h as D,g as R,a as O,b as h,F as p,c as n,f as q,e as A}from"./FooterLinksTitle-C4fkuKX4.js";import{c as P}from"./bundle-mjs-CFgYV38x.js";import"./Anchor-CP6LDDir.js";import"./HamburgerButton-BVXafxrD.js";import"./Divider-xEzdXBiL.js";const{within:z,expect:K}=__STORYBOOK_MODULE_TEST__,ne={title:"Components/Navbar",component:F,subcomponents:{NavbarBrand:v,NavbarToggle:j,NavbarCollapse:g,NavbarLink:f},tags:["autodocs"],args:{selected:void 0},argTypes:{color:{control:{type:"select"}},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"}},position:{control:{type:"inline-radio"}}}},a={play:async({canvasElement:r})=>{const t=z(r).getByText("Test");await K(t,"renders").toBeTruthy()},render:({fixed:r=!1,selected:o,...t})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[k,s]=d.useState(o);return d.useEffect(()=>{s(o)},[o]),e.jsx("div",{className:"bg-main",children:e.jsxs(F,{fixed:r,...t,children:[e.jsx(j,{}),e.jsxs(v,{href:"#",children:[e.jsx(u,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(g,{children:m.map((i,l)=>e.jsx(f,{href:"#",selected:k===l,onClick:()=>{s(l)},children:i},i))})]})})}},c={render:({color:r,selected:o,...t})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[k,s]=d.useState(o);return d.useEffect(()=>{s(o)},[o]),e.jsxs("div",{style:r?P(r):{},className:"bg-(--bg-color) pt-14 md:pt-0",children:[e.jsxs(F,{color:r,...t,children:[e.jsx(j,{}),e.jsxs(v,{href:"#",children:[e.jsx(u,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(g,{children:[m.map((i,l)=>e.jsx(f,{href:"#",selected:k===l,onClick:()=>{s(l)},children:i},i)),e.jsx(x,{variant:"outline",color:"primary",size:"sm",className:"w-full md:w-auto",children:"test"})]})]}),e.jsxs(w,{color:r,children:[e.jsxs(I,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(C,{children:"Lorem ipsum dolor sit amet."}),e.jsx(E,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(G,{children:[e.jsx(x,{children:"action"}),e.jsx(x,{children:"action"})]})]}),e.jsx(_,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50svw]",src:"https://picsum.photos/1400/1400"})})]}),e.jsxs(D,{decorations:!0,color:r,children:[e.jsxs(R,{href:"#",children:[e.jsx(u,{})," Test"]}),e.jsxs(O,{children:[e.jsxs(h,{children:[e.jsx(p,{children:"long section name 1"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(h,{children:[e.jsx(p,{children:"long section name 2"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(h,{children:[e.jsx(p,{children:"long section name 3"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]})]}),e.jsx(q,{}),e.jsxs(A,{children:[e.jsx("span",{children:"copyright stuff"}),e.jsxs("div",{className:"flex gap-4 text-xl",children:[e.jsx(n,{href:"#",children:e.jsx(B,{})}),e.jsx(n,{href:"#",children:e.jsx(H,{})})]})]})]})]})}};var L,N,b;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
            <RocketIcon /> Test\r
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
}`,...(b=(N=a.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var T,S,y;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
            <RocketIcon /> Test\r
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
            <img className="hero-image md:w-[50svw]" src="https://picsum.photos/1400/1400" />\r
          </HeroImageSection>\r
        </Hero>\r
        <Footer decorations color={color}>\r
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
          <FooterDivider />\r
          <FooterFullSection>\r
            <span>copyright stuff</span>\r
            <div className="flex gap-4 text-xl">\r
              <FooterLink href="#">\r
                <GitHubIcon />\r
              </FooterLink>\r
              <FooterLink href="#">\r
                <LinkedInIcon />\r
              </FooterLink>\r
            </div>\r
          </FooterFullSection>\r
        </Footer>\r
      </div>;
  }
}`,...(y=(S=c.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const re=["Default","PageDemo"];export{a as Default,c as PageDemo,re as __namedExportsOrder,ne as default};
