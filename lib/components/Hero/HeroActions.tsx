import { ComponentProps } from "react";
import { useHeroActionsStyles } from "./useHeroStyles";

/** Wrapper for actions to be used inside a Hero component */
export function HeroActions({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const { styles } = useHeroActionsStyles({ className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
