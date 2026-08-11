import { Meta, StoryObj } from "@storybook/react";
import { availableColors, availableResponsiveSizes } from "@/types";
import { Divider } from "./index";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  tags: ["autodocs"],
  component: Divider,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    color: {
      control: { type: "select" },
      options: availableColors,
      table: { category: "controls" },
    },
    width: { table: { category: "controls" } },
    vertical: { table: { category: "controls" } },
    useBgColor: { table: { category: "controls" } },
    responsiveAt: {
      control: { type: "inline-radio" },
      options: availableResponsiveSizes,
      table: { category: "controls" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="h-5 w-full">
        <Divider {...rest} />
      </div>
    );
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="flex w-full flex-col">
        {availableColors.map((color) => {
          return (
            <div key={color} className="h-5 w-full">
              <Divider color={color} {...rest} />
            </div>
          );
        })}
      </div>
    );
  },
  argTypes: {
    color: { table: { disable: true } },
  },
};
