import { PropsWithChildren } from "react";
import { useHeroActionsStyles } from "./useHeroStyles";

export function HeroActions({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { classes } = useHeroActionsStyles({ className });
  return <div className={classes}>{children}</div>;
}
