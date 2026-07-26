import{j as e,r as p}from"./iframe-AbiaHdMx.js";import{u as w,a as S,N as h,b as L,c as v,d as T,e as F}from"./NavbarToggle-DZf9LaKi.js";import{B as k}from"./Button-BeN-eOx6.js";import"./ButtonGroup-kuK9__O3.js";import{d as j,h as C,e as y,f as D}from"./index-DXHUacFD.js";import{H as B,a as H,b as P,d as I,c as E,e as G}from"./HeroText-JuMB_3kL.js";import{h as M,g as _,a as R,b as x,F as u,c as r,f as O,e as q,d as z}from"./FooterLinksTitle-BQecj4zz.js";import{a as A}from"./bundle-mjs-BeSpa7as.js";import{c as K,a as U}from"./index-DhdEVH7N.js";import{T as g,a as b,b as f}from"./TooltipContent-ASiS0klL.js";import{u as Y,D as J,a as Q,b as V,d as W,e as X}from"./DropdownListItem-BX6aUbue.js";import{C as Z}from"./floating-ui.react-CXDKUmkI.js";import"./preload-helper-PPVm8Dsz.js";import"./Anchor-CCEL8bSV.js";import"./HamburgerButton-Dfkl1rEJ.js";import"./icons-CGZYAQTq.js";import"./Divider-cx4F0VrD.js";import"./FloatingDelayGroup-D3QfcXZh.js";import"./Slot-Cv4pIM2n.js";function N({className:n,children:o,...t}){const{styles:i}=w({className:n}),l=S(),s=Y();if(!l)throw new Error("Please use the Navbar Collapse");return e.jsx(Z,{orientation:s?"vertical":"horizontal",render:e.jsx("menu",{className:i,...t,children:o})})}N.__docgenInfo={description:"",methods:[],displayName:"NavbarMenu"};const{within:$,expect:ee}=__STORYBOOK_MODULE_TEST__,je={title:"Components/Navbar",component:F,subcomponents:{NavbarBrand:T,NavbarToggle:v,NavbarCollapse:L,NavbarLink:h},tags:["autodocs"],args:{selected:void 0},argTypes:{color:{control:{type:"select"},options:U},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"},options:K},position:{control:{type:"inline-radio"}},backdropClasses:{table:{disable:!0}}}},d={play:async({canvasElement:n})=>{const t=$(n).getByText("Test");await ee(t,"renders").toBeTruthy()},render:({fixed:n=!1,selected:o,...t})=>{const i=["link 1","link 2","link 3","link 4","link 5","link 6"],[l,s]=p.useState(o);return p.useEffect(()=>{s(o)},[o]),e.jsx("div",{className:"bg-main",children:e.jsxs(F,{fixed:n,...t,className:n?"":"relative",children:[e.jsx(v,{}),e.jsxs(T,{href:"#",children:[e.jsx(j,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(L,{children:e.jsxs(N,{children:[e.jsxs(J,{returnFocus:!1,mobileSheetPlacement:"left",children:[e.jsx(Q,{children:e.jsx(h,{as:"button",className:"w-full",children:e.jsxs("span",{children:["Dropdown ",e.jsx(C,{className:"inline-block"})]})})}),e.jsx(V,{children:e.jsx(W,{children:e.jsx(X,{children:"item"})})})]}),i.map((a,c)=>e.jsx(h,{href:"#",selected:l===c,onClick:()=>{s(c)},children:a},a))]})})]})})}},m={render:({color:n,selected:o,...t})=>{const i=["link 1","link 2","link 3","link 4","link 5","link 6"],[l,s]=p.useState(o);return p.useEffect(()=>{s(o)},[o]),e.jsxs("div",{style:n?A(n):{},className:"bg-(--bg-color) pt-14 md:pt-0",children:[e.jsxs(F,{color:n,...t,children:[e.jsx(v,{}),e.jsxs(T,{href:"#",children:[e.jsx(j,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(L,{children:[e.jsx(N,{children:i.map((a,c)=>e.jsx(h,{href:"#",selected:l===c,onClick:()=>{s(c)},children:a},a))}),e.jsxs(g,{placement:"left",children:[e.jsx(b,{children:e.jsx(k,{variant:"outline",color:"primary",size:"sm",className:"w-full md:w-auto",children:"test"})}),e.jsx(f,{children:"tooltip"})]})]})]}),e.jsxs(B,{color:n,children:[e.jsxs(H,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(P,{children:"Lorem ipsum dolor sit amet."}),e.jsx(I,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(E,{children:[e.jsx(k,{children:"action"}),e.jsx(k,{children:"action"})]})]}),e.jsx(G,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50svw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]}),e.jsxs(M,{decorations:!0,color:n,children:[e.jsxs(_,{href:"#",children:[e.jsx(j,{})," Test"]}),e.jsxs(R,{children:[e.jsxs(x,{children:[e.jsx(u,{children:"long section name 1"}),e.jsx(r,{href:"#",children:"long link text 1"}),e.jsx(r,{href:"#",children:"long link text 2"}),e.jsx(r,{href:"#",children:"long link text 3"})]}),e.jsxs(x,{children:[e.jsx(u,{children:"long section name 2"}),e.jsx(r,{href:"#",children:"long link text 1"}),e.jsx(r,{href:"#",children:"long link text 2"}),e.jsx(r,{href:"#",children:"long link text 3"})]}),e.jsxs(x,{children:[e.jsx(u,{children:"long section name 3"}),e.jsx(r,{href:"#",children:"long link text 1"}),e.jsx(r,{href:"#",children:"long link text 2"}),e.jsx(r,{href:"#",children:"long link text 3"})]})]}),e.jsx(O,{}),e.jsxs(q,{children:[e.jsx("span",{children:"copyright stuff"}),e.jsxs(z,{children:[e.jsxs(g,{isLabel:!0,color:"dark",children:[e.jsx(b,{children:e.jsx(r,{href:"#",children:e.jsx(y,{"aria-label":"github logo"})})}),e.jsx(f,{children:"Github"})]}),e.jsxs(g,{isLabel:!0,color:"dark",children:[e.jsx(b,{children:e.jsx(r,{href:"#",children:e.jsx(D,{"aria-label":"linkedin logo"})})}),e.jsx(f,{children:"LinkedIn"})]})]})]})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Le=["Default","PageDemo"];export{d as Default,m as PageDemo,Le as __namedExportsOrder,je as default};
