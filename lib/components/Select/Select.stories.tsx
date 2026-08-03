import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Select, SelectOption } from "./index";
import { availableColors } from "@/types";
import { SelectContent } from "./SelectContent";
import { Input } from "../Input";

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
      <div className="flex flex-col gap-2">
        <Input
          color={color}
          error={error}
          disabled={disabled}
          label="Select"
          placeholder="Select..."
        />
        <Select
          color={color}
          error={error}
          disabled={disabled}
          name="select"
          label="Select"
          {...rest}
        >
          <SelectContent>
            <SelectOption value={"one"}>One</SelectOption>
            <SelectOption disabled value={"two"}>
              Two
            </SelectOption>
            <SelectOption value={"three"}>Three</SelectOption>
          </SelectContent>
        </Select>
      </div>
    );
  },
  args: {
    error: "error",
    disabled: true,
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => (
          <Select color={color} key={color} {...rest}>
            {color}
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
