import { twMerge } from "tailwind-merge";
import { HamburgerButton } from "../HamburgerButton";
import { useNavbarContext } from "./NavbarContext";

/** Hamburger toggle button for the Navbar. */
export function NavbarToggle() {
  const context = useNavbarContext();
  if (!context) {
    throw new Error(
      "Please use the Navbar toggle Component only inside a Navbar",
    );
  }

  function clickHandler() {
    setIsOpen(!isOpen);
  }

  const { color, collapseAt, isOpen, setIsOpen } = context;

  const classes = twMerge(
    collapseAt === "sm" && "sm:hidden",
    collapseAt === "md" && "md:hidden",
    collapseAt === "lg" && "lg:hidden",
    collapseAt === "xl" && "xl:hidden",
  );

  return (
    <HamburgerButton
      wrapperClasses={classes}
      color={color}
      isOpen={isOpen}
      onClick={clickHandler}
    />
  );
}
