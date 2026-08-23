import { ComponentProps, CSSProperties } from "react";
import { CardContextProvider } from "./CardContext";
import { CardSizes } from "./CardTypes";
import { getCardClasses } from "./getCardClasses";

export type CardProps = {
  /** Lays out child card sections horizontally instead of vertically. */
  horizontal?: boolean;
  /** Predefined padding and spacing size option for the card. */
  size?: CardSizes;
  /** Additional CSS class names applied to the outer CSS container element (`@container`). */
  containerClassName?: string;
  /** Inline CSS properties applied to the outer CSS container element. */
  containerStyle?: CSSProperties;
  /** Additional CSS class names applied directly to the card element. */
  className?: string;
} & ComponentProps<"div">;

/**
 * Flexible container component for grouping related content and actions into a structured card.
 *
 * Acts as the primary wrapper for card sub-components (such as `CardTitle`, `CardSection`, and others).
 * Built with CSS Container Queries support out of the box.
 */
export function Card({
  horizontal = false,
  size = "sm",
  containerClassName,
  containerStyle,
  style,
  className,
  children,
  ...rest
}: CardProps) {
  const { classes, containerClasses } = getCardClasses({
    horizontal,
    size,
    containerClassName,
    className,
  });
  return (
    <CardContextProvider value={{ hasContext: true }}>
      <div
        style={{ "--h": "-0.05", ...containerStyle } as CSSProperties}
        className={containerClasses}
      >
        <div className={classes} style={style} {...rest}>
          {children}
        </div>
      </div>
    </CardContextProvider>
  );
}
