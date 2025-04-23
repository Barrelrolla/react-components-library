import { ComponentProps, useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ComputerIcon } from "@/icons";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

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
          <Button
            {...rest}
            selected={selected === 0}
            onClick={() => clickHandler(0)}
          >
            button
          </Button>
          <Button
            {...rest}
            selected={selected === 1}
            onClick={() => clickHandler(1)}
          >
            button
          </Button>
          <Button
            {...rest}
            selected={selected === 2}
            onClick={() => clickHandler(2)}
          >
            button
          </Button>
        </ButtonGroup>
      </div>
    );
  },
};

export const Ghost: Story = {
  render: ({ variant = "ghost", vertical = true, selection, ...rest }) => {
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
        <ButtonGroup variant={variant} vertical={vertical} {...rest}>
          <Button
            {...rest}
            selected={selected === 0}
            onClick={() => clickHandler(0)}
          >
            button
          </Button>
          <Button
            {...rest}
            selected={selected === 1}
            onClick={() => clickHandler(1)}
          >
            button
          </Button>
          <Button
            {...rest}
            selected={selected === 2}
            onClick={() => clickHandler(2)}
          >
            button
          </Button>
        </ButtonGroup>
      </div>
    );
  },
};

export const Icon: Story = {
  render: ({ radius = "full", selection, ...rest }) => {
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
        <ButtonGroup radius={radius}>
          <Button
            {...rest}
            selected={selected === 0}
            onClick={() => clickHandler(0)}
            startIcon={<ComputerIcon />}
          />
          <Button
            {...rest}
            selected={selected === 1}
            onClick={() => clickHandler(1)}
            startIcon={<ComputerIcon />}
          />
          <Button
            {...rest}
            selected={selected === 2}
            onClick={() => clickHandler(2)}
            startIcon={<ComputerIcon />}
          />
        </ButtonGroup>
      </div>
    );
  },
};

export const Fancy: Story = {
  render: ({ radius = "full", size = "xl", variant = "solid", ...rest }) => {
    return (
      <div className="bg-main px-10 py-20">
        <ButtonGroup {...rest} radius={radius} size={size} variant={variant}>
          <Button className="">Button</Button>
          <Button startIcon={<ComputerIcon />} />
        </ButtonGroup>
      </div>
    );
  },
};
