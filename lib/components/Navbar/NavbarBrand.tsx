import { ElementType, useContext, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";
import { Anchor } from "../Anchor";
import { NavbarContext } from "./NavbarContext";
import { PolymorphicProps } from "@/types";

const defaultType = "a";
export type NavbarBrandProps<E extends ElementType> = {} & PolymorphicProps<E>;

export function NavbarBrand<E extends ElementType = typeof defaultType>({
  as,
  children,
  className,
  onClick,
  ...rest
}: NavbarBrandProps<E>) {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      "Please use the Navbar Brand component only inside a Navbar.",
    );
  }

  function clickHandler(event: MouseEvent<HTMLAnchorElement>) {
    context?.setIsOpen(false);
    onClick?.(event);
  }

  const classes = twMerge("text-2xl font-bold", className);

  return (
    <Anchor
      primaryColor={context.secondaryColor}
      secondaryColor={context.primaryColor}
      as={as || defaultType}
      className={classes}
      onClick={clickHandler}
      {...rest}
    >
      {children}
    </Anchor>
  );
}
