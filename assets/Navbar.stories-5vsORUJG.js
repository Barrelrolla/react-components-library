import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BKyFwriW.js";import{w as g,e as S}from"./index-D_lHLW6D.js";import{N as p,a as u,b as v,c as h,d as x}from"./NavbarToggle-Clmvgb8H.js";import{C as B,B as m}from"./Button-C02d4wDw.js";import"./ButtonGroup-CXl3chX7.js";import{d as H,c as k,b as w,a as C,H as E}from"./HeroSection-D2XatGvg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-CzQ_9dh3.js";import"./Anchor-DFDv8UPl.js";import"./HamburgerButton-Bw-mWZL0.js";const G={title:"Components/Navbar",component:x,subcomponents:{NavbarBrand:h,NavbarToggle:v,NavbarCollapse:u,NavbarLink:p},tags:["autodocs"],args:{selected:void 0},argTypes:{color:{control:{type:"select"}},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"}},position:{control:{type:"inline-radio"}}}},i={play:async({canvasElement:n})=>{const r=g(n).getByText("Test");await S(r,"renders").toBeTruthy()},render:({selected:n,...s})=>{const r=["link 1","link 2","link 3","link 4","link 5","link 6"],[d,t]=l.useState(n);return l.useEffect(()=>{t(n)},[n]),e.jsx("div",{className:"bg-main h-[50vh]",children:e.jsxs(x,{...s,children:[e.jsx(v,{}),e.jsxs(h,{href:"#",children:[e.jsx(B,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(u,{children:r.map((a,o)=>e.jsx(p,{href:"#",selected:d===o,onClick:()=>{t(o)},children:a},a))})]})})}},c={play:async({canvasElement:n})=>{const r=g(n).getByText("Test");await S(r,"renders").toBeTruthy()},render:({selected:n,...s})=>{const r=["link 1","link 2","link 3","link 4","link 5","link 6"],[d,t]=l.useState(n);return l.useEffect(()=>{t(n)},[n]),e.jsxs("div",{className:"bg-main h-[100vh]",children:[e.jsxs(x,{...s,children:[e.jsx(v,{}),e.jsxs(h,{href:"#",children:[e.jsx(B,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(u,{children:[r.map((a,o)=>e.jsx(p,{href:"#",selected:d===o,onClick:()=>{t(o)},children:a},a)),e.jsx(m,{variant:"outline",color:"primary",className:"w-full md:w-auto",children:"test"})]})]}),e.jsxs(H,{children:[e.jsxs(k,{children:[e.jsx(w,{children:"Lorem ipsum dolor sit amet."}),e.jsx(C,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(E,{children:[e.jsx(m,{children:"action"}),e.jsx(m,{children:"action"})]})]}),e.jsx(k,{children:e.jsx("img",{className:"hero-image",src:"https://picsum.photos/1400/1400?grayscale"})})]})]})}};var b,N,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByText("Test");
    await expect(navbar, "renders").toBeTruthy();
  },
  render: ({
    selected: storySelect,
    ...rest
  }) => {
    const links = ["link 1", "link 2", "link 3", "link 4", "link 5", "link 6"];
    const [selected, setSelected] = useState(storySelect);
    useEffect(() => {
      setSelected(storySelect);
    }, [storySelect]);
    return <div className="bg-main h-[50vh]">\r
        <Navbar {...rest}>\r
          <NavbarToggle />\r
          <NavbarBrand href="#">\r
            <ComputerIcon /> Test\r
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
}`,...(y=(N=i.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var j,T,f;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByText("Test");
    await expect(navbar, "renders").toBeTruthy();
  },
  render: ({
    selected: storySelect,
    ...rest
  }) => {
    const links = ["link 1", "link 2", "link 3", "link 4", "link 5", "link 6"];
    const [selected, setSelected] = useState(storySelect);
    useEffect(() => {
      setSelected(storySelect);
    }, [storySelect]);
    return <div className="bg-main h-[100vh]">\r
        <Navbar {...rest}>\r
          <NavbarToggle />\r
          <NavbarBrand href="#">\r
            <ComputerIcon /> Test\r
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
          <HeroSection>\r
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
          <HeroSection>\r
            <img className="hero-image" src="https://picsum.photos/1400/1400?grayscale" />\r
          </HeroSection>\r
        </Hero>\r
      </div>;
  }
}`,...(f=(T=c.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const J=["Default","WithHero"];export{i as Default,c as WithHero,J as __namedExportsOrder,G as default};
