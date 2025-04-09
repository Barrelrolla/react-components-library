import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { Navbar } from "./Navbar";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarToggle } from "./NavbarToggle";

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
    children: [
      <div key={"logo"} className="flex flex-row">
        <NavbarToggle />
        <NavbarBrand href="#">Test</NavbarBrand>
      </div>,
      <NavbarCollapse key={"menu"}>
        <li>
          <a href="#">link 1</a>
        </li>
        <li>
          <a href="#">link 2</a>
        </li>
        <li>
          <a href="#">linkeogijewogiewjg</a>
        </li>
        <li>
          <a href="#">link 4</a>
        </li>
      </NavbarCollapse>,
    ],
  },
};
