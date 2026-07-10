import { Meta, StoryObj } from "@storybook/react";
import { ThemeContextProvider } from "@/contexts";
import { DarkModeSelector } from "./DarkModeSelector";
import { availableColors, availableSizes } from "@/types";

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
    color: { control: { type: "select" }, options: availableColors },
    variant: { control: { type: "inline-radio" } },
    size: { control: { type: "inline-radio" }, options: availableSizes },
    radius: { control: { type: "inline-radio" } },
    ghostHover: {
      control: { type: "inline-radio" },
      if: { arg: "variant", eq: "ghost" },
    },
    dividerClasses: { table: { disable: true } },
    wrapperClasses: { table: { disable: true } },
    className: { table: { disable: true } },
    children: { table: { disable: true } },
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
