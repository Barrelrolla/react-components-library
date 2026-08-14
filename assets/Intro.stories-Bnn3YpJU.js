import{r as h,m as u,n as y,R as f,j as o}from"./iframe-k1U2xSHC.js";import"./Anchor-WnFCbMqC.js";import"./Badge-B3QV1DSW.js";import{B as a}from"./ButtonGroup-CWAI0kFb.js";import"./PopoverTrigger-M-mbCEja.js";import"./DarkModeToggle-Cr05nAGo.js";import"./DarkModeSelector-HNa7RKpK.js";import{s as k,p as x,o as H,r as T}from"./Combobox-D_e3Pb2a.js";import"./Divider-CSei7Oeg.js";import"./HamburgerButton-Dop8rRAA.js";import"./AutocompleteInput-aERiD6HD.js";import"./Checkbox-Fbv0V_cU.js";import"./RadioGroup-CxgK4UpU.js";import"./TooltipContent-CbS6xGqU.js";import"./SidemenuItem-C9QntBh1.js";import"./SelectOption-CPV1YlKi.js";import"./Skeleton-B3UAsIPD.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-BldbZDxN.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-B4UzUjUo.js";import"./FloatingElementContent-CI_BPQ-0.js";import"./useIsMobile-5YnFfgaT.js";import"./helpers-BMSh6Jd-.js";var j=0,C=t=>t.button===j&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey,g=(t,e=r=>{})=>{C(t)&&(t.preventDefault(),e(t))},c=class extends h.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:t,title:e=t,story:r,name:n=r}=this.props;if(e&&n){let i=await u(e,n);this.setState({href:i})}},this.handleClick=()=>{let{kind:t,title:e=t,story:r,name:n=r}=this.props;e&&n&&y({title:e,name:n})}}componentDidMount(){this.updateHref()}componentDidUpdate(t){let{kind:e,title:r,story:n,name:i}=this.props;(t.kind!==e||t.story!==n||t.title!==r||t.name!==i)&&this.updateHref()}render(){let{kind:t,title:e=t,story:r,name:n=r,children:i,...l}=this.props,{href:p}=this.state;return f.createElement("a",{href:p,onClick:d=>g(d,this.handleClick),...l},i)}};c.defaultProps={children:void 0};var m=c;const Q={title:"Intro/Welcome"},s={render:()=>o.jsx("div",{className:"bg-main",children:o.jsx(k,{textAlign:"center",className:"h-screen min-h-0",children:o.jsxs(x,{children:[o.jsx(H,{children:"Welcome to my react components library"}),o.jsxs(T,{children:[o.jsx(a,{variant:"outline",as:m,kind:"Components/Anchor",story:"docs",children:"Components"}),o.jsx(a,{as:m,kind:"Intro/Installation",story:"docs",children:"Installation"})]})]})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="bg-main">\r
        <Hero textAlign="center" className="h-screen min-h-0">\r
          <HeroSection>\r
            <HeroTitle>Welcome to my react components library</HeroTitle>\r
            <HeroActions>\r
              <Button variant="outline" as={LinkTo} kind="Components/Anchor" story="docs">\r
                Components\r
              </Button>\r
              <Button as={LinkTo} kind="Intro/Installation" story="docs">\r
                Installation\r
              </Button>\r
            </HeroActions>\r
          </HeroSection>\r
        </Hero>\r
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const V=["Welcome"];export{s as Welcome,V as __namedExportsOrder,Q as default};
