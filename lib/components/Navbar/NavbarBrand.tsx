import { ElementType, MouseEvent } from "react";
import { Anchor, AnchorProps } from "../Anchor";
import { useNavbarContext } from "./NavbarContext";
import { useNavbarBrandStyles } from "./useNavbarStyles";

const defaultType = "a";
export type NavbarBrandProps<E extends ElementType> = {} & AnchorProps<E>;

/** Use inside a Navbar component to add a Brand name and logo. */
export function NavbarBrand<E extends ElementType = typeof defaultType>({
  as,
  underlined = false,
  hoverUnderline = false,
  useBgColor = false,
  children,
  className,
  onClick,
  ...rest
}: NavbarBrandProps<E>) {
  const context = useNavbarContext();

  function clickHandler(event: MouseEvent<HTMLAnchorElement>) {
    context?.setIsOpen(false);
    window.scrollTo(0, 0);
    onClick?.(event);
  }

  const { styles, resolvedColor } = useNavbarBrandStyles({ className });
  return (
    <Anchor
      as={as || defaultType}
      color={resolvedColor}
      underlined={underlined}
      hoverUnderline={hoverUnderline}
      useBgColor={useBgColor}
      className={styles}
      onClick={clickHandler}
      {...rest}
    >
      {children}
    </Anchor>
  );
}
