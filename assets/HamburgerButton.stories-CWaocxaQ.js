import{r as i,j as r}from"./iframe-MZB_caGF.js";import{H as a}from"./HamburgerButton-ChKhPG9t.js";import{b as p,a as c}from"./index-Ccfv0_tG.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./Button-DZTzONxe.js";import"./icons-C6YbZSVv.js";import"./ButtonGroup-0IbGhgEV.js";import"./Divider-Df6SaE8Q.js";import"./floating-ui.react-DDLLzMxe.js";const k={title:"Components/HamburgerButton",tags:["autodocs"],component:a,decorators:t=>r.jsx("div",{className:"storybookContainer",children:r.jsx(t,{})}),argTypes:{children:{table:{disable:!0}},isOpen:{table:{disable:!0}},color:{control:{type:"select"},options:c},variant:{table:{disable:!0}},ghostHover:{table:{disable:!0}},size:{control:{type:"inline-radio"},options:p},radius:{table:{disable:!0}},selected:{table:{disable:!0}},loading:{table:{disable:!0}},loadingPosition:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}},wrapperClasses:{table:{disable:!0}}}},e={render:t=>{const[s,o]=i.useState(!1),n=()=>{o(l=>!l)};return r.jsx(a,{...t,isOpen:s,onClick:n})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen(prevState => !prevState);
    };
    return <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />;
  }
}`,...e.parameters?.docs?.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,k as default};
