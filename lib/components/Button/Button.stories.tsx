import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { PiHeart, PiBookmark, PiThumbsUp } from "react-icons/pi";
import { Button } from "./Button";
import { availableColors, availableSizes } from "@/types";
import { FloatingDelayGroupContextProvider } from "@/contexts/FloatingDelayGroup";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tooltip";
import { availableButtonVariants } from "./buttonTypes";

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
  render: ({ ...rest }) => {
    return (
      <>
        {availableButtonVariants.map((variant) => {
          return (
            <Button {...rest} variant={variant} key={variant}>
              {variant}
            </Button>
          );
        })}
      </>
    );
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
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
        <FloatingDelayGroupContextProvider>
          <Tooltip isLabel>
            <TooltipTrigger>
              <Button
                aria-label="love"
                radius="pill"
                startIcon={<PiHeart />}
                {...rest}
              ></Button>
            </TooltipTrigger>
            <TooltipContent>Love</TooltipContent>
          </Tooltip>
          <Tooltip isLabel>
            <TooltipTrigger>
              <Button
                aria-label="like"
                radius="none"
                variant="outline"
                startIcon={<PiThumbsUp />}
                {...rest}
              ></Button>
            </TooltipTrigger>
            <TooltipContent>Like</TooltipContent>
          </Tooltip>
          <Tooltip isLabel>
            <TooltipTrigger>
              <Button
                aria-label="save"
                variant="ghost"
                startIcon={<PiBookmark />}
                {...rest}
              ></Button>
            </TooltipTrigger>
            <TooltipContent>Save</TooltipContent>
          </Tooltip>
        </FloatingDelayGroupContextProvider>
      </>
    );
  },
};

export const Sizes: Story = {
  render: ({ ...rest }) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-center gap-2">
          {availableSizes.map((size) => {
            return (
              <Button {...rest} startIcon={<PiHeart />} key={size} size={size}>
                Button
              </Button>
            );
          })}
        </div>
        <div className="flex flex-wrap items-start justify-center gap-2">
          {availableSizes.map((size) => {
            return (
              <Button
                aria-label="like"
                {...rest}
                startIcon={<PiHeart />}
                key={size}
                size={size}
              ></Button>
            );
          })}
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
            startIcon={<PiHeart />}
          ></Button>
        </div>
      </div>
    );
  },
  argTypes: {
    size: { table: { disable: true } },
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => {
          return (
            <div className="flex flex-col gap-2" key={color}>
              {availableButtonVariants.map((variant) => {
                return (
                  <Button
                    {...rest}
                    key={`${variant}-${color}`}
                    color={color}
                    variant={variant}
                  >
                    {color}
                  </Button>
                );
              })}
            </div>
          );
        })}
      </>
    );
  },
  argTypes: {
    children: { table: { disable: true } },
    color: { table: { disable: true } },
  },
};
