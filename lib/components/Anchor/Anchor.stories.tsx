import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Anchor } from "./Anchor";

const meta: Meta<typeof Anchor> = {
  title: "Components/Link",
  component: Anchor,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Link");
    await expect(button, "renders").toBeTruthy();
  },
  args: {
    children: "Link",
    href: "#",
  },
};
