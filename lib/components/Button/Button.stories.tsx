import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { ComputerIcon, MoonIcon, SunIcon } from "@/icons";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { name: "text" },
    color: { control: { type: "inline-radio" } },
    variant: { control: { type: "inline-radio" } },
    ghostHover: {
      control: { type: "inline-radio" },
      if: { arg: "variant", eq: "ghost" },
    },
    size: { control: { type: "inline-radio" } },
    radius: { control: { type: "inline-radio" } },
    loadingPosition: { control: { type: "inline-radio" } },
    startIcon: { if: { arg: "false", exists: true } },
    endIcon: { if: { arg: "false", exists: true } },
    ref: { if: { arg: "false", exists: true } },
    as: { if: { arg: "false", exists: true } },
    wrapperClasses: { if: { arg: "false", exists: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    await expect(button, "renders").toBeTruthy();
  },
  render: ({ children, ...rest }) => {
    return (
      <div className="bg-main flex min-h-100 gap-4 px-10 py-20">
        <Button {...rest}>{children}</Button>
      </div>
    );
  },
  args: { children: "Button" },
};

export const Variants: Story = {
  render: ({ children, ...rest }) => {
    return (
      <div className="bg-main flex min-h-100 gap-4 px-10 py-20">
        <Button {...rest}>{children}</Button>
        <Button variant="outline" {...rest}>
          {children}
        </Button>
        <Button variant="ghost" {...rest}>
          {children}
        </Button>
      </div>
    );
  },
  args: { children: "Button" },
  argTypes: {
    variant: { if: { arg: "false", eq: "true" } },
    ghostHover: { if: { arg: "false", eq: "true" } },
  },
};

export const Ghost: Story = {
  render: ({ children, ...rest }) => {
    return (
      <div className="bg-main flex min-h-100 gap-4 px-10 py-20">
        <Button variant="ghost" {...rest}>
          {children}
        </Button>
        <Button variant="ghost" ghostHover="fill" {...rest}>
          {children}
        </Button>
        <Button variant="ghost" ghostHover="outline" {...rest}>
          {children}
        </Button>
        <Button variant="ghost" ghostHover="contrasting" {...rest}>
          {children}
        </Button>
      </div>
    );
  },
  args: { children: "Button" },
  argTypes: {
    variant: { if: { arg: "false", eq: "true" } },
    ghostHover: { if: { arg: "false", eq: "true" } },
  },
};

export const Disabled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getAllByText("Button")[0];
    const wrapper = button.parentElement;
    await expect(
      wrapper?.classList.contains("cursor-not-allowed"),
      "shows not allowed cursor on hover",
    ).toBeTruthy();
  },
  render: ({ children, ...rest }) => {
    return (
      <div className="bg-main flex min-h-100 gap-4 px-10 py-20">
        <Button disabled {...rest}>
          {children}
        </Button>
        <Button loading {...rest}>
          {children}
        </Button>
      </div>
    );
  },
  args: {
    children: "Button",
  },
};

export const Icon: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="bg-main flex min-h-100 gap-10 px-10 py-20">
        <Button radius="full" startIcon={<ComputerIcon />} {...rest}></Button>
        <Button
          radius="none"
          variant="outline"
          startIcon={<SunIcon />}
          {...rest}
        ></Button>
        <Button
          variant="ghost"
          ghostHover="fill"
          startIcon={<MoonIcon />}
          {...rest}
        ></Button>
      </div>
    );
  },
};

export const Colors: Story = {
  render: ({ children, ...rest }) => {
    return (
      <div className="bg-main flex flex-wrap items-end justify-end gap-2 px-10 py-20">
        <Button color="main" {...rest}>
          {children}
        </Button>
        <Button color="light" {...rest}>
          {children}
        </Button>
        <Button color="dark" {...rest}>
          {children}
        </Button>
        <Button color="primary" {...rest}>
          {children}
        </Button>
        <Button color="secondary" {...rest}>
          {children}
        </Button>
        <Button color="accent" {...rest}>
          {children}
        </Button>
        <Button color="info" {...rest}>
          {children}
        </Button>
        <Button color="success" {...rest}>
          {children}
        </Button>
        <Button color="warning" {...rest}>
          {children}
        </Button>
        <Button color="error" {...rest}>
          {children}
        </Button>
      </div>
    );
  },
  args: {
    children: "Button",
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div className="bg-main flex flex-col gap-2 px-2 py-20">
        <div className="flex flex-wrap items-end justify-center gap-2">
          <Button startIcon={<ComputerIcon />} size="xs" color="primary">
            Button
          </Button>
          <Button startIcon={<ComputerIcon />} size="sm" color="primary">
            Button
          </Button>
          <Button size="md" color="primary">
            <ComputerIcon />
            Button
          </Button>
          <Button size="lg" color="primary">
            <ComputerIcon />
            Button
          </Button>
          <Button size="xl" color="primary">
            <ComputerIcon />
            Button
          </Button>
        </div>
        <div className="flex flex-wrap items-end justify-center gap-2">
          <Button
            startIcon={<ComputerIcon />}
            size="xs"
            color="primary"
          ></Button>
          <Button
            startIcon={<ComputerIcon />}
            size="sm"
            color="primary"
          ></Button>
          <Button
            startIcon={<ComputerIcon />}
            size="md"
            color="primary"
          ></Button>
          <Button
            startIcon={<ComputerIcon />}
            size="lg"
            color="primary"
          ></Button>
          <Button
            startIcon={<ComputerIcon />}
            size="xl"
            color="primary"
          ></Button>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-2">
          <Button disabled size="xs" color="primary">
            <ComputerIcon />
            Button
          </Button>
          <Button disabled size="sm" color="primary">
            <ComputerIcon />
            Button
          </Button>
          <Button disabled size="md" color="primary">
            <ComputerIcon />
            Button
          </Button>
          <Button disabled size="lg" color="primary">
            <ComputerIcon />
            Button
          </Button>
          <Button disabled size="xl" color="primary">
            <ComputerIcon />
            Button
          </Button>
        </div>
        <div className="flex w-full items-start justify-center gap-2">
          <Button className="btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            responsive
          </Button>
          <Button
            className="btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl"
            startIcon={<ComputerIcon />}
          ></Button>
        </div>
      </div>
    );
  },
};
