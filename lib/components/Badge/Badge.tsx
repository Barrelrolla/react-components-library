import { ComponentProps } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { twMerge } from "tailwind-merge";

export type BadgeProps = {
  /** Badge text color theme. */
  color?: ColorType;
  className?: string;
} & ComponentProps<"div">;

export function Badge({ className, color = "main", ...rest }: BadgeProps) {
  return (
    <div
      style={cssColorProps(color)}
      className={twMerge("badge", className)}
      {...rest}
    />
  );
}
