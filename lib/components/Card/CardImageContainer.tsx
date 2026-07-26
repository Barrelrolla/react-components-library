import { ComponentProps } from "react";
import { getCardImageContainerClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

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
