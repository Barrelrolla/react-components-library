import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{w as S,e as B}from"./index-D_lHLW6D.js";import{N as p,a as u,b as v,c as x,d as h}from"./NavbarToggle-DlbIWvMl.js";import{C as H,B as m}from"./Button-dQQngyAZ.js";import"./ButtonGroup-B9WW19Th.js";import{d as w,c as b,b as C,a as E,H as L}from"./HeroSection-CjVE_nKg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-EqqjHPk4.js";import"./Anchor-DJVMO5w5.js";import"./HamburgerButton-B37AaZjI.js";const J={title:"Components/Navbar",component:h,subcomponents:{NavbarBrand:x,NavbarToggle:v,NavbarCollapse:u,NavbarLink:p},tags:["autodocs"],args:{selected:void 0},argTypes:{color:{control:{type:"select"}},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"}},position:{control:{type:"inline-radio"}}}},i={play:async({canvasElement:n})=>{const s=S(n).getByText("Test");await B(s,"renders").toBeTruthy()},render:({fixed:n=!1,selected:r,...s})=>{const d=["link 1","link 2","link 3","link 4","link 5","link 6"],[o,t]=c.useState(r);return c.useEffect(()=>{t(r)},[r]),e.jsx("div",{className:"bg-main",children:e.jsxs(h,{fixed:n,...s,children:[e.jsx(v,{}),e.jsxs(x,{href:"#",children:[e.jsx(H,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(u,{children:d.map((a,k)=>e.jsx(p,{href:"#",selected:o===k,onClick:()=>{t(k)},children:a},a))})]})})}},l={play:async({canvasElement:n})=>{const s=S(n).getByText("Test");await B(s,"renders").toBeTruthy()},render:({selected:n,...r})=>{const s=["link 1","link 2","link 3","link 4","link 5","link 6"],[d,o]=c.useState(n);return c.useEffect(()=>{o(n)},[n]),e.jsxs("div",{className:"bg-main h-[100vh] pt-10 md:p-0",children:[e.jsxs(h,{...r,children:[e.jsx(v,{}),e.jsxs(x,{href:"#",children:[e.jsx(H,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(u,{children:[s.map((t,a)=>e.jsx(p,{href:"#",selected:d===a,onClick:()=>{o(a)},children:t},t)),e.jsx(m,{variant:"outline",color:"primary",className:"w-full md:w-auto",children:"test"})]})]}),e.jsxs(w,{children:[e.jsxs(b,{children:[e.jsx(C,{children:"Lorem ipsum dolor sit amet."}),e.jsx(E,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(L,{children:[e.jsx(m,{children:"action"}),e.jsx(m,{children:"action"})]})]}),e.jsx(b,{children:e.jsx("img",{className:"hero-image",src:"https://picsum.photos/1400/1400?grayscale"})})]})]})}};var N,f,y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,T,g;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    return <div className="bg-main h-[100vh] pt-10 md:p-0">\r
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
}`,...(g=(T=l.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const K=["Default","WithHero"];export{i as Default,l as WithHero,K as __namedExportsOrder,J as default};
