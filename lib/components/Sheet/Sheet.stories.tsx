import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Sheet } from "./Sheet";
import { availableColors } from "@/types";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  tags: ["autodocs"],
  component: Sheet,
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
    const sheet = canvas.getByText("Sheet");
    await expect(sheet, "renders").toBeTruthy();
  },
  render: ({ children, ...rest }) => {
    return <Sheet {...rest}>{children}</Sheet>;
  },
  args: {
    children: "sheet",
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => (
          <Sheet color={color} key={color} {...rest}>
            {color}
          </Sheet>
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
