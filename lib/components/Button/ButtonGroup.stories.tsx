import { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";
import { ComputerIcon } from "@/icons/icons";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Button>button</Button>,
      <Button>button</Button>,
      <Button>button</Button>,
    ],
  },
};

export const Clear: Story = {
  args: {
    children: [
      <Button>button</Button>,
      <Button>button</Button>,
      <Button>button</Button>,
    ],
    variant: "clear",
  },
};

export const Icon: Story = {
  args: {
    radius: "pill",
    vertical: true,
    children: [
      <Button icon={<ComputerIcon />} />,
      <Button icon={<ComputerIcon />} />,
      <Button icon={<ComputerIcon />} />,
    ],
  },
};
