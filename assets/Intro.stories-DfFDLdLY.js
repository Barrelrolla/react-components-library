import{r as h,m as u,n as y,R as f,j as n}from"./iframe-CpemLjPm.js";import"./Anchor-bYtcX1ns.js";import"./Badge-Co8xWE66.js";import{B as a}from"./ButtonGroup-CxLLG3mH.js";import"./PopoverTrigger-BiDPcGRO.js";import"./DarkModeToggle-B66pJPp3.js";import"./DarkModeSelector-Dr9FY3q7.js";import{s as k,p as x,o as H,r as T}from"./DropdownTrigger-Ct-T0pMT.js";import"./Divider-BQkHCiSY.js";import"./HamburgerButton-BpoWcZfu.js";import"./AutocompleteInput-DhyNwgwe.js";import"./Checkbox-BQnBaDGH.js";import"./RadioGroup-DJEkjqK0.js";import"./TooltipContent-CUE08K7p.js";import"./SidemenuItem-Bo2RdnFM.js";import"./SelectOption-BRqXND_e.js";import"./Skeleton-Dc6pL2zE.js";import"./AutocompleteTrigger-Djkz8oIi.js";import"./Combobox-DPpyekQi.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-CDFVRKfG.js";import"./FloatingElementContent-inUOiRJu.js";import"./useIsMobile-D4Isz1Ul.js";import"./Slot-puw9ipcw.js";import"./helpers-Bu78j2zP.js";import"./getSelectClasses-DPonTTp7.js";var j=0,C=t=>t.button===j&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey,g=(t,r=e=>{})=>{C(t)&&(t.preventDefault(),r(t))},c=class extends h.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:t,title:r=t,story:e,name:o=e}=this.props;if(r&&o){let i=await u(r,o);this.setState({href:i})}},this.handleClick=()=>{let{kind:t,title:r=t,story:e,name:o=e}=this.props;r&&o&&y({title:r,name:o})}}componentDidMount(){this.updateHref()}componentDidUpdate(t){let{kind:r,title:e,story:o,name:i}=this.props;(t.kind!==r||t.story!==o||t.title!==e||t.name!==i)&&this.updateHref()}render(){let{kind:t,title:r=t,story:e,name:o=e,children:i,...l}=this.props,{href:p}=this.state;return f.createElement("a",{href:p,onClick:d=>g(d,this.handleClick),...l},i)}};c.defaultProps={children:void 0};var m=c;const Z={title:"Intro/Welcome"},s={render:()=>n.jsx("div",{className:"bg-main",children:n.jsx(k,{textAlign:"center",className:"h-screen min-h-0",children:n.jsxs(x,{children:[n.jsx(H,{children:"Welcome to my react components library"}),n.jsxs(T,{children:[n.jsx(a,{variant:"outline",as:m,kind:"Components/Anchor",story:"docs",children:"Components"}),n.jsx(a,{as:m,kind:"Intro/Installation",story:"docs",children:"Installation"})]})]})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const $=["Welcome"];export{s as Welcome,$ as __namedExportsOrder,Z as default};
