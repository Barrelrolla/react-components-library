import { ComponentProps } from "react";
import { useHeroSectionStyles } from "./useHeroStyles";

/** Section for the Hero Component. Separate your hero in multiple sections using this component. */
export function HeroSection({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const { styles } = useHeroSectionStyles({ className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
