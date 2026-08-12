import { Meta, StoryObj } from "@storybook/react";
import { availableResponsiveSizes } from "@/types";
import { Button } from "../index";
import {
  Hero,
  HeroActions,
  HeroImageSection,
  HeroSection,
  HeroTitle,
  HeroText,
} from "./index";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  tags: ["autodocs"],
  component: Hero,
  subcomponents: {
    HeroActions,
    HeroImageSection,
    HeroSection,
    HeroTitle,
    HeroText,
  },
  argTypes: {
    children: { table: { disable: true } },
    textAlign: {
      control: { type: "inline-radio" },
      table: { category: "controls" },
    },
    actionsAlign: {
      control: { type: "inline-radio" },
      table: { category: "controls" },
    },
    responsiveAt: {
      control: { type: "inline-radio" },
      options: availableResponsiveSizes,
      table: { category: "controls" },
    },
    wrapperClassName: { control: false, table: { category: "docs" } },
    wrapperStyle: { control: false, table: { category: "docs" } },
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
              alt="placeholder image"
            />
          </HeroImageSection>
        </Hero>
      </div>
    );
  },
  argTypes: {
    wrapperClassName: { table: { disable: true } },
    wrapperStyle: { table: { disable: true } },
  },
};
