import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Card } from "./Card";
import { CardActions } from "./CardActions";
import { CardInteract } from "./CardInteract";
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
    CardInteract,
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
  render: ({ ...rest }) => {
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

export const Clickable: Story = {
  render: ({ ...rest }) => {
    return (
      <Card className="group rounded-containers" {...rest}>
        <CardInteract href="#">
          <CardTitle>Lorem, ipsum dolor.</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!
          </CardText>
        </CardInteract>
      </Card>
    );
  },
};

export const WithImage: Story = {
  render: ({ ...rest }) => {
    return (
      <Card {...rest}>
        <CardSection className="flex-1/3">
          <CardImageContainer>
            <img
              className="card-image"
              src="https://picsum.photos/400/200"
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
    );
  },
};

export const WithClickableImage: Story = {
  render: ({ ...rest }) => {
    return (
      <Card {...rest}>
        <CardSection className="flex-1/3">
          <CardInteract href="#">
            <CardImageContainer>
              <img
                className="card-image"
                src="https://picsum.photos/400/200"
              ></img>
            </CardImageContainer>
          </CardInteract>
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

export const WithClickableBody: Story = {
  render: ({ ...rest }) => {
    return (
      <Card {...rest}>
        <CardInteract href="#">
          <CardSection>
            <CardImageContainer>
              <img
                className="card-image"
                src="https://picsum.photos/400/200"
              ></img>
            </CardImageContainer>
          </CardSection>
          <CardSection>
            <CardTitle>Lorem, ipsum dolor.</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!
            </CardText>
          </CardSection>
        </CardInteract>
        <CardActions>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    );
  },
};

export const WithPaddedImage: Story = {
  render: ({ ...rest }) => {
    return (
      <Card {...rest}>
        <CardSection className="flex-1/3">
          <CardInteract href="#">
            <CardImageContainer padded>
              <img
                className="card-image"
                src="https://picsum.photos/400/200"
              ></img>
            </CardImageContainer>
          </CardInteract>
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
  render: ({ size = "lg", ...rest }) => {
    return (
      <Card vertical={false} size={size} {...rest}>
        <CardSection className="flex-1/3">
          <CardImageContainer>
            <img
              className="card-image"
              src="https://picsum.photos/400/200"
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
    );
  },
  argTypes: {
    vertical: {
      if: { arg: "false", eq: "true" },
    },
  },
};
