import { PolymorphicProps } from "@/types";
import { ElementType } from "react";
import { getCardClickAreaStyles } from "./getCardStyles";

const defaultType = "a" as const;
/** An anchor element to be used inside a card component. All children will be part of the interactable area. */
export function CardInteract<E extends ElementType = typeof defaultType>({
  as,
  className,
  tabIndex = 0,
  children,
  ...rest
}: PolymorphicProps<E>) {
  const Element = as || defaultType;
  const { styles } = getCardClickAreaStyles({ className });
  return (
    <Element className={styles} tabIndex={tabIndex} {...rest}>
      {children}
    </Element>
  );
}
