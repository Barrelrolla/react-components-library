import { ElementType } from "react";
import { ColorType, PolymorphicProps } from "@/types";
import { cssColorProps } from "@/util";
import { useAnchorStyles } from "./useAnchorStyles";

const defaultType = "a";
export type AnchorProps<E extends ElementType> = {
  /** Color of the anchor element. */
  color?: ColorType;
  /** Adds underline. */
  underlined?: boolean;
  /** Adds underline on hover. */
  hoverUnderline?: boolean;
  /** Adds an offset to the underline on hover. */
  hoverUnderlineOffset?: boolean;
} & PolymorphicProps<E>;

export function Anchor<E extends ElementType = typeof defaultType>({
  as,
  color,
  underlined = true,
  hoverUnderline = true,
  hoverUnderlineOffset = true,
  className,
  style,
  children,
  ...rest
}: AnchorProps<E>) {
  const { styles, resolvedColor } = useAnchorStyles({
    underlined,
    hoverUnderline,
    hoverUnderlineOffset,
    color,
    className,
  });

  const Element = as || defaultType;

  return (
    <Element
      style={{ ...cssColorProps(resolvedColor), ...style }}
      className={styles}
      {...rest}
    >
      {children}
    </Element>
  );
}
