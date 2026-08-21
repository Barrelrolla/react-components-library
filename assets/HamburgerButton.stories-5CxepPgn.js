import{r as i,j as r}from"./iframe-BdSF-zhJ.js";import{H as a}from"./HamburgerButton-YwqQ8ll7.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./ButtonGroup-Ddw7f-DK.js";import"./icons-B4oRaJlO.js";import"./bundle-mjs-Ct12j0u0.js";import"./Divider-B_Uo59Vs.js";const f={title:"Components/HamburgerButton",tags:["autodocs"],component:a,decorators:t=>r.jsx("div",{className:"storybookContainer",children:r.jsx(t,{})}),argTypes:{color:{table:{category:"controls"}},size:{table:{category:"controls"}},disabled:{table:{category:"controls"}},scaling:{table:{category:"controls"}},retainFocusState:{table:{disable:!0}},children:{table:{disable:!0}},isOpen:{table:{disable:!0}},variant:{table:{disable:!0}},radius:{table:{disable:!0}},selected:{table:{disable:!0}},loading:{table:{disable:!0}},loadingPosition:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},useGroup:{table:{disable:!0}}}},e={render:t=>{const[s,o]=i.useState(!1),l=()=>{o(n=>!n)};return r.jsx(a,{...t,isOpen:s,onClick:l})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen(prevState => !prevState);
    };
    return <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />;
  }
}`,...e.parameters?.docs?.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,f as default};
