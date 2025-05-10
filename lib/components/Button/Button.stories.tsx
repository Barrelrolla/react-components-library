import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { HeartIcon, BookmarkIcon, ThumbIcon } from "@/icons";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    children: { name: "text" },
    color: { control: { type: "select" } },
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
    as: { control: { disable: true } },
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
    return <Button {...rest}>{children}</Button>;
  },
  args: { children: "Button" },
};

export const Variants: Story = {
  render: ({ children, ...rest }) => {
    return (
      <>
        <Button {...rest}>{children}</Button>
        <Button variant="outline" {...rest}>
          {children}
        </Button>
        <Button variant="ghost" {...rest}>
          {children}
        </Button>
      </>
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
      <>
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
      </>
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
      <>
        <Button disabled {...rest}>
          {children}
        </Button>
        <Button loading {...rest}>
          {children}
        </Button>
      </>
    );
  },
  args: {
    children: "Button",
  },
};

export const Icon: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        <Button radius="pill" startIcon={<HeartIcon />} {...rest}></Button>
        <Button
          radius="none"
          variant="outline"
          startIcon={<ThumbIcon />}
          {...rest}
        ></Button>
        <Button
          variant="ghost"
          ghostHover="fill"
          startIcon={<BookmarkIcon />}
          {...rest}
        ></Button>
      </>
    );
  },
};

export const Colors: Story = {
  render: ({ children, ...rest }) => {
    return (
      <>
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
      </>
    );
  },
  args: {
    children: "Button",
  },
};

export const Sizes: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-center gap-2">
          <Button {...rest} startIcon={<HeartIcon />} size="xs">
            Button
          </Button>
          <Button {...rest} startIcon={<HeartIcon />} size="sm">
            Button
          </Button>
          <Button {...rest} size="md">
            <HeartIcon />
            Button
          </Button>
          <Button {...rest} size="lg">
            <HeartIcon />
            Button
          </Button>
          <Button {...rest} size="xl">
            <HeartIcon />
            Button
          </Button>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-2">
          <Button {...rest} startIcon={<HeartIcon />} size="xs"></Button>
          <Button {...rest} startIcon={<HeartIcon />} size="sm"></Button>
          <Button {...rest} startIcon={<HeartIcon />} size="md"></Button>
          <Button {...rest} startIcon={<HeartIcon />} size="lg"></Button>
          <Button {...rest} startIcon={<HeartIcon />} size="xl"></Button>
        </div>
        <div className="flex w-full items-start justify-center gap-2">
          <Button
            {...rest}
            className="btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          >
            responsive
          </Button>
          <Button
            {...rest}
            className="btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl"
            startIcon={<HeartIcon />}
          ></Button>
        </div>
      </div>
    );
  },
  argTypes: {
    size: { if: { arg: "false", eq: "true" } },
  },
};
