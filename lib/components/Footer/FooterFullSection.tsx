import { ComponentProps } from "react";
import { getFooterFullSectionClasses } from "./getFooterClasses";
import { useFooterContext } from "./FooterContext";

export function FooterFullSection({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const footerContext = useFooterContext();
  const { classes } = getFooterFullSectionClasses({ className, footerContext });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
