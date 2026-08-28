import{r as h,m as u,n as y,R as f,j as n}from"./iframe-Zws2HjAc.js";import"./Anchor-aFYMACbU.js";import"./Badge-6ivdWahA.js";import{B as a}from"./Button-BwuwvX7p.js";import"./ButtonGroup-ewVkGR4I.js";import"./PopoverTrigger-BuVj72Sx.js";import"./DarkModeToggle-BFJUekYB.js";import"./DarkModeSelector-BRQBZLt2.js";import{s as k,p as x,o as H,r as T}from"./DropdownTrigger-D4Yz3h-m.js";import"./Divider-DhYu-9Ob.js";import"./HamburgerButton-igQxh8Mr.js";import"./AutocompleteInput-D-fgyotg.js";import"./Checkbox-DF1HKIQZ.js";import"./RadioGroup-BlYMX7gH.js";import"./TooltipContent-CmR2UNbf.js";import"./SidemenuItem-DD8ZAOXl.js";import"./SelectOption-Bm7hy6zL.js";import"./Skeleton-D86HW7B9.js";import"./AutocompleteTrigger-CojaIBsu.js";import"./Combobox-DUaUMwJe.js";import"./Pagination-C1E7GEij.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-BH0j_R8N.js";import"./FloatingElementContent-DdA_R0vP.js";import"./useIsMobile-CU9Emrnj.js";import"./Slot-4WWoWA6Q.js";import"./helpers-BOK2crC4.js";import"./getSelectClasses-ODcP7xGF.js";var j=0,C=t=>t.button===j&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey,g=(t,r=e=>{})=>{C(t)&&(t.preventDefault(),r(t))},c=class extends h.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:t,title:r=t,story:e,name:o=e}=this.props;if(r&&o){let i=await u(r,o);this.setState({href:i})}},this.handleClick=()=>{let{kind:t,title:r=t,story:e,name:o=e}=this.props;r&&o&&y({title:r,name:o})}}componentDidMount(){this.updateHref()}componentDidUpdate(t){let{kind:r,title:e,story:o,name:i}=this.props;(t.kind!==r||t.story!==o||t.title!==e||t.name!==i)&&this.updateHref()}render(){let{kind:t,title:r=t,story:e,name:o=e,children:i,...l}=this.props,{href:p}=this.state;return f.createElement("a",{href:p,onClick:d=>g(d,this.handleClick),...l},i)}};c.defaultProps={children:void 0};var m=c;const tt={title:"Intro/Welcome"},s={render:()=>n.jsx("div",{className:"bg-main",children:n.jsx(k,{textAlign:"center",className:"h-screen min-h-0",children:n.jsxs(x,{children:[n.jsx(H,{children:"Welcome to my react components library"}),n.jsxs(T,{children:[n.jsx(a,{variant:"outline",as:m,kind:"Components/Anchor",story:"docs",children:"Components"}),n.jsx(a,{as:m,kind:"Intro/Installation",story:"docs",children:"Installation"})]})]})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
