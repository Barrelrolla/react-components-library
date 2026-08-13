import{r as c,j as e}from"./iframe-CUtd1n4L.js";import{b as g,a as y}from"./index-DttbUWqL.js";import"./Anchor-B4feZRmL.js";import"./Badge-CKrS2qgj.js";import"./ButtonGroup-SfHTwtbh.js";import"./PopoverTrigger-PUbzPO3C.js";import"./DarkModeToggle-5jOc5FFT.js";import"./DarkModeSelector-DUF4ayQJ.js";import"./Combobox-fjTgddMy.js";import"./Divider-CijQ5Lkn.js";import"./HamburgerButton-CJK5PwfY.js";import{A as p,a as d,b as m,c as u,I}from"./AutocompleteInput-NbDvs0g-.js";import"./Checkbox-BMRiJcSG.js";import"./RadioGroup-CcqGwqmw.js";import"./TooltipContent-CI3TSE9k.js";import"./SidemenuItem-b6zpPHtB.js";import"./SelectOption-Dq0gTlrk.js";import"./Skeleton-1vKfRerP.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-BldbZDxN.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-DdSbJd4H.js";import"./FloatingElementContent-DN09I3ti.js";import"./useIsMobile-B3cQGu-U.js";import"./helpers-Csz2bOlM.js";const H={title:"Components/Autocomplete",tags:["autodocs"],component:u,subcomponents:{AutocompleteContent:m,AutocompleteItem:d,AutocompleteTrigger:p},decorators:t=>e.jsx("div",{className:"storybookContainer",children:e.jsx(t,{})}),argTypes:{color:{control:"select",options:y,table:{category:"controls"}},placement:{control:"select",options:g,table:{category:"controls"}},strategy:{control:"radio",table:{category:"controls"}},disabled:{control:"boolean",table:{category:"controls"}},isOpen:{control:!1,table:{category:"docs"}},setIsOpen:{control:!1,table:{category:"docs"}},items:{control:!1,table:{category:"docs"}},query:{control:!1,table:{category:"docs"}},onSelectItem:{control:!1,table:{category:"docs"}},selectedIndex:{control:!1,table:{category:"docs"}},selectedIndices:{control:!1,table:{category:"docs"}}}},f=Array.from({length:1e5},(t,s)=>`item ${s+1}`),n={render:({...t})=>{const[s,o]=c.useState(!1),[i,l]=c.useState("");return e.jsxs(u,{...t,query:i,onSelectItem:r=>{l(r),o(!1)},items:f,isOpen:s,setIsOpen:o,children:[e.jsx(p,{children:e.jsx(I,{placeholder:"Search 100 000 items",onChange:r=>{const a=r.target.value;a&&a.length>0?o(!0):o(!1),l(a)}})}),e.jsx(m,{})]})},parameters:{docs:{source:{type:"code",code:`
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
}`,...n.parameters?.docs?.source}}};const J=["Default"];export{n as Default,J as __namedExportsOrder,H as default};
