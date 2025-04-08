import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { Navbar } from "./Navbar";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarLinkGroup } from "./NavbarLinkGroup";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByText("Test");
    await expect(navbar, "renders").toBeTruthy();
  },
  args: {
    primaryColor: "primary",
    secondaryColor: "primary",
    children: [
      <NavbarLogo href="/">
        <div className="flex flex-col">
          <span>Test</span>
          <span>test</span>
        </div>
      </NavbarLogo>,
      <NavbarLinkGroup>
        <li>link 1</li>
        <li>link 2</li>
        <li>linkeogijewogiewjg</li>
        <li>link 4</li>
      </NavbarLinkGroup>,
    ],
  },
};
