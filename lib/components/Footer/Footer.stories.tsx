import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";
import { PiRocket, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { availableColors, availableResponsiveSizes } from "@/types";
import { Anchor, Tooltip, TooltipContent, TooltipTrigger } from "../index";
import {
  Footer,
  FooterBrand,
  FooterDivider,
  FooterFullSection,
  FooterIconsContainer,
  FooterLink,
  FooterLinkGroup,
  FooterLinksSection,
  FooterLinksTitle,
} from "./index";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  tags: ["autodocs"],
  component: Footer,
  subcomponents: {
    FooterBrand,
    FooterDivider,
    FooterFullSection,
    FooterIconsContainer,
    FooterLink,
    FooterLinkGroup,
    FooterLinksSection,
    FooterLinksTitle,
  },
  argTypes: {
    color: {
      control: { type: "select" },
      options: availableColors,
      table: { category: "controls" },
    },
    responsiveAt: {
      control: { type: "inline-radio" },
      options: availableResponsiveSizes,
      table: { category: "controls" },
    },
    decorations: { table: { category: "controls" } },
    containerStyle: { control: false, table: { category: "docs" } },
    containerClassName: { control: false, table: { category: "docs" } },
    className: { control: false, table: { category: "docs" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Test");
    await expect(button, "renders").toBeTruthy();
  },
  render: ({ ...rest }) => {
    return (
      <Footer {...rest}>
        <FooterBrand href="#">
          <PiRocket /> Test
        </FooterBrand>
        <FooterLinksSection>
          <FooterLink></FooterLink>
          <FooterLink href="#">long link text 1</FooterLink>
          <FooterLink href="#">long link text 2</FooterLink>
          <FooterLink href="#">long link text 3</FooterLink>
        </FooterLinksSection>
        <FooterFullSection className="justify-center">
          copyright stuff
        </FooterFullSection>
      </Footer>
    );
  },
};

export const WithLinkGroups: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Test");
    await expect(button, "renders").toBeTruthy();
  },
  render: ({ color, ...rest }) => {
    return (
      <Footer color={color} {...rest}>
        <FooterBrand href="#">
          <PiRocket /> Test
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
          <FooterIconsContainer>
            <Tooltip isLabel color={color || "neutral"}>
              <TooltipTrigger>
                <Anchor color={color || "main"} href="#">
                  <PiGithubLogo aria-label="github logo" />
                </Anchor>
              </TooltipTrigger>
              <TooltipContent>Github</TooltipContent>
            </Tooltip>
            <Tooltip isLabel color={color || "neutral"}>
              <TooltipTrigger>
                <Anchor color={color || "main"} href="#">
                  <PiLinkedinLogo aria-label="linkedin logo" />
                </Anchor>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
          </FooterIconsContainer>
        </FooterFullSection>
      </Footer>
    );
  },
  argTypes: {
    containerStyle: { table: { disable: true } },
    containerClassName: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};
