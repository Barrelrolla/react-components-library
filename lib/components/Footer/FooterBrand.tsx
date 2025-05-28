import { ElementType } from "react";
import { Anchor } from "../Anchor";
import { useFooterBrandStyles } from "./useFooterStyles";
import { PolymorphicProps } from "@/types";

const defaultType = "a";
export function FooterBrand<E extends ElementType>({
  as,
  underlined = false,
  hoverUnderline = false,
  className,
  children,
  ...rest
}: PolymorphicProps<E>) {
  const { resolvedColor, classes } = useFooterBrandStyles({ className });
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
