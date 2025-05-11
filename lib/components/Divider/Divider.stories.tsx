import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

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
    color: { control: { type: "select" } },
    responsiveAt: { control: { type: "inline-radio" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="w-full h-5">
        <Divider {...rest} />
      </div>
    );
  },
};
