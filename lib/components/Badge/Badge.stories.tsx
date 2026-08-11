import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { availableColors } from "@/types";
import { availableBadgeVariants } from "./badgeTypes";
import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  tags: ["autodocs"],
  component: Badge,
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
    variant: {
      table: { category: "controls" },
    },
  },
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

export const Variants: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="flex flex-wrap gap-2">
        {availableBadgeVariants.map((variant) => (
          <Badge {...rest} variant={variant} key={variant}>
            {variant}
          </Badge>
        ))}
      </div>
    );
  },
  args: {},
  argTypes: {
    variant: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => {
          return (
            <div className="flex flex-col gap-4" key={color}>
              {availableBadgeVariants.map((variant) => {
                return (
                  <Badge
                    {...rest}
                    color={color}
                    variant={variant}
                    key={`${variant}-${color}`}
                  >
                    {color}
                  </Badge>
                );
              })}
            </div>
          );
        })}
      </>
    );
  },
  args: {},
  argTypes: {
    variant: { table: { disable: true } },
    color: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};
