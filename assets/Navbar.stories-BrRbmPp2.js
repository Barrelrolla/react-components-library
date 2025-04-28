import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BKyFwriW.js";import{w as y,e as f}from"./index-D_lHLW6D.js";import{N as p,a as j,b as T,c as g,d as B}from"./NavbarToggle-D1L7boVN.js";import{C as S,B as c}from"./Button-DoQ_5DKt.js";import"./ButtonGroup-sIvpTzgw.js";import{H as w,a as u,b as H,c as C,d as E}from"./HeroSection-CXIwU38t.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-CzQ_9dh3.js";import"./Anchor-DFDv8UPl.js";import"./HamburgerButton-B17UjNZT.js";const G={title:"Components/Navbar",component:p,args:{selected:void 0},argTypes:{color:{control:{type:"inline-radio"}},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"}},position:{control:{type:"inline-radio"}}}},i={play:async({canvasElement:n})=>{const r=y(n).getByText("Test");await f(r,"renders").toBeTruthy()},render:({selected:n,...t})=>{const r=["link 1","link 2","link 3","link 4","link 5","link 6"],[m,s]=d.useState(n);return d.useEffect(()=>{s(n)},[n]),e.jsx("div",{className:"bg-main h-[200vh]",children:e.jsxs(p,{...t,children:[e.jsx(j,{}),e.jsxs(T,{href:"#",children:[e.jsx(S,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(g,{children:[r.map((a,o)=>e.jsx(B,{href:"#",selected:m===o,onClick:()=>{s(o)},children:a},a)),e.jsx(c,{variant:"outline",color:"primary",className:"w-full md:w-auto",children:"test"})]})]})})}},l={play:async({canvasElement:n})=>{const r=y(n).getByText("Test");await f(r,"renders").toBeTruthy()},render:({selected:n,...t})=>{const r=["link 1","link 2","link 3","link 4","link 5","link 6"],[m,s]=d.useState(n);return d.useEffect(()=>{s(n)},[n]),e.jsxs("div",{className:"bg-main h-[200vh]",children:[e.jsxs(p,{...t,children:[e.jsx(j,{}),e.jsxs(T,{href:"#",children:[e.jsx(S,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(g,{children:[r.map((a,o)=>e.jsx(B,{href:"#",selected:m===o,onClick:()=>{s(o)},children:a},a)),e.jsx(c,{variant:"outline",color:"primary",className:"w-full md:w-auto",children:"test"})]})]}),e.jsxs(w,{className:"mt-10 md:mt-0",children:[e.jsxs(u,{children:[e.jsx(H,{children:"Lorem ipsum dolor sit amet."}),e.jsx(C,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(E,{children:[e.jsx(c,{children:"action"}),e.jsx(c,{children:"action"})]})]}),e.jsx(u,{children:e.jsx("img",{className:"hero-image",src:"https://picsum.photos/1400/1400?grayscale"})})]})]})}};var v,h,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    return <div className="bg-main h-[200vh]">\r
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
      </div>;
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,N,b;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    return <div className="bg-main h-[200vh]">\r
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
        <Hero className="mt-10 md:mt-0">\r
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
}`,...(b=(N=l.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const J=["Default","WithHero"];export{i as Default,l as WithHero,J as __namedExportsOrder,G as default};
