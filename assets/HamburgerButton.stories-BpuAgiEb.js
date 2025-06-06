import{j as t,r as u}from"./iframe-2xTwKzkK.js";import{H as a}from"./HamburgerButton-BVXafxrD.js";import"./bundle-mjs-CFgYV38x.js";import"./Button-D6w_sEDH.js";import"./icons-CdlL9hCZ.js";import"./ButtonGroup-Cc9cTTKs.js";import"./Divider-xEzdXBiL.js";const O={title:"Components/HamburgerButton",tags:["autodocs"],component:a,decorators:r=>t.jsx("div",{className:"storybookContainer",children:t.jsx(r,{})}),argTypes:{children:{if:{arg:"false",eq:"true"}},color:{control:{type:"select"}},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{if:{arg:"false",exists:!0}},endIcon:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}},as:{if:{arg:"false",exists:!0}},wrapperClasses:{if:{arg:"false",exists:!0}}}},e={render:r=>{const[i,l]=u.useState(!1),p=()=>{l(c=>!c)};return t.jsx(a,{...r,isOpen:i,onClick:p})}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen(prevState => !prevState);
    };
    return <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />;
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,O as default};
