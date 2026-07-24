import { Meta, StoryObj } from "@storybook/react";
import { expect, screen, userEvent, within } from "storybook/test";
import {
  Dropdown,
  DropdownList,
  DropdownTitle,
  DropdownListItem,
  DropdownContent,
  DropdownTrigger,
} from "./index";
import { availableColors } from "@/types";
import { Button } from "../Button";
import { PiCaretRight } from "react-icons/pi";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  tags: ["autodocs"],
  component: Dropdown,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    color: {
      options: availableColors,
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("open menu");
    expect(canvas.queryByText("menu")).toBeNull();
    await userEvent.click(trigger);
    const dropdown = screen.getByText("menu");
    expect(dropdown, "renders").toBeInTheDocument();
    await userEvent.click(document.body);
    expect(canvas.queryByText("menu")).toBeNull();
  },
  render: ({ ...rest }) => {
    return (
      <Dropdown {...rest}>
        <DropdownTrigger>
          <Button>open menu</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownTitle>menu</DropdownTitle>
          <DropdownList>
            <DropdownListItem>item 1</DropdownListItem>
            <DropdownListItem>item 2</DropdownListItem>
            <DropdownListItem>item 3</DropdownListItem>
          </DropdownList>
        </DropdownContent>
      </Dropdown>
    );
  },
};

export const Nested: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("open menu");
    expect(canvas.queryByText("menu")).toBeNull();
    await userEvent.click(trigger);
    const dropdown = screen.getByText("menu");
    expect(dropdown, "renders").toBeInTheDocument();
    await userEvent.click(document.body);
    expect(canvas.queryByText("menu")).toBeNull();
  },
  render: ({ ...rest }) => {
    return (
      <Dropdown {...rest}>
        <DropdownTrigger>
          <Button>open menu</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownTitle>menu</DropdownTitle>
          <DropdownList>
            <DropdownListItem>item 1</DropdownListItem>
            <DropdownListItem>item 2</DropdownListItem>
            <Dropdown placement="right">
              <DropdownTrigger>
                <DropdownListItem className="flex items-center gap-1 pr-0">
                  <span>item 3</span> <PiCaretRight />
                </DropdownListItem>
              </DropdownTrigger>
              <DropdownContent>
                <DropdownTitle>sub menu</DropdownTitle>
                <DropdownList>
                  <DropdownListItem>nested 1</DropdownListItem>
                  <DropdownListItem>nested 2</DropdownListItem>
                  <DropdownListItem>nested 3</DropdownListItem>
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </DropdownList>
        </DropdownContent>
      </Dropdown>
    );
  },
};
