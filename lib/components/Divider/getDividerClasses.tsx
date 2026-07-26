import { twMerge } from "tailwind-merge";
import { ResponsiveSizes } from "@/types";

export function getDividerClasses(
  vertical: boolean,
  responsiveAt?: ResponsiveSizes,
  className?: string,
) {
  return {
    classes: twMerge(
      "bg-(--bg-color)",
      !vertical && getHorizontalClasses(),
      vertical && getVerticalClasses(),
      className,
    ),
  };

  function getHorizontalClasses() {
    return twMerge(
      "h-(--w) w-full",
      responsiveAt === "sm" && "sm:h-full sm:w-(--w)",
      responsiveAt === "md" && "md:h-full md:w-(--w)",
      responsiveAt === "lg" && "lg:h-full lg:w-(--w)",
      responsiveAt === "xl" && "xl:h-full xl:w-(--w)",
    );
  }

  function getVerticalClasses() {
    return twMerge(
      "h-full w-(--w)",
      responsiveAt === "sm" && "sm:h-(--w) sm:w-full",
      responsiveAt === "md" && "md:h-(--w) md:w-full",
      responsiveAt === "lg" && "lg:h-(--w) lg:w-full",
      responsiveAt === "xl" && "xl:h-(--w) xl:w-full",
    );
  }
}
