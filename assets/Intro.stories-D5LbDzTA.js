import{r as h,m as u,n as y,R as f,j as n}from"./iframe-Bbxhc0td.js";import"./Anchor-Bd8u19zS.js";import"./Badge-ClTnM6nG.js";import{B as a}from"./Button-BO93cLlU.js";import"./ButtonGroup-DwYiJzMz.js";import"./PopoverTrigger-DC3zGtyd.js";import"./DarkModeToggle-DjbJfyJ8.js";import"./DarkModeSelector-C8p4kY1D.js";import{s as k,p as x,o as H,r as T}from"./DropdownTrigger-CgBoVI6l.js";import"./Divider-DSU9h1GZ.js";import"./HamburgerButton-D7-yr55c.js";import"./AutocompleteInput-CHW-CgMg.js";import"./Checkbox-Dvot6QXH.js";import"./RadioGroup-LuxfsKUB.js";import"./TooltipContent-CoHp1mC_.js";import"./SidemenuItem-BI_Gs0CE.js";import"./SelectOption-CgAFufTX.js";import"./Skeleton-i6dR9Dz8.js";import"./AutocompleteTrigger-CdMJVSoW.js";import"./Combobox-BpDiAhlV.js";import"./Pagination-BdLsu59G.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-DfMaXq6z.js";import"./FloatingElementContent-CyNdRXM9.js";import"./useIsMobile-DyAixpuM.js";import"./Slot-D0LNAv-l.js";import"./helpers-BX2qdzfg.js";import"./getSelectClasses-DIPACFQu.js";var j=0,C=t=>t.button===j&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey,g=(t,r=e=>{})=>{C(t)&&(t.preventDefault(),r(t))},c=class extends h.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:t,title:r=t,story:e,name:o=e}=this.props;if(r&&o){let i=await u(r,o);this.setState({href:i})}},this.handleClick=()=>{let{kind:t,title:r=t,story:e,name:o=e}=this.props;r&&o&&y({title:r,name:o})}}componentDidMount(){this.updateHref()}componentDidUpdate(t){let{kind:r,title:e,story:o,name:i}=this.props;(t.kind!==r||t.story!==o||t.title!==e||t.name!==i)&&this.updateHref()}render(){let{kind:t,title:r=t,story:e,name:o=e,children:i,...l}=this.props,{href:p}=this.state;return f.createElement("a",{href:p,onClick:d=>g(d,this.handleClick),...l},i)}};c.defaultProps={children:void 0};var m=c;const tt={title:"Intro/Welcome"},s={render:()=>n.jsx("div",{className:"bg-main",children:n.jsx(k,{textAlign:"center",className:"h-screen min-h-0",children:n.jsxs(x,{children:[n.jsx(H,{children:"Welcome to my react components library"}),n.jsxs(T,{children:[n.jsx(a,{variant:"outline",as:m,kind:"Components/Anchor",story:"docs",children:"Components"}),n.jsx(a,{as:m,kind:"Intro/Installation",story:"docs",children:"Installation"})]})]})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const rt=["Welcome"];export{s as Welcome,rt as __namedExportsOrder,tt as default};
