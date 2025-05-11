import { ComponentProps } from "react";
import { useCardTextStyles } from "./useCardStyles";

/** Body text inside a Card. */
export function CardText({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"h2">) {
  const { styles } = useCardTextStyles({ className });
  return (
    <h2 className={styles} {...rest}>
      {children}
    </h2>
  );
}
