import { Meta, StoryObj } from "@storybook/react";
import { ThemeContextProvider } from "@/contexts";
import { DarkModeToggle } from "./DarkModeToggle";
import { availableColors, availableSizes } from "@/types";

const meta: Meta<typeof DarkModeToggle> = {
  title: "Components/DarkModeToggle",
  tags: ["autodocs"],
  component: DarkModeToggle,
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
    disabled: { table: { category: "controls" } },
    scaling: { table: { category: "controls" } },
    retainFocusState: { table: { category: "controls" } },
    lightModeTooltip: { control: false, table: { category: "docs" } },
    darkModeTooltip: { control: false, table: { category: "docs" } },
    loading: { table: { disable: true } },
    loadingPosition: { table: { disable: true } },
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    ref: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    useGroup: { table: { disable: true } },
    selected: { table: { disable: true } },
    as: { table: { disable: true } },
  },
  args: {
    lightModeTooltip: "light",
    darkModeTooltip: "dark",
    "aria-label": "toggle",
  },
};

export default meta;
type Story = StoryObj<typeof DarkModeToggle>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <ThemeContextProvider>
        <DarkModeToggle {...props} />
      </ThemeContextProvider>
    );
  },
};
