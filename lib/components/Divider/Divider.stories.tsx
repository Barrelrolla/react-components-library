import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";
import { availableColors, availableResponsiveSizes } from "@/types";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  tags: ["autodocs"],
  component: Divider,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    color: { control: { type: "select" }, options: availableColors },
    responsiveAt: {
      control: { type: "inline-radio" },
      options: availableResponsiveSizes,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="h-5 w-full">
        <Divider {...rest} />
      </div>
    );
  },
};
