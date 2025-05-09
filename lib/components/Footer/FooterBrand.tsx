import { getFooterBrandStyles } from "./getFooterStyles";
import { PolymorphicProps } from "@/types";

export function FooterBrand({
  className,
  children,
  ...rest
}: PolymorphicProps<"a">) {
  const { classes } = getFooterBrandStyles({ className });
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}
