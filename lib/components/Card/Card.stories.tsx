import { Meta, StoryObj } from "@storybook/react";
import { ComponentType } from "react";
import { Button } from "../index";
import {
  Card,
  CardActions,
  CardInteract,
  CardImageContainer,
  CardTitle,
  CardText,
  CardSection,
} from "./index";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  tags: ["autodocs"],
  component: Card,
  subcomponents: {
    CardActions: CardActions as ComponentType<unknown>,
    CardInteract: CardInteract as ComponentType<unknown>,
    CardImageContainer: CardImageContainer as ComponentType<unknown>,
    CardTitle: CardTitle as ComponentType<unknown>,
    CardText: CardText as ComponentType<unknown>,
    CardSection: CardSection as ComponentType<unknown>,
  },
  decorators: (Story) => (
    <div className="storybookContainer">
      <Story />
    </div>
  ),
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      table: { category: "controls" },
    },
    horizontal: { table: { category: "controls" } },
    containerClassName: {
      control: false,
      table: { category: "docs" },
    },
    containerStyle: { control: false, table: { category: "docs" } },
    className: { control: false, table: { category: "docs" } },
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
      <Card {...rest}>
        <CardInteract href="#">
          <CardTitle>Lorem, ipsum dolor.</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, id!
          </CardText>
        </CardInteract>
      </Card>
    );
  },
  argTypes: {
    containerClassName: { table: { disable: true } },
    containerStyle: { table: { disable: true } },
    className: { table: { disable: true } },
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
              alt="placeholder image"
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
    containerClassName: { table: { disable: true } },
    containerStyle: { table: { disable: true } },
    className: { table: { disable: true } },
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
                alt="placeholder image"
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
  argTypes: {
    containerClassName: { table: { disable: true } },
    containerStyle: { table: { disable: true } },
    className: { table: { disable: true } },
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
                alt="placeholder image"
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
  argTypes: {
    containerClassName: { table: { disable: true } },
    containerStyle: { table: { disable: true } },
    className: { table: { disable: true } },
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
                alt="placeholder image"
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
  argTypes: {
    containerClassName: { table: { disable: true } },
    containerStyle: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export const Horizontal: Story = {
  render: ({ size = "lg", ...rest }) => {
    return (
      <Card horizontal size={size} {...rest}>
        <CardSection className="flex-1/3">
          <CardImageContainer>
            <img
              className="card-image"
              src="https://picsum.photos/400/200"
              alt="placeholder image"
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
    horizontal: { table: { disable: true } },
    containerClassName: { table: { disable: true } },
    containerStyle: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};
