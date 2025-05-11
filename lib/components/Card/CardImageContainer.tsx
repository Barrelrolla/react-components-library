import { ComponentProps } from "react";
import { useCardImageContainerStyles } from "./useCardStyles";

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
  ...rest
}: CardImageContainerProps & ComponentProps<"div">) {
  const { styles } = useCardImageContainerStyles({ padded, className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
