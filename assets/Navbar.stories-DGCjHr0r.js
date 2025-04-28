import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-BKyFwriW.js";import{w as P,e as M}from"./index-D_lHLW6D.js";import{a as R,t as p,b as Q}from"./ThemeContext-CzQ_9dh3.js";import{A as D}from"./Anchor-ZXsyOFo8.js";import{H as X}from"./HamburgerButton-nLs1isn5.js";import{C as W,B as g}from"./Button-B4yJPE4L.js";import"./ButtonGroup-KAUQFKNT.js";import{H as Y,a as E,b as Z,c as F,d as A}from"./HeroSection-CXIwU38t.js";import"./_commonjsHelpers-CqkleIqs.js";const z=f.createContext(void 0),ee=z.Provider;function T(){return f.useContext(z)}function ne({fixed:n,position:a,glass:s,hasShadow:l,collapseAt:r,isOpen:t,className:o,backdropClasses:u}){const i=R();return{headerStyles:p("navbar",s&&"glass",t&&r=="sm"&&"not-sm:bg-main/80",t&&r=="md"&&"not-md:bg-main/80",t&&r=="lg"&&"not-lg:bg-main/80",t&&r=="xl"&&"not-xl:bg-main/80",n&&"fixed left-0 z-40",a==="top"&&"top-0",a==="bottom"&&"bottom-0",a==="top"&&"rounded-b-(length:--radius-navigation) border-b-(length:--border-navigation)",a==="bottom"&&"rounded-t-(length:--radius-navigation) border-t-(length:--border-navigation)",l&&"shadow-dark/60 dark:shadow-dark/80",l&&a==="top"&&"shadow-[0px_4px_8px_-1px]",l&&a==="bottom"&&"shadow-[0px_-4px_8px_-1px]",(!i||i.transitions)&&"transition-colors",o),navStyles:p("navbar-nav"),backdropStyles:p("backdrop",r==="sm"&&"sm:hidden",r==="md"&&"md:hidden",r==="lg"&&"lg:hidden",r==="xl"&&"xl:hidden",!t&&"hidden",t&&"block",u)}}function ae({position:n,collapseAt:a,isOpen:s,transitions:l,wrapperClasses:r,className:t}){const o=R(),u=(!o||o.transitions)&&l,i=p("navbar-collapse-container",u&&"transition-[max-height]",n==="top"&&"order-last",n==="bottom"&&"order-first",a==="sm"&&"sm:navbar-collapse-container-extended",a==="md"&&"md:navbar-collapse-container-extended",a==="lg"&&"lg:navbar-collapse-container-extended",a==="xl"&&"xl:navbar-collapse-container-extended",!s&&"max-h-0 ease-out",s&&"max-h-screen ease-in",r),c=p("navbar-collapse-list",n==="top"&&"mt-4",n==="bottom"&&"mb-4",a==="sm"&&"sm:navbar-collapse-list-extended",a==="md"&&"md:navbar-collapse-list-extended",a==="lg"&&"lg:navbar-collapse-list-extended",a==="xl"&&"xl:navbar-collapse-list-extended",t);return{wrapperStyles:i,listStyles:c}}function re({collapseAt:n,className:a}){return p(n==="sm"&&"not-sm:navbar-link sm:navbar-link-extended",n==="md"&&"not-md:navbar-link md:navbar-link-extended",n==="lg"&&"not-lg:navbar-link lg:navbar-link-extended",n==="xl"&&"not-xl:navbar-link xl:navbar-link-extended",a)}function k({color:n="main",hasShadow:a=!0,collapseAt:s="sm",fixed:l=!0,position:r="top",glass:t=!0,children:o,className:u,backdropClasses:i}){const[c,m]=f.useState(!1),{headerStyles:v,navStyles:N,backdropStyles:B}=ne({fixed:l,position:r,glass:t,hasShadow:a,isOpen:c,collapseAt:s,className:u,backdropClasses:i});function w(){m(!1)}function b(j){j.code==="Escape"&&m(!1)}function d(){m(!1)}return f.useEffect(()=>(document.addEventListener("keyup",b),window.addEventListener("scroll",d),()=>{document.removeEventListener("keyup",b),window.removeEventListener("scroll",d)}),[]),e.jsx(ee,{value:{color:n,position:r,collapseAt:s,isOpen:c,setIsOpen:m},children:e.jsx(e.Fragment,{children:e.jsxs("header",{className:v,children:[e.jsx("nav",{className:N,style:Q(n),children:o}),e.jsx("div",{className:B,onClick:w})]})})})}k.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{color:{required:!1,tsType:{name:"union",raw:`| "main"\r
| "light"\r
| "dark"\r
| "primary"\r
| "secondary"\r
| "accent"\r
| "info"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:"literal",value:'"main"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"main"',computed:!1}},hasShadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},collapseAt:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},fixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},glass:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},backdropClasses:{required:!1,tsType:{name:"string"},description:""}}};const te="a";function q({as:n,underlined:a=!1,hoverUnderline:s=!1,useBgColor:l=!1,children:r,className:t,onClick:o,...u}){const i=T();if(!i)throw new Error("Please use the Navbar Brand component only inside a Navbar.");function c(v){i==null||i.setIsOpen(!1),window.scrollTo(0,0),o==null||o(v)}const m=p("navbar-brand",t);return e.jsx(D,{color:i.color,underlined:a,hoverUnderline:s,as:n||te,className:m,useBgColor:l,onClick:c,...u,children:r})}q.__docgenInfo={description:"",methods:[],displayName:"NavbarBrand",props:{color:{required:!1,tsType:{name:"union",raw:`| "main"\r
| "light"\r
| "dark"\r
| "primary"\r
| "secondary"\r
| "accent"\r
| "info"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:"literal",value:'"main"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:""},underlined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverUnderline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverUnderlineOffset:{required:!1,tsType:{name:"boolean"},description:""},highlights:{required:!1,tsType:{name:"boolean"},description:""},transitions:{required:!1,tsType:{name:"boolean"},description:""},useBgColor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"T"},description:"The html element (or other component) the component should be rendered as"},ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"ElementTypeMap<T> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"RefObject<ElementTypeMap<T> | null>"},description:""}}};function S({transitions:n=!0,className:a,wrapperClasses:s,children:l,...r}){const t=T();if(!t)throw new Error("Please use the Navbar Link Group component only inside a navbar");const{isOpen:o,position:u,collapseAt:i}=t,{wrapperStyles:c,listStyles:m}=ae({position:u,collapseAt:i,isOpen:o,transitions:n,wrapperClasses:s,className:a});return e.jsx("div",{className:c,children:e.jsx("ul",{className:m,...r,children:l})})}S.__docgenInfo={description:"",methods:[],displayName:"NavbarCollapse",props:{transitions:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},wrapperClasses:{required:!1,tsType:{name:"string"},description:""}}};const se="a";function H({as:n,selected:a=!1,selectedUnderline:s=!1,selectedUnderlineOffset:l=!1,hoverUnderline:r=!1,bgHighlight:t=!1,selectedHighlight:o=!0,useBgColor:u=!1,underlined:i=!1,onClick:c,onFocus:m,onBlur:v,children:N,selectedClasses:B,className:w,...b}){const d=T();if(!d)throw new Error("Please use the NavbarLink component only inside a Navbar.");function j(h){d==null||d.setIsOpen(!1),window.scrollTo(0,0),c==null||c(h)}function G(h){d==null||d.setIsOpen(!0),m==null||m(h)}function $(h){d==null||d.setIsOpen(!1),v==null||v(h)}const{collapseAt:J}=d,K=re({collapseAt:J,className:w});return e.jsx("li",{children:e.jsx(D,{"data-selected":a,color:d.color,as:n||se,selected:a,useBgColor:u,underlined:i,hoverUnderline:r,className:K,onClick:j,onFocus:G,onBlur:$,...b,children:N})})}H.__docgenInfo={description:"",methods:[],displayName:"NavbarLink",props:{selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bgHighlight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedHighlight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selectedUnderline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedUnderlineOffset:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedClasses:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:`| "main"\r
| "light"\r
| "dark"\r
| "primary"\r
| "secondary"\r
| "accent"\r
| "info"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:"literal",value:'"main"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:""},underlined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverUnderline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverUnderlineOffset:{required:!1,tsType:{name:"boolean"},description:""},highlights:{required:!1,tsType:{name:"boolean"},description:""},transitions:{required:!1,tsType:{name:"boolean"},description:""},useBgColor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"T"},description:"The html element (or other component) the component should be rendered as"},ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"ElementTypeMap<T> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"RefObject<ElementTypeMap<T> | null>"},description:""}}};function C(){const n=T();if(!n)throw new Error("Please use the Navbar toggle Component only inside a Navbar");function a(){t(!r)}const{color:s,collapseAt:l,isOpen:r,setIsOpen:t}=n,o=p(l==="sm"&&"sm:hidden",l==="md"&&"md:hidden",l==="lg"&&"lg:hidden",l==="xl"&&"xl:hidden");return e.jsx(X,{wrapperClasses:o,color:s,isOpen:r,onClick:a})}C.__docgenInfo={description:"",methods:[],displayName:"NavbarToggle"};const he={title:"Components/Navbar",component:k,args:{selected:void 0},argTypes:{color:{control:{type:"inline-radio"}},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"}},position:{control:{type:"inline-radio"}}}},y={play:async({canvasElement:n})=>{const s=P(n).getByText("Test");await M(s,"renders").toBeTruthy()},render:({selected:n,...a})=>{const s=["link 1","link 2","link 3","link 4","link 5","link 6"],[l,r]=f.useState(n);return f.useEffect(()=>{r(n)},[n]),e.jsx("div",{className:"bg-main h-[200vh]",children:e.jsxs(k,{...a,children:[e.jsx(C,{}),e.jsxs(q,{href:"#",children:[e.jsx(W,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(S,{children:[s.map((t,o)=>e.jsx(H,{href:"#",selected:l===o,onClick:()=>{r(o)},children:t},t)),e.jsx(g,{variant:"outline",color:"primary",className:"w-full md:w-auto",children:"test"})]})]})})}},x={play:async({canvasElement:n})=>{const s=P(n).getByText("Test");await M(s,"renders").toBeTruthy()},render:({selected:n,...a})=>{const s=["link 1","link 2","link 3","link 4","link 5","link 6"],[l,r]=f.useState(n);return f.useEffect(()=>{r(n)},[n]),e.jsxs("div",{className:"bg-main h-[200vh]",children:[e.jsxs(k,{...a,children:[e.jsx(C,{}),e.jsxs(q,{href:"#",children:[e.jsx(W,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(S,{children:[s.map((t,o)=>e.jsx(H,{href:"#",selected:l===o,onClick:()=>{r(o)},children:t},t)),e.jsx(g,{variant:"outline",color:"primary",className:"w-full md:w-auto",children:"test"})]})]}),e.jsxs(Y,{className:"mt-10 md:mt-0",children:[e.jsxs(E,{children:[e.jsx(Z,{children:"Lorem ipsum dolor sit amet."}),e.jsx(F,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(A,{children:[e.jsx(g,{children:"action"}),e.jsx(g,{children:"action"})]})]}),e.jsx(E,{children:e.jsx("img",{className:"hero-image",src:"https://picsum.photos/1400/1400?grayscale"})})]})]})}};var V,_,L;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(_=y.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var I,O,U;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(U=(O=x.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const be=["Default","WithHero"];export{y as Default,x as WithHero,be as __namedExportsOrder,he as default};
