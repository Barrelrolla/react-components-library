import { ElementType } from "react";
import { Anchor } from "../Anchor";
import { useFooterBrandStyles } from "./getFooterStyles";
import { PolymorphicProps } from "@/types";

const defaultType = "a";
export function FooterBrand<E extends ElementType>({
  as,
  underlined = false,
  hoverUnderline = false,
  useBgColor = false,
  className,
  children,
  ...rest
}: PolymorphicProps<E>) {
  const { color, classes } = useFooterBrandStyles({ className });
  return (
    <Anchor
      as={as || defaultType}
      className={classes}
      underlined={underlined}
      hoverUnderline={hoverUnderline}
      color={color}
      useBgColor={useBgColor}
      {...rest}
    >
      {children}
    </Anchor>
  );
}
