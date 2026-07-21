import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Checkbox } from "./Checkbox";
import { availableColors } from "@/types";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  component: Checkbox,
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
    labelColor: {
      options: availableColors,
      control: { type: "select" },
    },
    defaultChecked: { table: { disable: true } },
    labelStyle: { table: { disable: true } },
    labelClasses: { table: { disable: true } },
    wrapperClasses: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByText("Checkbox");
    await expect(checkbox, "renders").toBeTruthy();
  },
  render: ({ children, ...rest }) => {
    return <Checkbox {...rest}>{children}</Checkbox>;
  },
  args: {
    children: "Checkbox",
    size: 24,
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="flex flex-wrap gap-2">
        {availableColors.map((color) => (
          <Checkbox color={color} key={color} defaultChecked {...rest}>
            {color}
          </Checkbox>
        ))}
      </div>
    );
  },
  args: {},
  argTypes: {
    color: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};
