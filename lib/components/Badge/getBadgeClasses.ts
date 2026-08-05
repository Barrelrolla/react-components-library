import { twMerge } from "tailwind-merge";
import { BadgeVariant } from "./badgeTypes";

export function getBadgeClasses({
  variant,
  className,
}: {
  variant: BadgeVariant;
  className?: string;
}) {
  return {
    classes: twMerge(
      "badge",
      variant === "solid" && "badge-solid",
      variant === "outline" && "badge-outline",
      variant === "soft" && "badge-soft",
      className,
    ),
  };
}
