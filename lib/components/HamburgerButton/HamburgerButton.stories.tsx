import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HamburgerButton } from "./HamburgerButton";

const meta: Meta<typeof HamburgerButton> = {
  title: "Components/HamburgerButton",
  tags: ["autodocs"],
  component: HamburgerButton,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    children: { if: { arg: "false", eq: "true" } },
    color: { control: { type: "select" } },
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen((prevState) => !prevState);
    };
    return (
      <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />
    );
  },
};
