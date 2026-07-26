import { ComponentProps } from "react";
import { getCardTextClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

/** Body text inside a Card. */
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
