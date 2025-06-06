import { ComponentProps } from "react";
import { useCardTitleStyles } from "./useCardStyles";

/** Card title */
export function CardTitle({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"h2">) {
  const { styles } = useCardTitleStyles({ className });
  return (
    <h2 className={styles} {...rest}>
      {children}
    </h2>
  );
}
