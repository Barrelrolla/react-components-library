import { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";
import { HeroActions } from "./HeroActions";
import { HeroImageSection } from "./HeroImageSection";
import { HeroSection } from "./HeroSection";
import { HeroTitle } from "./HeroTitle";
import { HeroText } from "./HeroText";
import { Button } from "../Button";
import { ComponentType } from "react";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  tags: ["autodocs"],
  component: Hero,
  subcomponents: {
    HeroActions: HeroActions as ComponentType<unknown>,
    HeroImageSection: HeroImageSection as ComponentType<unknown>,
    HeroSection: HeroSection as ComponentType<unknown>,
    HeroTitle: HeroTitle as ComponentType<unknown>,
    HeroText: HeroText as ComponentType<unknown>,
  },
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
          <HeroSection className="max-md:h-1/2 md:w-1/2">
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
          <HeroImageSection className="max-md:h-1/2 md:w-1/2">
            <img
              className="hero-image md:w-[50vw]"
              src="https://picsum.photos/1400/1400"
            />
          </HeroImageSection>
        </Hero>
      </div>
    );
  },
};
