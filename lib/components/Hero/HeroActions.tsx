import { ComponentProps } from "react";
import { getHeroActionsClasses } from "./getHeroClasses";
import { useHeroContext } from "./HeroContext";

/**
 * Action layout container for housing call-to-action buttons or links within a `Hero` component.
 *
 * Automatically responds to alignment settings (`actionsAlign`) configured on the parent `Hero`.
 */
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
