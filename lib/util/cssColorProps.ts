import { ColorType } from "@/types";
import { CSSProperties } from "react";

export function cssColorProps(color: ColorType) {
  return {
    "--bg-color": `var(--color-${color}${color === "main" ? "-content" : ""})`,
    "--fg-color": `var(--color-${color}${color === "main" ? "" : "-content"})`,
    "--h": `var(--mod-highlight-${color}, var(--mod-highlight))`,
  } as CSSProperties;
}

export function cssColorPropsReversed(color: ColorType) {
  return {
    "--bg-color": `var(--color-${color}${color === "main" ? "" : "-content"})`,
    "--fg-color": `var(--color-${color}${color === "main" ? "-content" : ""})`,
    "--h": `var(--mod-highlight-${color}, var(--mod-highlight))`,
  } as CSSProperties;
}
