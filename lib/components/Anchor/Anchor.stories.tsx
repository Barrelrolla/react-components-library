import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Anchor } from "./Anchor";

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
    children: { name: "text" },
    color: { control: { type: "select" } },
    href: { if: { arg: "false", exists: true } },
    ref: { if: { arg: "false", exists: true } },
    as: { control: { disable: true } },
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
