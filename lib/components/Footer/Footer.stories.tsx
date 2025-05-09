import { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Footer } from "./Footer";
import { FooterBrand } from "./FooterBrand";
import { ComputerIcon } from "@/icons";
import { FooterLinkGroup } from "./FooterLinkGroup";
import { FooterLink } from "./FooterLink";
import { FooterLinksSection } from "./FooterLinksSection";
import { FooterLinksTitle } from "./FooterLinksTitle";
import { FooterFullSection } from "./FooterFullSection";

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
        <FooterBrand href="#" className="justify-center w-full md:w-auto">
          <ComputerIcon /> Test
        </FooterBrand>
        <FooterLinksSection>
          <FooterLinkGroup>
            <FooterLinksTitle>section 1 section</FooterLinksTitle>
            <FooterLink href="#">link 1 link 1 link 1</FooterLink>
            <FooterLink href="#">link 2 link 2 link 2</FooterLink>
            <FooterLink href="#">link 3 link 3 link 3</FooterLink>
          </FooterLinkGroup>
          <FooterLinkGroup>
            <FooterLinksTitle>section 2 section</FooterLinksTitle>
            <FooterLink href="#">link 1 link 1 link 1</FooterLink>
            <FooterLink href="#">link 2 link 2 link 2</FooterLink>
            <FooterLink href="#">link 3 link 3 link 3</FooterLink>
          </FooterLinkGroup>
          <FooterLinkGroup>
            <FooterLinksTitle>section 3 section</FooterLinksTitle>
            <FooterLink href="#">link 1 link 1 link 1</FooterLink>
            <FooterLink href="#">link 2 link 2 link 2</FooterLink>
            <FooterLink href="#">link 3 link 3 link 3</FooterLink>
          </FooterLinkGroup>
        </FooterLinksSection>
        <FooterFullSection>copyright stuff</FooterFullSection>
      </Footer>
    );
  },
};
