import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { availableColors } from "@/types";
import { Radio, RadioGroup } from "./index";

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
    defaultChecked: { table: { disable: true } },
    labelStyle: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
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

export const Disabled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByText("Radio");
    await expect(radio, "renders").toBeTruthy();
  },
  render: ({ children, ...rest }) => {
    return (
      <Radio disabled {...rest}>
        {children}
      </Radio>
    );
  },
  args: {
    children: "Radio",
    size: 20,
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <RadioGroup name="colors" title="" className="flex flex-wrap gap-2">
        {availableColors.map((color) => (
          <Radio color={color} key={color} {...rest}>
            {color}
          </Radio>
        ))}
      </RadioGroup>
    );
  },
  argTypes: {
    color: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};
