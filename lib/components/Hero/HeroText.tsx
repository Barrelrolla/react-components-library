import { ComponentProps } from "react";
import { getHeroTextClasses } from "./getHeroClasses";

/** Body text for the Hero component. */
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
