import { useContext } from "react";
import { HamburgerButton } from "../HamburgerButton";
import { NavbarContext } from "./NavbarContext";

export function NavbarToggle() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      "Please use the Navbar toggle Component only inside a Navbar",
    );
  }
  const { primaryColor, secondaryColor, isOpen, setIsOpen } = context;

  function clickHandler() {
    setIsOpen(!isOpen);
  }
  return (
    <HamburgerButton
      className="sm:hidden"
      primaryColor={secondaryColor}
      secondaryColor={primaryColor}
      isOpen={isOpen}
      onClick={clickHandler}
    />
  );
}
