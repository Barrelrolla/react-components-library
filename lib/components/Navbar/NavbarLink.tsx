import { PolymorphicProps } from "@/types";
import { ElementType, useContext } from "react";
import { Anchor } from "../Anchor";
import { NavbarContext } from "./NavbarContext";

const defaultType = "a";
type NavbarLinkProps<E extends ElementType> = {
  selected?: boolean;
} & PolymorphicProps<E>;

export function NavbarLink<E extends ElementType = typeof defaultType>({
  as,
  selected,
  children,
  className,
  ...rest
}: NavbarLinkProps<E>) {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      "Please use the NavbarLink component only inside a Navbar.",
    );
  }
  return (
    <ul>
      <Anchor
        primaryColor={context.secondaryColor}
        secondaryColor={context.primaryColor}
        as={as || defaultType}
        selected={selected}
        className={className}
        onClick={() => {
          context?.setIsOpen(false);
        }}
        {...rest}
      >
        {children}
      </Anchor>
    </ul>
  );
}
