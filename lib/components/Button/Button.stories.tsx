import { ComputerIcon, MoonIcon } from "@/icons/icons";
import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import { within } from "@testing-library/react";
import { useState } from "react";

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
    await expect(button).toBeTruthy();
  },
  args: {
    children: "Button",
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
    return (
      <div className="bg-white p-20 dark:bg-black">
        <div className="flex flex-wrap items-center gap-1">
          <Button
            loading
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
            className="flex min-w-52 gap-2 bg-red-700 text-yellow-100 hover:bg-red-600 dark:bg-orange-300"
          >
            <span>Moon</span>
          </Button>
          <Button
            variant="clear"
            className="hover:text-primary-400 p-0 hover:outline-none"
          >
            clear
          </Button>
          <Button as={"a"} href="/">
            link
          </Button>
        </div>
        <Button
          // whileHover={{ scale: 1.2 }}
          // whileTap={{ scale: 0.8 }}
          disableScale
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
  // args: {
  //   children: "Custom",
  //   whileHover: { scale: 1.2 },
  //   whileTap: { scale: 0.9 },
  //   contrasting: false,
  //   className: "bg-red-700 hover:bg-red-600 text-yellow-100",
  // },
};
