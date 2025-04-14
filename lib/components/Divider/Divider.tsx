import { ColorType, ResponsiveSizes } from "@/types";
import { useDividerClasses } from "./useDividerStyles";
import { ComponentProps } from "react";

export type DividerProps = {
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  contrasting?: boolean;
  responsiveAt?: ResponsiveSizes;
  vertical?: boolean;
} & ComponentProps<"div">;

export function Divider({
  primaryColor,
  secondaryColor,
  responsiveAt,
  contrasting = true,
  vertical = false,
  className,
}: DividerProps) {
  const classes = useDividerClasses(
    vertical,
    contrasting,
    primaryColor,
    secondaryColor,
    responsiveAt,
    className,
  );
  return <div className={classes}></div>;
}
