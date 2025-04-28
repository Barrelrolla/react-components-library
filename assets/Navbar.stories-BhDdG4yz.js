import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-BKyFwriW.js";import{w as P,e as M}from"./index-D_lHLW6D.js";import{a as R,t as p,b as Q}from"./ThemeContext-CzQ_9dh3.js";import{A as D}from"./Anchor-3zSwnYK9.js";import{H as X}from"./HamburgerButton-Bo6v3hoJ.js";import{C as W,B as g}from"./Button-DZMTvQ6D.js";import"./ButtonGroup-DT1cgbKi.js";import{H as Y,a as E,b as Z,c as F,d as A}from"./HeroSection-CXIwU38t.js";import"./_commonjsHelpers-CqkleIqs.js";const z=f.createContext(void 0),ee=z.Provider;function T(){return f.useContext(z)}function ae({fixed:a,position:n,glass:t,hasShadow:l,collapseAt:r,isOpen:s,className:i,backdropClasses:u}){const o=R();return{headerStyles:p("navbar",t&&"glass",s&&r=="sm"&&"not-sm:bg-main/80",s&&r=="md"&&"not-md:bg-main/80",s&&r=="lg"&&"not-lg:bg-main/80",s&&r=="xl"&&"not-xl:bg-main/80",a&&"fixed left-0 z-40",n==="top"&&"top-0",n==="bottom"&&"bottom-0",n==="top"&&"rounded-b-(length:--radius-navigation) border-b-(length:--border-navigation)",n==="bottom"&&"rounded-t-(length:--radius-navigation) border-t-(length:--border-navigation)",l&&"shadow-dark/60 dark:shadow-dark/80",l&&n==="top"&&"shadow-[0px_4px_8px_-1px]",l&&n==="bottom"&&"shadow-[0px_-4px_8px_-1px]",(!o||o.transitions)&&"transition-colors",i),navStyles:p("navbar-nav"),backdropStyles:p("backdrop",r==="sm"&&"sm:hidden",r==="md"&&"md:hidden",r==="lg"&&"lg:hidden",r==="xl"&&"xl:hidden",!s&&"hidden",s&&"block",u)}}function ne({position:a,collapseAt:n,isOpen:t,transitions:l,wrapperClasses:r,className:s}){const i=R(),u=(!i||i.transitions)&&l,o=p("navbar-collapse-container",u&&"transition-[max-height]",a==="top"&&"order-last",a==="bottom"&&"order-first",n==="sm"&&"sm:navbar-collapse-container-extended",n==="md"&&"md:navbar-collapse-container-extended",n==="lg"&&"lg:navbar-collapse-container-extended",n==="xl"&&"xl:navbar-collapse-container-extended",!t&&"max-h-0 ease-out",t&&"max-h-screen ease-in",r),c=p("navbar-collapse-list",a==="top"&&"mt-4",a==="bottom"&&"mb-4",n==="sm"&&"sm:navbar-collapse-list-extended",n==="md"&&"md:navbar-collapse-list-extended",n==="lg"&&"lg:navbar-collapse-list-extended",n==="xl"&&"xl:navbar-collapse-list-extended",s);return{wrapperStyles:o,listStyles:c}}function re({collapseAt:a,className:n}){return p(a==="sm"&&"not-sm:navbar-link sm:navbar-link-extended",a==="md"&&"not-md:navbar-link md:navbar-link-extended",a==="lg"&&"not-lg:navbar-link lg:navbar-link-extended",a==="xl"&&"not-xl:navbar-link xl:navbar-link-extended",n)}function k({color:a="main",hasShadow:n=!0,collapseAt:t="sm",fixed:l=!0,position:r="top",glass:s=!0,children:i,className:u,backdropClasses:o}){const[c,m]=f.useState(!1),{headerStyles:v,navStyles:N,backdropStyles:B}=ae({fixed:l,position:r,glass:s,hasShadow:n,isOpen:c,collapseAt:t,className:u,backdropClasses:o});function w(){m(!1)}function h(j){j.code==="Escape"&&m(!1)}function d(){m(!1)}return f.useEffect(()=>(document.addEventListener("keyup",h),window.addEventListener("scroll",d),()=>{document.removeEventListener("keyup",h),window.removeEventListener("scroll",d)}),[]),e.jsx(ee,{value:{color:a,position:r,collapseAt:t,isOpen:c,setIsOpen:m},children:e.jsx(e.Fragment,{children:e.jsxs("header",{className:v,children:[e.jsx("nav",{className:N,style:Q(a),children:i}),e.jsx("div",{className:B,onClick:w})]})})})}k.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{color:{required:!1,tsType:{name:"union",raw:`| "main"\r
| "light"\r
| "dark"\r
| "primary"\r
| "secondary"\r
| "accent"\r
| "info"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:"literal",value:'"main"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"main"',computed:!1}},hasShadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},collapseAt:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},fixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},glass:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},backdropClasses:{required:!1,tsType:{name:"string"},description:""}}};const se="a";function q({as:a,underlined:n=!1,hoverUnderline:t=!1,useBgColor:l=!1,children:r,className:s,onClick:i,...u}){const o=T();if(!o)throw new Error("Please use the Navbar Brand component only inside a Navbar.");function c(v){o==null||o.setIsOpen(!1),window.scrollTo(0,0),i==null||i(v)}const m=p("navbar-brand",s);return e.jsx(D,{color:o.color,underlined:n,hoverUnderline:t,as:a||se,className:m,useBgColor:l,onClick:c,...u,children:r})}q.__docgenInfo={description:"",methods:[],displayName:"NavbarBrand",props:{color:{required:!1,tsType:{name:"union",raw:`| "main"\r
| "light"\r
| "dark"\r
| "primary"\r
| "secondary"\r
| "accent"\r
| "info"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:"literal",value:'"main"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:""},underlined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverUnderline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverUnderlineOffset:{required:!1,tsType:{name:"boolean"},description:""},highlights:{required:!1,tsType:{name:"boolean"},description:""},transitions:{required:!1,tsType:{name:"boolean"},description:""},useBgColor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"ElementTypeMap<T> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"RefObject<ElementTypeMap<T> | null>"},description:""}}};function S({transitions:a=!0,className:n,wrapperClasses:t,children:l,...r}){const s=T();if(!s)throw new Error("Please use the Navbar Link Group component only inside a navbar");const{isOpen:i,position:u,collapseAt:o}=s,{wrapperStyles:c,listStyles:m}=ne({position:u,collapseAt:o,isOpen:i,transitions:a,wrapperClasses:t,className:n});return e.jsx("div",{className:c,children:e.jsx("ul",{className:m,...r,children:l})})}S.__docgenInfo={description:"",methods:[],displayName:"NavbarCollapse",props:{transitions:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},wrapperClasses:{required:!1,tsType:{name:"string"},description:""}}};const te="a";function H({as:a,selected:n=!1,selectedUnderline:t=!1,selectedUnderlineOffset:l=!1,hoverUnderline:r=!1,bgHighlight:s=!1,selectedHighlight:i=!0,useBgColor:u=!1,underlined:o=!1,onClick:c,onFocus:m,onBlur:v,children:N,selectedClasses:B,className:w,...h}){const d=T();if(!d)throw new Error("Please use the NavbarLink component only inside a Navbar.");function j(b){d==null||d.setIsOpen(!1),window.scrollTo(0,0),c==null||c(b)}function G(b){d==null||d.setIsOpen(!0),m==null||m(b)}function $(b){d==null||d.setIsOpen(!1),v==null||v(b)}const{collapseAt:J}=d,K=re({collapseAt:J,className:w});return e.jsx("li",{children:e.jsx(D,{"data-selected":n,color:d.color,as:a||te,selected:n,useBgColor:u,underlined:o,hoverUnderline:r,className:K,onClick:j,onFocus:G,onBlur:$,...h,children:N})})}H.__docgenInfo={description:"",methods:[],displayName:"NavbarLink",props:{selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bgHighlight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedHighlight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selectedUnderline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedUnderlineOffset:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedClasses:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:`| "main"\r
| "light"\r
| "dark"\r
| "primary"\r
| "secondary"\r
| "accent"\r
| "info"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:"literal",value:'"main"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:""},underlined:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverUnderline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverUnderlineOffset:{required:!1,tsType:{name:"boolean"},description:""},highlights:{required:!1,tsType:{name:"boolean"},description:""},transitions:{required:!1,tsType:{name:"boolean"},description:""},useBgColor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"ElementTypeMap<T> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:"RefObject<ElementTypeMap<T> | null>"},description:""}}};function C(){const a=T();if(!a)throw new Error("Please use the Navbar toggle Component only inside a Navbar");function n(){s(!r)}const{color:t,collapseAt:l,isOpen:r,setIsOpen:s}=a,i=p(l==="sm"&&"sm:hidden",l==="md"&&"md:hidden",l==="lg"&&"lg:hidden",l==="xl"&&"xl:hidden");return e.jsx(X,{wrapperClasses:i,color:t,isOpen:r,onClick:n})}C.__docgenInfo={description:"",methods:[],displayName:"NavbarToggle"};const be={title:"Components/Navbar",component:k,args:{selected:void 0},argTypes:{color:{control:{type:"inline-radio"}},selected:{control:{type:"inline-radio",min:0,max:6,labels:{0:"1",1:"2",2:"3",3:"4",4:"5",5:"6",6:"none"}},options:[0,1,2,3,4,5,6]},collapseAt:{control:{type:"inline-radio"}},position:{control:{type:"inline-radio"}}}},y={play:async({canvasElement:a})=>{const t=P(a).getByText("Test");await M(t,"renders").toBeTruthy()},render:({selected:a,...n})=>{const t=["link 1","link 2","link 3","link 4","link 5","link 6"],[l,r]=f.useState(a);return f.useEffect(()=>{r(a)},[a]),e.jsx("div",{className:"bg-main h-[200vh]",children:e.jsxs(k,{...n,children:[e.jsx(C,{}),e.jsxs(q,{href:"#",children:[e.jsx(W,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(S,{children:[t.map((s,i)=>e.jsx(H,{href:"#",selected:l===i,onClick:()=>{r(i)},children:s},s)),e.jsx(g,{variant:"outline",color:"primary",className:"w-full md:w-auto",children:"test"})]})]})})}},x={play:async({canvasElement:a})=>{const t=P(a).getByText("Test");await M(t,"renders").toBeTruthy()},render:({selected:a,...n})=>{const t=["link 1","link 2","link 3","link 4","link 5","link 6"],[l,r]=f.useState(a);return f.useEffect(()=>{r(a)},[a]),e.jsxs("div",{className:"bg-main h-[200vh]",children:[e.jsxs(k,{...n,children:[e.jsx(C,{}),e.jsxs(q,{href:"#",children:[e.jsx(W,{})," Test"]}),e.jsx("div",{role:"presentation",className:"w-10 sm:hidden"}),e.jsxs(S,{children:[t.map((s,i)=>e.jsx(H,{href:"#",selected:l===i,onClick:()=>{r(i)},children:s},s)),e.jsx(g,{variant:"outline",color:"primary",className:"w-full md:w-auto",children:"test"})]})]}),e.jsxs(Y,{className:"mt-10 md:mt-0",children:[e.jsxs(E,{children:[e.jsx(Z,{children:"Lorem ipsum dolor sit amet."}),e.jsx(F,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex, corporis rem dolores culpa quo corrupti doloremque minima excepturi molestiae."}),e.jsxs(A,{children:[e.jsx(g,{children:"action"}),e.jsx(g,{children:"action"})]})]}),e.jsx(E,{children:e.jsx("img",{className:"hero-image",src:"https://picsum.photos/1400/1400?grayscale"})})]})]})}};var V,_,L;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(U=(O=x.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const he=["Default","WithHero"];export{y as Default,x as WithHero,he as __namedExportsOrder,be as default};
