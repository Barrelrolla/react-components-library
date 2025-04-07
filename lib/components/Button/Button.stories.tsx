import { useRef, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import { within } from "@testing-library/react";
import { Button } from "./Button";
import { ComputerIcon, MoonIcon } from "@/icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    await expect(button, "renders").toBeTruthy();
    await expect(
      button.classList.contains("bg-stone-950"),
      "has black bg",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:bg-stone-50"),
      "has white bg on dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("hover:bg-stone-900"),
      "is highlighted on hover ",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:hover:bg-stone-200"),
      "is highlighted on hover in dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("focus-visible:outline-2"),
      "has outline when focused by keyboard",
    ).toBeTruthy();
    await expect(
      button.classList.contains("hover:outline-2"),
      "has no outline when hovered by pointer",
    ).toBeFalsy();
    await expect(
      button.classList.contains("outline-stone-900"),
      "outline is same color as highlighted button",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:outline-stone-200"),
      "outline is same color as highlighted button in dark mode ",
    ).toBeTruthy();
    await expect(
      button.classList.contains("active:bg-stone-800"),
      "has active color",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:active:bg-stone-300"),
      "has active color in dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("active:outline-stone-800"),
      "outline has active color",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:active:outline-stone-300"),
      "outline has active color in dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("text-stone-50"),
      "text is white",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:text-stone-950"),
      "text is black in dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("cursor-pointer"),
      "cursor is pointer",
    ).toBeTruthy();
  },
  args: {
    children: "Button",
  },
  argTypes: {
    clearButtonHover: {
      if: { arg: "variant", eq: "clear" },
    },
    icon: {
      if: { arg: "false", exists: true },
    },
    endIcon: {
      if: { arg: "false", exists: true },
    },
    ref: {
      if: { arg: "false", exists: true },
    },
    as: {
      control: { type: "text" },
    },
  },
};

export const Outline: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    await expect(button, "renders").toBeTruthy();
    await expect(
      button.classList.contains("bg-transparent"),
      "has transparent bg",
    ).toBeTruthy();
    await expect(
      button.classList.contains("hover:bg-stone-950"),
      "is highlighted on hover",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:hover:bg-stone-50"),
      "is highlighted on hover in dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("focus-visible:outline-2"),
      "has outline when focused by keyboard",
    ).toBeTruthy();
    await expect(
      button.classList.contains("hover:outline-2"),
      "has no outline when hovered by pointer",
    ).toBeFalsy();
    await expect(
      button.classList.contains("outline-stone-950"),
      "outline is same color as highlighted button",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:outline-stone-50"),
      "outline is same color as highlighted button in dark mode ",
    ).toBeTruthy();
    await expect(
      button.classList.contains("active:bg-stone-900"),
      "has active color",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:active:bg-stone-200"),
      "has active color in dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("active:outline-stone-900"),
      "outline has active color",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:active:outline-stone-200"),
      "outline has active color in dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("text-stone-950"),
      "text is white",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:text-stone-50"),
      "text is black in dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("hover:text-stone-50"),
      "text is black on hover",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:hover:text-stone-950"),
      "text is white on hover in dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("cursor-pointer"),
      "cursor is pointer",
    ).toBeTruthy();
  },
  args: {
    children: "Button",
    variant: "outline",
  },
  argTypes: {
    clearButtonHover: {
      if: { arg: "variant", eq: "clear" },
    },
    icon: {
      if: { arg: "false", exists: true },
    },
    endIcon: {
      if: { arg: "false", exists: true },
    },
    ref: {
      if: { arg: "false", exists: true },
    },
    as: {
      control: { type: "text" },
    },
  },
};

export const Clear: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-2 bg-white p-2 dark:bg-black">
        <Button variant="clear" clearButtonHover="none">
          Button
        </Button>
        <Button variant="clear" clearButtonHover="outline">
          Button
        </Button>
        <Button variant="clear" clearButtonHover="fill">
          Button
        </Button>
        <Button variant="clear" clearButtonHover="contrasting">
          Button
        </Button>
      </div>
    );
  },
};

