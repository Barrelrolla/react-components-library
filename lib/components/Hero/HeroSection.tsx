import { ComponentProps } from "react";
import { getHeroSectionClasses } from "./getHeroClasses";
import { useHeroContext } from "./HeroContext";

/**
 * Flexible content section designed to divide a `Hero` component into distinct layout blocks.
 *
 * Commonly used to separate headlines, body text, form elements, or key visuals within multi-column hero layouts.
 */
export function HeroSection({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const heroContext = useHeroContext();
  const { classes } = getHeroSectionClasses({ className, heroContext });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
