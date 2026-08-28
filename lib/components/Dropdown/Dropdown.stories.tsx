import { Meta, StoryObj } from "@storybook/react";
import { expect, screen, userEvent, within } from "storybook/test";
import { PiGearThin } from "react-icons/pi";
import {
  availableColors,
  availableMobileSheetPlacements,
  availablePlacements,
} from "@/types";
import { Button } from "../index";
import {
  Dropdown,
  DropdownList,
  DropdownTitle,
  DropdownListItem,
  DropdownContent,
  DropdownTrigger,
} from "./index";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  tags: ["autodocs"],
  component: Dropdown,
  subcomponents: {
    DropdownContent,
    DropdownList,
    DropdownListItem,
    DropdownTitle,
    DropdownTrigger,
  },
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    color: {
      options: availableColors,
      control: { type: "select" },
      table: { category: "controls" },
    },
    mobileSheetPlacement: {
      options: availableMobileSheetPlacements,
      control: { type: "select" },
      table: { category: "controls" },
    },
    placement: {
      options: availablePlacements,
      control: { type: "select" },
      table: { category: "controls" },
    },
    returnFocus: {
      control: { type: "boolean" },
      table: { category: "controls" },
    },
    hasArrow: { table: { category: "controls" } },
    strategy: { table: { category: "controls" } },
    requireClick: { table: { category: "controls" } },
    disabled: { table: { category: "controls" } },
    mobileSheet: { table: { category: "controls" } },
    isOpen: { control: false, table: { category: "docs" } },
    onOpenChange: { control: false, table: { category: "docs" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("Open menu");
    expect(canvas.queryByText("Menu")).toBeNull();
    await userEvent.click(trigger);
    const dropdown = screen.getByText("Menu");
    expect(dropdown, "renders").toBeInTheDocument();
    await userEvent.click(document.body);
    expect(canvas.queryByText("Menu")).toBeNull();
  },
  render: ({ ...rest }) => {
    return (
      <Dropdown {...rest}>
        <DropdownTrigger>
          <Button>Open menu</Button>
        </DropdownTrigger>
        <DropdownContent closeButtonAriaLabel="close">
          <DropdownTitle>Menu</DropdownTitle>
          <DropdownList>
            <DropdownListItem>Item 1</DropdownListItem>
            <DropdownListItem>Item 2</DropdownListItem>
            <DropdownListItem>Item 3</DropdownListItem>
          </DropdownList>
        </DropdownContent>
      </Dropdown>
    );
  },
};

export const Nested: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText("Open menu");
    expect(canvas.queryByText("Menu")).toBeNull();
    await userEvent.click(trigger);
    const dropdown = screen.getByText("Menu");
    expect(dropdown, "renders").toBeInTheDocument();
    await userEvent.click(document.body);
    expect(canvas.queryByText("Menu")).toBeNull();
  },
  render: ({ ...rest }) => {
    return (
      <Dropdown {...rest}>
        <DropdownTrigger>
          <Button>Open menu</Button>
        </DropdownTrigger>
        <DropdownContent closeButtonAriaLabel="close">
          <DropdownTitle>Menu</DropdownTitle>
          <DropdownList>
            <DropdownListItem>Item 1</DropdownListItem>
            <DropdownListItem disabled>Item 2</DropdownListItem>
            <Dropdown placement="right">
              <DropdownTrigger>
                <DropdownListItem>Item 3</DropdownListItem>
              </DropdownTrigger>
              <DropdownContent closeButtonAriaLabel="close">
                <DropdownTitle>Sub menu</DropdownTitle>
                <DropdownList>
                  <DropdownListItem>Nested 1</DropdownListItem>
                  <DropdownListItem>Nested 2</DropdownListItem>
                  <DropdownListItem>Nested 3</DropdownListItem>
                </DropdownList>
              </DropdownContent>
            </Dropdown>
            <DropdownListItem className="justify-start">
              <PiGearThin />
              Item 4
            </DropdownListItem>
          </DropdownList>
        </DropdownContent>
      </Dropdown>
    );
  },
  argTypes: {
    isOpen: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => {
          return (
            <Dropdown key={color} color={color} {...rest}>
              <DropdownTrigger>
                <Button color={color}>{color}</Button>
              </DropdownTrigger>
              <DropdownContent closeButtonAriaLabel="close">
                <DropdownTitle>Menu</DropdownTitle>
                <DropdownList>
                  <DropdownListItem>Item 1</DropdownListItem>
                  <Dropdown>
                    <DropdownTrigger>
                      <DropdownListItem>Item 2</DropdownListItem>
                    </DropdownTrigger>
                    <DropdownContent closeButtonAriaLabel="close">
                      <DropdownList>
                        <DropdownListItem>Nested</DropdownListItem>
                      </DropdownList>
                    </DropdownContent>
                  </Dropdown>
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          );
        })}
      </>
    );
  },
  argTypes: {
    color: { table: { disable: true } },
    isOpen: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
  },
};
