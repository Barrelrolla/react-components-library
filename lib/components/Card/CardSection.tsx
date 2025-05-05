import { PropsWithChildren } from "react";
import { getCardSectionStyles } from "./getCardStyles";

/** Use to divide a Card into multiple sections. */
export function CardSection({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { styles } = getCardSectionStyles({ className });
  return <div className={styles}>{children}</div>;
}
