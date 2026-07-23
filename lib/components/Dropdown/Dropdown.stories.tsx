import { Meta, StoryObj } from "@storybook/react";
import { expect, screen, userEvent, within } from "storybook/test";
import { Dropdown } from "./Dropdown";
import { availableColors } from "@/types";
import { DropdownTitle } from "./DropdownTitle";
import { DropdownList } from "./DropdownList";
import { DropdownListItem } from "./DropdownListItem";
import { DropdownTrigger } from "./DropdownTrigger";
import { Button } from "../Button";
import { DropdownContent } from "./DropdownContent";
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
    const trigger = canvas.getByText("click me");
    expect(canvas.queryByText("title")).toBeNull();
    await userEvent.click(trigger);
    const dropdown = screen.getByText("title");
    expect(dropdown, "renders").toBeInTheDocument();
    await userEvent.click(document.body);
    expect(canvas.queryByText("title")).toBeNull();
  },
  render: ({ ...rest }) => {
    return (
      <Dropdown {...rest}>
        <DropdownTrigger>
          <Button>click me</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownTitle>title</DropdownTitle>
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
    const trigger = canvas.getByText("click me");
    expect(canvas.queryByText("title")).toBeNull();
    await userEvent.click(trigger);
    const dropdown = screen.getByText("title");
    expect(dropdown, "renders").toBeInTheDocument();
    await userEvent.click(document.body);
    expect(canvas.queryByText("title")).toBeNull();
  },
  render: ({ ...rest }) => {
    return (
      <Dropdown {...rest}>
        <DropdownTrigger>
          <Button>click me</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownTitle>title</DropdownTitle>
          <DropdownList>
            <DropdownListItem>item 1</DropdownListItem>
            <DropdownListItem>item 2</DropdownListItem>
            <DropdownListItem as={"ul"} className="p-0">
              <Dropdown requireClick={false} placement="right">
                <DropdownTrigger>
                  <DropdownListItem
                    className="flex items-center gap-1"
                    onFocus={() => console.log("blg")}
                  >
                    <span>item 3</span> <PiCaretRight />
                  </DropdownListItem>
                </DropdownTrigger>
                <DropdownContent>
                  <DropdownTitle>title</DropdownTitle>
                  <DropdownList>
                    <DropdownListItem>nested 1</DropdownListItem>
                    <DropdownListItem>nested 2</DropdownListItem>
                    <DropdownListItem>nested 3</DropdownListItem>
                  </DropdownList>
                </DropdownContent>
              </Dropdown>
            </DropdownListItem>
          </DropdownList>
        </DropdownContent>
      </Dropdown>
    );
  },
};
