import { PropsWithChildren } from "react";
import { getCardImageContainerStyles } from "./getCardStyles";

export type CardImageContainerProps = {
  /** Adds padding and border to the image. */
  padded?: boolean;
  className?: string;
};

/** Container for an image inside a card component. */
export function CardImageContainer({
  padded = false,
  className,
  children,
}: CardImageContainerProps & PropsWithChildren) {
  const { styles } = getCardImageContainerStyles({ padded, className });
  return <div className={styles}>{children}</div>;
}
