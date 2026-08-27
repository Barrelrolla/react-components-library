import{r as i,j as a}from"./iframe-Bbxhc0td.js";import{H as r}from"./HamburgerButton-D7-yr55c.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./Button-BO93cLlU.js";import"./icons-DfMaXq6z.js";import"./bundle-mjs-Ct12j0u0.js";import"./ButtonGroup-DwYiJzMz.js";import"./Divider-DSU9h1GZ.js";const x={title:"Components/HamburgerButton",tags:["autodocs"],component:r,decorators:t=>a.jsx("div",{className:"storybookContainer",children:a.jsx(t,{})}),argTypes:{color:{table:{category:"controls"}},size:{table:{category:"controls"}},disabled:{table:{category:"controls"}},scaling:{table:{category:"controls"}},retainFocusState:{table:{disable:!0}},children:{table:{disable:!0}},isOpen:{table:{disable:!0}},variant:{table:{disable:!0}},radius:{table:{disable:!0}},selected:{table:{disable:!0}},loading:{table:{disable:!0}},loadingPosition:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}},useGroup:{table:{disable:!0}}},args:{"aria-label":"toggle"}},e={render:t=>{const[s,o]=i.useState(!1),l=()=>{o(n=>!n)};return a.jsx(r,{...t,isOpen:s,onClick:l})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen(prevState => !prevState);
    };
    return <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />;
  }
}`,...e.parameters?.docs?.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,x as default};
