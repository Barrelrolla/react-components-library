import { ComponentProps } from "react";
import { useCardSectionStyles } from "./useCardStyles";

/** Use to divide a Card into multiple sections. */
export function CardSection({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const { styles } = useCardSectionStyles({ className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
