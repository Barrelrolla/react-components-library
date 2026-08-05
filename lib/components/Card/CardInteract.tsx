import { ElementType } from "react";
import { PolymorphicProps } from "@/types";
import { getCardInteractClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

const defaultType = "a" as const;

/** An anchor element to be used inside a card component. All children will be part of the interactable area. */
export function CardInteract<E extends ElementType = typeof defaultType>({
  as,
  tabIndex = 0,
  className,
  children,
  ...rest
}: PolymorphicProps<E>) {
  const Element = as || defaultType;
  const cardContext = useCardContext();
  const { classes } = getCardInteractClasses({
    className,
    cardContext,
  });
  return (
    <Element className={classes} tabIndex={tabIndex} {...rest}>
      {children}
    </Element>
  );
}
