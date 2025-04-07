import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByText("test");
    await expect(navbar, "renders").toBeTruthy();
  },
  args: {
    children: "test",
  },
};
