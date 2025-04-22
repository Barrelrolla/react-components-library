import { useRef, useState } from "react";
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
      "is highlighted on hover",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:hover:bg-stone-200"),
      "is highlighted on hover in dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("focus-visible:bg-stone-900"),
      "is highlighted on keyboard enter",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:focus-visible:bg-stone-200"),
      "is highlighted on keyboard enter in dark mode",
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
      "outline is same color as highlighted button in dark mode",
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
    await expect(
      button.classList.contains("hover:scale-[102%]"),
      "scales on hover",
    ).toBeTruthy();
    await expect(
      button.classList.contains("active:scale-[98%]"),
      "scales on press",
    ).toBeTruthy();
  },
  render: ({ children, ...rest }) => {
    return (
      <div className="bg-main min-h-100 px-10 py-20">
        <Button {...rest}>{children}</Button>
      </div>
    );
  },
  args: { children: "Button" },
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
      button.classList.contains("border-stone-950"),
      "has black border",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:border-stone-50"),
      "has white border in dark mode",
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
      button.classList.contains("focus-visible:bg-stone-950"),
      "is highlighted on kayboard enter",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:focus-visible:bg-stone-50"),
      "is highlighted on keyboard enter in dark mode",
    ).toBeTruthy();
    await expect(
      button.classList.contains("focus-visible:outline-2"),
      "has outline when focused by keyboard",
    ).toBeTruthy();
    await expect(
      button.classList.contains("outline-stone-950"),
      "outline is same color as highlighted button",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:outline-stone-50"),
      "outline is same color as highlighted button in dark mode",
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
      button.classList.contains("active:border-stone-900"),
      "border has active color",
    ).toBeTruthy();
    await expect(
      button.classList.contains("dark:active:border-stone-200"),
      "border has active color in dark mode",
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("None");
    await expect(button, "renders").toBeTruthy();
    await expect(
      button.classList.contains("bg-transparent"),
      "has transparent bg",
    ).toBeTruthy();
  },
  render: () => {
    return (
      <div className="bg-base flex flex-wrap gap-2 p-2">
        <Button variant="ghost" ghostHover="none">
          None
        </Button>
        <Button variant="ghost" ghostHover="outline">
          Outline
        </Button>
        <Button variant="ghost" ghostHover="fill">
          Fill
        </Button>
        <Button variant="ghost" ghostHover="contrasting">
          Contrasting
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
          <Button radius="full" variant="outline">
            Button
          </Button>
          <Button radius="none" variant="ghost">
            Button
          </Button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button disabled>Button</Button>
          <Button disabled radius="full" variant="outline">
            Button
          </Button>
          <Button disabled radius="none" variant="ghost">
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
          <Button startIcon={<SunIcon />} />
          <Button startIcon={<MoonIcon />} radius="full" variant="outline" />
          <Button startIcon={<ComputerIcon />} radius="none" variant="ghost" />
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button disabled startIcon={<SunIcon />} />
          <Button
            disabled
            startIcon={<MoonIcon />}
            radius="full"
            variant="outline"
          />
          <Button
            disabled
            startIcon={<ComputerIcon />}
            radius="none"
            variant="ghost"
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
          <Button color="accent">Button</Button>
          <Button color="accent" radius="full" variant="outline">
            Button
          </Button>
          <Button color="accent" radius="none" variant="ghost">
            Button
          </Button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button color="accent" disabled>
            Button
          </Button>
          <Button color="accent" disabled variant="outline" radius="full">
            Button
          </Button>
          <Button color="accent" disabled variant="ghost">
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
          <Button color="secondary">Button</Button>
          <Button color="secondary" radius="full" variant="outline">
            Button
          </Button>
          <Button color="secondary" radius="none" variant="ghost">
            Button
          </Button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          <Button disabled color="secondary">
            Button
          </Button>
          <Button disabled color="secondary" radius="full" variant="outline">
            Button
          </Button>
          <Button disabled color="secondary" radius="none" variant="ghost">
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
        <div className="flex w-full items-start justify-center gap-2 bg-rose-300">
          <Button className="btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            responsive
          </Button>
          <Button
            className="icon-xs sm:icon-sm md:icon-md lg:icon-lg xl:icon-xl"
            startIcon={<ComputerIcon />}
          ></Button>
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
      <div className="bg-main p-20">
        <div className="flex flex-wrap items-center gap-1">
          <Button
            ref={buttonRef}
            loading={loading}
            loadingPosition="end"
            startIcon={<ComputerIcon />}
            endIcon={<ComputerIcon />}
          ></Button>
          <Button
            scaling={false}
            size="xs"
            onClick={ToggleLoading}
            className="flex gap-2 bg-red-700 text-yellow-100 hover:bg-red-600 dark:bg-orange-300"
          >
            <MoonIcon />
            <span>Moon</span>
          </Button>
          <Button
            startIcon={<ComputerIcon />}
            loading={loading}
            scaling={false}
            size="xl"
            className="flex min-w-52 gap-2 bg-red-700 text-5xl text-yellow-100 hover:bg-red-600 active:bg-red-500 dark:bg-orange-300"
          >
            <span>BIG</span>
          </Button>
          <Button
            variant="ghost"
            scaling={false}
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
        <Button className="bg-primary-600 mt-4 justify-self-end px-20 py-10 font-serif text-2xl font-bold text-emerald-400">
          new button
        </Button>
      </div>
    );
  },
};
