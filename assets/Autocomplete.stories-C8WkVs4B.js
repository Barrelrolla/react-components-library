import{r as c,j as e}from"./iframe-Bbxhc0td.js";import{b as g,a as y}from"./index-DttbUWqL.js";import"./Anchor-Bd8u19zS.js";import"./Badge-ClTnM6nG.js";import"./Button-BO93cLlU.js";import"./ButtonGroup-DwYiJzMz.js";import"./PopoverTrigger-DC3zGtyd.js";import"./DarkModeToggle-DjbJfyJ8.js";import"./DarkModeSelector-C8p4kY1D.js";import"./DropdownTrigger-CgBoVI6l.js";import"./Divider-DSU9h1GZ.js";import"./HamburgerButton-D7-yr55c.js";import{I as d}from"./AutocompleteInput-CHW-CgMg.js";import"./Checkbox-Dvot6QXH.js";import"./RadioGroup-LuxfsKUB.js";import"./TooltipContent-CoHp1mC_.js";import"./SidemenuItem-BI_Gs0CE.js";import"./SelectOption-CgAFufTX.js";import"./Skeleton-i6dR9Dz8.js";import{A as p,a as f,b as m,c as i}from"./AutocompleteTrigger-CdMJVSoW.js";import"./Combobox-BpDiAhlV.js";import"./Pagination-BdLsu59G.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-DfMaXq6z.js";import"./FloatingElementContent-CyNdRXM9.js";import"./useIsMobile-DyAixpuM.js";import"./Slot-D0LNAv-l.js";import"./helpers-BX2qdzfg.js";import"./getSelectClasses-DIPACFQu.js";const V={title:"Components/Autocomplete",tags:["autodocs"],component:i,subcomponents:{AutocompleteContent:m,AutocompleteItem:f,AutocompleteTrigger:p},decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{color:{control:"select",options:y,table:{category:"controls"}},placement:{control:"select",options:g,table:{category:"controls"}},strategy:{control:"radio",table:{category:"controls"}},disabled:{control:"boolean",table:{category:"controls"}},isOpen:{control:!1,table:{category:"docs"}},setIsOpen:{control:!1,table:{category:"docs"}},items:{control:!1,table:{category:"docs"}},query:{control:!1,table:{category:"docs"}},onSelectItem:{control:!1,table:{category:"docs"}},selectedIndex:{control:!1,table:{category:"docs"}},selectedIndices:{control:!1,table:{category:"docs"}}}},I=Array.from({length:1e5},(t,s)=>`item ${s+1}`),n={render:({...t})=>{const[s,o]=c.useState(!1),[u,l]=c.useState("");return e.jsxs(i,{...t,query:u,onSelectItem:r=>{l(r),o(!1)},items:I,isOpen:s,setIsOpen:o,children:[e.jsx(p,{children:e.jsx(d,{placeholder:"Search 100 000 items",onChange:r=>{const a=r.target.value;a&&a.length>0?o(!0):o(!1),l(a)}})}),e.jsx(m,{})]})},parameters:{docs:{source:{type:"code",code:`
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
}`,...n.parameters?.docs?.source}}};const W=["Default"];export{n as Default,W as __namedExportsOrder,V as default};
