import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Sidemenu } from "./Sidemenu";
import { availableColors } from "@/types";
import { SidemenuSection } from "./SidemenuSection";
import { SidemenuItem } from "./SidemenuItem";
import { useState } from "react";

const meta: Meta<typeof Sidemenu> = {
  title: "Components/Sidemenu",
  tags: ["autodocs"],
  component: Sidemenu,
  subcomponents: { SidemenuItem, SidemenuSection },
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
    fillOnSelect: {
      control: { type: "boolean" },
      table: { category: "controls" },
    },
    initialActiveIndex: { control: false, table: { category: "docs" } },
    onActiveIndexChange: { control: false, table: { category: "docs" } },
    wrapperClassName: { control: false, table: { category: "docs" } },
    wrapperStyle: { control: false, table: { category: "docs" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sidemenu = canvas.getByText("Sidemenu");
    await expect(sidemenu, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = Array.from(
      { length: 12 },
      (_item, index) => "Item" + ` ${index + 1}`,
    );
    return (
      <div className="w-full sm:w-auto">
        <Sidemenu
          className="max-h-100"
          initialActiveIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
          {...rest}
        >
          <SidemenuSection>
            <SidemenuItem index={0}>Sidemenu</SidemenuItem>
            {items.map((item, index) => {
              return (
                <SidemenuItem key={item} index={index + 1}>
                  {item}
                </SidemenuItem>
              );
            })}
          </SidemenuSection>
        </Sidemenu>
      </div>
    );
  },
};

export const Fill: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sidemenu = canvas.getByText("Sidemenu");
    await expect(sidemenu, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    const items = Array.from(
      { length: 12 },
      (_item, index) => "Item" + ` ${index + 1}`,
    );
    return (
      <div className="w-full sm:w-auto">
        <Sidemenu className="max-h-100" {...rest}>
          <SidemenuSection>
            <SidemenuItem index={0}>Sidemenu</SidemenuItem>
            {items.map((item, index) => {
              return (
                <SidemenuItem key={item} index={index + 1}>
                  {item}
                </SidemenuItem>
              );
            })}
          </SidemenuSection>
        </Sidemenu>
      </div>
    );
  },
  args: {
    fillOnSelect: true,
  },
  argTypes: {
    fillOnSelect: { table: { disable: true } },
    initialActiveIndex: { table: { disable: true } },
    onActiveIndexChange: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    const items = Array.from(
      { length: 3 },
      (_item, index) => "Item" + ` ${index + 1}`,
    );
    return (
      <>
        {availableColors.map((color) => (
          <Sidemenu {...rest} key={color} color={color} className="max-h-100">
            <SidemenuSection>
              {items.map((item, index) => {
                return (
                  <SidemenuItem key={item} index={index}>
                    {item}
                  </SidemenuItem>
                );
              })}
            </SidemenuSection>
          </Sidemenu>
        ))}
      </>
    );
  },
  argTypes: {
    color: { table: { disable: true } },
    initialActiveIndex: { table: { disable: true } },
    onActiveIndexChange: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
  },
};
