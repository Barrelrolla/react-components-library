import { PolymorphicProps } from "@/types";
import { ComponentPropsWithoutRef, ElementType, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import { NavbarContext } from "./NavbarContext";

const defaultType = "a";
type NavbarLogoProps<E extends ElementType> = {} & ComponentPropsWithoutRef<E> &
  PolymorphicProps<E>;
export function NavbarLogo<E extends ElementType = typeof defaultType>({
  as,
  children,
  className,
  ...rest
}: NavbarLogoProps<E>) {
  const context = useContext(NavbarContext);
  const classes = twMerge("px-2 py-0 text-2xl font-bold", className);

  if (!context) {
    throw new Error("Please use the Navbar Logo only inside a Navbar.");
  }
  return (
    <Button
      as={as || defaultType}
      primaryColor={context.primaryColor}
      secondaryColor={context.secondaryColor}
      variant="clear"
      clearButtonHover="none"
      disableScale
      className={classes}
      {...rest}
    >
      {children}
    </Button>
  );
}
