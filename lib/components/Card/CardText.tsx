import { ComponentProps } from "react";
import { useCardTextStyles } from "./useCardStyles";

/** Body text inside a Card. */
export function CardText({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"p">) {
  const { styles } = useCardTextStyles({ className });
  return (
    <p className={styles} {...rest}>
      {children}
    </p>
  );
}
