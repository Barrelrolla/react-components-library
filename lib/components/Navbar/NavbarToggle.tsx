import { HamburgerButton, HamburgerButtonProps } from "../HamburgerButton";
import { useNavbarContext } from "./NavbarContext";
import { useNavbarToggleStyles } from "./useNavbarStyles";

/** Hamburger toggle button for the Navbar. */
export function NavbarToggle({
  wrapperClasses,
  ...rest
}: Omit<HamburgerButtonProps, "isOpen">) {
  const context = useNavbarContext();
  if (!context) {
    throw new Error(
      "Please use the Navbar toggle only inside a Navbar component!",
    );
  }
  const { isOpen, setIsOpen } = context;

  function clickHandler() {
    setIsOpen(!isOpen);
  }

  const { styles, resolvedColor } = useNavbarToggleStyles({ wrapperClasses });

  return (
    <HamburgerButton
      wrapperClasses={styles}
      color={resolvedColor}
      isOpen={isOpen}
      onClick={clickHandler}
      {...rest}
    />
  );
}
