import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { availableColors } from "@/types";
import { Checkbox } from "./index";

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
    children: { name: "text", table: { category: "storybook" } },
    color: {
      options: availableColors,
      control: { type: "select" },
      table: { category: "controls" },
    },
    size: { table: { category: "controls" } },
    defaultChecked: { control: false, table: { category: "docs" } },
    labelStyle: { control: false, table: { category: "docs" } },
    labelClassName: { control: false, table: { category: "docs" } },
    wrapperClassName: { control: false, table: { category: "docs" } },
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
  },
};

export const Disabled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByText("Checkbox");
    await expect(checkbox, "renders").toBeTruthy();
  },
  render: ({ children, ...rest }) => {
    return (
      <Checkbox disabled {...rest}>
        {children}
      </Checkbox>
    );
  },
  args: {
    children: "Checkbox",
  },
  argTypes: {
    defaultChecked: { table: { disable: true } },
    labelStyle: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
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
    defaultChecked: { table: { disable: true } },
    labelStyle: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
  },
};
