import { PropsWithChildren } from "react";
import { getCardTitleStyles } from "./getCardStyles";

/** Card title */
export function CardTitle({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { styles } = getCardTitleStyles({ className });
  return <p className={styles}>{children}</p>;
}
