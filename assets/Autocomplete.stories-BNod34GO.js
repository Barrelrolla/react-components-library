import{r as c,j as e}from"./iframe-Bq-qTuPV.js";import{b as g,a as y}from"./index-DttbUWqL.js";import"./Anchor-D2yqvZXB.js";import"./Badge-BQ8mMiwC.js";import"./ButtonGroup-EdvDBeQv.js";import"./PopoverTrigger-W2axUDb8.js";import"./DarkModeToggle-CKMgeKng.js";import"./DarkModeSelector-D_2oFfhK.js";import"./DropdownTrigger-CzCyJtPe.js";import"./Divider-D-yjLdOq.js";import"./HamburgerButton-BUrCfzB_.js";import{I as d}from"./AutocompleteInput-BSSDgEgz.js";import"./Checkbox-DVEcePgr.js";import"./RadioGroup-CVg6Gdvy.js";import"./TooltipContent-aILqjwYc.js";import"./SidemenuItem-BuqmDow_.js";import"./SelectOption-KNsnFuxO.js";import"./Skeleton-B4ldX9ik.js";import{A as p,a as f,b as m,c as i}from"./AutocompleteTrigger-DvQDv_pa.js";import"./Combobox-CsU7b7_p.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-BMtJpZx5.js";import"./FloatingElementContent-DTZ0t0xo.js";import"./useIsMobile-COwC63CJ.js";import"./Slot-DB_xuMy2.js";import"./helpers-CQvskJeD.js";import"./getSelectClasses-KU68FZN4.js";const M={title:"Components/Autocomplete",tags:["autodocs"],component:i,subcomponents:{AutocompleteContent:m,AutocompleteItem:f,AutocompleteTrigger:p},decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{color:{control:"select",options:y,table:{category:"controls"}},placement:{control:"select",options:g,table:{category:"controls"}},strategy:{control:"radio",table:{category:"controls"}},disabled:{control:"boolean",table:{category:"controls"}},isOpen:{control:!1,table:{category:"docs"}},setIsOpen:{control:!1,table:{category:"docs"}},items:{control:!1,table:{category:"docs"}},query:{control:!1,table:{category:"docs"}},onSelectItem:{control:!1,table:{category:"docs"}},selectedIndex:{control:!1,table:{category:"docs"}},selectedIndices:{control:!1,table:{category:"docs"}}}},I=Array.from({length:1e5},(t,s)=>`item ${s+1}`),n={render:({...t})=>{const[s,o]=c.useState(!1),[u,l]=c.useState("");return e.jsxs(i,{...t,query:u,onSelectItem:r=>{l(r),o(!1)},items:I,isOpen:s,setIsOpen:o,children:[e.jsx(p,{children:e.jsx(d,{placeholder:"Search 100 000 items",onChange:r=>{const a=r.target.value;a&&a.length>0?o(!0):o(!1),l(a)}})}),e.jsx(m,{})]})},parameters:{docs:{source:{type:"code",code:`
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
