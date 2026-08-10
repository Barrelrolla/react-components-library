import{r as i,j as r}from"./iframe-DnygXqbo.js";import{H as a}from"./HamburgerButton-D6cVVoVP.js";import{b as p,a as c}from"./index-COUSODbC.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./ButtonGroup-Bk0e2Nce.js";import"./icons-Clz5e0bR.js";import"./bundle-mjs-Ct12j0u0.js";import"./Divider-D3dyumf4.js";const k={title:"Components/HamburgerButton",tags:["autodocs"],component:a,decorators:t=>r.jsx("div",{className:"storybookContainer",children:r.jsx(t,{})}),argTypes:{children:{table:{disable:!0}},isOpen:{table:{disable:!0}},color:{control:{type:"select"},options:c},variant:{table:{disable:!0}},size:{control:{type:"inline-radio"},options:p},radius:{table:{disable:!0}},selected:{table:{disable:!0}},loading:{table:{disable:!0}},loadingPosition:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}},wrapperClassName:{table:{disable:!0}}}},e={render:t=>{const[s,o]=i.useState(!1),n=()=>{o(l=>!l)};return r.jsx(a,{...t,isOpen:s,onClick:n})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen(prevState => !prevState);
    };
    return <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />;
  }
}`,...e.parameters?.docs?.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,k as default};
