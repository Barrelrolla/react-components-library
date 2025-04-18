import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";
import { ColorType, ResponsiveSizes } from "@/types";
import { ColorMap } from "@/util";

export function useDividerClasses(
  vertical: boolean,
  contrasting: boolean,
  primaryColor?: ColorType,
  secondaryColor?: ColorType,
  responsiveAt?: ResponsiveSizes,
  className?: string,
) {
  const theme = useTheme();
  const primary = ColorMap[primaryColor || theme?.primaryColor || "black"];
  const secondary =
    ColorMap[secondaryColor || theme?.secondaryColor || "white"];

  return twMerge(
    `bg-${primary.dark}`,
    contrasting && `dark:bg-${secondary.light}`,
    !vertical && getHorizontalStyles(),
    vertical && getVerticalStyles(),
    className,
  );

  function getHorizontalStyles() {
    return twMerge(
      "h-0.5 w-full",
      responsiveAt === "sm" && "sm:h-full sm:w-0.5",
      responsiveAt === "md" && "md:h-full md:w-0.5",
      responsiveAt === "lg" && "lg:h-full lg:w-0.5",
      responsiveAt === "xl" && "xl:h-full xl:w-0.5",
    );
  }

  function getVerticalStyles() {
    return twMerge(
      "h-full w-0.5",
      responsiveAt === "sm" && "sm:h-0.5 sm:w-full",
      responsiveAt === "md" && "md:h-0.5 md:w-full",
      responsiveAt === "lg" && "lg:h-0.5 lg:w-full",
      responsiveAt === "xl" && "xl:h-0.5 xl:w-full",
    );
  }
}
