import { ElementType } from "react";
import { PolymorphicProps } from "@/types";
import { cssColorProps } from "@/util";
import { useCardInteractStyles } from "./useCardStyles";

const defaultType = "a" as const;

/** An anchor element to be used inside a card component. All children will be part of the interactable area. */
export function CardInteract<E extends ElementType = typeof defaultType>({
  as,
  tabIndex = 0,
  style,
  className,
  children,
  ...rest
}: PolymorphicProps<E>) {
  const Element = as || defaultType;
  const { styles, color } = useCardInteractStyles({ className });
  return (
    <Element
      style={{ ...cssColorProps(color), ...style }}
      className={styles}
      tabIndex={tabIndex}
      {...rest}
    >
      {children}
    </Element>
  );
}
