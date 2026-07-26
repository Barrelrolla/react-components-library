import { ComponentProps } from "react";
import { getHeroActionsClasses } from "./getHeroClasses";
import { useHeroContext } from "./HeroContext";

/** Wrapper for actions to be used inside a Hero component */
export function HeroActions({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const heroContext = useHeroContext();
  const { classes } = getHeroActionsClasses({ className, heroContext });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
