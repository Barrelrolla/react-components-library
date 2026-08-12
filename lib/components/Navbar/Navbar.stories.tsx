import { ComponentProps, useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "storybook/test";
import {
  PiCaretDown,
  PiGithubLogo,
  PiLinkedinLogo,
  PiRocket,
} from "react-icons/pi";
import { availableColors, availableResponsiveSizes } from "@/types";
import {
  Button,
  Dropdown,
  DropdownContent,
  DropdownList,
  DropdownListItem,
  DropdownTrigger,
  Footer,
  FooterBrand,
  FooterDivider,
  FooterFullSection,
  FooterIconsContainer,
  FooterLink,
  FooterLinkGroup,
  FooterLinksSection,
  FooterLinksTitle,
  Hero,
  HeroActions,
  HeroImageSection,
  HeroSection,
  HeroText,
  HeroTitle,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../index";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarMenu,
  NavbarToggle,
} from "./index";

type Props = ComponentProps<typeof Navbar> & {
  selected: number | undefined;
};

const meta: Meta<Props> = {
  title: "Components/Navbar",
  component: Navbar,
  subcomponents: {
    NavbarBrand,
    NavbarToggle,
    NavbarCollapse,
    NavbarLink,
  },
  tags: ["autodocs"],
  args: { selected: undefined },
  argTypes: {
    selected: {
      control: {
        type: "inline-radio",
        min: 0,
        max: 6,
        labels: { 0: "1", 1: "2", 2: "3", 3: "4", 4: "5", 5: "6", 6: "none" },
      },
      options: [0, 1, 2, 3, 4, 5, 6],
      table: { category: "storybook" },
    },
    color: {
      control: { type: "select" },
      options: availableColors,
      table: { category: "controls" },
    },
    collapseAt: {
      control: { type: "inline-radio" },
      options: availableResponsiveSizes,
      table: { category: "controls" },
    },
    position: {
      control: { type: "inline-radio" },
      table: { category: "controls" },
    },
    hasShadow: { table: { category: "controls" } },
    fixed: { table: { category: "controls" } },
    glass: { table: { category: "controls" } },
    backdropClassName: { control: false, table: { category: "docs" } },
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
        <Navbar fixed={fixed} {...rest} className={fixed ? "" : "relative"}>
          <NavbarToggle />
          <NavbarBrand href="#">
            <PiRocket /> Test
          </NavbarBrand>
          <div role="presentation" className="w-10 sm:hidden"></div>
          <NavbarCollapse>
            <NavbarMenu>
              <Dropdown returnFocus={false} mobileSheetPlacement="left">
                <DropdownTrigger>
                  <NavbarLink as="button" className="w-full">
                    <span>
                      Dropdown <PiCaretDown className="inline-block" />
                    </span>
                  </NavbarLink>
                </DropdownTrigger>
                <DropdownContent>
                  <DropdownList>
                    <DropdownListItem>item</DropdownListItem>
                  </DropdownList>
                </DropdownContent>
              </Dropdown>
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
            </NavbarMenu>
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
      <div className="bg-main pt-14 md:pt-0">
        <Navbar color={color} {...rest}>
          <NavbarToggle />
          <NavbarBrand href="#">
            <PiRocket /> Test
          </NavbarBrand>
          <div role="presentation" className="w-10 sm:hidden"></div>
          <NavbarCollapse>
            <NavbarMenu>
              <Dropdown
                color={color}
                returnFocus={false}
                strategy="fixed"
                mobileSheetPlacement="left"
              >
                <DropdownTrigger>
                  <NavbarLink as="button" className="w-full">
                    <span>
                      Dropdown <PiCaretDown className="inline-block" />
                    </span>
                  </NavbarLink>
                </DropdownTrigger>
                <DropdownContent>
                  <DropdownList>
                    <DropdownListItem>item</DropdownListItem>
                  </DropdownList>
                </DropdownContent>
              </Dropdown>
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
            </NavbarMenu>
            <Tooltip color={color} strategy="fixed" placement="left">
              <TooltipTrigger>
                <Button
                  color={color}
                  variant="outline"
                  size="sm"
                  className="w-full md:w-auto"
                >
                  test
                </Button>
              </TooltipTrigger>
              <TooltipContent>tooltip</TooltipContent>
            </Tooltip>
          </NavbarCollapse>
        </Navbar>
        <Hero>
          <HeroSection className="max-md:h-1/2 md:w-1/2">
            <HeroTitle>Lorem ipsum dolor sit amet.</HeroTitle>
            <HeroText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              ex, corporis rem dolores culpa quo corrupti doloremque minima
              excepturi molestiae.
            </HeroText>
            <HeroActions>
              <Button color={color}>action</Button>
              <Button color={color}>action</Button>
            </HeroActions>
          </HeroSection>
          <HeroImageSection className="max-md:h-1/2 md:w-1/2">
            <img
              className="hero-image md:w-[50svw]"
              src="https://picsum.photos/1400/1400"
              alt="placeholder image"
            />
          </HeroImageSection>
        </Hero>
        <Footer decorations color={color}>
          <FooterBrand href="#">
            <PiRocket /> Test
          </FooterBrand>
          <FooterLinksSection>
            <FooterLinkGroup>
              <FooterLinksTitle as="h2">long section name 1</FooterLinksTitle>
              <FooterLink href="#">long link text 1</FooterLink>
              <FooterLink href="#">long link text 2</FooterLink>
              <FooterLink href="#">long link text 3</FooterLink>
            </FooterLinkGroup>
            <FooterLinkGroup>
              <FooterLinksTitle as="h2">long section name 2</FooterLinksTitle>
              <FooterLink href="#">long link text 1</FooterLink>
              <FooterLink href="#">long link text 2</FooterLink>
              <FooterLink href="#">long link text 3</FooterLink>
            </FooterLinkGroup>
            <FooterLinkGroup>
              <FooterLinksTitle as="h2">long section name 3</FooterLinksTitle>
              <FooterLink href="#">long link text 1</FooterLink>
              <FooterLink href="#">long link text 2</FooterLink>
              <FooterLink href="#">long link text 3</FooterLink>
            </FooterLinkGroup>
          </FooterLinksSection>
          <FooterDivider />
          <FooterFullSection>
            <span>copyright stuff</span>
            <FooterIconsContainer>
              <Tooltip isLabel color={color}>
                <TooltipTrigger>
                  <FooterLink href="#">
                    <PiGithubLogo aria-label="github logo" />
                  </FooterLink>
                </TooltipTrigger>
                <TooltipContent>Github</TooltipContent>
              </Tooltip>
              <Tooltip isLabel color={color}>
                <TooltipTrigger>
                  <FooterLink href="#">
                    <PiLinkedinLogo aria-label="linkedin logo" />
                  </FooterLink>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </FooterIconsContainer>
          </FooterFullSection>
        </Footer>
      </div>
    );
  },
  argTypes: { backdropClassName: { table: { disable: true } } },
};
