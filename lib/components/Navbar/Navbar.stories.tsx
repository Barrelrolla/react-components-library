import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { Navbar } from "./Navbar";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarCollapse } from "./NavbarCollapse";

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
  render: () => {
    return (
      <div className="h-screen">
        <Navbar fixed={true} primaryColor="accent" secondaryColor="accent">
          <NavbarBrand href="/">
            <div className="flex flex-col">
              <span>Test</span>
            </div>
          </NavbarBrand>
          <NavbarCollapse>
            <li>link 1</li>
            <li>link 2</li>
            <li>linkeogijewogiewjg</li>
            <li>link 4</li>
          </NavbarCollapse>
        </Navbar>
        <span className="mt-20 flex justify-center text-2xl">test</span>
      </div>
    );
  },
};
