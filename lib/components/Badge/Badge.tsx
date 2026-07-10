import { ComponentProps } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { twMerge } from "tailwind-merge";

export type BadgeProps = {
  /** Badge text color theme. */
  color?: ColorType;
} & ComponentProps<"div">;

export function Badge({
  color = "main",
  style,
  className,
  ...rest
}: BadgeProps) {
  return (
    <div
      style={{ ...cssColorProps(color), ...style }}
      className={twMerge("badge", className)}
      {...rest}
    />
  );
}
