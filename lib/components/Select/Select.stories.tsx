import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Select, SelectOption } from "./index";
import { availableColors } from "@/types";
import { SelectContent } from "./SelectContent";
import { SelectGroup } from "./SelectGroup";
import { SelectGroupTitle } from "./SelectGroupTitle";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  tags: ["autodocs"],
  component: Select,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    children: { name: "text" },
    color: {
      options: availableColors,
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select...");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({ color, error, disabled, ...rest }) => {
    return (
      <Select
        color={color}
        error={error}
        disabled={disabled}
        name="select"
        {...rest}
      >
        <SelectContent>
          <SelectGroupTitle>options</SelectGroupTitle>
          <SelectGroup>
            <SelectOption value={"one"}>One</SelectOption>
            <SelectOption disabled value={"two"}>
              Two
            </SelectOption>
            <SelectOption value={"three"}>Three</SelectOption>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
  args: {},
};

export const Multiple: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select...");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({ color, error, disabled, ...rest }) => {
    return (
      <Select
        color={color}
        error={error}
        disabled={disabled}
        name="select"
        {...rest}
        multiple
      >
        <SelectContent>
          <SelectGroupTitle>options</SelectGroupTitle>
          <SelectGroup>
            <SelectOption value={"one"}>One</SelectOption>
            <SelectOption disabled value={"two"}>
              Two
            </SelectOption>
            <SelectOption value={"three"}>Three</SelectOption>
            <SelectOption value={"four"}>Four</SelectOption>
            <SelectOption value={"five"}>Five</SelectOption>
            <SelectOption value={"six"}>Six</SelectOption>
            <SelectOption value={"seven"}>Seven</SelectOption>
            <SelectOption value={"eight"}>Eight</SelectOption>
            <SelectOption value={"nine"}>Nine</SelectOption>
            <SelectOption value={"ten"}>Ten</SelectOption>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
  argTypes: { multiple: { table: { disable: true } } },
  args: {},
};

export const WithLabel: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select...");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({ color, error, disabled, ...rest }) => {
    return (
      <Select
        color={color}
        error={error}
        disabled={disabled}
        label="Select"
        name="select"
        {...rest}
      >
        <SelectContent>
          <SelectGroup>
            <SelectOption value={"one"}>One</SelectOption>
            <SelectOption disabled value={"two"}>
              Two
            </SelectOption>
            <SelectOption value={"three"}>Three</SelectOption>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
  args: {},
};

export const Disabled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByText("Select...");
    await expect(select, "renders").toBeTruthy();
  },
  render: ({ color, error, ...rest }) => {
    return (
      <Select
        color={color}
        error={error}
        disabled
        label="Select"
        name="select"
        {...rest}
      >
        <SelectContent>
          <SelectGroup>
            <SelectOption value={"one"}>One</SelectOption>
            <SelectOption disabled value={"two"}>
              Two
            </SelectOption>
            <SelectOption value={"three"}>Three</SelectOption>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
  argTypes: { disabled: { table: { disable: true } } },
  args: {},
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => (
          <Select label={color} color={color} key={color} {...rest}>
            <SelectContent>
              <SelectGroup>
                <SelectOption value={"option"}>option</SelectOption>
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}
      </>
    );
  },
  args: {},
  argTypes: {
    color: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};
