import { Meta, StoryObj } from "@storybook/react";
import { DarkModeContextProvider } from "@/contexts";
import { DarkModeSelector } from "./DarkModeSelector";

const meta: Meta<typeof DarkModeSelector> = {
  title: "Components/DarkModeSelector",
  tags: ["autodocs"],
  component: DarkModeSelector,
  argTypes: {
    color: { control: { type: "inline-radio" } },
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
      <DarkModeContextProvider>
        <div className="storybookContainer">
          <DarkModeSelector {...props} />
        </div>
      </DarkModeContextProvider>
    );
  },
};
