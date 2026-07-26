import { ComponentProps } from "react";
import { getCardTitleClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

/** Card title */
export function CardTitle({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"h2">) {
  const cardContext = useCardContext();
  const { classes } = getCardTitleClasses({ className, cardContext });
  return (
    <h2 className={classes} {...rest}>
      {children}
    </h2>
  );
}
