import{r as a,j as n}from"./iframe-k1U2xSHC.js";import"./Anchor-WnFCbMqC.js";import"./Badge-B3QV1DSW.js";import{B as W}from"./ButtonGroup-CWAI0kFb.js";import{f as L,b as X,a as Z}from"./PopoverTrigger-M-mbCEja.js";import"./DarkModeToggle-Cr05nAGo.js";import"./DarkModeSelector-HNa7RKpK.js";import{C as V}from"./Combobox-D_e3Pb2a.js";import"./Divider-CSei7Oeg.js";import"./HamburgerButton-Dop8rRAA.js";import{I}from"./AutocompleteInput-aERiD6HD.js";import"./Checkbox-Fbv0V_cU.js";import"./RadioGroup-CxgK4UpU.js";import"./TooltipContent-CbS6xGqU.js";import"./SidemenuItem-C9QntBh1.js";import{S as G,a as F,b as $,c as K}from"./SelectOption-CPV1YlKi.js";import"./Skeleton-B3UAsIPD.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-BldbZDxN.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-B4UzUjUo.js";import"./FloatingElementContent-CI_BPQ-0.js";import"./useIsMobile-5YnFfgaT.js";import"./helpers-BMSh6Jd-.js";const{within:U,expect:o,userEvent:r}=__STORYBOOK_MODULE_TEST__,ke={title:"Test/Form"},v={play:async({canvasElement:m})=>{const s=U(m),x=U(document.body),p=s.getByTestId("text"),C=s.getByTestId("number"),T=s.getByTestId("textarea"),d=s.getByText("select one"),S=s.getByText("select many"),b=s.getByTestId("combo"),f=s.getByTestId("combo many"),y=s.getByText("submit"),t=s.getByTestId("result");await r.type(p,"test"),await r.type(C,"259"),await r.type(T,"testarea"),await r.click(d);const i=x.getByText("option 1");await r.click(i),await r.click(S);const k=x.getByText("option two");await r.click(k);const l=x.getByText("option three");await r.click(l),await r.type(b,"comb"),await r.keyboard("{Enter}"),await r.type(f,"combo two"),await r.keyboard("{Enter}"),await r.type(f,"three"),await r.keyboard("{Enter}"),await r.click(y),await o(t,"sets text state").toHaveTextContent("-text state: test-"),await o(t,"gets text from formData").toHaveTextContent("-entered text: test-"),await o(t,"gets text from ref").toHaveTextContent("-ref text: test-"),await o(t,"sets number state").toHaveTextContent("-number state: 259-"),await o(t,"gets text from formData").toHaveTextContent("-entered number: 259-"),await o(t,"gets text from ref").toHaveTextContent("-ref number: 259-"),await o(t,"sets textarea state").toHaveTextContent("-textarea state: testarea-"),await o(t,"gets textarea from formData").toHaveTextContent("-entered textarea: testarea-"),await o(t,"gets textarea from ref").toHaveTextContent("-ref textarea: testarea-"),await o(t,"sets select state").toHaveTextContent("-option state: option 1-"),await o(t,"gets option from formData").toHaveTextContent("-selected option: option 1-"),await o(t,"gets option from ref").toHaveTextContent("-ref option: option 1-"),await o(t,"sets select many state").toHaveTextContent("-options state: option two,option three-"),await o(t,"gets options from formData").toHaveTextContent("-selected options: option two,option three-"),await o(t,"doesn't get options from ref").toHaveTextContent("-ref options: option three-"),await o(t,"sets combo state").toHaveTextContent("-combo state: combo 1-"),await o(t,"gets combo from formData").toHaveTextContent("-selected combo: combo 1-"),await o(t,"gets combo from ref").toHaveTextContent("-ref combo: combo 1-"),await o(t,"sets combo many state").toHaveTextContent("-combo many state: combo two,combo three-"),await o(t,"gets combo many from formData").toHaveTextContent("-selected combo many: combo two,combo three-"),await o(t,"doesn't get combo many from ref").toHaveTextContent("-ref combo many: -")},render:()=>{const m=["option 1","option 2","option 3"],s=["option one","option two","option three"],x=["combo 1","combo 2","combo 3"],p=["combo one","combo two","combo three"],[C,T]=a.useState([]),[d,S]=a.useState(""),[b,f]=a.useState(""),[y,t]=a.useState(""),[i,k]=a.useState(void 0),[l,H]=a.useState([]),[R,Y]=a.useState(""),[w,M]=a.useState([]),E=a.useRef(null),O=a.useRef(null),N=a.useRef(null),B=a.useRef(null),j=a.useRef(null),D=a.useRef(null),_=a.useRef(null);function q(e){const c=e.get("text")?.toString()||"",u=e.get("number")?.toString()||"",g=e.get("textarea")?.toString()||"",h=e.get("select-one")?.toString()||"",z=e.getAll("select-many")?.toString()||"",J=e.get("combo")?.toString()||"",P=e.getAll("comboMany")?.toString()||"";T([{key:"text state",text:d},{key:"entered text",text:c},{key:"ref text",text:E.current?.value.toString()||""},{key:"number state",text:b},{key:"entered number",text:u},{key:"ref number",text:O.current?.value.toString()||""},{key:"textarea state",text:y},{key:"entered textarea",text:g},{key:"ref textarea",text:N.current?.value.toString()||""},{key:"option state",text:i!==void 0?m[i]:""},{key:"selected option",text:h},{key:"ref option",text:B.current?.value.toString()||""},{key:"options state",text:s.filter((A,Q)=>l.includes(Q)).join(",")},{key:"selected options",text:z},{key:"ref options",text:j.current?.value.toString()||"",error:!0},{key:"combo state",text:R},{key:"selected combo",text:J},{key:"ref combo",text:D.current?.value.toString()||""},{key:"combo many state",text:w.map(A=>p[A]).join(",")},{key:"selected combo many",text:P},{key:"ref combo many",text:_.current?.value.toString()||"",error:!0}])}return n.jsxs("div",{className:"flex flex-col gap-2 p-4",children:[n.jsx(L,{className:"p-4",children:n.jsxs("form",{action:q,className:"flex flex-col gap-2",children:[n.jsx(I,{wrapperClassName:"w-full","data-testid":"text",ref:E,type:"text",name:"text",label:"Text",onChange:e=>{S(e.target.value)},value:d}),n.jsx(I,{wrapperClassName:"w-full","data-testid":"number",ref:O,type:"number",name:"number",label:"Number",value:b,onChange:e=>{f(e.target.value)}}),n.jsx(I,{wrapperClassName:"w-full",ref:N,"data-testid":"textarea",as:"textarea",label:"Textarea",name:"textarea",value:y,onChange:e=>{t(e.target.value)}}),n.jsx(G,{wrapperClassName:"w-full",items:m,inputRef:B,placeholder:"select one",label:"Select one",name:"select-one",initialSelectedIndex:i,onSelectedIndexChange:k,children:n.jsx(F,{children:n.jsx($,{children:m.map((e,c)=>n.jsx(K,{index:c,children:e},e))})})}),n.jsx(G,{wrapperClassName:"w-full",items:s,inputRef:j,multiple:!0,placeholder:"select many",label:"Select many",name:"select-many",initialSelectedIndex:i,onSelectedIndexChange:e=>{if(e===void 0)return;const c=l.indexOf(e);if(c>0){const u=l.filter((g,h)=>h!==c);H(u)}else H([...l,e])},children:n.jsx(F,{children:n.jsx($,{children:s.map((e,c)=>n.jsx(K,{index:c,children:e},e))})})}),n.jsx(V,{wrapperClassName:"w-full",ref:D,items:x,label:"Combo",name:"combo",value:R,placeholder:"combo","data-testid":"combo",onChange:e=>Y(e.target.value)}),n.jsx(V,{wrapperClassName:"w-full",multiple:!0,ref:_,items:p,name:"comboMany",label:"Combo multiple",placeholder:"combo many","data-testid":"combo many",onSelectedIndexChange:e=>{if(e===void 0)return;if(w.indexOf(e)>=0){const u=w.filter(g=>g!==e);M(u)}else M([...w,e])}}),n.jsx(W,{className:"mt-4",children:"submit"})]})}),n.jsxs(L,{children:[n.jsx(X,{children:"entered data"}),n.jsx(Z,{className:"flex flex-col","data-testid":"result",children:C.map(e=>n.jsx("span",{className:e.error?"text-error":"",children:`-${e.key}: ${e.text}-`},e.key))})]})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const text = canvas.getByTestId("text");
    const number = canvas.getByTestId("number");
    const textarea = canvas.getByTestId("textarea");
    const selectOne = canvas.getByText("select one");
    const selectMany = canvas.getByText("select many");
    const comboOne = canvas.getByTestId("combo");
    const comboMany = canvas.getByTestId("combo many");
    const submit = canvas.getByText("submit");
    const result = canvas.getByTestId("result");
    await userEvent.type(text, "test");
    await userEvent.type(number, "259");
    await userEvent.type(textarea, "testarea");
    await userEvent.click(selectOne);
    const optionOne = screen.getByText("option 1");
    await userEvent.click(optionOne);
    await userEvent.click(selectMany);
    const optionTwo = screen.getByText("option two");
    await userEvent.click(optionTwo);
    const optionThree = screen.getByText("option three");
    await userEvent.click(optionThree);
    await userEvent.type(comboOne, "comb");
    await userEvent.keyboard("{Enter}");
    await userEvent.type(comboMany, "combo two");
    await userEvent.keyboard("{Enter}");
    await userEvent.type(comboMany, "three");
    await userEvent.keyboard("{Enter}");
    await userEvent.click(submit);
    await expect(result, "sets text state").toHaveTextContent("-text state: test-");
    await expect(result, "gets text from formData").toHaveTextContent("-entered text: test-");
    await expect(result, "gets text from ref").toHaveTextContent("-ref text: test-");
    await expect(result, "sets number state").toHaveTextContent("-number state: 259-");
    await expect(result, "gets text from formData").toHaveTextContent("-entered number: 259-");
    await expect(result, "gets text from ref").toHaveTextContent("-ref number: 259-");
    await expect(result, "sets textarea state").toHaveTextContent("-textarea state: testarea-");
    await expect(result, "gets textarea from formData").toHaveTextContent("-entered textarea: testarea-");
    await expect(result, "gets textarea from ref").toHaveTextContent("-ref textarea: testarea-");
    await expect(result, "sets select state").toHaveTextContent("-option state: option 1-");
    await expect(result, "gets option from formData").toHaveTextContent("-selected option: option 1-");
    await expect(result, "gets option from ref").toHaveTextContent("-ref option: option 1-");
    await expect(result, "sets select many state").toHaveTextContent("-options state: option two,option three-");
    await expect(result, "gets options from formData").toHaveTextContent("-selected options: option two,option three-");
    await expect(result, "doesn't get options from ref").toHaveTextContent("-ref options: option three-");
    await expect(result, "sets combo state").toHaveTextContent("-combo state: combo 1-");
    await expect(result, "gets combo from formData").toHaveTextContent("-selected combo: combo 1-");
    await expect(result, "gets combo from ref").toHaveTextContent("-ref combo: combo 1-");
    await expect(result, "sets combo many state").toHaveTextContent("-combo many state: combo two,combo three-");
    await expect(result, "gets combo many from formData").toHaveTextContent("-selected combo many: combo two,combo three-");
    await expect(result, "doesn't get combo many from ref").toHaveTextContent("-ref combo many: -");
  },
  render: () => {
    const options = ["option 1", "option 2", "option 3"];
    const optionsMany = ["option one", "option two", "option three"];
    const combo = ["combo 1", "combo 2", "combo 3"];
    const comboMany = ["combo one", "combo two", "combo three"];
    const [data, setData] = useState<{
      key: string;
      text: string;
      error?: boolean;
    }[]>([]);
    const [text, setText] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [textarea, setTextarea] = useState<string>("");
    const [optionIndex, setOptionIndex] = useState<number | undefined>(undefined);
    const [optionsIndices, setOptionsIndices] = useState<number[]>([]);
    const [comboValue, setComboValue] = useState<string>("");
    const [comboIndices, setComboIndices] = useState<number[]>([]);
    const textRef = useRef<HTMLInputElement | null>(null);
    const numberRef = useRef<HTMLInputElement | null>(null);
    const textareaRef = useRef<HTMLInputElement | null>(null);
    const selectRef = useRef<HTMLInputElement | null>(null);
    const selectManyRef = useRef<HTMLInputElement | null>(null);
    const comboRef = useRef<HTMLInputElement | null>(null);
    const comboManyRef = useRef<HTMLInputElement | null>(null);
    function handleSubmit(formData: FormData) {
      const enteredText = formData.get("text")?.toString() || "";
      const enteredNumbr = formData.get("number")?.toString() || "";
      const enteredTextarea = formData.get("textarea")?.toString() || "";
      const selectedOption = formData.get("select-one")?.toString() || "";
      const selectedOptions = formData.getAll("select-many")?.toString() || "";
      const enteredCombo = formData.get("combo")?.toString() || "";
      const enteredComboMany = formData.getAll("comboMany")?.toString() || "";
      setData([{
        key: "text state",
        text: text
      }, {
        key: "entered text",
        text: enteredText
      }, {
        key: "ref text",
        text: textRef.current?.value.toString() || ""
      }, {
        key: "number state",
        text: number
      }, {
        key: "entered number",
        text: enteredNumbr
      }, {
        key: "ref number",
        text: numberRef.current?.value.toString() || ""
      }, {
        key: "textarea state",
        text: textarea
      }, {
        key: "entered textarea",
        text: enteredTextarea
      }, {
        key: "ref textarea",
        text: textareaRef.current?.value.toString() || ""
      }, {
        key: "option state",
        text: optionIndex !== undefined ? options[optionIndex] : ""
      }, {
        key: "selected option",
        text: selectedOption
      }, {
        key: "ref option",
        text: selectRef.current?.value.toString() || ""
      }, {
        key: "options state",
        text: optionsMany.filter((_, i) => optionsIndices.includes(i)).join(",")
      }, {
        key: "selected options",
        text: selectedOptions
      }, {
        key: "ref options",
        text: selectManyRef.current?.value.toString() || "",
        error: true
      }, {
        key: "combo state",
        text: comboValue
      }, {
        key: "selected combo",
        text: enteredCombo
      }, {
        key: "ref combo",
        text: comboRef.current?.value.toString() || ""
      }, {
        key: "combo many state",
        text: comboIndices.map(i => comboMany[i]).join(",")
      }, {
        key: "selected combo many",
        text: enteredComboMany
      }, {
        key: "ref combo many",
        text: comboManyRef.current?.value.toString() || "",
        error: true
      }]);
    }
    return <div className="flex flex-col gap-2 p-4">\r
        <Card className="p-4">\r
          <form action={handleSubmit} className="flex flex-col gap-2">\r
            <Input wrapperClassName="w-full" data-testid="text" ref={textRef} type="text" name="text" label="Text" onChange={e => {
            setText(e.target.value);
          }} value={text} />\r
            <Input wrapperClassName="w-full" data-testid="number" ref={numberRef} type="number" name="number" label="Number" value={number} onChange={e => {
            setNumber(e.target.value);
          }} />\r
            <Input wrapperClassName="w-full" ref={textareaRef} data-testid="textarea" as="textarea" label="Textarea" name="textarea" value={textarea} onChange={e => {
            setTextarea(e.target.value);
          }} />\r
            <Select wrapperClassName="w-full" items={options} inputRef={selectRef} placeholder="select one" label="Select one" name="select-one" initialSelectedIndex={optionIndex} onSelectedIndexChange={setOptionIndex}>\r
              <SelectContent>\r
                <SelectGroup>\r
                  {options.map((option, index) => {
                  return <SelectOption key={option} index={index}>\r
                        {option}\r
                      </SelectOption>;
                })}\r
                </SelectGroup>\r
              </SelectContent>\r
            </Select>\r
            <Select wrapperClassName="w-full" items={optionsMany} inputRef={selectManyRef} multiple placeholder="select many" label="Select many" name="select-many" initialSelectedIndex={optionIndex} onSelectedIndexChange={index => {
            if (index === undefined) {
              return;
            }
            const found = optionsIndices.indexOf(index);
            if (found > 0) {
              const newArr = optionsIndices.filter((_, i) => i !== found);
              setOptionsIndices(newArr);
            } else {
              setOptionsIndices([...optionsIndices, index]);
            }
          }}>\r
              <SelectContent>\r
                <SelectGroup>\r
                  {optionsMany.map((option, index) => {
                  return <SelectOption key={option} index={index}>\r
                        {option}\r
                      </SelectOption>;
                })}\r
                </SelectGroup>\r
              </SelectContent>\r
            </Select>\r
            <Combobox wrapperClassName="w-full" ref={comboRef} items={combo} label="Combo" name="combo" value={comboValue} placeholder="combo" data-testid="combo" onChange={e => setComboValue(e.target.value)} />\r
            <Combobox wrapperClassName="w-full" multiple ref={comboManyRef} items={comboMany} name="comboMany" label="Combo multiple" placeholder="combo many" data-testid="combo many" onSelectedIndexChange={i => {
            if (i === undefined) {
              return;
            }
            const found = comboIndices.indexOf(i);
            if (found >= 0) {
              const newArr = comboIndices.filter(x => x !== i);
              setComboIndices(newArr);
            } else {
              setComboIndices([...comboIndices, i]);
            }
          }} />\r
            <Button className="mt-4">submit</Button>\r
          </form>\r
        </Card>\r
        <Card>\r
          <CardTitle>entered data</CardTitle>\r
          <CardText className="flex flex-col" data-testid="result">\r
            {data.map(entry => {
            return <span className={entry.error ? "text-error" : ""} key={entry.key}>{\`-\${entry.key}: \${entry.text}-\`}</span>;
          })}\r
          </CardText>\r
        </Card>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const he=["Form"];export{v as Form,he as __namedExportsOrder,ke as default};
