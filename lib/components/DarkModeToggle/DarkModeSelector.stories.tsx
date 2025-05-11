import { Meta, StoryObj } from "@storybook/react";
import { ThemeContextProvider } from "@/contexts";
import { DarkModeSelector } from "./DarkModeSelector";

const meta: Meta<typeof DarkModeSelector> = {
  title: "Components/DarkModeSelector",
  tags: ["autodocs"],
  component: DarkModeSelector,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    color: { control: { type: "select" } },
    variant: { control: { type: "inline-radio" } },
    size: { control: { type: "inline-radio" } },
    radius: { control: { type: "inline-radio" } },
    ghostHover: {
      control: { type: "inline-radio" },
      if: { arg: "variant", eq: "ghost" },
    },

    children: {
      if: { arg: "false", exists: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DarkModeSelector>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <ThemeContextProvider>
        <DarkModeSelector {...props} />
      </ThemeContextProvider>
    );
  },
};
