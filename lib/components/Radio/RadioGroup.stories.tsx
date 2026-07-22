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
    },
    labelColor: {
      options: availableColors,
      control: { type: "select" },
    },
    labelStyle: { table: { disable: true } },
    defaultChecked: { table: { disable: true } },
    wrapperClasses: { table: { disable: true } },
    labelClasses: { table: { disable: true } },
    name: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...rest }) => {
    return (
      <RadioGroup className="flex gap-4" {...rest}>
        <Radio>one</Radio>
        <Radio>two</Radio>
        <Radio>three</Radio>
      </RadioGroup>
    );
  },
  args: {
    size: 20,
    name: "radio",
    title: "radio group",
  },
};
