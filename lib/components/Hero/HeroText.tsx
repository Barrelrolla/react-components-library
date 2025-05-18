import { ComponentProps } from "react";
import { useHeroTextStyles } from "./useHeroStyles";

/** Body text for the Hero component. */
export function HeroText({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const { styles } = useHeroTextStyles({ className });
  return (
    <p className={styles} {...rest}>
      {children}
    </p>
  );
}
