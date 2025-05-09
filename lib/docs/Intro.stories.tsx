import {
  Button,
  Hero,
  HeroActions,
  HeroSection,
  HeroTitle,
} from "@/components";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Intro/Welcome",
};

export default meta;
type Story = StoryObj<Meta>;

export const Welcome: Story = {
  render: () => {
    return (
      <div className="bg-main">
        <Hero textAlign="center" className="h-screen min-h-0">
          <HeroSection>
            <HeroTitle>Welcome to my react components library</HeroTitle>
            <HeroActions>
              <Button as="a" href="./?path=/story/components" variant="outline">
                Components
              </Button>
              <Button as="a" href="./?path=/docs/intro-installation--docs">
                Installation
              </Button>
            </HeroActions>
          </HeroSection>
        </Hero>
      </div>
    );
  },
};
