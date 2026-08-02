import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Select, SelectOption } from "./index";
import { availableColors } from "@/types";
import { SelectContent } from "./SelectContent";

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
  render: ({ ...rest }) => {
    return (
      <div>
        <Select name="select" {...rest}>
          <SelectContent>
            <SelectOption value={"one"}>One</SelectOption>
            <SelectOption value={"two"}>Two</SelectOption>
            <SelectOption value={"three"}>Three</SelectOption>
          </SelectContent>
        </Select>
      </div>
    );
  },
  args: {
    children: "select",
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
