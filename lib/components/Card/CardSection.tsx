import { ComponentProps } from "react";
import { getCardSectionClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

/** Use to divide a Card into multiple sections. */
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
