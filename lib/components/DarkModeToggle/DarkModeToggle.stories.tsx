import { Meta, StoryObj } from "@storybook/react";
import { DarkModeToggle } from "./DarkModeToggle";
import { DarkModeContextProvider } from "@/contexts";
const meta: Meta<typeof DarkModeToggle> = {
  title: "Components/DarkModeToggle",
  component: DarkModeToggle,
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
