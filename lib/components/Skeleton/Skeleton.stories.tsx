import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  tags: ["autodocs"],
  component: Skeleton,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const skeleton = canvas.getByTestId("Skeleton");
    await expect(skeleton, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    return <Skeleton data-testid="Skeleton" className="h-8 w-60" {...rest} />;
  },
  args: {},
};
