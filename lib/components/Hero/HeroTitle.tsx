import { PropsWithChildren } from "react";
import { useHeroTitleStyles } from "./useHeroStyles";

export function HeroTitle({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { classes } = useHeroTitleStyles({ className });
  return <h1 className={classes}>{children}</h1>;
}
