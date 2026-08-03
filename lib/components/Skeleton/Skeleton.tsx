import { ComponentProps } from "react";
import { getSkeletonClasses } from "./getSkeletonClasses";

export type SkeletonProps = {} & Omit<ComponentProps<"div">, "children">;

export function Skeleton({ className, ...rest }: SkeletonProps) {
  const { classes } = getSkeletonClasses({ className });
  return <div className={classes} {...rest} />;
}