export const Disabled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    const wrapper = button.parentElement;
    await expect(wrapper, "has a wrapper").toBeTruthy();
    await expect(
      wrapper?.classList.contains("cursor-not-allowed"),
      "shows not allowed cursor on hover",
    ).toBeTruthy();
    await expect(
      button.classList.contains("opacity-50"),
      "has 50% opacity",
    ).toBeTruthy();
    await expect(
      button.classList.contains("saturate-50"),
      "has 50% saturation",
    ).toBeTruthy();
    await expect(
      button.classList.contains("pointer-events-none"),
      "has no pointer events",
    ).toBeTruthy();
  },
  args: {
    children: "Button",
    disabled: true,
  },
};

export const Loading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    const wrapper = button.parentElement;
    await expect(
      wrapper?.classList.contains("cursor-not-allowed"),
      "shows not allowed cursor on hover",
    ).toBeTruthy();
    await expect(
      button.classList.contains("opacity-50"),
      "has 50% opacity",
    ).toBeTruthy();
    await expect(
      button.classList.contains("saturate-50"),
      "has 50% saturation",
    ).toBeTruthy();
    await expect(
      button.classList.contains("pointer-events-none"),
      "has no pointer events",
    ).toBeTruthy();
  },
  args: {
    children: "Button",
    loading: true,
  },
  argTypes: {
    clearButtonHover: {
      if: { arg: "variant", eq: "clear" },
    },
    icon: {
      if: { arg: "false", exists: true },
    },
    endIcon: {
      if: { arg: "false", exists: true },
    },
    ref: {
      if: { arg: "false", exists: true },
    },
    as: {
      control: { type: "text" },
    },
  },
};

export const Basic: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-12 bg-white p-20 dark:bg-black">
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button>Button</Button>
          <Button radius="pill" variant="outline">
            Button
          </Button>
          <Button radius="rect" variant="clear">
            Button
          </Button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button disabled>Button</Button>
          <Button disabled radius="pill" variant="outline">
            Button
          </Button>
          <Button disabled radius="rect" variant="clear">
            Button
          </Button>
        </div>
      </div>
    );
  },
};

export const Icon: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getAllByRole("button")[0];
    await expect(
      button.classList.contains("p-2"),
      "icon buttons should have the same padding all around",
    ).toBeTruthy();
  },
  render: () => {
    return (
      <div className="flex flex-col gap-12 bg-white p-20 dark:bg-black">
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button icon={<ComputerIcon />} />
          <Button icon={<ComputerIcon />} radius="pill" variant="outline" />
          <Button icon={<ComputerIcon />} radius="rect" variant="clear" />
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button disabled icon={<ComputerIcon />} />
          <Button
            disabled
            icon={<ComputerIcon />}
            radius="pill"
            variant="outline"
          />
          <Button
            disabled
            icon={<ComputerIcon />}
            radius="rect"
            variant="clear"
          />
        </div>
      </div>
    );
  },
};

export const Primary: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-12 bg-white p-20 dark:bg-black">
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button primaryColor="primary" contrasting={false}>
            Button
          </Button>
          <Button
            primaryColor="primary"
            radius="pill"
            contrasting={false}
            variant="outline"
          >
            Button
          </Button>
          <Button
            primaryColor="primary"
            radius="rect"
            contrasting={false}
            variant="clear"
          >
            Button
          </Button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button primaryColor="primary" contrasting={false} disabled>
            Button
          </Button>
          <Button
            primaryColor="primary"
            contrasting={false}
            disabled
            variant="outline"
            radius="pill"
          >
            Button
          </Button>
          <Button
            primaryColor="primary"
            contrasting={false}
            disabled
            variant="clear"
          >
            Button
          </Button>
        </div>
      </div>
    );
  },
};

