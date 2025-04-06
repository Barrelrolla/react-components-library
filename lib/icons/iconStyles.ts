import { SizeType } from "@/types";
import { IconSizes } from "@/util/sizes";
import { twMerge } from "tailwind-merge";

export function getIconStyles(size: SizeType, className?: string) {
  return twMerge(IconSizes[size], className);
}
