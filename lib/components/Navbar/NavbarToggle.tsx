import { HamburgerButton, HamburgerButtonProps } from "../HamburgerButton";
import { useNavbarContext } from "./NavbarContext";
import { getNavbarToggleClasses } from "./getNavbarClasses";

export type NavbarToggleProps = Omit<HamburgerButtonProps, "isOpen">;

/** Hamburger toggle button for the Navbar. */
export function NavbarToggle({
  size = "sm",
  color = "main",
  wrapperClassName,
  ...rest
}: NavbarToggleProps) {
  const navbarContext = useNavbarContext();
  if (!navbarContext) {
    throw new Error(
      "Please use the Navbar toggle only inside a Navbar component!",
    );
  }
  const { isOpen, setIsOpen } = navbarContext;

  function clickHandler() {
    setIsOpen(!isOpen);
  }

  const { classes } = getNavbarToggleClasses({
    wrapperClassName,
    navbarContext,
  });

  return (
    <HamburgerButton
      size={size}
      wrapperClassName={classes}
      color={color}
      isOpen={isOpen}
      onClick={clickHandler}
      {...rest}
    />
  );
}
