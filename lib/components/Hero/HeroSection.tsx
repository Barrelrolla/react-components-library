import { ComponentProps } from "react";
import { getHeroSectionClasses } from "./getHeroClasses";
import { useHeroContext } from "./HeroContext";

/** Section for the Hero Component. Separate your hero in multiple sections using this component. */
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
