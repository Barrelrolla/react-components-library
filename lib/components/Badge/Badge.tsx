import { ComponentProps } from "react";
import { ColorType } from "@/types";
import { cssColorProps, cssColorPropsReversed } from "@/util";
import { getBadgeClasses } from "./getBadgeClasses";

export type BadgeProps = {
  /** Badge text color. */
  color?: ColorType;
} & ComponentProps<"div">;

export function Badge({
  color = "main",
  style,
  className,
  ...rest
}: BadgeProps) {
  const { classes } = getBadgeClasses({ className });
  const colorStyle =
    color === "light" || color === "dark"
      ? { ...cssColorPropsReversed(color) }
      : { ...cssColorProps(color) };
  return (
    <div style={{ ...colorStyle, ...style }} className={classes} {...rest} />
  );
}
