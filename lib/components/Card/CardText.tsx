import { ComponentProps } from "react";
import { getCardTextClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

/**
 * Text component for rendering body copy and descriptive content inside a `Card`.
 */
export function CardText({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"p">) {
  const cardContext = useCardContext();
  const { classes } = getCardTextClasses({ className, cardContext });
  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
}
