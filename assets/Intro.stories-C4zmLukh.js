import{r as h,m as u,n as y,R as f,j as o}from"./iframe-CUtd1n4L.js";import"./Anchor-B4feZRmL.js";import"./Badge-CKrS2qgj.js";import{B as a}from"./ButtonGroup-SfHTwtbh.js";import"./PopoverTrigger-PUbzPO3C.js";import"./DarkModeToggle-5jOc5FFT.js";import"./DarkModeSelector-DUF4ayQJ.js";import{s as k,p as x,o as H,r as T}from"./Combobox-fjTgddMy.js";import"./Divider-CijQ5Lkn.js";import"./HamburgerButton-CJK5PwfY.js";import"./AutocompleteInput-NbDvs0g-.js";import"./Checkbox-BMRiJcSG.js";import"./RadioGroup-CcqGwqmw.js";import"./TooltipContent-CI3TSE9k.js";import"./SidemenuItem-b6zpPHtB.js";import"./SelectOption-Dq0gTlrk.js";import"./Skeleton-1vKfRerP.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-BldbZDxN.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-DdSbJd4H.js";import"./FloatingElementContent-DN09I3ti.js";import"./useIsMobile-B3cQGu-U.js";import"./helpers-Csz2bOlM.js";var j=0,C=t=>t.button===j&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey,g=(t,e=r=>{})=>{C(t)&&(t.preventDefault(),e(t))},c=class extends h.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:t,title:e=t,story:r,name:n=r}=this.props;if(e&&n){let i=await u(e,n);this.setState({href:i})}},this.handleClick=()=>{let{kind:t,title:e=t,story:r,name:n=r}=this.props;e&&n&&y({title:e,name:n})}}componentDidMount(){this.updateHref()}componentDidUpdate(t){let{kind:e,title:r,story:n,name:i}=this.props;(t.kind!==e||t.story!==n||t.title!==r||t.name!==i)&&this.updateHref()}render(){let{kind:t,title:e=t,story:r,name:n=r,children:i,...l}=this.props,{href:p}=this.state;return f.createElement("a",{href:p,onClick:d=>g(d,this.handleClick),...l},i)}};c.defaultProps={children:void 0};var m=c;const Q={title:"Intro/Welcome"},s={render:()=>o.jsx("div",{className:"bg-main",children:o.jsx(k,{textAlign:"center",className:"h-screen min-h-0",children:o.jsxs(x,{children:[o.jsx(H,{children:"Welcome to my react components library"}),o.jsxs(T,{children:[o.jsx(a,{variant:"outline",as:m,kind:"Components/Anchor",story:"docs",children:"Components"}),o.jsx(a,{as:m,kind:"Intro/Installation",story:"docs",children:"Installation"})]})]})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
