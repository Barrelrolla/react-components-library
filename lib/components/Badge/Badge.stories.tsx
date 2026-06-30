import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Badge } from "./Badge";
import { ColorType } from "@/types";

const colors: ColorType[] = [
  "main",
  "light",
  "dark",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
];

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  tags: ["autodocs"],
  component: Badge,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText("Badge");
    await expect(badge, "renders").toBeTruthy();
  },
  render: ({ children, ...rest }) => {
    return <Badge {...rest}>{children}</Badge>;
  },
  args: {
    children: "Badge",
  },
};

export const Colors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badges = canvas.getAllByText(
      /^(main|light|dark|primary|secondary|accent|info|success|warning|error)$/,
    );
    await expect(badges).toHaveLength(colors.length);
  },
  render: ({ ...rest }) => {
    return (
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <Badge color={color} key={color} {...rest}>
            {color}
          </Badge>
        ))}
      </div>
    );
  },
  args: {},
  argTypes: {
    color: { if: { arg: "false", eq: "true" } },
  },
};
