import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { availableColors, availablePlacements } from "@/types";
import { PopoverContent, Popover, PopoverTrigger } from "./index";
import { Button } from "../Button";
import { Card, CardActions, CardText, CardTitle } from "../Card";
import { ThemeContextProvider } from "@/contexts";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";
const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  tags: ["autodocs"],
  component: Popover,
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    children: { table: { disable: true } },
    color: {
      options: availableColors,
      control: { type: "select" },
    },
    placement: { control: { type: "select" }, options: availablePlacements },
    role: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const screen = within(document.body);
    const trigger = canvas.getByText("hover me");
    expect(screen.queryByText("Lorem, ipsum dolor.")).toBeNull();
    await userEvent.hover(trigger);
    expect(await screen.findByText("Lorem, ipsum dolor.")).toBeInTheDocument();
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByText("Lorem, ipsum dolor.")).toBeNull();
    });
  },
  render: ({ disabled, ...rest }) => {
    return (
      <Popover disabled={disabled} {...rest}>
        <PopoverTrigger>
          <Button disabled={disabled}>hover me</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Card>
            <CardTitle>Lorem, ipsum dolor.</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!
            </CardText>
            <CardActions>
              <Button>Learn more</Button>
            </CardActions>
          </Card>
        </PopoverContent>
      </Popover>
    );
  },
};

export const Nested: Story = {
  render: ({ disabled, ...rest }) => {
    return (
      <ThemeContextProvider>
        <Popover disabled={disabled} {...rest}>
          <PopoverTrigger>
            <Button disabled={disabled}>hover me</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Card>
              <CardTitle>Lorem, ipsum dolor.</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                id!
              </CardText>
              <CardActions>
                <Popover placement="left" {...rest}>
                  <PopoverTrigger>
                    <Button disabled={disabled}>hover me</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Card>
                      <CardTitle>Lorem, ipsum dolor.</CardTitle>
                      <CardText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero, id!
                      </CardText>
                      <CardActions>
                        <Tooltip>
                          <TooltipTrigger>
                            <Button>Learn more</Button>
                          </TooltipTrigger>
                          <TooltipContent>Tooltip</TooltipContent>
                        </Tooltip>
                      </CardActions>
                    </Card>
                  </PopoverContent>
                </Popover>
              </CardActions>
            </Card>
          </PopoverContent>
        </Popover>
      </ThemeContextProvider>
    );
  },
};

export const Colors: Story = {
  render: ({ ...rest }) => {
    return (
      <>
        {availableColors.map((color) => (
          <Popover color={color} key={color} {...rest}>
            <PopoverTrigger>
              <Button color={color}>{color}</Button>
            </PopoverTrigger>
            <PopoverContent>
              <Card color={color}>
                <CardTitle>Lorem, ipsum dolor.</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  id!
                </CardText>
                <CardActions>
                  <Button>Learn more</Button>
                </CardActions>
              </Card>
            </PopoverContent>
          </Popover>
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
