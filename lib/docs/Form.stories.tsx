import {
  Button,
  Card,
  CardText,
  CardTitle,
  Combobox,
  Input,
  Select,
  SelectOption,
} from "@/components";
import { SelectContent } from "@/components/Select/SelectContent";
import { SelectGroup } from "@/components/Select/SelectGroup";
import { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { within, expect, userEvent } from "storybook/test";

const meta: Meta = {
  title: "Test/Form",
};

export default meta;
type Story = StoryObj<Meta>;

export const Form: Story = {
  play: async ({ canvasElement }) => {
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
    await expect(result, "sets text state").toHaveTextContent(
      "-text state: test-",
    );
    await expect(result, "gets text from formData").toHaveTextContent(
      "-entered text: test-",
    );
    await expect(result, "gets text from ref").toHaveTextContent(
      "-ref text: test-",
    );
    await expect(result, "sets number state").toHaveTextContent(
      "-number state: 259-",
    );
    await expect(result, "gets text from formData").toHaveTextContent(
      "-entered number: 259-",
    );
    await expect(result, "gets text from ref").toHaveTextContent(
      "-ref number: 259-",
    );
    await expect(result, "sets textarea state").toHaveTextContent(
      "-textarea state: testarea-",
    );
    await expect(result, "gets textarea from formData").toHaveTextContent(
      "-entered textarea: testarea-",
    );
    await expect(result, "gets textarea from ref").toHaveTextContent(
      "-ref textarea: testarea-",
    );
    await expect(result, "sets select state").toHaveTextContent(
      "-option state: option 1-",
    );
    await expect(result, "gets option from formData").toHaveTextContent(
      "-selected option: option 1-",
    );
    await expect(result, "gets option from ref").toHaveTextContent(
      "-ref option: option 1-",
    );
    await expect(result, "sets select many state").toHaveTextContent(
      "-options state: option two,option three-",
    );
    await expect(result, "gets options from formData").toHaveTextContent(
      "-selected options: option two,option three-",
    );
    await expect(result, "doesn't get options from ref").toHaveTextContent(
      "-ref options: option three-",
    );
    await expect(result, "sets combo state").toHaveTextContent(
      "-combo state: combo 1-",
    );
    await expect(result, "gets combo from formData").toHaveTextContent(
      "-selected combo: combo 1-",
    );
    await expect(result, "gets combo from ref").toHaveTextContent(
      "-ref combo: combo 1-",
    );
    await expect(result, "sets combo many state").toHaveTextContent(
      "-combo many state: combo two,combo three-",
    );
    await expect(result, "gets combo many from formData").toHaveTextContent(
      "-selected combo many: combo two,combo three-",
    );
    await expect(result, "doesn't get combo many from ref").toHaveTextContent(
      "-ref combo many: -",
    );
  },
  render: () => {
    const options = ["option 1", "option 2", "option 3"];
    const optionsMany = ["option one", "option two", "option three"];
    const combo = ["combo 1", "combo 2", "combo 3"];
    const comboMany = ["combo one", "combo two", "combo three"];
    const [data, setData] = useState<
      {
        key: string;
        text: string;
        error?: boolean;
      }[]
    >([]);
    const [text, setText] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [textarea, setTextarea] = useState<string>("");
    const [optionIndex, setOptionIndex] = useState<number | undefined>(
      undefined,
    );
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

      setData([
        { key: "text state", text: text },
        { key: "entered text", text: enteredText },
        { key: "ref text", text: textRef.current?.value.toString() || "" },
        { key: "number state", text: number },
        { key: "entered number", text: enteredNumbr },
        { key: "ref number", text: numberRef.current?.value.toString() || "" },
        { key: "textarea state", text: textarea },
        { key: "entered textarea", text: enteredTextarea },
        {
          key: "ref textarea",
          text: textareaRef.current?.value.toString() || "",
        },
        {
          key: "option state",
          text: optionIndex !== undefined ? options[optionIndex] : "",
        },
        { key: "selected option", text: selectedOption },
        { key: "ref option", text: selectRef.current?.value.toString() || "" },
        {
          key: "options state",
          text: optionsMany
            .filter((_, i) => optionsIndices.includes(i))
            .join(","),
        },
        { key: "selected options", text: selectedOptions },
        {
          key: "ref options",
          text: selectManyRef.current?.value.toString() || "",
          error: true,
        },
        { key: "combo state", text: comboValue },
        { key: "selected combo", text: enteredCombo },
        { key: "ref combo", text: comboRef.current?.value.toString() || "" },
        {
          key: "combo many state",
          text: comboIndices.map((i) => comboMany[i]).join(","),
        },
        { key: "selected combo many", text: enteredComboMany },
        {
          key: "ref combo many",
          text: comboManyRef.current?.value.toString() || "",
          error: true,
        },
      ]);
    }

    return (
      <div className="flex flex-col gap-2 p-4">
        <Card className="p-4">
          <form action={handleSubmit} className="flex flex-col gap-2">
            <Input
              wrapperClassName="w-full"
              data-testid="text"
              ref={textRef}
              type="text"
              name="text"
              label="Text"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
            <Input
              wrapperClassName="w-full"
              data-testid="number"
              ref={numberRef}
              type="number"
              name="number"
              label="Number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <Input
              wrapperClassName="w-full"
              ref={textareaRef}
              data-testid="textarea"
              as="textarea"
              label="Textarea"
              name="textarea"
              value={textarea}
              onChange={(e) => {
                setTextarea(e.target.value);
              }}
            />
            <Select
              wrapperClassName="w-full"
              items={options}
              inputRef={selectRef}
              placeholder="select one"
              label="Select one"
              name="select-one"
              initialSelectedIndex={optionIndex}
              onSelectedIndexChange={setOptionIndex}
            >
              <SelectContent>
                <SelectGroup>
                  {options.map((option, index) => {
                    return (
                      <SelectOption key={option} index={index}>
                        {option}
                      </SelectOption>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              wrapperClassName="w-full"
              items={optionsMany}
              inputRef={selectManyRef}
              multiple
              placeholder="select many"
              label="Select many"
              name="select-many"
              initialSelectedIndex={optionIndex}
              onSelectedIndexChange={(index) => {
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
              }}
            >
              <SelectContent>
                <SelectGroup>
                  {optionsMany.map((option, index) => {
                    return (
                      <SelectOption key={option} index={index}>
                        {option}
                      </SelectOption>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Combobox
              wrapperClassName="w-full"
              ref={comboRef}
              items={combo}
              label="Combo"
              name="combo"
              value={comboValue}
              placeholder="combo"
              data-testid="combo"
              onChange={(e) => setComboValue(e.target.value)}
            />
            <Combobox
              wrapperClassName="w-full"
              multiple
              ref={comboManyRef}
              items={comboMany}
              name="comboMany"
              label="Combo multiple"
              placeholder="combo many"
              data-testid="combo many"
              onSelectedIndexChange={(i) => {
                if (i === undefined) {
                  return;
                }

                const found = comboIndices.indexOf(i);
                if (found >= 0) {
                  const newArr = comboIndices.filter((x) => x !== i);
                  setComboIndices(newArr);
                } else {
                  setComboIndices([...comboIndices, i]);
                }
              }}
            />
            <Button className="mt-4">submit</Button>
          </form>
        </Card>
        <Card>
          <CardTitle>entered data</CardTitle>
          <CardText className="flex flex-col" data-testid="result">
            {data.map((entry) => {
              return (
                <span
                  className={entry.error ? "text-error" : ""}
                  key={entry.key}
                >{`-${entry.key}: ${entry.text}-`}</span>
              );
            })}
          </CardText>
        </Card>
      </div>
    );
  },
};
