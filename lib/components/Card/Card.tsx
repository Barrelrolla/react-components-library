import { ComponentProps, CSSProperties } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { CardContextProvider } from "./CardContext";
import { CardSizes } from "./CardTypes";
import { useCardStyles } from "./useCardStyles";

export type CardProps = {
  /** Color of the card. */
  color?: ColorType;
  /** If the card sections should be horizontal or vertical Default is `false`. */
  horizontal?: boolean;
  /** Size of the card. */
  size?: CardSizes;
  /** The card is inside a `@container`. Add any classes to it here. */
  containerClasses?: string;
  /** Add any styles for the container here. */
  containerStyle?: CSSProperties;
  /** Classes for the card itself. */
  className?: string;
};

export function Card({
  color = "main",
  horizontal = false,
  size = "sm",
  containerClasses,
  containerStyle,
  style,
  className,
  children,
  ...rest
}: CardProps & ComponentProps<"div">) {
  const { styles, containerStyles } = useCardStyles({
    horizontal,
    size,
    containerClasses,
    className,
  });
  return (
    <CardContextProvider value={{ color }}>
      <div
        style={{ ...cssColorProps(color), ...containerStyle }}
        className={containerStyles}
      >
        <div className={styles} style={style} {...rest}>
          {children}
        </div>
      </div>
    </CardContextProvider>
  );
}
