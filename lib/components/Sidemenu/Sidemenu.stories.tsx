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
  render: () => {
    const [activeIndex, setActiveIndex] = useState(5);
    console.log(activeIndex);
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
  args: {
    children: "sidemenu",
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => (
          <Sidemenu color={color} key={color} {...rest}>
            {color}
          </Sidemenu>
        ))}
      </>
    );
  },
  args: {},
  argTypes: {
    color: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};
