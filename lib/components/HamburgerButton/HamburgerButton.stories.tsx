import { Meta, StoryObj } from "@storybook/react";
import { HamburgerButton } from "./HamburgerButton";
import { useState } from "react";

const meta: Meta<typeof HamburgerButton> = {
  title: "Components/HamburgerButton",
  component: HamburgerButton,
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
