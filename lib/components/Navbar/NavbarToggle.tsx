import { useContext } from "react";
import { HamburgerButton } from "../HamburgerButton";
import { NavbarContext } from "./NavbarContext";
import { twMerge } from "tailwind-merge";

export function NavbarToggle() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      "Please use the Navbar toggle Component only inside a Navbar",
    );
  }
  const { primaryColor, secondaryColor, collapseAt, isOpen, setIsOpen } =
    context;

  function clickHandler() {
    setIsOpen(!isOpen);
  }

  const classes = twMerge(
    collapseAt === "sm" && "sm:hidden",
    collapseAt === "md" && "md:hidden",
    collapseAt === "lg" && "lg:hidden",
    collapseAt === "xl" && "xl:hidden",
  );
  return (
    <HamburgerButton
      wrapperClasses={classes}
      primaryColor={secondaryColor}
      secondaryColor={primaryColor}
      isOpen={isOpen}
      onClick={clickHandler}
    />
  );
}
