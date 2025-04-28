import { PropsWithChildren } from "react";
import { useHeroActionsStyles } from "./useHeroStyles";

/** Wrapper for actions to be used inside a Hero component */
export function HeroActions({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { classes } = useHeroActionsStyles({ className });
  return <div className={classes}>{children}</div>;
}
