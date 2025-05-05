import { PropsWithChildren } from "react";
import { getCardTextStyles } from "./getCardStyles";

/** Body text inside a Card. */
export function CardText({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { styles } = getCardTextStyles({ className });
  return <h2 className={styles}>{children}</h2>;
}
