import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { Navbar } from "./Navbar";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarToggle } from "./NavbarToggle";
import { NavbarLink } from "./NavbarLink";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Navbar> & {
  selected: number | undefined;
};
const meta: Meta<Props> = {
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
  render: ({ selected, primaryColor, secondaryColor }) => {
    const links = ["link 1", "link 2", "link 3", "link 4", "link 5", "link 6"];
    return (
      <Navbar primaryColor={primaryColor} secondaryColor={secondaryColor}>
        <NavbarToggle key={"toggle"} />
        <NavbarBrand key={"brand"} href="#">
          Test
        </NavbarBrand>
        <div key={"space"} role="presentation" className="w-10"></div>
        <NavbarCollapse key={"menu"} disableHoverBG disableUnderlineOnMobile>
          {links.map((link, index) => (
            <NavbarLink href="#" key={link} selected={selected === index}>
              {link}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    );
  },
  args: {
    selected: undefined,
  },
  argTypes: {
    primaryColor: {
      control: {
        type: "select",
      },
    },
    secondaryColor: {
      control: {
        type: "select",
      },
    },
    selected: {
      control: {
        type: "inline-radio",
        min: 0,
        max: 6,
        labels: {
          0: "1",
          1: "2",
          2: "3",
          3: "4",
          4: "5",
          5: "6",
          6: "none",
        },
      },
      options: [0, 1, 2, 3, 4, 5, 6],
    },
    collapseAt: {
      control: {
        type: "inline-radio",
      },
    },
    position: {
      control: {
        type: "inline-radio",
      },
    },
  },
};
