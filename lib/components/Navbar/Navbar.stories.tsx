import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { Navbar } from "./Navbar";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarToggle } from "./NavbarToggle";
import { NavbarLink } from "./NavbarLink";

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
    collapseAt: "sm",
    children: [
      <NavbarToggle key={"toggle"} />,
      <NavbarBrand key={"brand"} href="#">
        Test
      </NavbarBrand>,
      <div key={"space"} role="presentation" className="w-10"></div>,
      <NavbarCollapse key={"menu"} disableHoverBG disableUnderlineOnMobile>
        <NavbarLink href="#">Link 1</NavbarLink>
        <NavbarLink href="#">Link 2</NavbarLink>
        <NavbarLink href="#" selected>
          Link 3
        </NavbarLink>
        <NavbarLink href="#">Link 4</NavbarLink>
        <NavbarLink href="#">Link 5</NavbarLink>
        <NavbarLink href="#">Link 6</NavbarLink>
      </NavbarCollapse>,
    ],
  },
};
