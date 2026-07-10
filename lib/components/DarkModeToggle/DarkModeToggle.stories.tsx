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
    children: { if: { arg: "false", eq: "true" } },
    color: { control: { type: "select" }, options: availableColors },
    variant: { control: { type: "inline-radio" } },
    ghostHover: {
      control: { type: "inline-radio" },
      if: { arg: "variant", eq: "ghost" },
    },
    size: { control: { type: "inline-radio" }, options: availableSizes },
    radius: { control: { type: "inline-radio" } },
    loading: { table: { disable: true } },
    loadingPosition: { table: { disable: true } },
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    ref: { table: { disable: true } },
    as: { table: { disable: true } },
    wrapperClasses: { table: { disable: true } },
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
