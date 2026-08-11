import { ComponentProps } from "react";
import { getHeroImageSectionClasses } from "./getHeroClasses";
import { useHeroContext } from "./HeroContext";

/**
 * Image container section designed for structuring media layout within a `Hero` component.
 *
 * Used alongside other hero sections to split content between visual assets (such as illustrations or screenshots) and copy.
 */
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
