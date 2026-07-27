import{r as d,j as e}from"./iframe-Dx2saKrQ.js";import{N as m,a as L,b as T,c as v,d as F,e as N}from"./NavbarToggle-CJlTldF3.js";import{B as k}from"./Button-RY-hPtgX.js";import"./ButtonGroup-C-QLkQBn.js";import{d as b,h as w,e as S,f as C}from"./index-CvNn8h6X.js";import{H as D,a as y,b as B,d as H,c as P,e as E}from"./HeroText-Bmw-IbQ5.js";import{h as G,g as I,a as _,b as x,F as u,c as n,f as R,e as M,d as O}from"./FooterLinksTitle-CCly83ri.js";import{c as q}from"./bundle-mjs-169JcMJR.js";import{c as A,a as z}from"./index-CikE6BH2.js";import{T as g,a as f,b as j}from"./TooltipContent-nwJ9WHKd.js";import{D as K,a as U,b as Y,d as J,e as Q}from"./DropdownListItem-Ci4e2uGT.js";import"./preload-helper-PPVm8Dsz.js";import"./Anchor-D9PK4vWK.js";import"./FloatingContext-CVJP9sGf.js";import"./FloatingElementContent-2917WOGp.js";import"./HamburgerButton-DxV_EhJG.js";import"./icons-NQ7eCirg.js";import"./Divider-B2BZnyM5.js";const{within:V,expect:W}=__STORYBOOK_MODULE_TEST__,xe={title:"Components/Navbar",component:F,subcomponents:{NavbarBrand:v,NavbarToggle:T,NavbarCollapse:L,NavbarLink:m},tags:["autodocs"],args:{selected:void 0},argTypes:{color:{control:{type:"select"},options:z},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"},options:A},position:{control:{type:"inline-radio"}},backdropClassName:{table:{disable:!0}}}},a={play:async({canvasElement:r})=>{const t=V(r).getByText("Test");await W(t,"renders").toBeTruthy()},render:({fixed:r=!1,selected:o,...t})=>{const p=["link 1","link 2","link 3","link 4","link 5","link 6"],[h,i]=d.useState(o);return d.useEffect(()=>{i(o)},[o]),e.jsx("div",{className:"bg-main",children:e.jsxs(F,{fixed:r,...t,className:r?"":"relative",children:[e.jsx(T,{}),e.jsxs(v,{href:"#",children:[e.jsx(b,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(L,{children:e.jsxs(N,{children:[e.jsxs(K,{returnFocus:!1,mobileSheetPlacement:"left",children:[e.jsx(U,{children:e.jsx(m,{as:"button",className:"w-full",children:e.jsxs("span",{children:["Dropdown ",e.jsx(w,{className:"inline-block"})]})})}),e.jsx(Y,{children:e.jsx(J,{children:e.jsx(Q,{children:"item"})})})]}),p.map((s,l)=>e.jsx(m,{href:"#",selected:h===l,onClick:()=>{i(l)},children:s},s))]})})]})})}},c={render:({color:r,selected:o,...t})=>{const p=["link 1","link 2","link 3","link 4","link 5","link 6"],[h,i]=d.useState(o);return d.useEffect(()=>{i(o)},[o]),e.jsxs("div",{style:r?q(r):{},className:"bg-(--bg-color) pt-14 md:pt-0",children:[e.jsxs(F,{color:r,...t,children:[e.jsx(T,{}),e.jsxs(v,{href:"#",children:[e.jsx(b,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(L,{children:[e.jsx(N,{children:p.map((s,l)=>e.jsx(m,{href:"#",selected:h===l,onClick:()=>{i(l)},children:s},s))}),e.jsxs(g,{placement:"left",children:[e.jsx(f,{children:e.jsx(k,{variant:"outline",color:"primary",size:"sm",className:"w-full md:w-auto",children:"test"})}),e.jsx(j,{children:"tooltip"})]})]})]}),e.jsxs(D,{color:r,children:[e.jsxs(y,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(B,{children:"Lorem ipsum dolor sit amet."}),e.jsx(H,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(P,{children:[e.jsx(k,{children:"action"}),e.jsx(k,{children:"action"})]})]}),e.jsx(E,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50svw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]}),e.jsxs(G,{decorations:!0,color:r,children:[e.jsxs(I,{href:"#",children:[e.jsx(b,{})," Test"]}),e.jsxs(_,{children:[e.jsxs(x,{children:[e.jsx(u,{children:"long section name 1"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(x,{children:[e.jsx(u,{children:"long section name 2"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(x,{children:[e.jsx(u,{children:"long section name 3"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]})]}),e.jsx(R,{}),e.jsxs(M,{children:[e.jsx("span",{children:"copyright stuff"}),e.jsxs(O,{children:[e.jsxs(g,{isLabel:!0,color:"dark",children:[e.jsx(f,{children:e.jsx(n,{href:"#",children:e.jsx(S,{"aria-label":"github logo"})})}),e.jsx(j,{children:"Github"})]}),e.jsxs(g,{isLabel:!0,color:"dark",children:[e.jsx(f,{children:e.jsx(n,{href:"#",children:e.jsx(C,{"aria-label":"linkedin logo"})})}),e.jsx(j,{children:"LinkedIn"})]})]})]})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
            <NavbarMenu>\r
              <Dropdown returnFocus={false} mobileSheetPlacement="left">\r
                <DropdownTrigger>\r
                  <NavbarLink as="button" className="w-full">\r
                    <span>\r
                      Dropdown <PiCaretDown className="inline-block" />\r
                    </span>\r
                  </NavbarLink>\r
                </DropdownTrigger>\r
                <DropdownContent>\r
                  <DropdownList>\r
                    <DropdownListItem>item</DropdownListItem>\r
                  </DropdownList>\r
                </DropdownContent>\r
              </Dropdown>\r
              {links.map((link, index) => <NavbarLink key={link} href="#" selected={selected === index} onClick={() => {
              setSelected(index);
            }}>\r
                  {link}\r
                </NavbarLink>)}\r
            </NavbarMenu>\r
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
            <NavbarMenu>\r
              {links.map((link, index) => <NavbarLink key={link} href="#" selected={selected === index} onClick={() => {
              setSelected(index);
            }}>\r
                  {link}\r
                </NavbarLink>)}\r
            </NavbarMenu>\r
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
}`,...c.parameters?.docs?.source}}};const ue=["Default","PageDemo"];export{a as Default,c as PageDemo,ue as __namedExportsOrder,xe as default};
