import{r as c,j as e}from"./iframe-Dv7Yg3ZZ.js";import{b as g,a as y}from"./index-DttbUWqL.js";import"./Anchor-Be5uP5kD.js";import"./Badge-CNcvqPBw.js";import"./Button-yvPfsRvW.js";import"./ButtonGroup-Bog2dg3U.js";import"./PopoverTrigger-DqtM6S5u.js";import"./DarkModeToggle-DCB1GrxU.js";import"./DarkModeSelector-CyWwK2ji.js";import"./DropdownTrigger-CdXB-QJ5.js";import"./Divider-DUERIuYm.js";import"./HamburgerButton-znH2009I.js";import{I as d}from"./AutocompleteInput-rGQ9DOUM.js";import"./Checkbox-CE9wDXX5.js";import"./RadioGroup-MVuqHsQZ.js";import"./TooltipContent-C3GKZQp9.js";import"./SidemenuItem-B4zG9ZIM.js";import"./SelectOption-4Nfk_a-l.js";import"./Skeleton-D5AAoEEY.js";import{A as p,a as f,b as m,c as i}from"./AutocompleteTrigger-B4ZuN4tu.js";import"./Combobox-CcE2WO0X.js";import"./Pagination-DA5bJrFF.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-CQ25DoBg.js";import"./FloatingElementContent-C7VMhTIZ.js";import"./useIsMobile-CUdhmKLk.js";import"./Slot-BphKqsXJ.js";import"./helpers-BlchSOhu.js";import"./getSelectClasses-n2zSgRW8.js";const V={title:"Components/Autocomplete",tags:["autodocs"],component:i,subcomponents:{AutocompleteContent:m,AutocompleteItem:f,AutocompleteTrigger:p},decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{color:{control:"select",options:y,table:{category:"controls"}},placement:{control:"select",options:g,table:{category:"controls"}},strategy:{control:"radio",table:{category:"controls"}},disabled:{control:"boolean",table:{category:"controls"}},isOpen:{control:!1,table:{category:"docs"}},setIsOpen:{control:!1,table:{category:"docs"}},items:{control:!1,table:{category:"docs"}},query:{control:!1,table:{category:"docs"}},onSelectItem:{control:!1,table:{category:"docs"}},selectedIndex:{control:!1,table:{category:"docs"}},selectedIndices:{control:!1,table:{category:"docs"}},triggerRef:{control:!1,table:{category:"docs"}}}},I=Array.from({length:1e5},(t,s)=>`item ${s+1}`),n={render:({...t})=>{const[s,o]=c.useState(!1),[u,l]=c.useState("");return e.jsxs(i,{...t,query:u,onSelectItem:r=>{l(r),o(!1)},items:I,isOpen:s,setIsOpen:o,children:[e.jsx(p,{children:e.jsx(d,{placeholder:"Search 100 000 items",onChange:r=>{const a=r.target.value;a&&a.length>0?o(!0):o(!1),l(a)}})}),e.jsx(m,{})]})},parameters:{docs:{source:{type:"code",code:`
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
