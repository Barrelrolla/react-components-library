import { Meta, StoryObj } from "@storybook/react";
import { DarkModeSelector } from "./DarkModeSelector";
import { DarkModeContextProvider } from "@/contexts";

const meta: Meta<typeof DarkModeSelector> = {
  title: "Components/DarkModeSelector",
  component: DarkModeSelector,
};

export default meta;
type Story = StoryObj<typeof DarkModeSelector>;

export const ToggleSize: Story = {
  render: ({ ...props }) => {
    return (
      <DarkModeContextProvider>
        <div className="bg-main flex justify-between p-4">
          <DarkModeSelector {...props} />
        </div>
      </DarkModeContextProvider>
    );
  },
};
