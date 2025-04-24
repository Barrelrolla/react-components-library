import { PropsWithChildren } from "react";
import { useHeroSectionStyles } from "./useHeroStyles";

export function HeroSection({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { classes } = useHeroSectionStyles({ className });
  return <div className={classes}>{children}</div>;
}
