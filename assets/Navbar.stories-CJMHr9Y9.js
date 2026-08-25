import{r as p,j as e}from"./iframe-CUsvQeIR.js";import{e as f,h as F,f as H,g as P}from"./index-B9B3ifug.js";import{d as I,a as E}from"./index-DttbUWqL.js";import"./Anchor-C1d85-li.js";import"./Badge-DIFgZCK7.js";import{B as x}from"./ButtonGroup-CfkkCT6m.js";import"./PopoverTrigger-Uzua8Uaz.js";import"./DarkModeToggle-DhM5JGxs.js";import"./DarkModeSelector-DP7-eEtb.js";import{N as a,t as L,u as T,v,w as N,x as w,f as D,a as S,e as y,d as C,c as B,s as G,p as _,o as R,H as M,r as q,q as O,n as A,m as z,g as K,h as k,F as g,i as r,l as U,k as Y,j as J}from"./DropdownTrigger-BnrI6cOF.js";import"./Divider-C-ZlniB8.js";import"./HamburgerButton-CRuc8WcY.js";import"./AutocompleteInput-Uhj1JWxe.js";import"./Checkbox-BvHvJtma.js";import"./RadioGroup-BYg5H4o4.js";import{T as u,a as b,b as j}from"./TooltipContent-8Akqio0s.js";import"./SidemenuItem-CVRqY0RI.js";import"./SelectOption-Ce_ZzzK8.js";import"./Skeleton-DPyV5kt-.js";import"./AutocompleteTrigger-Bnjaafz1.js";import"./Combobox-tYi_iY-6.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-CNPxPe2n.js";import"./FloatingElementContent-C3Vd0iNz.js";import"./useIsMobile-ColYvo7B.js";import"./Slot-BDJL5cVM.js";import"./helpers-C6FB2zkg.js";import"./getSelectClasses-CdUaVdO_.js";const{within:Q,expect:V}=__STORYBOOK_MODULE_TEST__,we={title:"Components/Navbar",component:N,subcomponents:{NavbarBrand:v,NavbarToggle:T,NavbarCollapse:L,NavbarLink:a},tags:["autodocs"],args:{selected:void 0},argTypes:{selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6],table:{category:"storybook"}},color:{control:{type:"select"},options:E,table:{category:"controls"}},collapseAt:{control:{type:"inline-radio"},options:I,table:{category:"controls"}},position:{control:{type:"inline-radio"},table:{category:"controls"}},hasShadow:{table:{category:"controls"}},fixed:{table:{category:"controls"}},glass:{table:{category:"controls"}},backdropClassName:{control:!1,table:{category:"docs"}}}},c={play:async({canvasElement:n})=>{const t=Q(n).getByText("Test");await V(t,"renders").toBeTruthy()},render:({fixed:n=!1,selected:o,...t})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[h,i]=p.useState(o);return p.useEffect(()=>{i(o)},[o]),e.jsx("div",{className:"bg-main",children:e.jsxs(N,{fixed:n,...t,className:n?"":"relative",children:[e.jsx(T,{}),e.jsxs(v,{href:"#",children:[e.jsx(f,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(L,{children:e.jsxs(w,{children:[e.jsxs(D,{returnFocus:!1,mobileSheetPlacement:"left",children:[e.jsx(S,{children:e.jsx(a,{as:"button",className:"w-full",children:e.jsxs("span",{children:["Dropdown ",e.jsx(F,{className:"inline-block"})]})})}),e.jsx(y,{children:e.jsx(C,{children:e.jsx(B,{children:"item"})})})]}),m.map((s,l)=>e.jsx(a,{href:"#",selected:h===l,onClick:()=>{i(l)},children:s},s))]})})]})})}},d={render:({color:n,selected:o,...t})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[h,i]=p.useState(o);return p.useEffect(()=>{i(o)},[o]),e.jsxs("div",{className:"bg-main pt-14 md:pt-0",children:[e.jsxs(N,{color:n,...t,children:[e.jsx(T,{}),e.jsxs(v,{href:"#",children:[e.jsx(f,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(L,{children:[e.jsxs(w,{children:[e.jsxs(D,{color:n,returnFocus:!1,strategy:"fixed",mobileSheetPlacement:"left",children:[e.jsx(S,{children:e.jsx(a,{as:"button",className:"w-full",children:e.jsxs("span",{children:["Dropdown ",e.jsx(F,{className:"inline-block"})]})})}),e.jsx(y,{children:e.jsx(C,{children:e.jsx(B,{children:"item"})})})]}),m.map((s,l)=>e.jsx(a,{href:"#",selected:h===l,onClick:()=>{i(l)},children:s},s))]}),e.jsxs(u,{color:n,strategy:"fixed",placement:"left",children:[e.jsx(b,{children:e.jsx(x,{color:n,variant:"outline",size:"sm",className:"w-full md:w-auto",children:"test"})}),e.jsx(j,{children:"tooltip"})]})]})]}),e.jsxs(G,{children:[e.jsxs(_,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(R,{children:"Lorem ipsum dolor sit amet."}),e.jsx(M,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(q,{children:[e.jsx(x,{color:n,children:"action"}),e.jsx(x,{color:n,children:"action"})]})]}),e.jsx(O,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50svw]",src:"https://picsum.photos/1400/1400",alt:"placeholder image"})})]}),e.jsxs(A,{decorations:!0,color:n,children:[e.jsxs(z,{href:"#",children:[e.jsx(f,{})," Test"]}),e.jsxs(K,{children:[e.jsxs(k,{children:[e.jsx(g,{as:"h2",children:"long section name 1"}),e.jsx(r,{href:"#",children:"long link text 1"}),e.jsx(r,{href:"#",children:"long link text 2"}),e.jsx(r,{href:"#",children:"long link text 3"})]}),e.jsxs(k,{children:[e.jsx(g,{as:"h2",children:"long section name 2"}),e.jsx(r,{href:"#",children:"long link text 1"}),e.jsx(r,{href:"#",children:"long link text 2"}),e.jsx(r,{href:"#",children:"long link text 3"})]}),e.jsxs(k,{children:[e.jsx(g,{as:"h2",children:"long section name 3"}),e.jsx(r,{href:"#",children:"long link text 1"}),e.jsx(r,{href:"#",children:"long link text 2"}),e.jsx(r,{href:"#",children:"long link text 3"})]})]}),e.jsx(U,{}),e.jsxs(Y,{children:[e.jsx("span",{children:"copyright stuff"}),e.jsxs(J,{children:[e.jsxs(u,{isLabel:!0,color:n,children:[e.jsx(b,{children:e.jsx(r,{href:"#",children:e.jsx(H,{"aria-label":"github logo"})})}),e.jsx(j,{children:"Github"})]}),e.jsxs(u,{isLabel:!0,color:n,children:[e.jsx(b,{children:e.jsx(r,{href:"#",children:e.jsx(P,{"aria-label":"linkedin logo"})})}),e.jsx(j,{children:"LinkedIn"})]})]})]})]})]})},argTypes:{backdropClassName:{table:{disable:!0}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    return <div className="bg-main pt-14 md:pt-0">\r
        <Navbar color={color} {...rest}>\r
          <NavbarToggle />\r
          <NavbarBrand href="#">\r
            <PiRocket /> Test\r
          </NavbarBrand>\r
          <div role="presentation" className="w-10 sm:hidden"></div>\r
          <NavbarCollapse>\r
            <NavbarMenu>\r
              <Dropdown color={color} returnFocus={false} strategy="fixed" mobileSheetPlacement="left">\r
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
            <Tooltip color={color} strategy="fixed" placement="left">\r
              <TooltipTrigger>\r
                <Button color={color} variant="outline" size="sm" className="w-full md:w-auto">\r
                  test\r
                </Button>\r
              </TooltipTrigger>\r
              <TooltipContent>tooltip</TooltipContent>\r
            </Tooltip>\r
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
              <Button color={color}>action</Button>\r
              <Button color={color}>action</Button>\r
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
              <FooterLinksTitle as="h2">long section name 1</FooterLinksTitle>\r
              <FooterLink href="#">long link text 1</FooterLink>\r
              <FooterLink href="#">long link text 2</FooterLink>\r
              <FooterLink href="#">long link text 3</FooterLink>\r
            </FooterLinkGroup>\r
            <FooterLinkGroup>\r
              <FooterLinksTitle as="h2">long section name 2</FooterLinksTitle>\r
              <FooterLink href="#">long link text 1</FooterLink>\r
              <FooterLink href="#">long link text 2</FooterLink>\r
              <FooterLink href="#">long link text 3</FooterLink>\r
            </FooterLinkGroup>\r
            <FooterLinkGroup>\r
              <FooterLinksTitle as="h2">long section name 3</FooterLinksTitle>\r
              <FooterLink href="#">long link text 1</FooterLink>\r
              <FooterLink href="#">long link text 2</FooterLink>\r
              <FooterLink href="#">long link text 3</FooterLink>\r
            </FooterLinkGroup>\r
          </FooterLinksSection>\r
          <FooterDivider />\r
          <FooterFullSection>\r
            <span>copyright stuff</span>\r
            <FooterIconsContainer>\r
              <Tooltip isLabel color={color}>\r
                <TooltipTrigger>\r
                  <FooterLink href="#">\r
                    <PiGithubLogo aria-label="github logo" />\r
                  </FooterLink>\r
                </TooltipTrigger>\r
                <TooltipContent>Github</TooltipContent>\r
              </Tooltip>\r
              <Tooltip isLabel color={color}>\r
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
  },
  argTypes: {
    backdropClassName: {
      table: {
        disable: true
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const De=["Default","PageDemo"];export{c as Default,d as PageDemo,De as __namedExportsOrder,we as default};
