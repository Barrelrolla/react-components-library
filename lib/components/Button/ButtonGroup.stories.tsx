import { ComponentProps, useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import {
  PiBookmark,
  PiHeart,
  PiMagnifyingGlass,
  PiThumbsUp,
} from "react-icons/pi";
import { availableColors, availableSizes } from "@/types";
import { availableButtonVariants } from "./buttonTypes";
import {
  Combobox,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectOption,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../index";
import { Button, ButtonGroup } from "./index";

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
    selection: {
      control: { type: "boolean" },
      table: { category: "storybook" },
    },
    color: {
      control: { type: "select" },
      options: availableColors,
      table: { category: "controls" },
    },
    variant: {
      control: { type: "inline-radio" },
      table: { category: "controls" },
    },
    size: {
      control: { type: "inline-radio" },
      options: availableSizes,
      table: { category: "controls" },
    },
    radius: {
      control: { type: "inline-radio" },
      table: { category: "controls" },
    },
    retainFocusState: { table: { category: "controls" } },
    divider: { table: { category: "controls" } },
    vertical: { table: { category: "controls" } },
    scaling: { table: { category: "controls" } },
    tooltipDelay: { table: { category: "controls" } },
    dividerClassName: { control: false, table: { category: "docs" } },
    wrapperClassName: { control: false, table: { category: "docs" } },
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

export const Varinats: Story = {
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
      <>
        {availableButtonVariants.map((variant, index) => {
          return (
            <ButtonGroup {...rest} key={variant} variant={variant}>
              <Button
                selected={selected === 0 + 3 * index}
                onClick={() => clickHandler(0 + 3 * index)}
              >
                {variant}
              </Button>
              <Button
                selected={selected === 1 + 3 * index}
                onClick={() => clickHandler(1 + 3 * index)}
              >
                {variant}
              </Button>
              <Button
                selected={selected === 2 + 3 * index}
                onClick={() => clickHandler(2 + 3 * index)}
              >
                {variant}
              </Button>
            </ButtonGroup>
          );
        })}
      </>
    );
  },
  argTypes: {
    variant: { table: { disable: true } },
    tooltipDelay: { table: { disable: true } },
    dividerClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
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
  argTypes: {
    vertical: { table: { disable: true } },
    dividerClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
  },
};

export const Icon: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await expect(buttons[0]).toHaveClass("btn-icon-md");
  },
  render: ({ variant = "solid", radius = "pill", selection, ...rest }) => {
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
      <ButtonGroup variant={variant} radius={radius} {...rest}>
        <Tooltip isLabel>
          <TooltipTrigger>
            <Button
              aria-label="love"
              selected={selected === 0}
              onClick={() => clickHandler(0)}
              startIcon={<PiHeart />}
            />
          </TooltipTrigger>
          <TooltipContent>Love</TooltipContent>
        </Tooltip>
        <Tooltip isLabel>
          <TooltipTrigger>
            <Button
              aria-label="like"
              selected={selected === 1}
              onClick={() => clickHandler(1)}
              startIcon={<PiThumbsUp />}
            />
          </TooltipTrigger>
          <TooltipContent>Like</TooltipContent>
        </Tooltip>
        <Tooltip isLabel>
          <TooltipContent>Save</TooltipContent>
          <TooltipTrigger>
            <Button
              aria-label="save"
              selected={selected === 2}
              onClick={() => clickHandler(2)}
              startIcon={<PiBookmark />}
            />
          </TooltipTrigger>
        </Tooltip>
      </ButtonGroup>
    );
  },
  argTypes: {
    dividerClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
  },
};

export const SplitButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(2);
  },
  render: ({ variant = "solid", radius = "pill", ...rest }) => {
    return (
      <ButtonGroup {...rest} variant={variant} radius={radius}>
        <Button className="">Button</Button>
        <Tooltip isLabel>
          <TooltipContent>Like</TooltipContent>
          <TooltipTrigger>
            <Button aria-label="like" startIcon={<PiHeart />} />
          </TooltipTrigger>
        </Tooltip>
      </ButtonGroup>
    );
  },
  args: { selection: undefined },
  argTypes: {
    selection: { table: { disable: true } },
    dividerClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
  },
};

export const WithInput: Story = {
  render: ({ variant = "solid", ...rest }) => {
    return (
      <ButtonGroup {...rest} variant={variant}>
        <Input placeholder="Type to search" />
        <Tooltip>
          <TooltipContent>Search</TooltipContent>
          <TooltipTrigger>
            <Button aria-label="search" startIcon={<PiMagnifyingGlass />} />
          </TooltipTrigger>
        </Tooltip>
      </ButtonGroup>
    );
  },
  args: { selection: undefined },
  argTypes: {
    selection: { table: { disable: true } },
    dividerClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
  },
};

export const WithSelect: Story = {
  render: ({ variant = "solid", ...rest }) => {
    const items = ["Documents", "Images"];
    return (
      <ButtonGroup {...rest} variant={variant}>
        <Input placeholder="Choose file name" />
        <Select
          items={items}
          placeholder="Select file type"
          wrapperClassName="w-50"
        >
          <SelectContent>
            <SelectGroup>
              {items.map((item, index) => {
                return (
                  <SelectOption index={index} key={item}>
                    {item}
                  </SelectOption>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </ButtonGroup>
    );
  },
  args: { selection: undefined },
  argTypes: {
    selection: { table: { disable: true } },
    dividerClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
  },
};

export const WithCombobox: Story = {
  render: ({ variant = "solid", ...rest }) => {
    return (
      <ButtonGroup {...rest} variant={variant} divider={false}>
        <Combobox items={[]} />
        <Tooltip>
          <TooltipContent>Search</TooltipContent>
          <TooltipTrigger>
            <Button aria-label="search" startIcon={<PiMagnifyingGlass />} />
          </TooltipTrigger>
        </Tooltip>
      </ButtonGroup>
    );
  },
  args: { selection: undefined },
  argTypes: {
    selection: { table: { disable: true } },
    dividerClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
  },
};
