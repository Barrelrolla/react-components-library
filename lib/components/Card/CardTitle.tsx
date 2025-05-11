import { ComponentProps } from "react";
import { useCardTitleStyles } from "./useCardStyles";

/** Card title */
export function CardTitle({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"p">) {
  const { styles } = useCardTitleStyles({ className });
  return (
    <p className={styles} {...rest}>
      {children}
    </p>
  );
}
