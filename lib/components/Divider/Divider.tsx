import { ColorType, ResponsiveSizes } from "@/types";
import { useDividerClasses } from "./useDividerStyles";
import { ComponentProps } from "react";
import { cssColorProps } from "@/util/cssColorProps";

export type DividerProps = {
  color?: ColorType;
  responsiveAt?: ResponsiveSizes;
  vertical?: boolean;
} & ComponentProps<"div">;

export function Divider({
  color = "main",
  responsiveAt,
  vertical = false,
  className,
}: DividerProps) {
  const classes = useDividerClasses(vertical, responsiveAt, className);
  return <div style={cssColorProps(color)} className={classes}></div>;
}
