import { PropsWithChildren } from "react";
import { getCardImageContainerStyles } from "./getCardStyles";

/** Place an image inside if you don't want the image to stretch to the end of the card. */
export function CardImageContainer({
  className,
  children,
}: { className?: string } & PropsWithChildren) {
  const { styles } = getCardImageContainerStyles({ className });
  return <div className={styles}>{children}</div>;
}
