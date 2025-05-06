import { ComponentProps, useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { Navbar } from "./Navbar";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarLink } from "./NavbarLink";
import { NavbarToggle } from "./NavbarToggle";
import { Button } from "../Button";
import { ComputerIcon } from "@/icons";
import { Hero, HeroActions, HeroSection, HeroText, HeroTitle } from "../Hero";

type Props = ComponentProps<typeof Navbar> & {
  selected: number | undefined;
};

const meta: Meta<Props> = {
  title: "Components/Navbar",
  component: Navbar,
  subcomponents: { NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink },
  tags: ["autodocs"],
  args: { selected: undefined },
  argTypes: {
    color: { control: { type: "select" } },
    selected: {
      control: {
        type: "inline-radio",
        min: 0,
        max: 6,
        labels: { 0: "1", 1: "2", 2: "3", 3: "4", 4: "5", 5: "6", 6: "none" },
      },
      options: [0, 1, 2, 3, 4, 5, 6],
    },
    collapseAt: { control: { type: "inline-radio" } },
    position: { control: { type: "inline-radio" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByText("Test");
    await expect(navbar, "renders").toBeTruthy();
  },
  render: ({ fixed = false, selected: storySelect, ...rest }) => {
    const links = ["link 1", "link 2", "link 3", "link 4", "link 5", "link 6"];
    const [selected, setSelected] = useState(storySelect);

    useEffect(() => {
      setSelected(storySelect);
    }, [storySelect]);

    return (
      <div className="bg-main">
        <Navbar fixed={fixed} {...rest}>
          <NavbarToggle />
          <NavbarBrand href="#">
            <ComputerIcon /> Test
          </NavbarBrand>
          <div role="presentation" className="w-10 sm:hidden"></div>
          <NavbarCollapse>
            {links.map((link, index) => (
              <NavbarLink
                key={link}
                href="#"
                selected={selected === index}
                onClick={() => {
                  setSelected(index);
                }}
              >
                {link}
              </NavbarLink>
            ))}
          </NavbarCollapse>
        </Navbar>
      </div>
    );
  },
};

export const WithHero: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByText("Test");
    await expect(navbar, "renders").toBeTruthy();
  },
  render: ({ selected: storySelect, ...rest }) => {
    const links = ["link 1", "link 2", "link 3", "link 4", "link 5", "link 6"];
    const [selected, setSelected] = useState(storySelect);

    useEffect(() => {
      setSelected(storySelect);
    }, [storySelect]);

    return (
      <div className="bg-main mt-16 md:mt-0">
        <Navbar {...rest}>
          <NavbarToggle />
          <NavbarBrand href="#">
            <ComputerIcon /> Test
          </NavbarBrand>
          <div role="presentation" className="w-10 sm:hidden"></div>
          <NavbarCollapse>
            {links.map((link, index) => (
              <NavbarLink
                key={link}
                href="#"
                selected={selected === index}
                onClick={() => {
                  setSelected(index);
                }}
              >
                {link}
              </NavbarLink>
            ))}
            <Button
              variant="outline"
              color="primary"
              className="w-full md:w-auto"
            >
              test
            </Button>
          </NavbarCollapse>
        </Navbar>
        <Hero>
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
