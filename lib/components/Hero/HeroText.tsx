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
    <h3 className={styles} {...rest}>
      {children}
    </h3>
  );
}