export const Mixed: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-12 bg-white p-20 dark:bg-black">
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button primaryColor="secondary" secondaryColor="accent">
            Button
          </Button>
          <Button
            primaryColor="secondary"
            secondaryColor="accent"
            radius="pill"
            variant="outline"
          >
            Button
          </Button>
          <Button
            primaryColor="secondary"
            secondaryColor="accent"
            radius="rect"
            variant="clear"
          >
            Button
          </Button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button disabled primaryColor="secondary" secondaryColor="accent">
            Button
          </Button>
          <Button
            disabled
            primaryColor="secondary"
            secondaryColor="accent"
            radius="pill"
            variant="outline"
          >
            Button
          </Button>
          <Button
            disabled
            primaryColor="secondary"
            secondaryColor="accent"
            radius="rect"
            variant="clear"
          >
            Button
          </Button>
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-2 bg-white p-20 dark:bg-black">
        <div className="flex flex-wrap items-end justify-center gap-2">
          <Button
            icon={<ComputerIcon size="xs" />}
            size="xs"
            primaryColor="primary"
            secondaryColor="secondary"
          >
            Button
          </Button>
          <Button
            icon={<ComputerIcon size="sm" />}
            size="sm"
            primaryColor="primary"
            secondaryColor="secondary"
          >
            Button
          </Button>
          <Button size="md" primaryColor="primary" secondaryColor="secondary">
            <ComputerIcon size="md" />
            Button
          </Button>
          <Button size="lg" primaryColor="primary" secondaryColor="secondary">
            <ComputerIcon size="lg" />
            Button
          </Button>
          <Button size="xl" primaryColor="primary" secondaryColor="secondary">
            <ComputerIcon size="xl" />
            Button
          </Button>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-2">
          <Button
            disabled
            size="xs"
            primaryColor="primary"
            secondaryColor="secondary"
          >
            <ComputerIcon size="xs" />
            Button
          </Button>
          <Button
            disabled
            size="sm"
            primaryColor="primary"
            secondaryColor="secondary"
          >
            <ComputerIcon size="sm" />
            Button
          </Button>
          <Button
            disabled
            size="md"
            primaryColor="primary"
            secondaryColor="secondary"
          >
            <ComputerIcon size="md" />
            Button
          </Button>
          <Button
            disabled
            size="lg"
            primaryColor="primary"
            secondaryColor="secondary"
          >
            <ComputerIcon size="lg" />
            Button
          </Button>
          <Button
            disabled
            size="xl"
            primaryColor="primary"
            secondaryColor="secondary"
          >
            <ComputerIcon size="xl" />
            Button
          </Button>
        </div>
      </div>
    );
  },
};

export const Custom: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    function ToggleLoading() {
      setLoading((prevState) => !prevState);
    }
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <div className="bg-white p-20 dark:bg-black">
        <div className="flex flex-wrap items-center gap-1">
          <Button
            ref={buttonRef}
            loading={loading}
            loadingPosition="end"
            icon={<ComputerIcon />}
            endIcon={<ComputerIcon />}
          ></Button>
          <Button
            disableScale
            size="xs"
            onClick={ToggleLoading}
            className="flex gap-2 bg-red-700 text-yellow-100 hover:bg-red-600 dark:bg-orange-300"
          >
            <MoonIcon size={"xs"} />
            <span>Moon</span>
          </Button>
          <Button
            icon={<MoonIcon size="xl" />}
            loading={loading}
            disableScale
            size="xl"
            className="flex min-w-52 gap-2 bg-red-700 text-yellow-100 hover:bg-red-600 active:bg-red-500 dark:bg-orange-300"
          >
            <span>Moon</span>
          </Button>
          <Button
            variant="clear"
            disableHoverHighlight
            disableScale
            className="hover:text-primary-400 p-0 hover:outline-none"
          >
            clear
          </Button>
          <Button as={"a"} href="/">
            link
          </Button>
        </div>
        <Button
          size="xl"
          className="flex gap-2 bg-red-700 text-yellow-100 hover:bg-red-600 dark:bg-orange-300"
        >
          <MoonIcon />
          <span>Moon</span>
        </Button>
        <Button
          className="bg-primary-600 mt-4 justify-self-end px-20 py-10 font-serif text-2xl font-bold text-emerald-400"
          contrasting={false}
        >
          new button
        </Button>
      </div>
    );
  },
};
