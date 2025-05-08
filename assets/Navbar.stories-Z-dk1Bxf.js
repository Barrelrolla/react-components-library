import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{w as T,e as w}from"./index-D_lHLW6D.js";import{N as p,a as u,b as v,c as x,d as h}from"./NavbarToggle-CzscLCrF.js";import{C as S,B as d}from"./Button-dQQngyAZ.js";import"./ButtonGroup-B9WW19Th.js";import{d as B,c as H,b as C,a as E,H as L,e as I}from"./HeroText-BFhcjF8Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-EqqjHPk4.js";import"./Anchor-DJVMO5w5.js";import"./HamburgerButton-B37AaZjI.js";const K={title:"Components/Navbar",component:h,subcomponents:{NavbarBrand:x,NavbarToggle:v,NavbarCollapse:u,NavbarLink:p},tags:["autodocs"],args:{selected:void 0},argTypes:{color:{control:{type:"select"}},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"}},position:{control:{type:"inline-radio"}}}},i={play:async({canvasElement:n})=>{const s=T(n).getByText("Test");await w(s,"renders").toBeTruthy()},render:({fixed:n=!1,selected:r,...s})=>{const m=["link 1","link 2","link 3","link 4","link 5","link 6"],[o,t]=c.useState(r);return c.useEffect(()=>{t(r)},[r]),e.jsx("div",{className:"bg-main",children:e.jsxs(h,{fixed:n,...s,children:[e.jsx(v,{}),e.jsxs(x,{href:"#",children:[e.jsx(S,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsx(u,{children:m.map((a,k)=>e.jsx(p,{href:"#",selected:o===k,onClick:()=>{t(k)},children:a},a))})]})})}},l={play:async({canvasElement:n})=>{const s=T(n).getByText("Test");await w(s,"renders").toBeTruthy()},render:({selected:n,...r})=>{const s=["link 1","link 2","link 3","link 4","link 5","link 6"],[m,o]=c.useState(n);return c.useEffect(()=>{o(n)},[n]),e.jsxs("div",{className:"bg-main mt-16 md:mt-0",children:[e.jsxs(h,{...r,children:[e.jsx(v,{}),e.jsxs(x,{href:"#",children:[e.jsx(S,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(u,{children:[s.map((t,a)=>e.jsx(p,{href:"#",selected:m===a,onClick:()=>{o(a)},children:t},t)),e.jsx(d,{variant:"outline",color:"primary",className:"w-full md:w-auto",children:"test"})]})]}),e.jsxs(B,{children:[e.jsxs(H,{className:"max-md:h-1/2 md:w-1/2",children:[e.jsx(C,{children:"Lorem ipsum dolor sit amet."}),e.jsx(E,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(L,{children:[e.jsx(d,{children:"action"}),e.jsx(d,{children:"action"})]})]}),e.jsx(I,{className:"max-md:h-1/2 md:w-1/2",children:e.jsx("img",{className:"hero-image md:w-[50svw]",src:"https://picsum.photos/1400/1400?grayscale"})})]})]})}};var N,b,f;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,g,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    return <div className="bg-main mt-16 md:mt-0">\r
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
      </div>;
  }
}`,...(j=(g=l.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const M=["Default","WithHero"];export{i as Default,l as WithHero,M as __namedExportsOrder,K as default};
