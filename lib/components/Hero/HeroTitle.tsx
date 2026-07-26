import { ComponentProps } from "react";
import { getHeroTitleClasses } from "./getHeroClasses";

/** A title to be used inside a Hero component. */
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
