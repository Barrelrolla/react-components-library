import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { Sidemenu } from "./Sidemenu";
import { availableColors } from "@/types";
import { Button, ButtonGroup } from "../Button";
import { useIsMobile } from "@/hooks";

const meta: Meta<typeof Sidemenu> = {
  title: "Components/Sidemenu",
  tags: ["autodocs"],
  component: Sidemenu,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    children: { name: "text" },
    color: {
      options: availableColors,
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sidemenu = canvas.getByText("Sidemenu");
    await expect(sidemenu, "renders").toBeTruthy();
  },
  render: () => {
    const isMobile = useIsMobile();
    return (
      <Sidemenu wrapperClassName="w-full sm:w-60">
        <ButtonGroup
          variant="ghost"
          className="w-full"
          vertical={!isMobile}
          divider={isMobile}
        >
          <Button
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            Sidemenu
          </Button>
          <Button
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            item
          </Button>
          <Button
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            item
          </Button>
          <Button
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            item
          </Button>
          <Button
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            item
          </Button>
          <Button
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            item
          </Button>
          <Button
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            item
          </Button>
          <Button
            selected
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            item
          </Button>
          <Button
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            item
          </Button>
          <Button
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            item
          </Button>
          <Button
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            item
          </Button>
          <Button
            wrapperClassName="sm:w-full"
            className="w-full sm:justify-start"
          >
            item
          </Button>
        </ButtonGroup>
        {/* <div>Sidemenu</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div> */}
      </Sidemenu>
    );
  },
  args: {
    children: "sidemenu",
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => (
          <Sidemenu color={color} key={color} {...rest}>
            {color}
          </Sidemenu>
        ))}
      </>
    );
  },
  args: {},
  argTypes: {
    color: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};
