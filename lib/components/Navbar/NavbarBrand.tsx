import { ElementType, MouseEvent } from "react";
import { Anchor, AnchorProps } from "../Anchor";
import { useNavbarContext } from "./NavbarContext";
import { getNavbarBrandClasses } from "./getNavbarClasses";

const defaultType = "a";
export type NavbarBrandProps<E extends ElementType> = {} & AnchorProps<E>;

/**
 * Polymorphic brand logo or title container for a `Navbar`.
 *
 * Renders semantically as an `a` tag by default to act as an anchor back to
 * the homepage, but supports custom element types (e.g., framework-specific router `Link` components)
 * via the polymorphic `as` prop.
 */
export function NavbarBrand<E extends ElementType = typeof defaultType>({
  as,
  color = "main",
  hoverUnderline = false,
  children,
  className,
  onClick,
  ...rest
}: NavbarBrandProps<E>) {
  const navbarContext = useNavbarContext();

  function clickHandler(event: MouseEvent<HTMLAnchorElement>) {
    navbarContext?.setIsOpen(false);
    onClick?.(event);
  }

  const { classes } = getNavbarBrandClasses({
    className,
  });

  return (
    <Anchor
      as={as || defaultType}
      color={color}
      hoverUnderline={hoverUnderline}
      className={classes}
      onClick={clickHandler}
      {...rest}
    >
      {children}
    </Anchor>
  );
}
