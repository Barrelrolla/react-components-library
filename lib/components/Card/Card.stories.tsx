import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Card } from "./Card";
import { CardActions } from "./CardActions";
import { CardImageContainer } from "./CardImageContainer";
import { CardTitle } from "./CardTitle";
import { CardText } from "./CardText";
import { CardSection } from "./CardSection";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  tags: ["autodocs"],
  component: Card,
  subcomponents: {
    CardActions,
    CardImageContainer,
    CardTitle,
    CardText,
    CardSection,
  },
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    size: { control: { type: "inline-radio" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ children, ...rest }) => {
    return (
      <Card {...rest}>
        <CardTitle>Lorem, ipsum dolor.</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!
        </CardText>
        <CardActions>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    );
  },
};

export const WithImage: Story = {
  render: ({ children, ...rest }) => {
    return (
      <Card {...rest}>
        <CardSection className="flex-1/3">
          <img
            className="card-image"
            src="https://picsum.photos/400/200?grayscale"
          ></img>
        </CardSection>
        <CardSection className="flex-2/3">
          <CardTitle>Lorem, ipsum dolor.</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!
          </CardText>
          <CardActions>
            <Button>Learn more</Button>
          </CardActions>
        </CardSection>
      </Card>
    );
  },
};

export const Horizontal: Story = {
  render: ({ size = "lg", children, ...rest }) => {
    return (
      <Card vertical={false} size={size} {...rest}>
        <CardSection className="flex-1/3">
          <img
            className="card-image"
            src="https://picsum.photos/400/200?grayscale"
          ></img>
        </CardSection>
        <CardSection className="flex-2/3">
          <CardTitle>Lorem, ipsum dolor.</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!
          </CardText>
          <CardActions>
            <Button>Learn more</Button>
          </CardActions>
        </CardSection>
      </Card>
    );
  },
  argTypes: {
    vertical: {
      if: { arg: "false", eq: "true" },
    },
  },
};

export const WithImageContainer: Story = {
  render: ({ children, ...rest }) => {
    return (
      <div className="flex w-full items-center gap-4">
        <Card {...rest}>
          <CardSection className="flex-1/3">
            <CardImageContainer>
              <img
                className="card-image"
                src="https://picsum.photos/200/100?grayscale"
              ></img>
            </CardImageContainer>
          </CardSection>
          <CardSection className="flex-2/3">
            <CardTitle>Lorem, ipsum dolor.</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!
            </CardText>
            <CardActions>
              <Button>Learn more</Button>
            </CardActions>
          </CardSection>
        </Card>
      </div>
    );
  },
};
