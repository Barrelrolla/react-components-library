import { PolymorphicProps } from "@/types";
import { ElementType, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { NavbarContext } from "./NavbarContext";
import { Anchor } from "../Anchor";

const defaultType = "a";
type NavbarBrandProps<E extends ElementType> = {} & PolymorphicProps<E>;
export function NavbarBrand<E extends ElementType = typeof defaultType>({
  as,
  children,
  className,
  ...rest
}: NavbarBrandProps<E>) {
  const context = useContext(NavbarContext);
  const classes = twMerge("px-2 py-0 text-2xl font-bold", className);

  if (!context) {
    throw new Error(
      "Please use the Navbar Brand component only inside a Navbar.",
    );
  }
  return (
    <Anchor
      as={as || defaultType}
      disableUnderline
      className={classes}
      {...rest}
    >
      {children}
    </Anchor>
  );
}
