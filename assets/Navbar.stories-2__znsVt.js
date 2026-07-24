import{r as d,j as e}from"./iframe-MZB_caGF.js";import{N as T,a as L,b,c as F,d as v}from"./NavbarToggle-CLRkABCk.js";import{B as k}from"./Button-DZTzONxe.js";import"./ButtonGroup-0IbGhgEV.js";import{d as j,e as N,f as S}from"./index-BLdlutuL.js";import{H as y,a as C,b as B,d as w,c as H,e as P}from"./HeroText-BJFcqUOy.js";import{h as E,g as G,a as I,b as h,F as x,c as r,f as _,e as D,d as R}from"./FooterLinksTitle-DIMYhwNR.js";import{c as O}from"./bundle-mjs-169JcMJR.js";import{c as q,a as A}from"./index-Ccfv0_tG.js";import{T as g,a as u,b as f}from"./TooltipContent-D59k5U8e.js";import"./preload-helper-PPVm8Dsz.js";import"./Anchor-DKBOQOoh.js";import"./HamburgerButton-ChKhPG9t.js";import"./icons-C6YbZSVv.js";import"./Divider-Df6SaE8Q.js";import"./floating-ui.react-DDLLzMxe.js";import"./FloatingDelayGroup-DNwCcK7G.js";import"./Slot-8frvC-U1.js";const{within:z,expect:K}=__STORYBOOK_MODULE_TEST__,ae={title:"Components/Navbar",component:v,subcomponents:{NavbarBrand:F,NavbarToggle:b,NavbarCollapse:L,NavbarLink:T},tags:["autodocs"],args:{selected:void 0},argTypes:{color:{control:{type:"select"},options:A},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"},options:q},position:{control:{type:"inline-radio"}},backdropClasses:{table:{disable:!0}}}},a={play:async({canvasElement:n})=>{const t=z(n).getByText("Test");await K(t,"renders").toBeTruthy()},render:({fixed:n=!1,selected:o,...t})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[p,i]=d.useState(o);return d.useEffect(()=>{i(o)},[o]),e.jsx("div",{className:"bg-main",children:e.jsxs(v,{fixed:n,...t,className:n?"":"relative",children:[e.jsx(b,{}),e.jsxs(F,{href:"#",children:[e.jsx(j,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(L,{children:m.map((s,l)=>e.jsx(T,{href:"#",selected:p===l,onClick:()=>{i(l)},children:s},s))})]})})}},c={render:({color:n,selected:o,...t})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[p,i]=d.useState(o);return d.useEffect(()=>{i(o)},[o]),e.jsxs("div",{style:n?O(n):{},className:"bg-(--bg-color) pt-14 md:pt-0",children:[e.jsxs(v,{color:n,...t,children:[e.jsx(b,{}),e.jsxs(F,{href:"#",children:[e.jsx(j,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(L,{children:[m.map((s,l)=>e.jsx(T,{href:"#",selected:p===l,onClick:()=>{i(l)},children:s},s)),e.jsxs(g,{placement:"left",children:[e.jsx(u,{children:e.jsx(k,{variant:"outline",color:"primary",size:"sm",className:"w-full md:w-auto",children:"test"})}),e.jsx(f,{children:"tooltip"})]})]})]}),e.jsxs(y,{color:n,children:[e.jsxs(C,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(B,{children:"Lorem ipsum dolor sit amet."}),e.jsx(w,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(H,{children:[e.jsx(k,{children:"action"}),e.jsx(k,{children:"action"})]})]}),e.jsx(P,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50svw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]}),e.jsxs(E,{decorations:!0,color:n,children:[e.jsxs(G,{href:"#",children:[e.jsx(j,{})," Test"]}),e.jsxs(I,{children:[e.jsxs(h,{children:[e.jsx(x,{children:"long section name 1"}),e.jsx(r,{href:"#",children:"long link text 1"}),e.jsx(r,{href:"#",children:"long link text 2"}),e.jsx(r,{href:"#",children:"long link text 3"})]}),e.jsxs(h,{children:[e.jsx(x,{children:"long section name 2"}),e.jsx(r,{href:"#",children:"long link text 1"}),e.jsx(r,{href:"#",children:"long link text 2"}),e.jsx(r,{href:"#",children:"long link text 3"})]}),e.jsxs(h,{children:[e.jsx(x,{children:"long section name 3"}),e.jsx(r,{href:"#",children:"long link text 1"}),e.jsx(r,{href:"#",children:"long link text 2"}),e.jsx(r,{href:"#",children:"long link text 3"})]})]}),e.jsx(_,{}),e.jsxs(D,{children:[e.jsx("span",{children:"copyright stuff"}),e.jsxs(R,{children:[e.jsxs(g,{isLabel:!0,color:"dark",children:[e.jsx(u,{children:e.jsx(r,{href:"#",children:e.jsx(N,{"aria-label":"github logo"})})}),e.jsx(f,{children:"Github"})]}),e.jsxs(g,{isLabel:!0,color:"dark",children:[e.jsx(u,{children:e.jsx(r,{href:"#",children:e.jsx(S,{"aria-label":"linkedin logo"})})}),e.jsx(f,{children:"LinkedIn"})]})]})]})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        <Navbar fixed={fixed} {...rest} className={fixed ? "" : "relative"}>\r
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
            <Tooltip placement="left">\r
              <TooltipTrigger>\r
                <Button variant="outline" color="primary" size="sm" className="w-full md:w-auto">\r
                  test\r
                </Button>\r
              </TooltipTrigger>\r
              <TooltipContent>tooltip</TooltipContent>\r
            </Tooltip>\r
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
}`,...c.parameters?.docs?.source}}};const ce=["Default","PageDemo"];export{a as Default,c as PageDemo,ce as __namedExportsOrder,ae as default};
