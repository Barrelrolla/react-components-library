import { ComponentProps, CSSProperties } from "react";
import { CardContextProvider } from "./CardContext";
import { CardSizes } from "./CardTypes";
import { getCardClasses } from "./getCardClasses";

export type CardProps = {
  /** If the card sections should be horizontal or vertical Default is `false`. */
  horizontal?: boolean;
  /** Size of the card. */
  size?: CardSizes;
  /** The card is inside a `@container`. Add any classes to it here. */
  containerClassName?: string;
  /** Add any styles for the container here. */
  containerStyle?: CSSProperties;
  /** Classes for the card itself. */
  className?: string;
} & ComponentProps<"div">;

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
      <div style={containerStyle} className={containerClasses}>
        <div className={classes} style={style} {...rest}>
          {children}
        </div>
      </div>
    </CardContextProvider>
  );
}
