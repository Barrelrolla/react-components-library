import{r as m,j as e}from"./iframe-gNaeUj4o.js";import{N as a,a as L,b as T,c as v,d as F,e as N}from"./NavbarToggle-Bwp1dgd1.js";import{B as x}from"./Button-CLQ7VFBc.js";import"./ButtonGroup-BW1Pc03K.js";import{d as b,h as w,e as H,f as P}from"./index-DMFkX90C.js";import{H as I,a as E,b as G,d as _,c as R,e as M}from"./HeroText-BaQkUbr6.js";import{h as O,g as q,a as A,b as k,F as u,c as n,f as z,e as K,d as U}from"./FooterLinksTitle-DPv5fGpR.js";import{c as Y}from"./bundle-mjs-169JcMJR.js";import{c as J,a as Q}from"./index-CikE6BH2.js";import{T as g,a as f,b as j}from"./TooltipContent-Pn_QqNh2.js";import{D,a as S,b as C,d as y,e as B}from"./DropdownListItem-CyeikRr3.js";import"./preload-helper-PPVm8Dsz.js";import"./Anchor-CKN-IJpk.js";import"./FloatingContext-PGqLXfup.js";import"./FloatingElementContent-CWNlG4n1.js";import"./HamburgerButton-D8bzgER5.js";import"./icons-DtneJxGu.js";import"./Divider-8lVHx3G4.js";const{within:V,expect:W}=__STORYBOOK_MODULE_TEST__,ke={title:"Components/Navbar",component:F,subcomponents:{NavbarBrand:v,NavbarToggle:T,NavbarCollapse:L,NavbarLink:a},tags:["autodocs"],args:{selected:void 0},argTypes:{color:{control:{type:"select"},options:Q},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"},options:J},position:{control:{type:"inline-radio"}},backdropClassName:{table:{disable:!0}}}},c={play:async({canvasElement:r})=>{const t=V(r).getByText("Test");await W(t,"renders").toBeTruthy()},render:({fixed:r=!1,selected:o,...t})=>{const p=["link 1","link 2","link 3","link 4","link 5","link 6"],[h,i]=m.useState(o);return m.useEffect(()=>{i(o)},[o]),e.jsx("div",{className:"bg-main",children:e.jsxs(F,{fixed:r,...t,className:r?"":"relative",children:[e.jsx(T,{}),e.jsxs(v,{href:"#",children:[e.jsx(b,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(L,{children:e.jsxs(N,{children:[e.jsxs(D,{returnFocus:!1,mobileSheetPlacement:"left",children:[e.jsx(S,{children:e.jsx(a,{as:"button",className:"w-full",children:e.jsxs("span",{children:["Dropdown ",e.jsx(w,{className:"inline-block"})]})})}),e.jsx(C,{children:e.jsx(y,{children:e.jsx(B,{children:"item"})})})]}),p.map((s,l)=>e.jsx(a,{href:"#",selected:h===l,onClick:()=>{i(l)},children:s},s))]})})]})})}},d={render:({color:r,selected:o,...t})=>{const p=["link 1","link 2","link 3","link 4","link 5","link 6"],[h,i]=m.useState(o);return m.useEffect(()=>{i(o)},[o]),e.jsxs("div",{style:r?Y(r):{},className:"bg-(--bg-color) pt-14 md:pt-0",children:[e.jsxs(F,{color:r,...t,children:[e.jsx(T,{}),e.jsxs(v,{href:"#",children:[e.jsx(b,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(L,{children:[e.jsxs(N,{children:[e.jsxs(D,{returnFocus:!1,strategy:"fixed",mobileSheetPlacement:"left",children:[e.jsx(S,{children:e.jsx(a,{as:"button",className:"w-full",children:e.jsxs("span",{children:["Dropdown ",e.jsx(w,{className:"inline-block"})]})})}),e.jsx(C,{children:e.jsx(y,{children:e.jsx(B,{children:"item"})})})]}),p.map((s,l)=>e.jsx(a,{href:"#",selected:h===l,onClick:()=>{i(l)},children:s},s))]}),e.jsxs(g,{strategy:"fixed",placement:"left",children:[e.jsx(f,{children:e.jsx(x,{variant:"outline",color:"primary",size:"sm",className:"w-full md:w-auto",children:"test"})}),e.jsx(j,{children:"tooltip"})]})]})]}),e.jsxs(I,{color:r,children:[e.jsxs(E,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(G,{children:"Lorem ipsum dolor sit amet."}),e.jsx(_,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(R,{children:[e.jsx(x,{children:"action"}),e.jsx(x,{children:"action"})]})]}),e.jsx(M,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50svw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]}),e.jsxs(O,{decorations:!0,color:r,children:[e.jsxs(q,{href:"#",children:[e.jsx(b,{})," Test"]}),e.jsxs(A,{children:[e.jsxs(k,{children:[e.jsx(u,{children:"long section name 1"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(k,{children:[e.jsx(u,{children:"long section name 2"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]}),e.jsxs(k,{children:[e.jsx(u,{children:"long section name 3"}),e.jsx(n,{href:"#",children:"long link text 1"}),e.jsx(n,{href:"#",children:"long link text 2"}),e.jsx(n,{href:"#",children:"long link text 3"})]})]}),e.jsx(z,{}),e.jsxs(K,{children:[e.jsx("span",{children:"copyright stuff"}),e.jsxs(U,{children:[e.jsxs(g,{isLabel:!0,color:"dark",children:[e.jsx(f,{children:e.jsx(n,{href:"#",children:e.jsx(H,{"aria-label":"github logo"})})}),e.jsx(j,{children:"Github"})]}),e.jsxs(g,{isLabel:!0,color:"dark",children:[e.jsx(f,{children:e.jsx(n,{href:"#",children:e.jsx(P,{"aria-label":"linkedin logo"})})}),e.jsx(j,{children:"LinkedIn"})]})]})]})]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
              <Dropdown returnFocus={false} strategy="fixed" mobileSheetPlacement="left">\r
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
            <Tooltip strategy="fixed" placement="left">\r
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
}`,...d.parameters?.docs?.source}}};const ue=["Default","PageDemo"];export{c as Default,d as PageDemo,ue as __namedExportsOrder,ke as default};
