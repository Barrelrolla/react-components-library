import { twMerge } from "tailwind-merge";
import { ResponsiveSizes } from "@/types";

export function useDividerClasses(
  vertical: boolean,
  responsiveAt?: ResponsiveSizes,
  className?: string,
) {
  return {
    styles: twMerge(
      "bg-(--bg-color)",
      !vertical && getHorizontalStyles(),
      vertical && getVerticalStyles(),
      className,
    ),
  };

  function getHorizontalStyles() {
    return twMerge(
      "h-(--w) w-full",
      responsiveAt === "sm" && "sm:h-full sm:w-(--w)",
      responsiveAt === "md" && "md:h-full md:w-(--w)",
      responsiveAt === "lg" && "lg:h-full lg:w-(--w)",
      responsiveAt === "xl" && "xl:h-full xl:w-(--w)",
    );
  }

  function getVerticalStyles() {
    return twMerge(
      "h-full w-(--w)",
      responsiveAt === "sm" && "sm:h-(--w) sm:w-full",
      responsiveAt === "md" && "md:h-(--w) md:w-full",
      responsiveAt === "lg" && "lg:h-(--w) lg:w-full",
      responsiveAt === "xl" && "xl:h-(--w) xl:w-full",
    );
  }
}
