import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { SearchIcon } from "@/icons";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  tags: ["autodocs"],
  component: InputField,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    id: { if: { arg: "false", eq: true } },
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
    return <InputField data-testid="default" {...props} />;
  },
  args: {
    placeholder: "Input",
    id: "Default",
  },
};

export const WithLabel: Story = {
  render: (props) => {
    return <InputField {...props} />;
  },
  args: {
    placeholder: "Input",
    label: "Label",
    id: "WithLabel",
  },
};

export const WithIcon: Story = {
  render: (props) => {
    return <InputField {...props} />;
  },
  args: {
    startIcon: <SearchIcon />,
    placeholder: "Input",
    label: "Label",
    id: "WithIcon",
  },
};

export const WithError: Story = {
  render: (props) => {
    return <InputField {...props} />;
  },
  args: {
    startIcon: <SearchIcon />,
    placeholder: "Input",
    label: "Label",
    id: "WithError",
    color: "error",
    error: "Error",
  },
};

export const Colors: Story = {
  render: (props) => {
    return (
      <>
        <InputField label="main" id={"main"} color={"main"} {...props} />
        <InputField label="light" id={"light"} color={"light"} {...props} />
        <InputField label="dark" id={"dark"} color={"dark"} {...props} />
        <InputField
          label="primary"
          id={"primary"}
          color={"primary"}
          {...props}
        />
        <InputField
          label="secondary"
          id={"secondary"}
          color={"secondary"}
          {...props}
        />
        <InputField label="accent" id={"accent"} color={"accent"} {...props} />
        <InputField label="info" id={"info"} color={"info"} {...props} />
        <InputField
          label="success"
          id={"success"}
          color={"success"}
          {...props}
        />
        <InputField
          label="warning"
          id={"warning"}
          color={"warning"}
          {...props}
        />
        <InputField label="error" id={"error"} color={"error"} {...props} />
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
