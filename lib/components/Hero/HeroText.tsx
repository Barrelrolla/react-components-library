import { PropsWithChildren } from "react";
import { useHeroTextStyles } from "./useHeroStyles";

export function HeroText({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { classes } = useHeroTextStyles({ className });
  return <p className={classes}>{children}</p>;
}
