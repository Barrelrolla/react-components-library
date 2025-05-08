import { PropsWithChildren } from "react";
import { useHeroImageSectionStyles } from "./useHeroStyles";

/** Section for the Hero Component. Separate your hero in multiple sections using this component. */
export function HeroImageSection({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { classes } = useHeroImageSectionStyles({ className });
  return <div className={classes}>{children}</div>;
}
