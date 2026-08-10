import{r as m,j as e}from"./iframe-seTiTV_v.js";import{A as l,a as c,b as i}from"./AutocompleteTrigger-Urlyb_zp.js";import{I as d}from"./AutocompleteInput-7PVv10NN.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-cvsoB710.js";import"./icons-D9XKdwam.js";import"./bundle-mjs-Ct12j0u0.js";import"./cssColorProps-D-Xi89r8.js";import"./Divider-DXQtVhka.js";import"./FloatingElementContent-DqORj6EY.js";import"./useIsMobile-BPT4M8Vw.js";import"./helpers-DuDVA4ff.js";import"./getSelectClasses-BWZGqEYj.js";import"./Slot-B51z0L24.js";const E={title:"Components/Autocomplete",tags:["autodocs"],component:l,decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{children:{name:"text"}}},g=Array.from({length:1e5},(t,n)=>`item ${n+1}`),s={render:({...t})=>{const[n,r]=m.useState(!1),[u,p]=m.useState("");return e.jsxs(l,{...t,query:u,onSelectItem:o=>{p(o),r(!1)},items:g,isOpen:n,setIsOpen:r,children:[e.jsx(c,{children:e.jsx(d,{placeholder:"search",onChange:o=>{const a=o.target.value;a&&a.length>0?r(!0):r(!1),p(a)}})}),e.jsx(i,{})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    return <Autocomplete {...rest} query={query} onSelectItem={item => {
      setQuery(item);
      setIsOpen(false);
    }} items={it} isOpen={isOpen} setIsOpen={setIsOpen}>\r
        <AutocompleteTrigger>\r
          <Input placeholder="search" onChange={e => {
          const value = e.target.value;
          if (value && value.length > 0) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
          setQuery(value);
        }} />\r
        </AutocompleteTrigger>\r
        <AutocompleteContent />\r
      </Autocomplete>;
  }
}`,...s.parameters?.docs?.source}}};const _=["Default"];export{s as Default,_ as __namedExportsOrder,E as default};
