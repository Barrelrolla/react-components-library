import { ComponentProps } from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { getSheetClasses } from "./getSheetClasses";

export type SheetProps = {
  color?: ColorType;
} & ComponentProps<"div">;

export function Sheet({
  color = "main",
  style,
  className,
  children,
  ...rest
}: SheetProps) {
  const { classes } = getSheetClasses({ className });
  const styles = { ...cssColorProps(color), ...style };
  return (
    <div style={styles} className={classes} {...rest}>
      {children}
    </div>
  );
}
