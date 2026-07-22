import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { Tooltip } from "./Tooltip";
import { availableColors, availablePlacements } from "@/types";
import { Button } from "../Button";
import TooltipTrigger from "./TooltipTrigger";
import TooltipContent from "./TooltipContent";

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
    children: { name: "text" },
    color: {
      options: availableColors,
      control: { type: "select" },
    },
    placement: { control: { type: "select" }, options: availablePlacements },
    isLabel: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const trigger = canvas.getByText("hover me");
    expect(screen.queryByText("tooltip")).toBeNull();
    await userEvent.hover(trigger);
    expect(await screen.findByText("tooltip")).toBeInTheDocument();
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByText("tooltip")).toBeNull();
    });
  },
  render: ({ disabled, children, ...rest }) => {
    return (
      <Tooltip {...rest}>
        <TooltipTrigger>
          <Button disabled={disabled}>hover me</Button>
        </TooltipTrigger>
        <TooltipContent>{children}</TooltipContent>
      </Tooltip>
    );
  },
  args: {
    children: "tooltip",
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="flex flex-wrap gap-2">
        {availableColors.map((color) => (
          <Tooltip color={color} key={color} {...rest}>
            <TooltipTrigger>
              <Button>hover me</Button>
            </TooltipTrigger>
            <TooltipContent>{color}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    );
  },
  args: {},
  argTypes: {
    color: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};
