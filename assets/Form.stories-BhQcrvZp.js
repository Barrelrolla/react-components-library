import{r as a,j as n}from"./iframe-DCRt2oWE.js";import"./Anchor-i9JNRTbe.js";import"./Badge-CNomvg3q.js";import{B as W}from"./Button-B5_unbmz.js";import"./ButtonGroup-C3YWnsCK.js";import{f as _,b as X,a as Z}from"./PopoverTrigger-DW0jKCt8.js";import"./DarkModeToggle-CjmAqkad.js";import"./DarkModeSelector-C735-4aQ.js";import"./DropdownTrigger-D1vihTfy.js";import"./Divider-ZeBL1tFL.js";import"./HamburgerButton-Dgexjen9.js";import{I as H}from"./AutocompleteInput-C2YBKoqN.js";import"./Checkbox-BIt93RA2.js";import"./RadioGroup-BQJdSOWi.js";import"./TooltipContent-T1AsKtVi.js";import"./SidemenuItem-FGgnpTth.js";import{S as V,a as G,b as F,c as $}from"./SelectOption-DJ9cT8L8.js";import"./Skeleton-BCa2fM1G.js";import"./AutocompleteTrigger-Bq9cnuJM.js";import{C as U}from"./Combobox-BAUvNXQu.js";import"./Pagination-5YTu5dKR.js";import"./preload-helper-PPVm8Dsz.js";import"./cssColorProps-D-Xi89r8.js";import"./bundle-mjs-Ct12j0u0.js";import"./icons-BZJ4X8ZB.js";import"./FloatingElementContent-CM0mSiIi.js";import"./useIsMobile-DmLq_fiQ.js";import"./Slot-BRre2ycY.js";import"./helpers-5FOpjoj6.js";import"./getSelectClasses-MX-K2UVy.js";const{within:K,expect:o,userEvent:r}=__STORYBOOK_MODULE_TEST__,Me={title:"Test/Form"},C={play:async({canvasElement:p})=>{const s=K(p),c=K(document.body),b=s.getByTestId("text"),T=s.getByTestId("number"),S=s.getByTestId("textarea"),d=s.getByText("select one"),I=s.getByText("select many"),f=s.getByTestId("combo"),v=s.getByTestId("combo many"),y=s.getByText("submit"),t=s.getByTestId("result");await r.type(b,"test"),await r.type(T,"259"),await r.type(S,"testarea"),await r.click(d);const m=c.getByText("option 1");await r.click(m),await r.click(I);const k=c.getByText("option two");await r.click(k);const i=c.getByText("option three");await r.click(i),await r.type(f,"comb"),await r.keyboard("{Enter}"),await r.type(v,"combo two"),await r.keyboard("{Enter}"),await r.type(v,"three"),await r.keyboard("{Enter}"),await r.click(y),await o(t,"sets text state").toHaveTextContent("-text state: test-"),await o(t,"gets text from formData").toHaveTextContent("-entered text: test-"),await o(t,"gets text from ref").toHaveTextContent("-ref text: test-"),await o(t,"sets number state").toHaveTextContent("-number state: 259-"),await o(t,"gets text from formData").toHaveTextContent("-entered number: 259-"),await o(t,"gets text from ref").toHaveTextContent("-ref number: 259-"),await o(t,"sets textarea state").toHaveTextContent("-textarea state: testarea-"),await o(t,"gets textarea from formData").toHaveTextContent("-entered textarea: testarea-"),await o(t,"gets textarea from ref").toHaveTextContent("-ref textarea: testarea-"),await o(t,"sets select state").toHaveTextContent("-option state: option value 1-"),await o(t,"gets option from formData").toHaveTextContent("-selected option: option value 1-"),await o(t,"gets option from ref").toHaveTextContent("-ref option: option value 1-"),await o(t,"sets select many state").toHaveTextContent("-options state: option value two,option value three-"),await o(t,"gets options from formData").toHaveTextContent("-selected options: option value two,option value three-"),await o(t,"doesn't get options from ref").toHaveTextContent("-ref options: -"),await o(t,"sets combo state").toHaveTextContent("-combo state: combo 1-"),await o(t,"gets combo from formData").toHaveTextContent("-selected combo: combo value 1-"),await o(t,"gets combo from ref").toHaveTextContent("-ref combo: combo 1-"),await o(t,"sets combo many state").toHaveTextContent("-combo many state: combo value two,combo value three-"),await o(t,"gets combo many from formData").toHaveTextContent("-selected combo many: combo value two,combo value three-"),await o(t,"doesn't get combo many from ref").toHaveTextContent("-ref combo many: -")},render:()=>{const p=[{name:"option 1",value:"option value 1"},{name:"option 2",value:"option value 2"},{name:"option 3",value:"option value 3"}],s=[{name:"option one",value:"option value one"},{name:"option two",value:"option value two"},{name:"option three",value:"option value three"}],c=[{name:"combo 1",value:"combo value 1"},{name:"combo 2",value:"combo value 2"},{name:"combo 3",value:"combo value 3"}],b=[{name:"combo one",value:"combo value one"},{name:"combo two",value:"combo value two"},{name:"combo three",value:"combo value three"}],[T,S]=a.useState([]),[d,I]=a.useState(""),[f,v]=a.useState(""),[y,t]=a.useState(""),[m,k]=a.useState(void 0),[i,R]=a.useState([]),[O,Y]=a.useState(""),[g,M]=a.useState([]),E=a.useRef(null),A=a.useRef(null),N=a.useRef(null),B=a.useRef(null),L=a.useRef(null),j=a.useRef(null),D=a.useRef(null);function q(e){const l=e.get("text")?.toString()||"",x=e.get("number")?.toString()||"",w=e.get("textarea")?.toString()||"",h=e.get("select-one")?.toString()||"",z=e.getAll("select-many")?.toString()||"",J=e.get("combo")?.toString()||"",P=e.getAll("comboMany")?.toString()||"";S([{key:"text state",text:d},{key:"entered text",text:l},{key:"ref text",text:E.current?.value.toString()||""},{key:"number state",text:f},{key:"entered number",text:x},{key:"ref number",text:A.current?.value.toString()||""},{key:"textarea state",text:y},{key:"entered textarea",text:w},{key:"ref textarea",text:N.current?.value.toString()||""},{key:"option state",text:m!==void 0?p[m].value:""},{key:"selected option",text:h},{key:"ref option",text:B.current?.value.toString()||""},{key:"options state",text:s.filter((u,Q)=>i.includes(Q)).map(u=>u.value).join(",")},{key:"selected options",text:z},{key:"ref options",text:L.current?.value.toString()||"",error:!0},{key:"combo state",text:O},{key:"selected combo",text:c.filter(u=>u.name===J)[0].value},{key:"ref combo",text:j.current?.value.toString()||""},{key:"combo many state",text:g.map(u=>b[u].value).join(",")},{key:"selected combo many",text:P},{key:"ref combo many",text:D.current?.value.toString()||"",error:!0}])}return n.jsxs("div",{className:"flex flex-col gap-2 p-4",children:[n.jsx(_,{className:"p-4",children:n.jsxs("form",{action:q,className:"flex flex-col gap-2",children:[n.jsx(H,{wrapperClassName:"w-full","data-testid":"text",ref:E,type:"text",name:"text",label:"Text",onChange:e=>{I(e.target.value)},value:d}),n.jsx(H,{wrapperClassName:"w-full","data-testid":"number",stepUpAriaLabel:"up",stepDownAriaLabel:"down",ref:A,type:"number",name:"number",label:"Number",value:f,onChange:e=>{v(e.target.value)}}),n.jsx(H,{wrapperClassName:"w-full",ref:N,"data-testid":"textarea",as:"textarea",label:"Textarea",name:"textarea",value:y,onChange:e=>{t(e.target.value)}}),n.jsx(V,{wrapperClassName:"w-full",items:p,inputRef:B,placeholder:"select one",label:"Select one",name:"select-one",initialSelectedIndex:m,onSelectedIndexChange:k,children:n.jsx(G,{closeButtonAriaLabel:"close",children:n.jsx(F,{children:p.map((e,l)=>n.jsx($,{index:l,children:e.name},e.value))})})}),n.jsx(V,{wrapperClassName:"w-full",items:s,inputRef:L,removeAllItemsAriaLabel:"clear",removeItemAriaLabel:"remove",multiple:!0,placeholder:"select many",label:"Select many",name:"select-many",initialSelectedIndex:m,onSelectedIndexChange:e=>{if(e===void 0)return;const l=i.indexOf(e);if(l>0){const x=i.filter((w,h)=>h!==l);R(x)}else R([...i,e])},children:n.jsx(G,{closeButtonAriaLabel:"close",children:n.jsx(F,{children:s.map((e,l)=>n.jsx($,{index:l,children:e.name},e.value))})})}),n.jsx(U,{wrapperClassName:"w-full",toggleOpenAriaLabel:"toggle",ref:j,items:c,label:"Combo",name:"combo",value:O,placeholder:"combo","data-testid":"combo",onChange:e=>Y(e.target.value)}),n.jsx(U,{wrapperClassName:"w-full",toggleOpenAriaLabel:"toggle",removeAllItemsAriaLabel:"remove all",removeItemAriaLabel:"remove",multiple:!0,ref:D,items:b,name:"comboMany",label:"Combo multiple",placeholder:"combo many","data-testid":"combo many",onSelectedIndexChange:e=>{if(e===void 0)return;if(g.indexOf(e)>=0){const x=g.filter(w=>w!==e);M(x)}else M([...g,e])}}),n.jsx(W,{className:"mt-4",children:"submit"})]})}),n.jsxs(_,{children:[n.jsx(X,{children:"entered data"}),n.jsx(Z,{className:"flex flex-col","data-testid":"result",children:T.map(e=>n.jsx("span",{className:e.error?"text-error":"",children:`-${e.key}: ${e.text}-`},e.key))})]})]})}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    await expect(result, "sets select state").toHaveTextContent("-option state: option value 1-");
    await expect(result, "gets option from formData").toHaveTextContent("-selected option: option value 1-");
    await expect(result, "gets option from ref").toHaveTextContent("-ref option: option value 1-");
    await expect(result, "sets select many state").toHaveTextContent("-options state: option value two,option value three-");
    await expect(result, "gets options from formData").toHaveTextContent("-selected options: option value two,option value three-");
    await expect(result, "doesn't get options from ref").toHaveTextContent("-ref options: -");
    await expect(result, "sets combo state").toHaveTextContent("-combo state: combo 1-");
    await expect(result, "gets combo from formData").toHaveTextContent("-selected combo: combo value 1-");
    await expect(result, "gets combo from ref").toHaveTextContent("-ref combo: combo 1-");
    await expect(result, "sets combo many state").toHaveTextContent("-combo many state: combo value two,combo value three-");
    await expect(result, "gets combo many from formData").toHaveTextContent("-selected combo many: combo value two,combo value three-");
    await expect(result, "doesn't get combo many from ref").toHaveTextContent("-ref combo many: -");
  },
  render: () => {
    const options = [{
      name: "option 1",
      value: "option value 1"
    }, {
      name: "option 2",
      value: "option value 2"
    }, {
      name: "option 3",
      value: "option value 3"
    }];
    const optionsMany = [{
      name: "option one",
      value: "option value one"
    }, {
      name: "option two",
      value: "option value two"
    }, {
      name: "option three",
      value: "option value three"
    }];
    const combo = [{
      name: "combo 1",
      value: "combo value 1"
    }, {
      name: "combo 2",
      value: "combo value 2"
    }, {
      name: "combo 3",
      value: "combo value 3"
    }];
    const comboMany = [{
      name: "combo one",
      value: "combo value one"
    }, {
      name: "combo two",
      value: "combo value two"
    }, {
      name: "combo three",
      value: "combo value three"
    }];
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
        text: optionIndex !== undefined ? options[optionIndex].value : ""
      }, {
        key: "selected option",
        text: selectedOption
      }, {
        key: "ref option",
        text: selectRef.current?.value.toString() || ""
      }, {
        key: "options state",
        text: optionsMany.filter((_, i) => optionsIndices.includes(i)).map(opt => opt.value).join(",")
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
        text: combo.filter(val => val.name === enteredCombo)[0].value
      }, {
        key: "ref combo",
        text: comboRef.current?.value.toString() || ""
      }, {
        key: "combo many state",
        text: comboIndices.map(i => comboMany[i].value).join(",")
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
            <Input wrapperClassName="w-full" data-testid="number" stepUpAriaLabel="up" stepDownAriaLabel="down" ref={numberRef} type="number" name="number" label="Number" value={number} onChange={e => {
            setNumber(e.target.value);
          }} />\r
            <Input wrapperClassName="w-full" ref={textareaRef} data-testid="textarea" as="textarea" label="Textarea" name="textarea" value={textarea} onChange={e => {
            setTextarea(e.target.value);
          }} />\r
            <Select wrapperClassName="w-full" items={options} inputRef={selectRef} placeholder="select one" label="Select one" name="select-one" initialSelectedIndex={optionIndex} onSelectedIndexChange={setOptionIndex}>\r
              <SelectContent closeButtonAriaLabel="close">\r
                <SelectGroup>\r
                  {options.map((option, index) => {
                  return <SelectOption key={option.value} index={index}>\r
                        {option.name}\r
                      </SelectOption>;
                })}\r
                </SelectGroup>\r
              </SelectContent>\r
            </Select>\r
            <Select wrapperClassName="w-full" items={optionsMany} inputRef={selectManyRef} removeAllItemsAriaLabel="clear" removeItemAriaLabel="remove" multiple placeholder="select many" label="Select many" name="select-many" initialSelectedIndex={optionIndex} onSelectedIndexChange={index => {
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
              <SelectContent closeButtonAriaLabel="close">\r
                <SelectGroup>\r
                  {optionsMany.map((option, index) => {
                  return <SelectOption key={option.value} index={index}>\r
                        {option.name}\r
                      </SelectOption>;
                })}\r
                </SelectGroup>\r
              </SelectContent>\r
            </Select>\r
            <Combobox wrapperClassName="w-full" toggleOpenAriaLabel="toggle" ref={comboRef} items={combo} label="Combo" name="combo" value={comboValue} placeholder="combo" data-testid="combo" onChange={e => setComboValue(e.target.value)} />\r
            <Combobox wrapperClassName="w-full" toggleOpenAriaLabel="toggle" removeAllItemsAriaLabel="remove all" removeItemAriaLabel="remove" multiple ref={comboManyRef} items={comboMany} name="comboMany" label="Combo multiple" placeholder="combo many" data-testid="combo many" onSelectedIndexChange={i => {
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
}`,...C.parameters?.docs?.source}}};const Ee=["Form"];export{C as Form,Ee as __namedExportsOrder,Me as default};
