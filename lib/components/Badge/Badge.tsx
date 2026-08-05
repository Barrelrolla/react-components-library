import { ComponentProps } from "react";
import { ColorType } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { getBadgeClasses } from "./getBadgeClasses";
import { BadgeVariant } from "./badgeTypes";

export type BadgeProps = {
  /** Badge text color. */
  color?: ColorType;
  variant?: BadgeVariant;
} & ComponentProps<"div">;

export function Badge({
  color = "primary",
  variant = "soft",
  style,
  className,
  ...rest
}: BadgeProps) {
  const { classes } = getBadgeClasses({ className, variant });

  return (
    <div
      style={{ ...cssColorPropsReversed(color), ...style }}
      className={classes}
      {...rest}
    />
  );
}
