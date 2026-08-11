import { ComponentProps } from "react";
import { getCardImageContainerClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

export type CardImageContainerProps = {
  /** * Applies internal padding and a border around the image inside the card. */
  padded?: boolean;
  /** Additional CSS class names applied to the image container. */
  className?: string;
};

/**
 * Image wrapper for `Card` components that manages aspect ratio, overflow, and rounded corners.
 */
export function CardImageContainer({
  padded = false,
  className,
  children,
  ...rest
}: CardImageContainerProps & ComponentProps<"div">) {
  const cardContext = useCardContext();
  const { classes } = getCardImageContainerClasses({
    padded,
    className,
    cardContext,
  });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
