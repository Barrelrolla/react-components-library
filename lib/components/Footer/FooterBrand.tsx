import { ElementType } from "react";
import { Anchor } from "../Anchor";
import { getFooterBrandClasses } from "./getFooterClasses";
import { PolymorphicProps } from "@/types";
import { useFooterContext } from "./FooterContext";

const defaultType = "a";
/**
 * Brand logo and identity container for the `Footer`.
 *
 * Supports polymorphic rendering via the `as` prop (e.g., `a`, `Link`, `div`),
 * making it easily configurable as an interactive brand link. Defaults to `a`.
 */
export function FooterBrand<E extends ElementType>({
  as,
  hoverUnderline = false,
  className,
  children,
  ...rest
}: PolymorphicProps<E>) {
  const footerContext = useFooterContext();
  const { resolvedColor, classes } = getFooterBrandClasses({
    className,
    footerContext,
  });
  return (
    <Anchor
      as={as || defaultType}
      color={resolvedColor}
      hoverUnderline={hoverUnderline}
      className={classes}
      {...rest}
    >
      {children}
    </Anchor>
  );
}
