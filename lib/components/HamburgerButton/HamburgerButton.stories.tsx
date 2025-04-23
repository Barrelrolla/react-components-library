import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HamburgerButton } from "./HamburgerButton";

const meta: Meta<typeof HamburgerButton> = {
  title: "Components/HamburgerButton",
  component: HamburgerButton,
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
      setIsOpen((prevState) => !prevState);
    };
    return (
      <div className="bg-main px-10 py-20">
        <HamburgerButton {...props} isOpen={isOpen} onClick={clickHandler} />
      </div>
    );
  },
};
