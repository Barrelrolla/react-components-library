import { ComponentProps } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { getBadgeClasses } from "./getBadgeClasses";
import { BadgeVariant } from "./badgeTypes";

export type BadgeProps = {
  /** Color variant of the badge. */
  color?: ColorType;
  /** Visual style variant. */
  variant?: BadgeVariant;
} & ComponentProps<"div">;

/**
 * Small status indicator used to highlight tags, counts, or metadata.
 */
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
      style={{ ...cssColorProps(color), ...style }}
      className={classes}
      {...rest}
    />
  );
}
