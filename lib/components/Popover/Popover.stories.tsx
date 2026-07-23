import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { availableColors, availablePlacements } from "@/types";
import { PopoverContent, Popover, PopoverTrigger } from "./index";
import { Button } from "../Button";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  tags: ["autodocs"],
  component: Popover,
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
    role: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const trigger = canvas.getByText("hover me");
    expect(screen.queryByText("popover")).toBeNull();
    await userEvent.hover(trigger);
    expect(await screen.findByText("popover")).toBeInTheDocument();
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByText("popover")).toBeNull();
    });
  },
  render: ({ disabled, children, ...rest }) => {
    return (
      <Popover disabled={disabled} {...rest}>
        <PopoverTrigger>
          <Button disabled={disabled}>hover me</Button>
        </PopoverTrigger>
        <PopoverContent>{children}</PopoverContent>
      </Popover>
    );
  },
  args: {
    children: "popover",
  },
};
