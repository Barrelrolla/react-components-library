import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { PiMagnifyingGlass } from "react-icons/pi";
import { Input } from "./Input";
import { availableColors } from "@/types";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  tags: ["autodocs"],
  component: Input,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    color: { control: { type: "select" }, options: availableColors },
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    labelClassName: { table: { disable: true } },
    wrapperClassName: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
    inputContainerClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
    as: { table: { disable: true } },
    inputContainerStyle: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("default");
    await expect(button, "renders").toBeTruthy();
  },
  render: (props) => {
    return <Input data-testid="default" {...props} />;
  },
  args: {
    placeholder: "Input",
  },
};

export const WithLabel: Story = {
  render: (props) => {
    return <Input {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label",
  },
};

export const WithIcon: Story = {
  render: (props) => {
    return <Input {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label",
  },
};

export const WithError: Story = {
  render: (props) => {
    return <Input {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label",
    error: "Error",
  },
};

export const Textarea: Story = {
  render: (props) => {
    return <Input as="textarea" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label",
  },
};

export const Number: Story = {
  render: (props) => {
    return <Input type="number" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label",
  },
};

export const Disabled: Story = {
  render: (props) => {
    return <Input disabled {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label",
  },
};

export const Colors: Story = {
  render: (props) => {
    return (
      <>
        {availableColors.map((color) => {
          return <Input {...props} key={color} label={color} color={color} />;
        })}
      </>
    );
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
  },
  argTypes: {
    color: { table: { disable: true } },
    id: { table: { disable: true } },
    label: { table: { disable: true } },
  },
};
