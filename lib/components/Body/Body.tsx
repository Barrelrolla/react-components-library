import { PropsWithChildren } from "react";
import { useTheme } from "@/contexts";
import { ColorType } from "@/types";
import { ColorMap } from "@/util";

export type BodyProps = {
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
} & PropsWithChildren;
export function Body({ primaryColor, secondaryColor, children }: BodyProps) {
  const theme = useTheme();
  const primary = ColorMap[primaryColor || theme?.primaryColor || "white"];
  const secondary =
    ColorMap[secondaryColor || theme?.secondaryColor || "black"];
  document.body.classList.add(
    `bg-${secondary.light}`,
    `text-${primary.dark}`,
    `dark:bg-${primary.dark}`,
    `dark:text-${secondary.light}`,
  );

  return <>{children}</>;
}
