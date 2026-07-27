import{r as i,j as r}from"./iframe-Dx2saKrQ.js";import{H as a}from"./HamburgerButton-DxV_EhJG.js";import{b as p,a as c}from"./index-CikE6BH2.js";import"./preload-helper-PPVm8Dsz.js";import"./bundle-mjs-169JcMJR.js";import"./Button-RY-hPtgX.js";import"./icons-NQ7eCirg.js";import"./FloatingContext-CVJP9sGf.js";import"./ButtonGroup-C-QLkQBn.js";import"./Divider-B2BZnyM5.js";const k={title:"Components/HamburgerButton",tags:["autodocs"],component:a,decorators:t=>r.jsx("div",{className:"storybookContainer",children:r.jsx(t,{})}),argTypes:{children:{table:{disable:!0}},isOpen:{table:{disable:!0}},color:{control:{type:"select"},options:c},variant:{table:{disable:!0}},ghostHover:{table:{disable:!0}},size:{control:{type:"inline-radio"},options:p},radius:{table:{disable:!0}},selected:{table:{disable:!0}},loading:{table:{disable:!0}},loadingPosition:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},e={render:t=>{const[s,o]=i.useState(!1),n=()=>{o(l=>!l)};return r.jsx(a,{...t,isOpen:s,onClick:n})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen(prevState => !prevState);
    };
    return <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />;
  }
}`,...e.parameters?.docs?.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,k as default};
