import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-BKyFwriW.js";import{H as a}from"./HamburgerButton-Bo6v3hoJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ThemeContext-CzQ_9dh3.js";import"./Button-DZMTvQ6D.js";import"./ButtonGroup-DT1cgbKi.js";const H={title:"Components/HamburgerButton",component:a,argTypes:{children:{if:{arg:"false",eq:"true"}},color:{control:{type:"inline-radio"}},variant:{control:{type:"inline-radio"}},ghostHover:{control:{type:"inline-radio"},if:{arg:"variant",eq:"ghost"}},size:{control:{type:"inline-radio"}},radius:{control:{type:"inline-radio"}},loadingPosition:{control:{type:"inline-radio"}},startIcon:{if:{arg:"false",exists:!0}},endIcon:{if:{arg:"false",exists:!0}},ref:{if:{arg:"false",exists:!0}},as:{if:{arg:"false",exists:!0}},wrapperClasses:{if:{arg:"false",exists:!0}}}},e={render:o=>{const[i,p]=m.useState(!1),l=()=>{p(c=>!c)};return r.jsx("div",{className:"bg-main px-10 py-20",children:r.jsx(a,{...o,isOpen:i,onClick:l})})}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: props => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen(prevState => !prevState);
    };
    return <div className="bg-main px-10 py-20">\r
        <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />\r
      </div>;
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,H as default};
