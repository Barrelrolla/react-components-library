import{r,j as n}from"./iframe-DjrizWL9.js";import"./Anchor-Srzm7Fpc.js";import"./Badge-y0UHNwqm.js";import{B as j}from"./ButtonGroup-DoHF2o8H.js";import{f as C,b as E,a as I}from"./CardTitle-DYsNeiMc.js";import"./DarkModeToggle-CrZfAXCk.js";import"./DarkModeSelector-Ck8PC0N-.js";import"./icons-BGFAW_Lx.js";import"./Divider-BvYcTTEa.js";import"./FooterLinksTitle-ClFgZkoP.js";import"./HamburgerButton-CCbKF-yo.js";import"./HeroText-Bzl5V76U.js";import{I as g}from"./Input-CIlvVYSU.js";import"./NavbarToggle-Ct9bj7CB.js";import"./Checkbox-vlbIlY9m.js";import"./RadioGroup-DN9fDVX7.js";import"./TooltipContent-CZddJbEF.js";import"./PopoverTrigger-CCmQiyQO.js";import"./DropdownListItem-DWBD5Af1.js";import"./SidemenuItem-ng8OuyEt.js";import{S as O,a as D}from"./SelectOption-DXzLLyPL.js";import"./Skeleton-EJmocGeC.js";import{S as N}from"./SelectContent-B0qM7gX2.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-BldbZDxN.js";import"./bundle-mjs-Ct12j0u0.js";import"./useIsMobile-BX4diqlI.js";import"./FloatingElementContent-JERVoKqN.js";import"./Slot-DBlTz432.js";import"./helpers-DdlamiXa.js";const{within:w,expect:a,userEvent:o}=__STORYBOOK_MODULE_TEST__,ct={title:"Test/Form"},u={play:async({canvasElement:i})=>{const s=w(i),l=w(document.body),m=s.getByTestId("text"),x=s.getByTestId("number"),p=s.getByText("Select..."),c=s.getByTestId("textarea"),f=s.getByText("submit"),t=s.getByTestId("result");await o.type(m,"test"),await o.type(x,"2"),await o.type(c,"testarea"),await o.click(p);const d=l.getByText("option");await o.click(d),await o.click(f),await a(t,"sets text state").toHaveTextContent("text state: test"),await a(t,"gets text from formData").toHaveTextContent("entered text: test"),await a(t,"gets text from ref").toHaveTextContent("ref text: test"),await a(t,"sets number state").toHaveTextContent("number state: 2"),await a(t,"gets text from formData").toHaveTextContent("entered number: 2"),await a(t,"gets text from ref").toHaveTextContent("ref number: 2"),await a(t,"sets textarea state").toHaveTextContent("textarea state: testarea"),await a(t,"gets textarea from formData").toHaveTextContent("entered textarea: testarea"),await a(t,"gets textarea from ref").toHaveTextContent("ref textarea: testarea"),await a(t,"sets select state").toHaveTextContent("option state: option"),await a(t,"gets option from formData").toHaveTextContent("selected option: option"),await a(t,"gets option from ref").toHaveTextContent("ref option: option")},render:()=>{const[i,s]=r.useState({}),[l,m]=r.useState(""),[x,p]=r.useState(""),[c,f]=r.useState(""),[t,d]=r.useState(""),b=r.useRef(null),v=r.useRef(null),T=r.useRef(null),S=r.useRef(null);function y(e){const R=e.get("text")?.toString()||"",H=e.get("number")?.toString()||"",h=e.get("select")?.toString()||"",B=e.get("textarea")?.toString()||"";s({"text state":l,"entered text":R,"ref text":b.current?.value.toString(),"number state":x,"entered number":H,"ref number":v.current?.value.toString(),"option state":c,"selected option":h,"ref option":T.current?.value.toString(),"textarea state":t,"entered textarea":B,"ref textarea":S.current?.value.toString()})}return n.jsxs("div",{className:"flex flex-col gap-2 p-4",children:[n.jsx(C,{className:"p-4",children:n.jsxs("form",{action:y,className:"flex flex-col gap-2",children:[n.jsx(g,{"data-testid":"text",ref:b,type:"text",name:"text",label:"text",onChange:e=>{m(e.target.value)},value:l}),n.jsx(g,{"data-testid":"number",ref:v,type:"number",name:"number",label:"number",value:x,onChange:e=>{p(e.target.value)}}),n.jsx(O,{inputRef:T,label:"select",name:"select",initialSelectedValue:c,onSelectedValueChange:f,children:n.jsx(N,{children:n.jsx(D,{value:"option",children:"option"})})}),n.jsx(g,{ref:S,"data-testid":"textarea",as:"textarea",label:"textarea",name:"textarea",value:t,onChange:e=>{d(e.target.value)}}),n.jsx(j,{size:"sm",children:"submit"})]})}),n.jsxs(C,{children:[n.jsx(E,{children:"enterred data"}),n.jsx(I,{className:"flex flex-col","data-testid":"result",children:Object.keys(i).map(e=>n.jsx("span",{children:`${e}: ${i[e]}`},e))})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    const option = screen.getByText("option");
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
    const [data, setData] = useState<Record<string, unknown>>({});
    const [text, setText] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [option, setOption] = useState<string | undefined>("");
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
        "option state": option,
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
            <Select inputRef={selectRef} label="select" name="select" initialSelectedValue={option} onSelectedValueChange={setOption}>\r
              <SelectContent>\r
                <SelectOption value={"option"}>option</SelectOption>\r
              </SelectContent>\r
            </Select>\r
            <Input ref={textareaRef} data-testid="textarea" as="textarea" label="textarea" name="textarea" value={textarea} onChange={e => {
            setTextarea(e.target.value);
          }} />\r
            <Button size="sm">submit</Button>\r
          </form>\r
        </Card>\r
        <Card>\r
          <CardTitle>enterred data</CardTitle>\r
          <CardText className="flex flex-col" data-testid="result">\r
            {Object.keys(data).map(entry => {
            return <span key={entry}>{\`\${entry}: \${data[entry]}\`}</span>;
          })}\r
          </CardText>\r
        </Card>\r
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const ut=["Form"];export{u as Form,ut as __namedExportsOrder,ct as default};
