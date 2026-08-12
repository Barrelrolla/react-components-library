import { ComponentProps } from "react";
import { getSkeletonClasses } from "./getSkeletonClasses";

export type SkeletonProps = {} & Omit<ComponentProps<"div">, "children">;

/**
 * Animated loading placeholder that renders a subtle pulsing surface shape.
 *
 * Used to mimic the layout layout dimensions (width, height, and border-radius) of pending content
 * while data loads. Defaults to `--radius-containers` for rounded corner styling.
 */
export function Skeleton({ className, ...rest }: SkeletonProps) {
  const { classes } = getSkeletonClasses({ className });
  return <div className={classes} {...rest} />;
}
