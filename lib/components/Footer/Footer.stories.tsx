import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Footer } from "./Footer";
import { FooterBrand } from "./FooterBrand";
import { FooterLinkGroup } from "./FooterLinkGroup";
import { FooterLink } from "./FooterLink";
import { FooterLinksSection } from "./FooterLinksSection";
import { FooterLinksTitle } from "./FooterLinksTitle";
import { FooterFullSection } from "./FooterFullSection";
import { RocketIcon, GitHubIcon, LinkedInLogo } from "@/icons";
import { FooterIconsContainer } from "./FooterIconsContainer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  tags: ["autodocs"],
  component: Footer,
  argTypes: {
    containerClasses: { if: { arg: "false", eq: "true" } },
    className: { if: { arg: "false", eq: "true" } },
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
          <RocketIcon /> Test
        </FooterBrand>
        <FooterLinksSection>
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
  render: ({ ...rest }) => {
    return (
      <Footer {...rest}>
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
        <FooterFullSection>
          <span>copyright stuff</span>
          <FooterIconsContainer>
            <FooterLink href="#">
              <GitHubIcon />
            </FooterLink>
            <FooterLink href="#">
              <LinkedInLogo />
            </FooterLink>
          </FooterIconsContainer>
        </FooterFullSection>
      </Footer>
    );
  },
};
