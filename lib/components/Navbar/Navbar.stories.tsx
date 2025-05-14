import { ComponentProps, useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { Navbar } from "./Navbar";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarLink } from "./NavbarLink";
import { NavbarToggle } from "./NavbarToggle";
import { Button } from "../Button";
import { GitHubIcon, LinkedInIcon, RocketIcon } from "@/icons";
import {
  Hero,
  HeroActions,
  HeroImageSection,
  HeroSection,
  HeroText,
  HeroTitle,
} from "../Hero";
import {
  Footer,
  FooterBrand,
  FooterDivider,
  FooterFullSection,
  FooterLink,
  FooterLinkGroup,
  FooterLinksSection,
  FooterLinksTitle,
} from "../Footer";
import { cssColorProps } from "@/util";

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
            <RocketIcon /> Test
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

export const PageDemo: Story = {
  render: ({ color, selected: storySelect, ...rest }) => {
    const links = ["link 1", "link 2", "link 3", "link 4", "link 5", "link 6"];
    const [selected, setSelected] = useState(storySelect);

    useEffect(() => {
      setSelected(storySelect);
    }, [storySelect]);

    return (
      <div
        style={cssColorProps(color)}
        className="bg-(--bg-color) pt-14 md:pt-0"
      >
        <Navbar color={color} {...rest}>
          <NavbarToggle />
          <NavbarBrand href="#">
            <RocketIcon /> Test
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
              size="sm"
              className="w-full md:w-auto"
            >
              test
            </Button>
          </NavbarCollapse>
        </Navbar>
        <Hero color={color}>
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
              className="hero-image md:w-[50svw]"
              src="https://picsum.photos/1400/1400"
            />
          </HeroImageSection>
        </Hero>
        <Footer decorations color={color}>
          <FooterBrand href="#">
            <RocketIcon /> Test
          </FooterBrand>
          <FooterLinksSection>
            <FooterLinkGroup>
              <FooterLinksTitle>long section name 1</FooterLinksTitle>
              <FooterLink href="#">long link text 1</FooterLink>
              <FooterLink href="#">long link text 2</FooterLink>
              <FooterLink href="#">long link text 3</FooterLink>
            </FooterLinkGroup>
            <FooterLinkGroup>
              <FooterLinksTitle>long section name 2</FooterLinksTitle>
              <FooterLink href="#">long link text 1</FooterLink>
              <FooterLink href="#">long link text 2</FooterLink>
              <FooterLink href="#">long link text 3</FooterLink>
            </FooterLinkGroup>
            <FooterLinkGroup>
              <FooterLinksTitle>long section name 3</FooterLinksTitle>
              <FooterLink href="#">long link text 1</FooterLink>
              <FooterLink href="#">long link text 2</FooterLink>
              <FooterLink href="#">long link text 3</FooterLink>
            </FooterLinkGroup>
          </FooterLinksSection>
          <FooterDivider />
          <FooterFullSection>
            <span>copyright stuff</span>
            <div className="flex gap-4 text-xl">
              <FooterLink href="#">
                <GitHubIcon />
              </FooterLink>
              <FooterLink href="#">
                <LinkedInIcon />
              </FooterLink>
            </div>
          </FooterFullSection>
        </Footer>
      </div>
    );
  },
};
