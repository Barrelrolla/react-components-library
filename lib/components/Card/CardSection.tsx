import { ComponentProps } from "react";
import { getCardSectionClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

/**
 * Structural divider component used to split a `Card` into distinct visual sections or columns.
 */
export function CardSection({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const cardContext = useCardContext();
  const { classes } = getCardSectionClasses({ className, cardContext });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
