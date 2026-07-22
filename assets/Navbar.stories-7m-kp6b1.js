import{r as d,j as e}from"./iframe-CV33I6ka.js";import{N as u,a as f,b as L,c as j,d as b}from"./NavbarToggle-Du8lq5Of.js";import{B as k}from"./Button-CF-jyyNW.js";import"./ButtonGroup-DqSYTISy.js";import{c as g,d as N,e as S}from"./index-BU4msgym.js";import{H as y,a as C,b as B,d as w,c as H,e as P}from"./HeroText-B_6QHFzQ.js";import{h as E,g as G,a as I,b as h,F as x,c as n,f as _,e as D,d as R}from"./FooterLinksTitle-DOlMpSVQ.js";import{c as O}from"./bundle-mjs-169JcMJR.js";import{c as q,a as A}from"./index-Ccfv0_tG.js";import{T as F,a as v,b as T}from"./TooltipContent-DD7hL3Xa.js";import"./preload-helper-PPVm8Dsz.js";import"./Anchor-jnc3d3C8.js";import"./HamburgerButton-BwiUblAr.js";import"./icons-D5xIoiIZ.js";import"./floating-ui.react-CNILDAnD.js";import"./Divider-T7ncAXQ3.js";import"./FloatingDelayGroup-Cy8vxldO.js";const{within:z,expect:K}=__STORYBOOK_MODULE_TEST__,le={title:"Components/Navbar",component:b,subcomponents:{NavbarBrand:j,NavbarToggle:L,NavbarCollapse:f,NavbarLink:u},tags:["autodocs"],args:{selected:void 0},argTypes:{color:{control:{type:"select"},options:A},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"},options:q},position:{control:{type:"inline-radio"}},backdropClasses:{table:{disable:!0}}}},a={play:async({canvasElement:r})=>{const t=z(r).getByText("Test");await K(t,"renders").toBeTruthy()},render:({fixed:r=!1,selected:o,...t})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[p,i]=d.useState(o);return d.useEffect(()=>{i(o)},[o]),e.jsx("div",{className:"bg-main",children:e.jsxs(b,{fixed:r,...t,children:[e.jsx(L,{}),e.jsxs(j,{href:"#",children:[e.jsx(g,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(f,{children:m.map((s,l)=>e.jsx(u,{href:"#",selected:p===l,onClick:()=>{i(l)},children:s},s))})]})})}},c={render:({color:r,selected:o,...t})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[p,i]=d.useState(o);return d.useEffect(()=>{i(o)},[o]),e.jsxs("div",{style:r?O(r):{},className:"bg-(--bg-color) pt-14 md:pt-0",children:[e.jsxs(b,{color:r,...t,children:[e.jsx(L,{}),e.jsxs(j,{href:"#",children:[e.jsx(g,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(f,{children:[m.map((s,l)=>e.jsx(u,{href:"#",selected:p===l,onClick:()=>{i(l)},children:s},s)),e.jsx(k,{variant:"outline",color:"primary",size:"sm",className:"w-full md:w-auto",children:"test"})]})]}),e.jsxs(y,{color:r,children:[e.jsxs(C,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(B,{children:"Lorem ipsum dolor sit amet."}),e.jsx(w,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(H,{children:[e.jsx(k,{children:"action"}),e.jsx(k,{children:"action"})]})]}),e.jsx(P,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50svw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]}),e.jsxs(E,{decorations:!0,color:r,children:[e.jsxs(G,{href:"#",children:[e.jsx(g,{})," Test"]}),e.jsxs(I,{children:[e.jsxs(h,{children:[e.jsx(x,{children:"long section name 1"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(h,{children:[e.jsx(x,{children:"long section name 2"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(h,{children:[e.jsx(x,{children:"long section name 3"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]})]}),e.jsx(_,{}),e.jsxs(D,{children:[e.jsx("span",{children:"copyright stuff"}),e.jsxs(R,{children:[e.jsxs(F,{isLabel:!0,color:"dark",children:[e.jsx(v,{children:e.jsx(n,{href:"#",children:e.jsx(N,{"aria-label":"github logo"})})}),e.jsx(T,{children:"Github"})]}),e.jsxs(F,{isLabel:!0,color:"dark",children:[e.jsx(v,{children:e.jsx(n,{href:"#",children:e.jsx(S,{"aria-label":"linkedin logo"})})}),e.jsx(T,{children:"LinkedIn"})]})]})]})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        </Footer>\r
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const ae=["Default","PageDemo"];export{a as Default,c as PageDemo,ae as __namedExportsOrder,le as default};
