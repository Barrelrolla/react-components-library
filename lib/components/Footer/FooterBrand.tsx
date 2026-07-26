import { ElementType } from "react";
import { Anchor } from "../Anchor";
import { getFooterBrandClasses } from "./getFooterClasses";
import { PolymorphicProps } from "@/types";
import { useFooterContext } from "./FooterContext";

const defaultType = "a";
export function FooterBrand<E extends ElementType>({
  as,
  underlined = false,
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
      underlined={underlined}
      hoverUnderline={hoverUnderline}
      className={classes}
      {...rest}
    >
      {children}
    </Anchor>
  );
}
