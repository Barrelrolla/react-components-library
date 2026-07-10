import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { HeartIcon, BookmarkIcon, ThumbIcon } from "@/icons";
import { Button } from "./Button";
import { availableColors, availableSizes } from "@/types";

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
    color: { control: { type: "select" }, options: availableColors },
    variant: { control: { type: "inline-radio" } },
    ghostHover: {
      control: { type: "inline-radio" },
      if: { arg: "variant", eq: "ghost" },
    },
    size: { control: { type: "inline-radio" }, options: availableSizes },
    radius: { control: { type: "inline-radio" } },
    loadingPosition: { control: { type: "inline-radio" } },
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    ref: { table: { disable: true } },
    as: { table: { disable: true } },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await expect(buttons[1]).toHaveClass("btn-outline");
    await expect(buttons[2]).toHaveClass("btn-ghost-none");
  },
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
    variant: { table: { disable: true } },
    ghostHover: { table: { disable: true } },
  },
};

export const Ghost: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(4);
    await expect(buttons[0]).toHaveClass("btn-ghost-none");
    await expect(buttons[1]).toHaveClass("btn-ghost-fill");
    await expect(buttons[2]).toHaveClass("btn-ghost-outline");
    await expect(buttons[3]).toHaveClass("btn-ghost-contrasting");
  },
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
    variant: { table: { disable: true } },
    ghostHover: { table: { disable: true } },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
    await expect(
      canvas.queryByText("Button", { selector: "button" }),
    ).toBeNull();
  },
  render: ({ ...rest }) => {
    return (
      <>
        <Button
          aria-label="like"
          radius="pill"
          startIcon={<HeartIcon />}
          {...rest}
        ></Button>
        <Button
          aria-label="thumbsup"
          radius="none"
          variant="outline"
          startIcon={<ThumbIcon />}
          {...rest}
        ></Button>
        <Button
          aria-label="bookmark"
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(10);
  },
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
  argTypes: {
    color: { table: { disable: true } },
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
          <Button
            aria-label="like"
            {...rest}
            startIcon={<HeartIcon />}
            size="xs"
          ></Button>
          <Button
            aria-label="like"
            {...rest}
            startIcon={<HeartIcon />}
            size="sm"
          ></Button>
          <Button
            aria-label="like"
            {...rest}
            startIcon={<HeartIcon />}
            size="md"
          ></Button>
          <Button
            aria-label="like"
            {...rest}
            startIcon={<HeartIcon />}
            size="lg"
          ></Button>
          <Button
            aria-label="like"
            {...rest}
            startIcon={<HeartIcon />}
            size="xl"
          ></Button>
        </div>
        <div className="flex w-full items-start justify-center gap-2">
          <Button
            {...rest}
            className="btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          >
            responsive
          </Button>
          <Button
            aria-label="like"
            {...rest}
            className="btn-icon-xs sm:btn-icon-sm md:btn-icon-md lg:btn-icon-lg xl:btn-icon-xl"
            startIcon={<HeartIcon />}
          ></Button>
        </div>
      </div>
    );
  },
  argTypes: {
    size: { table: { disable: true } },
  },
};
