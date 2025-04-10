import { PolymorphicProps } from "@/types";
import { ElementType } from "react";
import { Anchor } from "../Anchor";

const defaultType = "a";
type NavbarLinkProps<E extends ElementType> = {} & PolymorphicProps<E>;

export function NavbarLink<E extends ElementType = typeof defaultType>({
  as,
  children,
  className,
}: NavbarLinkProps<E>) {
  return (
    <ul>
      <Anchor as={as || defaultType} className={className}>
        {children}
      </Anchor>
    </ul>
  );
}
