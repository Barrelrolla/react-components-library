import { PropsWithChildren } from "react";
import { useHeroSectionStyles } from "./useHeroStyles";

/** Section for the Hero Component. Separate your hero in multiple sections using this component. */
export function HeroSection({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { classes } = useHeroSectionStyles({ className });
  return <div className={classes}>{children}</div>;
}
