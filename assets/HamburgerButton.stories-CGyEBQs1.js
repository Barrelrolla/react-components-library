import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BKyFwriW.js";import{H as n}from"./HamburgerButton-B17UjNZT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-CzQ_9dh3.js";import"./Button-DoQ_5DKt.js";import"./ButtonGroup-sIvpTzgw.js";const H={title:"Components/HamburgerButton",tags:["autodocs"],component:n,argTypes:{children:{if:{arg:"false",eq:"true"}},color:{control:{type:"inline-radio"}},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{if:{arg:"false",exists:!0}},endIcon:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}},as:{if:{arg:"false",exists:!0}},wrapperClasses:{if:{arg:"false",exists:!0}}}},e={render:a=>{const[i,l]=d.useState(!1),p=()=>{l(c=>!c)};return r.jsx("div",{className:"storybookContainer",children:r.jsx(n,{...a,isOpen:i,onClick:p})})}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: props => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen(prevState => !prevState);
    };
    return <div className="storybookContainer">\r
        <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />\r
      </div>;
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,H as default};
