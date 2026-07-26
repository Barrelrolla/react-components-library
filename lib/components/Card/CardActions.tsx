import { ComponentProps } from "react";
import { getCardActionsClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

/** Section for actions inside a Card */
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
