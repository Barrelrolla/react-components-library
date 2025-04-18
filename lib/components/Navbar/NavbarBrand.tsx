import { ElementType, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";
import { useNavbarContext } from "./NavbarContext";
import { Anchor, AnchorProps } from "../Anchor";

const defaultType = "a";
export type NavbarBrandProps<E extends ElementType> = {} & AnchorProps<E>;

export function NavbarBrand<E extends ElementType = typeof defaultType>({
  as,
  underlined = false,
  hoverUnderline = false,
  children,
  className,
  onClick,
  ...rest
}: NavbarBrandProps<E>) {
  const context = useNavbarContext();
  if (!context) {
    throw new Error(
      "Please use the Navbar Brand component only inside a Navbar.",
    );
  }

  function clickHandler(event: MouseEvent<HTMLAnchorElement>) {
    context?.setIsOpen(false);
    window.scrollTo(0, 0);
    onClick?.(event);
  }

  const classes = twMerge(
    "flex items-center gap-2 text-2xl font-bold",
    className,
  );

  return (
    <Anchor
      primaryColor={context.primaryColor}
      secondaryColor={context.secondaryColor}
      underlined={underlined}
      hoverUnderline={hoverUnderline}
      as={as || defaultType}
      className={classes}
      onClick={clickHandler}
      {...rest}
    >
      {children}
    </Anchor>
  );
}
