import { ColorType } from "@/types";
import { CSSProperties } from "react";

export function cssColorProps(bgColor: ColorType) {
  return {
    "--bg-color": `var(--color-${bgColor})`,
    "--fg-color": `var(--color-${bgColor}-content)`,
  } as CSSProperties;
}
