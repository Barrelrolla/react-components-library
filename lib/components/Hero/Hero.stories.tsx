import { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";
import { HeroTitle } from "./HeroTitle";
import { HeroText } from "./HeroText";
import { HeroActions } from "./HeroActions";
import { Button } from "../Button";
import { HeroSection } from "./HeroSection";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  argTypes: {
    children: {
      if: { arg: "false", exists: true },
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
            <HeroTitle>Amazing hero title</HeroTitle>
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
          <HeroSection className="">
            <img
              className="hero-image"
              src="https://picsum.photos/1400/500?grayscale"
            />
          </HeroSection>
        </Hero>
      </div>
    );
  },
};
