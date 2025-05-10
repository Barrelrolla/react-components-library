import { useFooterBrandStyles } from "./getFooterStyles";
import { PolymorphicProps } from "@/types";

export function FooterBrand({
  className,
  children,
  ...rest
}: PolymorphicProps<"a">) {
  const { classes } = useFooterBrandStyles({ className });
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}
