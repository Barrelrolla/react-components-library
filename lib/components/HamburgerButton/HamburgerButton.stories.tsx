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
    color: { table: { category: "controls" } },
    size: { table: { category: "controls" } },
    disabled: { table: { category: "controls" } },
    scaling: { table: { category: "controls" } },
    retainFocusState: { table: { disable: true } },
    children: { table: { disable: true } },
    isOpen: { table: { disable: true } },
    variant: { table: { disable: true } },
    radius: { table: { disable: true } },
    selected: { table: { disable: true } },
    loading: { table: { disable: true } },
    loadingPosition: { table: { disable: true } },
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    ref: { table: { disable: true } },
    as: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    useGroup: { table: { disable: true } },
    "aria-label": { table: { disable: true } },
  },
  args: {
    "aria-label": "toggle",
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
