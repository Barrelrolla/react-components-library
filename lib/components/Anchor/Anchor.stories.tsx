import { twMerge } from "tailwind-merge";
import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Anchor } from "./Anchor";

const meta: Meta<typeof Anchor> = {
  title: "Components/Anchor",
  component: Anchor,
  argTypes: {
    children: { name: "text" },
    color: { control: { type: "inline-radio" } },
    href: { if: { arg: "false", exists: true } },
    as: { if: { arg: "false", exists: true } },
    ref: { if: { arg: "false", exists: true } },
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
  render: (props) => {
    return (
      <div className="bg-main min-h-100 px-10 py-20">
        <Anchor href="#" {...props}>
          {props.children}
        </Anchor>
      </div>
    );
  },
  args: {
    children: "Link",
    href: "#",
  },
};

export const InText: Story = {
  render: ({ classes, ...props }) => {
    return (
      <p className={twMerge("bg-main text-main-content p-2", classes)}>
        Lorem ipsum{" "}
        <Anchor href="#" {...props}>
          dolor
        </Anchor>{" "}
        sit amet consectetur adipisicing elit. Velit vel iste veniam ut cumque
        dolores{" "}
        <Anchor data-selected href="#" {...props}>
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
  argTypes: {
    children: { if: { exists: true, global: "true" } },
  },
};
