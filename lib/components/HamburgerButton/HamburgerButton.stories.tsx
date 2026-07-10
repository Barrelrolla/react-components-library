import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HamburgerButton } from "./HamburgerButton";
import { availableColors, availableSizes } from "@/types";

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
    children: { table: { disable: true } },
    isOpen: { table: { disable: true } },
    color: { control: { type: "select" }, options: availableColors },
    variant: { table: { disable: true } },
    ghostHover: { table: { disable: true } },
    size: { control: { type: "inline-radio" }, options: availableSizes },
    radius: { table: { disable: true } },
    selected: { table: { disable: true } },
    loading: { table: { disable: true } },
    loadingPosition: { table: { disable: true } },
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    ref: { table: { disable: true } },
    as: { table: { disable: true } },
    wrapperClasses: { table: { disable: true } },
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
