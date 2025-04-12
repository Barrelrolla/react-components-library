import { Meta, StoryObj } from "@storybook/react";
import { DarkModeToggle } from "./DarkModeToggle";

const meta: Meta<typeof DarkModeToggle> = {
  component: DarkModeToggle,
};

export default meta;
type Story = StoryObj<typeof DarkModeToggle>;

export const ToggleTest: Story = {
  render: () => {
    return (
      <div className="bg-white p-4 dark:bg-black">
        <DarkModeToggle />
      </div>
    );
  },
  args: {},
};

export const ToggleSize: Story = {
  render: () => {
    return (
      <div className="flex justify-between bg-white p-4 dark:bg-black">
        <DarkModeToggle />
        <div></div>
      </div>
    );
  },
  args: {},
};
