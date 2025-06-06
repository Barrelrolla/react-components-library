import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { SearchIcon } from "@/icons";
import { Input } from "./Input";

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
    startIcon: { control: { disable: true } },
    endIcon: { control: { disable: true } },
    labelClasses: { control: { disable: true } },
    wrapperClasses: { control: { disable: true } },
    errorClasses: { control: { disable: true } },
    inputContainerClasses: { control: { disable: true } },
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
    startIcon: <SearchIcon />,
    placeholder: "Input",
    label: "Label",
  },
};

export const WithError: Story = {
  render: (props) => {
    return <Input id="WithError" {...props} />;
  },
  args: {
    startIcon: <SearchIcon />,
    placeholder: "Input",
    label: "Label",
    color: "error",
    error: "Error",
  },
};

export const Colors: Story = {
  render: (props) => {
    return (
      <>
        <Input label="main" id="main" color="main" {...props} />
        <Input label="light" id="light" color="light" {...props} />
        <Input label="dark" id="dark" color="dark" {...props} />
        <Input label="primary" id="primary" color="primary" {...props} />
        <Input label="secondary" id="secondary" color="secondary" {...props} />
        <Input label="accent" id="accent" color="accent" {...props} />
        <Input label="info" id="info" color="info" {...props} />
        <Input label="success" id="success" color="success" {...props} />
        <Input label="warning" id="warning" color="warning" {...props} />
        <Input label="error" id="error" color="error" {...props} />
      </>
    );
  },
  args: {
    startIcon: <SearchIcon />,
    placeholder: "Input",
    error: "Error",
  },
  argTypes: {
    color: { if: { arg: "false", eq: true } },
    id: { if: { arg: "false", eq: true } },
    label: { if: { arg: "false", eq: true } },
  },
};
