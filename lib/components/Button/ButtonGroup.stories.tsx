import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";
import { ComputerIcon } from "@/icons";
import { ComponentProps, useEffect, useState } from "react";

type Props = ComponentProps<typeof ButtonGroup> & {
  selection: boolean;
};

const meta: Meta<Props> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  args: { selection: true },
  argTypes: {
    selection: { control: { type: "boolean" } },
    color: { control: { type: "inline-radio" } },
    variant: { control: { type: "inline-radio" } },
    size: { control: { type: "inline-radio" } },
    radius: { control: { type: "inline-radio" } },
    ghostHover: {
      control: { type: "inline-radio" },
      if: { arg: "variant", eq: "ghost" },
    },

    children: {
      if: { arg: "false", exists: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ selection, ...rest }) => {
    const [selected, setSelected] = useState<number | undefined>(undefined);
    useEffect(() => {
      if (!selection) {
        setSelected(undefined);
      }
    }, [selection]);

    const clickHandler = (index: number) => {
      if (selection) {
        setSelected(index);
      }
    };
    return (
      <div className="bg-main px-10 py-20">
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
      </div>
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
