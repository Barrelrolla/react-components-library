import { ComponentPropsWithoutRef } from "react";
import { getCardTitleClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

const defaultType: Heading = "h2";
type Heading = "h1" | "h2" | "h3" | "h3" | "h4" | "h5" | "h6";

export type CardTitleProps<T extends Heading = typeof defaultType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

/** Card title */
export function CardTitle({
  as,
  className,
  children,
  ...rest
}: { className?: string } & CardTitleProps<typeof defaultType>) {
  const cardContext = useCardContext();
  const { classes } = getCardTitleClasses({ className, cardContext });
  const Element = as ? as : defaultType;
  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
}
