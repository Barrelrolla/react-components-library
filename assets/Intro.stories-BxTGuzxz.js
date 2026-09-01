import{r as h,m as u,n as f,R as k,j as n}from"./iframe-Bk44I_Fv.js";import"./Anchor-C7NUlHkP.js";import"./Badge-lsgKJymo.js";import{B as a}from"./Button-DicSCenw.js";import"./ButtonGroup-CI3gLvJp.js";import"./PopoverTrigger-Dl5mnwoN.js";import"./DarkModeToggle-Dz-0Qroc.js";import"./DarkModeSelector-CAiAGmFJ.js";import{s as x,p as H,o as y,r as T}from"./DropdownTrigger-McPqPf9v.js";import"./Divider-GqMPHXpn.js";import"./HamburgerButton-9pE5zt2B.js";import"./AutocompleteInput-Bjkhso2X.js";import"./Checkbox-Dv-hHDLe.js";import"./RadioGroup-DOUxx2c7.js";import"./TooltipContent-PfBPAaI9.js";import"./SidemenuItem-DFJ7vsqY.js";import"./SelectOption-C4mFY7NY.js";import"./Skeleton-ClO_nrEU.js";import"./AutocompleteTrigger-BUURkOs6.js";import"./Combobox-DAxAwmb3.js";import"./Pagination-W4x0IIvl.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-DuPz1k2y.js";import"./FloatingElementContent-DCei2QzV.js";import"./useIsMobile-Nq-wZusp.js";import"./Slot-B0xXaF2q.js";import"./helpers-gHlZSL6P.js";import"./getSelectClasses-sZnzDajL.js";var j=0,B=t=>t.button===j&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey,C=(t,r=e=>{})=>{B(t)&&(t.preventDefault(),r(t))},l=class extends h.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:t,title:r=t,story:e,name:o=e}=this.props;if(r&&o){let i=await u(r,o);this.setState({href:i})}},this.handleClick=()=>{let{kind:t,title:r=t,story:e,name:o=e}=this.props;r&&o&&f({title:r,name:o})}}componentDidMount(){this.updateHref()}componentDidUpdate(t){let{kind:r,title:e,story:o,name:i}=this.props;(t.kind!==r||t.story!==o||t.title!==e||t.name!==i)&&this.updateHref()}render(){let{kind:t,title:r=t,story:e,name:o=e,children:i,...c}=this.props,{href:p}=this.state;return k.createElement("a",{href:p,onClick:d=>C(d,this.handleClick),...c},i)}};l.defaultProps={children:void 0};var m=l;const tt={title:"Intro/Welcome"},s={render:()=>n.jsx("div",{className:"bg-main",children:n.jsx(x,{textAlign:"center",className:"h-screen min-h-0",children:n.jsxs(H,{children:[n.jsx(y,{children:"Welcome to Barrelrolla UI"}),n.jsxs(T,{children:[n.jsx(a,{variant:"outline",as:m,kind:"Components/Anchor",story:"docs",children:"Components"}),n.jsx(a,{as:m,kind:"Intro/Installation",story:"docs",children:"Installation"})]})]})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="bg-main">\r
        <Hero textAlign="center" className="h-screen min-h-0">\r
          <HeroSection>\r
            <HeroTitle>Welcome to Barrelrolla UI</HeroTitle>\r
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
