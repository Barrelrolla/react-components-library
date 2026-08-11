import { ComponentProps } from "react";
import { ColorType, ResponsiveSizes } from "@/types";
import { cssColorProps, cssColorPropsReversed } from "@/util";
import { getDividerClasses } from "./getDividerClasses";

export type DividerProps = {
  /** Color variant applied to the divider. */
  color?: ColorType;
  /** Uses the theme's background color variable instead of the default foreground/border color. */
  useBgColor?: boolean;
  /** Custom thickness/width of the divider line in pixels. */
  width?: number;
  /** Breakpoint size at which the divider automatically switches orientation between horizontal and vertical. */
  responsiveAt?: ResponsiveSizes;
  /** Displays the divider vertically instead of horizontally. */
  vertical?: boolean;
} & ComponentProps<"div">;

/**
 * A decorative separator line used to group or separate content horizontally or vertically.
 *
 * Supports theme color variants, custom thickness, and responsive orientation switching.
 */
export function Divider({
  color = "main",
  useBgColor = true,
  width = 1,
  responsiveAt,
  vertical = false,
  style,
  className,
  ...rest
}: DividerProps) {
  const { classes } = getDividerClasses(vertical, responsiveAt, className);
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
      className={classes}
      {...rest}
    ></div>
  );
}
