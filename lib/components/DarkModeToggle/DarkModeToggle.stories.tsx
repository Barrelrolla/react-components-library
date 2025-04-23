import { Meta, StoryObj } from "@storybook/react";
import { DarkModeToggle } from "./DarkModeToggle";
import { DarkModeContextProvider } from "@/contexts";

const meta: Meta<typeof DarkModeToggle> = {
  title: "Components/DarkModeToggle",
  component: DarkModeToggle,
  argTypes: {
    children: { if: { arg: "false", eq: "true" } },
    color: { control: { type: "inline-radio" } },
    variant: { control: { type: "inline-radio" } },
    ghostHover: {
      control: { type: "inline-radio" },
      if: { arg: "variant", eq: "ghost" },
    },
    size: { control: { type: "inline-radio" } },
    radius: { control: { type: "inline-radio" } },
    loadingPosition: { control: { type: "inline-radio" } },
    startIcon: { if: { arg: "false", exists: true } },
    endIcon: { if: { arg: "false", exists: true } },
    ref: { if: { arg: "false", exists: true } },
    as: { if: { arg: "false", exists: true } },
    wrapperClasses: { if: { arg: "false", exists: true } },
  },
};

export default meta;
type Story = StoryObj<typeof DarkModeToggle>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <DarkModeContextProvider>
        <div className="bg-main px-10 py-20">
          <DarkModeToggle {...props} />
        </div>
      </DarkModeContextProvider>
    );
  },
};
