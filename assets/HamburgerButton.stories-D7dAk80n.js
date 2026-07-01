import{r as u,j as t}from"./iframe-_eeK6Xjw.js";import{H as a}from"./HamburgerButton-DZSW1N73.js";import"./preload-helper-Dp1pzeXC.js";import"./bundle-mjs-169JcMJR.js";import"./Button-Ck1eW3d3.js";import"./icons-CKivjK5h.js";import"./ButtonGroup-CNDO_64A.js";import"./Divider-Dz-lriwz.js";const k={title:"Components/HamburgerButton",tags:["autodocs"],component:a,decorators:r=>t.jsx("div",{className:"storybookContainer",children:t.jsx(r,{})}),argTypes:{children:{if:{arg:"false",eq:"true"}},color:{control:{type:"select"}},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{if:{arg:"false",exists:!0}},endIcon:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}},as:{if:{arg:"false",exists:!0}},wrapperClasses:{if:{arg:"false",exists:!0}}}},e={render:r=>{const[i,p]=u.useState(!1),l=()=>{p(c=>!c)};return t.jsx(a,{...r,isOpen:i,onClick:l})}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen(prevState => !prevState);
    };
    return <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />;
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,k as default};
