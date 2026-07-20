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
    labelClasses: { table: { disable: true } },
    wrapperClasses: { table: { disable: true } },
    errorClasses: { table: { disable: true } },
    inputContainerClasses: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
    inputContainerStyle: { table: { disable: true } },
    bgFillOnError: { control: { type: "boolean" } },
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
    return <Input id="WithLabel" {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label",
  },
};

export const WithIcon: Story = {
  render: (props) => {
    return <Input id="WithIcon" {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label",
  },
};

export const WithError: Story = {
  render: (props) => {
    return <Input id="WithError" {...props} />;
  },
  args: {
    startIcon: <PiMagnifyingGlass />,
    placeholder: "Input",
    label: "Label",
    error: "Error",
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
