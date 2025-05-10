import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BKyFwriW.js";import{w,e as H}from"./index-D_lHLW6D.js";import{N as u,a as f,b as g,c as j,d as v}from"./NavbarToggle-DBZH2T7C.js";import{B as k}from"./Button-aJQ7c8Oe.js";import"./ButtonGroup-B9Za0ADD.js";import{R as p,G as C,L as I}from"./icons-B-89rpp_.js";import{d as A,c as G,b as E,a as R,H as q,e as D}from"./HeroText-BFhcjF8Q.js";import{F as P}from"./Footer-fZ3bqxLN.js";import{F as _,a as O,d as x,e as h,b as n,c as z}from"./FooterFullSection-BObeY9lc.js";import{A as L}from"./Anchor-DJVMO5w5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-EqqjHPk4.js";import"./HamburgerButton-0MlODeUV.js";const oe={title:"Components/Navbar",component:v,subcomponents:{NavbarBrand:j,NavbarToggle:g,NavbarCollapse:f,NavbarLink:u},tags:["autodocs"],args:{selected:void 0},argTypes:{color:{control:{type:"select"}},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"}},position:{control:{type:"inline-radio"}}}},l={play:async({canvasElement:r})=>{const t=w(r).getByText("Test");await H(t,"renders").toBeTruthy()},render:({fixed:r=!1,selected:o,...t})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[a,s]=d.useState(o);return d.useEffect(()=>{s(o)},[o]),e.jsx("div",{className:"bg-main",children:e.jsxs(v,{fixed:r,...t,children:[e.jsx(g,{}),e.jsxs(j,{href:"#",children:[e.jsx(p,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(f,{children:m.map((i,F)=>e.jsx(u,{href:"#",selected:a===F,onClick:()=>{s(F)},children:i},i))})]})})}},c={render:({selected:r,...o})=>{const t=["link 1","link 2","link 3","link 4","link 5","link 6"],[m,a]=d.useState(r);return d.useEffect(()=>{a(r)},[r]),e.jsxs("div",{className:"bg-main mt-16 md:mt-0",children:[e.jsxs(v,{...o,children:[e.jsx(g,{}),e.jsxs(j,{href:"#",children:[e.jsx(p,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(f,{children:[t.map((s,i)=>e.jsx(u,{href:"#",selected:m===i,onClick:()=>{a(i)},children:s},s)),e.jsx(k,{variant:"outline",color:"primary",className:"w-full md:w-auto",children:"test"})]})]}),e.jsxs(A,{children:[e.jsxs(G,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(E,{children:"Lorem ipsum dolor sit amet."}),e.jsx(R,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(q,{children:[e.jsx(k,{children:"action"}),e.jsx(k,{children:"action"})]})]}),e.jsx(D,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50svw]",src:"https://picsum.photos/1400/1400?grayscale"})})]}),e.jsxs(P,{decorations:!0,color:"main",children:[e.jsxs(_,{href:"#",children:[e.jsx(p,{})," Test"]}),e.jsxs(O,{children:[e.jsxs(x,{children:[e.jsx(h,{children:"long section name 1"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(x,{children:[e.jsx(h,{children:"long section name 2"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(x,{children:[e.jsx(h,{children:"long section name 3"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]})]}),e.jsxs(z,{children:[e.jsx("span",{children:"copyright stuff"}),e.jsxs("div",{className:"flex gap-4 text-xl",children:[e.jsx(L,{href:"#",color:"main",useBgColor:!1,children:e.jsx(C,{})}),e.jsx(L,{href:"#",color:"main",useBgColor:!1,children:e.jsx(I,{})})]})]})]})]})}};var N,b,T;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(T=(b=l.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var S,y,B;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ({
    selected: storySelect,
    ...rest
  }) => {
    const links = ["link 1", "link 2", "link 3", "link 4", "link 5", "link 6"];
    const [selected, setSelected] = useState(storySelect);
    useEffect(() => {
      setSelected(storySelect);
    }, [storySelect]);
    return <div className="bg-main mt-16 md:mt-0">\r
        <Navbar {...rest}>\r
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
            <Button variant="outline" color="primary" className="w-full md:w-auto">\r
              test\r
            </Button>\r
          </NavbarCollapse>\r
        </Navbar>\r
        <Hero>\r
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
            <img className="hero-image md:w-[50svw]" src="https://picsum.photos/1400/1400?grayscale" />\r
          </HeroImageSection>\r
        </Hero>\r
        <Footer decorations color="main">\r
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
              <Anchor href="#" color="main" useBgColor={false}>\r
                <GitHubIcon />\r
              </Anchor>\r
              <Anchor href="#" color="main" useBgColor={false}>\r
                <LinkedInLogo />\r
              </Anchor>\r
            </div>\r
          </FooterFullSection>\r
        </Footer>\r
      </div>;
  }
}`,...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const te=["Default","PageDemo"];export{l as Default,c as PageDemo,te as __namedExportsOrder,oe as default};
