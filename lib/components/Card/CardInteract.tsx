import { PolymorphicProps } from "@/types";
import { ElementType } from "react";
import { useCardInteractStyles } from "./getCardStyles";
import { cssColorProps } from "@/util";

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
  const { styles, color } = useCardInteractStyles({ className });
  return (
    <Element
      style={cssColorProps(color)}
      className={styles}
      tabIndex={tabIndex}
      {...rest}
    >
      {children}
    </Element>
  );
}
