import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { twMerge } from "tailwind-merge";
import { Anchor } from "./Anchor";

const meta: Meta<typeof Anchor> = {
  title: "Components/Anchor",
  component: Anchor,
  argTypes: {
    children: {
      name: "text",
    },
    href: {
      if: { exists: true, global: "true" },
    },
    primaryColor: {
      control: { type: "select" },
    },
    secondaryColor: {
      control: { type: "select" },
    },
    as: { if: { exists: true, global: "true" } },
    ref: { if: { exists: true, global: "true" } },
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
  args: {
    children: "Link",
    href: "#",
  },
};

export const InText: Story = {
  render: ({ classes, ...props }) => {
    return (
      <p
        className={twMerge(
          "bg-white p-2 text-black dark:bg-black dark:text-white",
          classes,
        )}
      >
        Lorem ipsum{" "}
        <Anchor href="#" {...props}>
          dolor
        </Anchor>{" "}
        sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque
        dolores{" "}
        <Anchor href="#" {...props}>
          inventore
        </Anchor>{" "}
        natus molestiae totam temporibus, aperiam voluptates aut excepturi
        possimus praesentium{" "}
        <Anchor href="#" {...props}>
          mollitia
        </Anchor>{" "}
        odio culpa quis!
      </p>
    );
  },
  args: {
    classes: "",
  },
  argTypes: {
    children: { if: { exists: true, global: "true" } },
  },
};
