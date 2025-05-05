import { PropsWithChildren } from "react";
import { getCardActionsStyles } from "./getCardStyles";

/** Section for actions inside a Card */
export function CardActions({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { styles } = getCardActionsStyles({ className });
  return <div className={styles}>{children}</div>;
}
