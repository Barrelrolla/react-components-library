import{r as d,j as r}from"./iframe-BJiJRBRH.js";import{H as n}from"./HamburgerButton-rbJR2JHg.js";import{b,a as u}from"./index-DnWjc-IH.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";import"./Button-CiaNWnlf.js";import"./icons-CLNt07g9.js";import"./ButtonGroup-B9dho6v7.js";import"./Divider-CzHOIJJQ.js";const S={title:"Components/HamburgerButton",tags:["autodocs"],component:n,decorators:t=>r.jsx("div",{className:"storybookContainer",children:r.jsx(t,{})}),argTypes:{children:{table:{disable:!0}},isOpen:{table:{disable:!0}},color:{control:{type:"select"},options:u},variant:{table:{disable:!0}},ghostHover:{table:{disable:!0}},size:{control:{type:"inline-radio"},options:b},radius:{table:{disable:!0}},selected:{table:{disable:!0}},loading:{table:{disable:!0}},loadingPosition:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},ref:{table:{disable:!0}},as:{table:{disable:!0}},wrapperClasses:{table:{disable:!0}}}},e={render:t=>{const[l,i]=d.useState(!1),p=()=>{i(c=>!c)};return r.jsx(n,{...t,isOpen:l,onClick:p})}};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen(prevState => !prevState);
    };
    return <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />;
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,S as default};
