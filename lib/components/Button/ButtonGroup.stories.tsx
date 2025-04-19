import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";
import { ComputerIcon } from "@/icons";
import { ComponentProps, useState } from "react";

type Props = ComponentProps<typeof ButtonGroup> & {
  selection: boolean;
};

const meta: Meta<Props> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  args: { selection: true },
  argTypes: {
    selection: {
      control: { type: "boolean" },
    },
    children: {
      control: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ selection, ...rest }) => {
    const [selected, setSelected] = useState<number | undefined>(undefined);
    const clickHandler = (index: number) => {
      if (selection) {
        setSelected(index);
      }
    };
    return (
      <>
        <ButtonGroup {...rest}>
          <Button selected={selected === 0} onClick={() => clickHandler(0)}>
            button
          </Button>
          <Button selected={selected === 1} onClick={() => clickHandler(1)}>
            button
          </Button>
          <Button selected={selected === 2} onClick={() => clickHandler(2)}>
            button
          </Button>
        </ButtonGroup>
      </>
    );
  },
};

export const Clear: Story = {
  args: {
    children: [
      <Button>button</Button>,
      <Button>button</Button>,
      <Button>button</Button>,
    ],
    variant: "ghost",
    bordered: false,
  },
};

export const Icon: Story = {
  args: {
    radius: "pill",
    children: [
      <Button startIcon={<ComputerIcon />} />,
      <Button startIcon={<ComputerIcon />} />,
      <Button startIcon={<ComputerIcon />} />,
    ],
  },
};

export const Fancy: Story = {
  args: {
    radius: "pill",
    size: "md",
    children: [
      <Button className="">Button</Button>,
      <Button startIcon={<ComputerIcon />} />,
    ],
  },
};
