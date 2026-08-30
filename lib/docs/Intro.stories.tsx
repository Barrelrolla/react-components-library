import LinkTo from "@storybook/addon-links/react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Hero,
  HeroActions,
  HeroSection,
  HeroTitle,
} from "@/components";

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
            <HeroTitle>Welcome to Barrelrolla UI</HeroTitle>
            <HeroActions>
              <Button
                variant="outline"
                as={LinkTo}
                kind="Components/Anchor"
                story="docs"
              >
                Components
              </Button>
              <Button as={LinkTo} kind="Intro/Installation" story="docs">
                Installation
              </Button>
            </HeroActions>
          </HeroSection>
        </Hero>
      </div>
    );
  },
};
