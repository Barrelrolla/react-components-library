import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { availableColors, availablePlacements } from "@/types";
import { Button } from "../Button";
import { Tooltip, TooltipTrigger, TooltipContent } from "./";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  tags: ["autodocs"],
  component: Tooltip,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    children: { name: "text", table: { category: "storybook" } },
    color: {
      options: availableColors,
      control: { type: "select" },
      table: { category: "controls" },
    },
    placement: {
      control: { type: "select" },
      options: availablePlacements,
      table: { category: "controls" },
    },
    isOpen: { table: { category: "controls" } },
    strategy: { table: { category: "controls" } },
    delay: { table: { category: "controls" } },
    hasArrow: { table: { category: "controls" } },
    disabled: { table: { category: "controls" } },
    isLabel: { table: { category: "controls" } },
    onOpenChange: { control: false, table: { category: "docs" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const trigger = canvas.getByText("Hover me");
    expect(screen.queryByText("Tooltip")).toBeNull();
    await userEvent.hover(trigger);
    expect(await screen.findByText("Tooltip")).toBeInTheDocument();
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByText("Tooltip")).toBeNull();
    });
  },
  render: ({ disabled, children, ...rest }) => {
    return (
      <Tooltip {...rest}>
        <TooltipTrigger>
          <Button disabled={disabled}>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>{children}</TooltipContent>
      </Tooltip>
    );
  },
  args: {
    children: "Tooltip",
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => (
          <Tooltip color={color} key={color} {...rest}>
            <TooltipTrigger>
              <Button color={color}>{color}</Button>
            </TooltipTrigger>
            <TooltipContent>{color}</TooltipContent>
          </Tooltip>
        ))}
      </>
    );
  },
  argTypes: {
    color: { table: { disable: true } },
    children: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
  },
};
