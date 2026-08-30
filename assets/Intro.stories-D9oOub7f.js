import{r as h,m as u,n as f,R as k,j as n}from"./iframe-IjIofJAl.js";import"./Anchor-CQ6rG7DQ.js";import"./Badge-BYal0W2_.js";import{B as a}from"./Button-CiFVnd6D.js";import"./ButtonGroup-D99X3ycs.js";import"./PopoverTrigger-BCV3vJCT.js";import"./DarkModeToggle-W0Cf_A2W.js";import"./DarkModeSelector-BiSZDjEF.js";import{s as x,p as H,o as y,r as T}from"./DropdownTrigger-CK2tZ2s5.js";import"./Divider-B8DehVb6.js";import"./HamburgerButton-DV9Arz9E.js";import"./AutocompleteInput-B2MRN4PA.js";import"./Checkbox-C6cQ6CPi.js";import"./RadioGroup-CRzP2w05.js";import"./TooltipContent-BnDYh_tQ.js";import"./SidemenuItem-C7j-z8hZ.js";import"./SelectOption-C04hzJLe.js";import"./Skeleton-CL3-pCtE.js";import"./AutocompleteTrigger-DooYucUg.js";import"./Combobox-D4uO62YO.js";import"./Pagination-C7Meg5oM.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-D9Ceu6Hu.js";import"./FloatingElementContent-COIVXDWQ.js";import"./useIsMobile-D3wkI3Hm.js";import"./Slot-X8oaB9SZ.js";import"./helpers-BlNmDQhL.js";import"./getSelectClasses-CvbKxVK4.js";var j=0,B=t=>t.button===j&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey,C=(t,r=e=>{})=>{B(t)&&(t.preventDefault(),r(t))},l=class extends h.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:t,title:r=t,story:e,name:o=e}=this.props;if(r&&o){let i=await u(r,o);this.setState({href:i})}},this.handleClick=()=>{let{kind:t,title:r=t,story:e,name:o=e}=this.props;r&&o&&f({title:r,name:o})}}componentDidMount(){this.updateHref()}componentDidUpdate(t){let{kind:r,title:e,story:o,name:i}=this.props;(t.kind!==r||t.story!==o||t.title!==e||t.name!==i)&&this.updateHref()}render(){let{kind:t,title:r=t,story:e,name:o=e,children:i,...c}=this.props,{href:p}=this.state;return k.createElement("a",{href:p,onClick:d=>C(d,this.handleClick),...c},i)}};l.defaultProps={children:void 0};var m=l;const tt={title:"Intro/Welcome"},s={render:()=>n.jsx("div",{className:"bg-main",children:n.jsx(x,{textAlign:"center",className:"h-screen min-h-0",children:n.jsxs(H,{children:[n.jsx(y,{children:"Welcome to Barrelrolla UI"}),n.jsxs(T,{children:[n.jsx(a,{variant:"outline",as:m,kind:"Components/Anchor",story:"docs",children:"Components"}),n.jsx(a,{as:m,kind:"Intro/Installation",story:"docs",children:"Installation"})]})]})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
