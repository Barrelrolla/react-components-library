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
    bgFillOnError: { control: { type: "boolean" } },
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
        <Input
          validating={false}
          label="main"
          id="main"
          color="main"
          {...props}
        />
        <Input
          validating={false}
          label="light"
          id="light"
          color="light"
          {...props}
        />
        <Input
          validating={false}
          label="dark"
          id="dark"
          color="dark"
          {...props}
        />
        <Input
          validating={false}
          label="primary"
          id="primary"
          color="primary"
          {...props}
        />
        <Input
          validating={false}
          label="secondary"
          id="secondary"
          color="secondary"
          {...props}
        />
        <Input
          validating={false}
          label="accent"
          id="accent"
          color="accent"
          {...props}
        />
        <Input
          validating={false}
          label="info"
          id="info"
          color="info"
          {...props}
        />
        <Input
          validating={false}
          label="success"
          id="success"
          color="success"
          {...props}
        />
        <Input
          validating={false}
          label="warning"
          id="warning"
          color="warning"
          {...props}
        />
        <Input
          validating={false}
          label="error"
          id="error"
          color="error"
          {...props}
        />
      </>
    );
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    error: "Error",
  },
  argTypes: {
    color: { if: { arg: "false", eq: true } },
    id: { if: { arg: "false", eq: true } },
    label: { if: { arg: "false", eq: true } },
  },
};
