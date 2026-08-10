import{r as o,j as e}from"./iframe-seTiTV_v.js";import"./Anchor-oJfLwVaf.js";import"./Badge-CKO4wwAY.js";import{B}from"./ButtonGroup-cvsoB710.js";import{f as w,b as E,a as O}from"./CardTitle-DsBJzLCw.js";import"./DarkModeToggle-CoRlQMQP.js";import"./DarkModeSelector-BR3UKq-d.js";import"./icons-D9XKdwam.js";import"./Divider-DXQtVhka.js";import"./FooterLinksTitle-DocxqsUE.js";import"./HamburgerButton-Bn_yiv9S.js";import"./HeroText-Cepi5NkA.js";import{I as b}from"./AutocompleteInput-7PVv10NN.js";import"./NavbarToggle-Ds91AWOB.js";import"./Checkbox-DQU06_40.js";import"./RadioGroup-CqbRLcx8.js";import"./TooltipContent-BNY2AADM.js";import"./PopoverTrigger-CC5ZZz6x.js";import"./DropdownTrigger-BsEI1nXt.js";import"./SidemenuItem-C6n4uPrg.js";import{S as D,a as N,b as k,c as _}from"./SelectOption-DKn4XGZp.js";import"./Skeleton-B0qS86bf.js";import"./AutocompleteTrigger-Urlyb_zp.js";import"./Combobox-BkOBZfRQ.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./useIsMobile-BPT4M8Vw.js";import"./FloatingElementContent-DqORj6EY.js";import"./Slot-B51z0L24.js";import"./helpers-DuDVA4ff.js";import"./getSelectClasses-BWZGqEYj.js";const{within:y,expect:a,userEvent:s}=__STORYBOOK_MODULE_TEST__,dt={title:"Test/Form"},m={play:async({canvasElement:i})=>{const r=y(i),p=y(document.body),c=r.getByTestId("text"),d=r.getByTestId("number"),l=r.getByText("Select..."),f=r.getByTestId("textarea"),x=r.getByText("submit"),n=r.getByTestId("result");await s.type(c,"test"),await s.type(d,"2"),await s.type(f,"testarea"),await s.click(l);const u=p.getByText("option one");await s.click(u),await s.click(x),await a(n,"sets text state").toHaveTextContent("text state: test"),await a(n,"gets text from formData").toHaveTextContent("entered text: test"),await a(n,"gets text from ref").toHaveTextContent("ref text: test"),await a(n,"sets number state").toHaveTextContent("number state: 2"),await a(n,"gets text from formData").toHaveTextContent("entered number: 2"),await a(n,"gets text from ref").toHaveTextContent("ref number: 2"),await a(n,"sets textarea state").toHaveTextContent("textarea state: testarea"),await a(n,"gets textarea from formData").toHaveTextContent("entered textarea: testarea"),await a(n,"gets textarea from ref").toHaveTextContent("ref textarea: testarea"),await a(n,"sets select state").toHaveTextContent("option state: option"),await a(n,"gets option from formData").toHaveTextContent("selected option: option"),await a(n,"gets option from ref").toHaveTextContent("ref option: option")},render:()=>{const i=["option one","option two"],[r,p]=o.useState({}),[c,d]=o.useState(""),[l,f]=o.useState(""),[x,n]=o.useState(void 0),[u,I]=o.useState(""),v=o.useRef(null),T=o.useRef(null),S=o.useRef(null),C=o.useRef(null);function R(t){const g=t.get("text")?.toString()||"",H=t.get("number")?.toString()||"",h=t.get("select")?.toString()||"",j=t.get("textarea")?.toString()||"";p({"text state":c,"entered text":g,"ref text":v.current?.value.toString(),"number state":l,"entered number":H,"ref number":T.current?.value.toString(),"option state":x!==void 0?i[x]:"","selected option":h,"ref option":S.current?.value.toString(),"textarea state":u,"entered textarea":j,"ref textarea":C.current?.value.toString()})}return e.jsxs("div",{className:"flex flex-col gap-2 p-4",children:[e.jsx(w,{className:"p-4",children:e.jsxs("form",{action:R,className:"flex flex-col gap-2",children:[e.jsx(b,{"data-testid":"text",ref:v,type:"text",name:"text",label:"text",onChange:t=>{d(t.target.value)},value:c}),e.jsx(b,{"data-testid":"number",ref:T,type:"number",name:"number",label:"number",value:l,onChange:t=>{f(t.target.value)}}),e.jsx(D,{items:i,inputRef:S,label:"select",name:"select",initialSelectedIndex:x,onSelectedIndexChange:n,children:e.jsx(N,{children:e.jsx(k,{children:i.map((t,g)=>e.jsx(_,{index:g,children:t}))})})}),e.jsx(b,{ref:C,"data-testid":"textarea",as:"textarea",label:"textarea",name:"textarea",value:u,onChange:t=>{I(t.target.value)}}),e.jsx(B,{size:"sm",children:"submit"})]})}),e.jsxs(w,{children:[e.jsx(E,{children:"entered data"}),e.jsx(O,{className:"flex flex-col","data-testid":"result",children:Object.keys(r).map(t=>e.jsx("span",{children:`${t}: ${r[t]}`},t))})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const text = canvas.getByTestId("text");
    const number = canvas.getByTestId("number");
    const select = canvas.getByText("Select...");
    const textarea = canvas.getByTestId("textarea");
    const submit = canvas.getByText("submit");
    const result = canvas.getByTestId("result");
    await userEvent.type(text, "test");
    await userEvent.type(number, "2");
    await userEvent.type(textarea, "testarea");
    await userEvent.click(select);
    const option = screen.getByText("option one");
    await userEvent.click(option);
    await userEvent.click(submit);
    await expect(result, "sets text state").toHaveTextContent("text state: test");
    await expect(result, "gets text from formData").toHaveTextContent("entered text: test");
    await expect(result, "gets text from ref").toHaveTextContent("ref text: test");
    await expect(result, "sets number state").toHaveTextContent("number state: 2");
    await expect(result, "gets text from formData").toHaveTextContent("entered number: 2");
    await expect(result, "gets text from ref").toHaveTextContent("ref number: 2");
    await expect(result, "sets textarea state").toHaveTextContent("textarea state: testarea");
    await expect(result, "gets textarea from formData").toHaveTextContent("entered textarea: testarea");
    await expect(result, "gets textarea from ref").toHaveTextContent("ref textarea: testarea");
    await expect(result, "sets select state").toHaveTextContent("option state: option");
    await expect(result, "gets option from formData").toHaveTextContent("selected option: option");
    await expect(result, "gets option from ref").toHaveTextContent("ref option: option");
  },
  render: () => {
    const options = ["option one", "option two"];
    const [data, setData] = useState<Record<string, unknown>>({});
    const [text, setText] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [optionIndex, setOptionIndex] = useState<number | undefined>(undefined);
    const [textarea, setTextarea] = useState<string>("");
    const textRef = useRef<HTMLInputElement | null>(null);
    const numberRef = useRef<HTMLInputElement | null>(null);
    const selectRef = useRef<HTMLInputElement | null>(null);
    const textareaRef = useRef<HTMLInputElement | null>(null);
    function handleSubmit(formData: FormData) {
      const enteredText = formData.get("text")?.toString() || "";
      const enteredNumbr = formData.get("number")?.toString() || "";
      const selectedOption = formData.get("select")?.toString() || "";
      const enteredTextarea = formData.get("textarea")?.toString() || "";
      setData({
        "text state": text,
        "entered text": enteredText,
        "ref text": textRef.current?.value.toString(),
        "number state": number,
        "entered number": enteredNumbr,
        "ref number": numberRef.current?.value.toString(),
        "option state": optionIndex !== undefined ? options[optionIndex] : "",
        "selected option": selectedOption,
        "ref option": selectRef.current?.value.toString(),
        "textarea state": textarea,
        "entered textarea": enteredTextarea,
        "ref textarea": textareaRef.current?.value.toString()
      });
    }
    return <div className="flex flex-col gap-2 p-4">\r
        <Card className="p-4">\r
          <form action={handleSubmit} className="flex flex-col gap-2">\r
            <Input data-testid="text" ref={textRef} type="text" name="text" label="text" onChange={e => {
            setText(e.target.value);
          }} value={text} />\r
            <Input data-testid="number" ref={numberRef} type="number" name="number" label="number" value={number} onChange={e => {
            setNumber(e.target.value);
          }} />\r
            <Select items={options} inputRef={selectRef} label="select" name="select" initialSelectedIndex={optionIndex} onSelectedIndexChange={setOptionIndex}>\r
              <SelectContent>\r
                <SelectGroup>\r
                  {options.map((option, index) => {
                  return <SelectOption index={index}>{option}</SelectOption>;
                })}\r
                </SelectGroup>\r
              </SelectContent>\r
            </Select>\r
            <Input ref={textareaRef} data-testid="textarea" as="textarea" label="textarea" name="textarea" value={textarea} onChange={e => {
            setTextarea(e.target.value);
          }} />\r
            <Button size="sm">submit</Button>\r
          </form>\r
        </Card>\r
        <Card>\r
          <CardTitle>entered data</CardTitle>\r
          <CardText className="flex flex-col" data-testid="result">\r
            {Object.keys(data).map(entry => {
            return <span key={entry}>{\`\${entry}: \${data[entry]}\`}</span>;
          })}\r
          </CardText>\r
        </Card>\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const ft=["Form"];export{m as Form,ft as __namedExportsOrder,dt as default};
