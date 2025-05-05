import { PropsWithChildren } from "react";
import { getCardStyles } from "./getCardStyles";
import { CardSizes } from "./CardTypes";

export type CardProps = {
  /** Set to 'false' if you want the card to be horizontal, default is `true`. */
  vertical?: boolean;
  /** Size of the card. */
  size?: CardSizes;
  /** The card is inside a `@container`. Add any classes to it here. */
  containerClasses?: string;
  /** Classes for the card itself. */
  className?: string;
};

/** Card component */
export function Card({
  vertical = true,
  size = "sm",
  containerClasses,
  className,
  children,
}: CardProps & PropsWithChildren) {
  const { cardStyles, cardContainerStyles } = getCardStyles({
    vertical,
    size,
    containerClasses,
    className,
  });
  return (
    <div className={cardContainerStyles}>
      <div className={cardStyles}>{children}</div>
    </div>
  );
}
