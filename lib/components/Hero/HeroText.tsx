import { ComponentProps } from "react";
import { getHeroTextClasses } from "./getHeroClasses";

/**
 * Body copy paragraph designed for key messaging within a `Hero` component.
 *
 * Automatically inherits layout alignment settings from the parent `Hero` component.
 */
export function HeroText({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const { classes } = getHeroTextClasses({ className });
  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
}
