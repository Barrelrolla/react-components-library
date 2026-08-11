import { ComponentProps } from "react";
import { getHeroTitleClasses } from "./getHeroClasses";

/**
 * Primary headline component for displaying main titles within a `Hero`.
 *
 * Renders an `h1` element and automatically inherits layout alignment
 * settings from the parent `Hero` section.
 */
export function HeroTitle({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"h1">) {
  const { classes } = getHeroTitleClasses({ className });
  return (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  );
}
