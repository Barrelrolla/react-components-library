import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { Navbar } from "./Navbar";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarLink } from "./NavbarLink";
import { NavbarToggle } from "./NavbarToggle";
import { Button } from "../Button";
import { ComputerIcon } from "@/icons";

type Props = ComponentProps<typeof Navbar> & {
  selected: number | undefined;
};

const meta: Meta<Props> = {
  title: "Components/Navbar",
  component: Navbar,
  args: {
    selected: undefined,
  },
  argTypes: {
    color: {
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

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByText("Test");
    await expect(navbar, "renders").toBeTruthy();
  },
  render: ({ selected, color }) => {
    const links = ["link 1", "link 2", "link 3", "link 4", "link 5", "link 6"];
    return (
      <div className="bg-main h-[200vh]">
        <Navbar color={color}>
          <NavbarToggle />
          <NavbarBrand href="#">
            <ComputerIcon /> Test
          </NavbarBrand>
          <div role="presentation" className="w-10 sm:hidden"></div>
          <NavbarCollapse>
            {links.map((link, index) => (
              <NavbarLink
                key={link}
                href="#"
                selected={selected === index}
                underlined={false}
              >
                {link}
              </NavbarLink>
            ))}
            <Button size="sm" scaling={false}>
              test
            </Button>
          </NavbarCollapse>
        </Navbar>
      </div>
    );
  },
};
