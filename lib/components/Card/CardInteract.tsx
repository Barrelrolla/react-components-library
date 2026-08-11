import { ElementType } from "react";
import { PolymorphicProps } from "@/types";
import { getCardInteractClasses } from "./getCardClasses";
import { useCardContext } from "./CardContext";

const defaultType = "a" as const;

/**
 * Polymorphic wrapper that converts card contents into an interactable link or button area.
 *
 * Expands touch/click target bounds so all nested children are part of the interactive surface.
 */
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
