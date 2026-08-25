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
    color: {
      control: { type: "select" },
      options: availableColors,
      table: { category: "controls" },
    },
    variant: {
      control: { type: "inline-radio" },
      table: { category: "controls" },
    },
    size: {
      control: { type: "inline-radio" },
      options: availableSizes,
      table: { category: "controls" },
    },
    radius: {
      control: { type: "inline-radio" },
      table: { category: "controls" },
    },
    retainFocusState: { table: { category: "controls" } },
    divider: { table: { category: "controls" } },
    vertical: { table: { category: "controls" } },
    scaling: { table: { category: "controls" } },
    tooltipDelay: { table: { category: "controls" } },
    lightModeTooltip: { control: false, table: { category: "docs" } },
    darkModeTooltip: { control: false, table: { category: "docs" } },
    systemModeTooltip: { control: false, table: { category: "docs" } },
    lightModeAriaLabel: { control: false, table: { category: "docs" } },
    darkModeAriaLabel: { control: false, table: { category: "docs" } },
    systemModeAriaLabel: { control: false, table: { category: "docs" } },
    dividerClassName: { control: false, table: { category: "docs" } },
    wrapperClassName: { control: false, table: { category: "docs" } },
  },
  args: {
    darkModeAriaLabel: "dark",
    lightModeAriaLabel: "light",
    systemModeAriaLabel: "system",
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
