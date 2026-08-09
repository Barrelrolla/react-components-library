import {
  Button,
  Card,
  CardText,
  CardTitle,
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
    await expect(result, "sets text state").toHaveTextContent(
      "text state: test",
    );
    await expect(result, "gets text from formData").toHaveTextContent(
      "entered text: test",
    );
    await expect(result, "gets text from ref").toHaveTextContent(
      "ref text: test",
    );
    await expect(result, "sets number state").toHaveTextContent(
      "number state: 2",
    );
    await expect(result, "gets text from formData").toHaveTextContent(
      "entered number: 2",
    );
    await expect(result, "gets text from ref").toHaveTextContent(
      "ref number: 2",
    );
    await expect(result, "sets textarea state").toHaveTextContent(
      "textarea state: testarea",
    );
    await expect(result, "gets textarea from formData").toHaveTextContent(
      "entered textarea: testarea",
    );
    await expect(result, "gets textarea from ref").toHaveTextContent(
      "ref textarea: testarea",
    );
    await expect(result, "sets select state").toHaveTextContent(
      "option state: option",
    );
    await expect(result, "gets option from formData").toHaveTextContent(
      "selected option: option",
    );
    await expect(result, "gets option from ref").toHaveTextContent(
      "ref option: option",
    );
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
        "ref textarea": textareaRef.current?.value.toString(),
      });
    }

    return (
      <div className="flex flex-col gap-2 p-4">
        <Card className="p-4">
          <form action={handleSubmit} className="flex flex-col gap-2">
            <Input
              data-testid="text"
              ref={textRef}
              type="text"
              name="text"
              label="text"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
            <Input
              data-testid="number"
              ref={numberRef}
              type="number"
              name="number"
              label="number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <Select
              inputRef={selectRef}
              label="select"
              name="select"
              initialSelectedValue={option}
              onSelectedValueChange={setOption}
            >
              <SelectContent>
                <SelectGroup>
                  <SelectOption value={"option"}>option</SelectOption>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              ref={textareaRef}
              data-testid="textarea"
              as="textarea"
              label="textarea"
              name="textarea"
              value={textarea}
              onChange={(e) => {
                setTextarea(e.target.value);
              }}
            />
            <Button size="sm">submit</Button>
          </form>
        </Card>
        <Card>
          <CardTitle>entered data</CardTitle>
          <CardText className="flex flex-col" data-testid="result">
            {Object.keys(data).map((entry) => {
              return <span key={entry}>{`${entry}: ${data[entry]}`}</span>;
            })}
          </CardText>
        </Card>
      </div>
    );
  },
};
