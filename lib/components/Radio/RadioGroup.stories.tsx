import { Meta, StoryObj } from "@storybook/react";
import { availableColors } from "@/types";
import { Radio, RadioGroup } from "./index";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  tags: ["autodocs"],
  component: RadioGroup,
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
    name: { control: false, table: { category: "controls" } },
    size: { table: { category: "controls" } },
    title: { table: { category: "controls" } },
    labelStyle: { control: false, table: { category: "docs" } },
    defaultChecked: { control: false, table: { category: "docs" } },
    wrapperClassName: { control: false, table: { category: "docs" } },
    labelClassName: { control: false, table: { category: "docs" } },
    legendClassName: { control: false, table: { category: "docs" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...rest }) => {
    return (
      <RadioGroup className="flex gap-4" {...rest}>
        <Radio>One</Radio>
        <Radio>Two</Radio>
        <Radio>Three</Radio>
      </RadioGroup>
    );
  },
  args: {
    size: 20,
    name: "radio",
    title: "Radio group",
  },
};
