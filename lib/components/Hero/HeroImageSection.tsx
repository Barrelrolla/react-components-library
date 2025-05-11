import { ComponentProps } from "react";
import { useHeroImageSectionStyles } from "./useHeroStyles";

/** Section for the Hero Component. Separate your hero in multiple sections using this component. */
export function HeroImageSection({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const { styles } = useHeroImageSectionStyles({ className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
