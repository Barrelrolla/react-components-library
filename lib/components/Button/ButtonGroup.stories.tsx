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
  tags: ["autodocs"],
  component: ButtonGroup,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  args: { selection: true },
  argTypes: {
    selection: { control: { type: "boolean" } },
    color: { control: { type: "select" } },
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
    );
  },
};

export const Vertical: Story = {
  render: ({ selection, variant = "outline", vertical = true, ...rest }) => {
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
    );
  },
};

export const Icon: Story = {
  render: ({ radius = "pill", selection, ...rest }) => {
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
    );
  },
};

export const ButtonWithIconButton: Story = {
  render: ({ selection, radius = "pill", ...rest }) => {
    return (
      <ButtonGroup {...rest} radius={radius}>
        <Button className="">Button</Button>
        <Button startIcon={<ComputerIcon />} />
      </ButtonGroup>
    );
  },
};
