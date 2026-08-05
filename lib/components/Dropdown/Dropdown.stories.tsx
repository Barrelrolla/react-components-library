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
import {
  availableColors,
  availableMobileSheetPlacements,
  availablePlacements,
} from "@/types";
import { Button } from "../Button";
import { PiGearThin } from "react-icons/pi";

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
    mobileSheetPlacement: {
      options: availableMobileSheetPlacements,
      control: { type: "select" },
    },
    placement: { options: availablePlacements, control: { type: "select" } },
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
            <DropdownListItem disabled>item 2</DropdownListItem>
            <Dropdown placement="right">
              <DropdownTrigger>
                <DropdownListItem>item 3</DropdownListItem>
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
            <DropdownListItem>
              <PiGearThin />
              item 4
            </DropdownListItem>
          </DropdownList>
        </DropdownContent>
      </Dropdown>
    );
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
              <DropdownContent>
                <DropdownTitle>menu</DropdownTitle>
                <DropdownList>
                  <DropdownListItem>item 1</DropdownListItem>
                  <Dropdown>
                    <DropdownTrigger>
                      <DropdownListItem>item 2</DropdownListItem>
                    </DropdownTrigger>
                    <DropdownContent>
                      <DropdownList>
                        <DropdownListItem>nested</DropdownListItem>
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
  },
};
