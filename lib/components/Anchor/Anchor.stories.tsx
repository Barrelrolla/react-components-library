import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { availableColors } from "@/types";
import { Anchor } from "./index";

const meta: Meta<typeof Anchor> = {
  title: "Components/Anchor",
  tags: ["autodocs"],
  component: Anchor,
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
      table: { defaultValue: { summary: "main" }, category: "controls" },
    },
    underlined: { table: { category: "controls" } },
    hoverUnderline: { table: { category: "controls" } },
    hoverUnderlineOffset: { table: { category: "controls" } },
    as: { table: { category: "docs" } },
    ref: { table: { category: "docs" } },
    href: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Link");
    await expect(button, "renders").toBeTruthy();
  },
  render: ({ children, ...rest }) => {
    return (
      <Anchor href="#" {...rest}>
        {children}
      </Anchor>
    );
  },
  args: {
    children: "Link",
  },
};

export const InText: Story = {
  render: ({ ...props }) => {
    return (
      <p>
        Lorem ipsum{" "}
        <Anchor underlined href="#" {...props}>
          dolor
        </Anchor>{" "}
        sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque
        dolores{" "}
        <Anchor underlined data-selected href="#" {...props}>
          inventore
        </Anchor>{" "}
        natus molestiae totam temporibus, aperiam voluptates aut excepturi
        possimus praesentium{" "}
        <Anchor underlined href="#" {...props}>
          mollitia
        </Anchor>{" "}
        odio culpa quis!
      </p>
    );
  },

  argTypes: {
    children: { table: { disable: true } },
    as: { table: { disable: true } },
    ref: { table: { disable: true } },
  },
};

export const Colors: Story = {
  render: ({ children, ...rest }) => {
    return (
      <>
        {availableColors.map((color) => (
          <Anchor color={color} key={color} {...rest}>
            {children}
          </Anchor>
        ))}
      </>
    );
  },
  args: {
    children: "Link",
  },
  argTypes: {
    color: { table: { disable: true } },
    as: { table: { disable: true } },
    ref: { table: { disable: true } },
  },
};
