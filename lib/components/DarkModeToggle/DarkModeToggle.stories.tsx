import { Meta, StoryObj } from "@storybook/react";
import { DarkModeToggle } from "./DarkModeToggle";
import { DarkModeContextProvider } from "@/contexts";
import { DarkModeSelector } from "./DarkModeSelector";

const meta: Meta<typeof DarkModeToggle> = {
  component: DarkModeToggle,
};

export default meta;
type Story = StoryObj<typeof DarkModeToggle>;

export const ToggleTest: Story = {
  render: () => {
    return (
      <DarkModeContextProvider>
        <div className="bg-main p-4">
          <DarkModeToggle />
        </div>
      </DarkModeContextProvider>
    );
  },
  args: {},
};

export const ToggleSize: Story = {
  render: () => {
    return (
      <DarkModeContextProvider>
        <div className="bg-main flex justify-between p-4">
          <DarkModeSelector />
        </div>
      </DarkModeContextProvider>
    );
  },
  args: {},
};
