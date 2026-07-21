import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Radio } from "./Radio";
import { availableColors } from "@/types";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  tags: ["autodocs"],
  component: Radio,
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByText("Radio");
    await expect(radio, "renders").toBeTruthy();
  },
  render: ({ children, ...rest }) => {
    return <Radio {...rest}>{children}</Radio>;
  },
  args: {
    children: "Radio",
    size: 20,
  },
};

export const Colors: Story = {
  render: ({ name, ...rest }) => {
    return (
      <fieldset className="flex flex-wrap gap-2">
        {availableColors.map((color) => (
          <Radio name={name} color={color} key={color} {...rest}>
            {color}
          </Radio>
        ))}
      </fieldset>
    );
  },
  args: { name: "colors" },
  argTypes: {
    color: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};
