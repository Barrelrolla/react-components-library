import { ElementType, MouseEvent } from "react";
import { Anchor, AnchorProps } from "../Anchor";
import { useNavbarContext } from "./NavbarContext";
import { getNavbarBrandClasses } from "./getNavbarClasses";

const defaultType = "a";
export type NavbarBrandProps<E extends ElementType> = {} & AnchorProps<E>;

/** Use inside a Navbar component to add a Brand name and logo. */
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
