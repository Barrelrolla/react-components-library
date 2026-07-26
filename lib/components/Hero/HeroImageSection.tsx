import { ComponentProps } from "react";
import { getHeroImageSectionClasses } from "./getHeroClasses";
import { useHeroContext } from "./HeroContext";

/** Section for the Hero Component. Separate your hero in multiple sections using this component. */
export function HeroImageSection({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const heroContext = useHeroContext();
  const { classes } = getHeroImageSectionClasses({ className, heroContext });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
