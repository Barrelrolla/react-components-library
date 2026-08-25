import{r as c,j as e}from"./iframe-CpemLjPm.js";import{b as g,a as y}from"./index-DttbUWqL.js";import"./Anchor-bYtcX1ns.js";import"./Badge-Co8xWE66.js";import"./ButtonGroup-CxLLG3mH.js";import"./PopoverTrigger-BiDPcGRO.js";import"./DarkModeToggle-B66pJPp3.js";import"./DarkModeSelector-Dr9FY3q7.js";import"./DropdownTrigger-Ct-T0pMT.js";import"./Divider-BQkHCiSY.js";import"./HamburgerButton-BpoWcZfu.js";import{I as d}from"./AutocompleteInput-DhyNwgwe.js";import"./Checkbox-BQnBaDGH.js";import"./RadioGroup-DJEkjqK0.js";import"./TooltipContent-CUE08K7p.js";import"./SidemenuItem-Bo2RdnFM.js";import"./SelectOption-BRqXND_e.js";import"./Skeleton-Dc6pL2zE.js";import{A as p,a as f,b as m,c as i}from"./AutocompleteTrigger-Djkz8oIi.js";import"./Combobox-DPpyekQi.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-CDFVRKfG.js";import"./FloatingElementContent-inUOiRJu.js";import"./useIsMobile-D4Isz1Ul.js";import"./Slot-puw9ipcw.js";import"./helpers-Bu78j2zP.js";import"./getSelectClasses-DPonTTp7.js";const M={title:"Components/Autocomplete",tags:["autodocs"],component:i,subcomponents:{AutocompleteContent:m,AutocompleteItem:f,AutocompleteTrigger:p},decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{color:{control:"select",options:y,table:{category:"controls"}},placement:{control:"select",options:g,table:{category:"controls"}},strategy:{control:"radio",table:{category:"controls"}},disabled:{control:"boolean",table:{category:"controls"}},isOpen:{control:!1,table:{category:"docs"}},setIsOpen:{control:!1,table:{category:"docs"}},items:{control:!1,table:{category:"docs"}},query:{control:!1,table:{category:"docs"}},onSelectItem:{control:!1,table:{category:"docs"}},selectedIndex:{control:!1,table:{category:"docs"}},selectedIndices:{control:!1,table:{category:"docs"}}}},I=Array.from({length:1e5},(t,s)=>`item ${s+1}`),n={render:({...t})=>{const[s,o]=c.useState(!1),[u,l]=c.useState("");return e.jsxs(i,{...t,query:u,onSelectItem:r=>{l(r),o(!1)},items:I,isOpen:s,setIsOpen:o,children:[e.jsx(p,{children:e.jsx(d,{placeholder:"Search 100 000 items",onChange:r=>{const a=r.target.value;a&&a.length>0?o(!0):o(!1),l(a)}})}),e.jsx(m,{})]})},parameters:{docs:{source:{type:"code",code:`
const items = Array.from({ length: 100000 }, (_, i) => \`item \${i + 1}\`);

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <Autocomplete
      query={query}
      items={items}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onSelectItem={(item) => {
        setQuery(item);
        setIsOpen(false);
      }}
    >
      <AutocompleteTrigger>
        <Input
          placeholder="Search"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            setIsOpen(!!value);
          }}
        />
      </AutocompleteTrigger>

      <AutocompleteContent />
    </Autocomplete>
  );
}
        `}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <Input placeholder="Search 100 000 items" onChange={e => {
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
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: \`
const items = Array.from({ length: 100000 }, (_, i) => \\\`item \\\${i + 1}\\\`);

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <Autocomplete
      query={query}
      items={items}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onSelectItem={(item) => {
        setQuery(item);
        setIsOpen(false);
      }}
    >
      <AutocompleteTrigger>
        <Input
          placeholder="Search"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            setIsOpen(!!value);
          }}
        />
      </AutocompleteTrigger>

      <AutocompleteContent />
    </Autocomplete>
  );
}
        \`
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const U=["Default"];export{n as Default,U as __namedExportsOrder,M as default};
