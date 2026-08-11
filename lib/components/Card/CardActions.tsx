import { ComponentProps } from "react";
import { getCardActionsClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

/**
 * Container component for action elements (such as buttons or links) inside a `Card`.
 *
 * Automatically handles spacing and alignment for action controls.
 */
export function CardActions({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const cardContext = useCardContext();
  const { classes } = getCardActionsClasses({ className, cardContext });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
