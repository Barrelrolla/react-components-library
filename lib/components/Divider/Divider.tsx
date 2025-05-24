"use client";

import { ComponentProps } from "react";
import { ColorType, ResponsiveSizes } from "@/types";
import { cssColorProps, cssColorPropsReversed } from "@/util";
import { useDividerClasses } from "./useDividerStyles";

export type DividerProps = {
  /** Color of the divider. */
  color?: ColorType;
  /** If the divider should use the bg color instead of the fg color. Default is `false`. */
  useBgColor?: boolean;
  /** Width of the divider in pixels. */
  width?: number;
  /** If you want the divider to change from vertical to horizontal at some display size. */
  responsiveAt?: ResponsiveSizes;
  /** Set to `true` if you want it vertical. Default is `false`. */
  vertical?: boolean;
} & ComponentProps<"div">;

export function Divider({
  color = "main",
  useBgColor = false,
  width = 1,
  responsiveAt,
  vertical = false,
  style,
  className,
  ...rest
}: DividerProps) {
  const { styles } = useDividerClasses(vertical, responsiveAt, className);
  const styleVars = useBgColor
    ? cssColorProps(color)
    : cssColorPropsReversed(color);

  return (
    <div
      style={{
        ...styleVars,
        ...{ "--w": `${width}px` },
        ...style,
      }}
      className={styles}
      {...rest}
    ></div>
  );
}
