import { ComponentProps } from "react";
import { useHeroTitleStyles } from "./useHeroStyles";

/** A title to be used inside a Hero component. */
export function HeroTitle({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"h1">) {
  const { styles } = useHeroTitleStyles({ className });
  return (
    <h1 className={styles} {...rest}>
      {children}
    </h1>
  );
}
