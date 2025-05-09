import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  tags: ["autodocs"],
  component: Footer,
  decorators: (Story) => (
    <div className="">
      <Story />
    </div>
  ),
  argTypes: {
    children: { name: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Test");
    await expect(button, "renders").toBeTruthy();
  },
  render: ({ children, ...rest }) => {
    return <Footer {...rest}>{children}</Footer>;
  },
  args: {
    children: "Test",
  },
};
