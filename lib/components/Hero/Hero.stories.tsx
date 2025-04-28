import { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";
import { HeroTitle } from "./HeroTitle";
import { HeroText } from "./HeroText";
import { HeroActions } from "./HeroActions";
import { HeroSection } from "./HeroSection";
import { Button } from "../Button";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  tags: ["autodocs"],
  component: Hero,
  subcomponents: { HeroSection, HeroTitle, HeroText, HeroActions },
  argTypes: {
    children: {
      if: { arg: "false", exists: true },
    },
    textAlign: {
      control: { type: "inline-radio" },
    },
    actionsAlign: {
      control: { type: "inline-radio" },
    },
    responsiveAt: {
      control: { type: "inline-radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  render: ({ ...props }) => {
    return (
      <div className="bg-main">
        <Hero {...props}>
          <HeroSection>
            <HeroTitle>Lorem ipsum dolor sit amet.</HeroTitle>
            <HeroText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              ex, corporis rem dolores culpa quo corrupti doloremque minima
              excepturi molestiae.
            </HeroText>
            <HeroActions>
              <Button>action</Button>
              <Button>action</Button>
            </HeroActions>
          </HeroSection>
        </Hero>
      </div>
    );
  },
};

export const WithImage: Story = {
  render: ({ ...props }) => {
    return (
      <div className="bg-main">
        <Hero {...props}>
          <HeroSection>
            <HeroTitle>Lorem ipsum dolor sit amet.</HeroTitle>
            <HeroText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              ex, corporis rem dolores culpa quo corrupti doloremque minima
              excepturi molestiae.
            </HeroText>
            <HeroActions>
              <Button>action</Button>
              <Button>action</Button>
            </HeroActions>
          </HeroSection>
          <HeroSection>
            <img
              className="hero-image"
              src="https://picsum.photos/1400/1400?grayscale"
            />
          </HeroSection>
        </Hero>
      </div>
    );
  },
};
