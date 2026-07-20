import { ComponentProps, useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { PiHeart } from "react-icons/pi";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";
import { availableColors } from "@/types";

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
    color: { control: { type: "select" }, options: availableColors },
    variant: { control: { type: "inline-radio" } },
    size: { control: { type: "inline-radio" } },
    radius: { control: { type: "inline-radio" } },
    ghostHover: {
      control: { type: "inline-radio" },
      if: { arg: "variant", eq: "ghost" },
    },
    children: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await buttons[0].click();
    await expect(buttons[0]).toHaveAttribute("data-selected", "true");
  },
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
    );
  },
};

export const Vertical: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByTestId("button-group");
    await expect(group).toHaveClass("flex-col");
  },
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
      <ButtonGroup
        variant={variant}
        vertical={vertical}
        {...rest}
        data-testid="button-group"
      >
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
    );
  },
};

export const Icon: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await expect(buttons[0]).toHaveClass("btn-icon-md");
  },
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
      <ButtonGroup radius={radius} {...rest}>
        <Button
          aria-label="like"
          selected={selected === 0}
          onClick={() => clickHandler(0)}
          startIcon={<PiHeart />}
        />
        <Button
          aria-label="like"
          selected={selected === 1}
          onClick={() => clickHandler(1)}
          startIcon={<PiHeart />}
        />
        <Button
          aria-label="like"
          selected={selected === 2}
          onClick={() => clickHandler(2)}
          startIcon={<PiHeart />}
        />
      </ButtonGroup>
    );
  },
};

export const SplitButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(2);
  },
  render: ({ radius = "pill", ...rest }) => {
    return (
      <ButtonGroup {...rest} radius={radius}>
        <Button className="">Button</Button>
        <Button aria-label="like" startIcon={<PiHeart />} />
      </ButtonGroup>
    );
  },
};
