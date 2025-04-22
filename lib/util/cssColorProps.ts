import { ColorType } from "@/types";
import { CSSProperties } from "react";

export function cssColorProps(color: ColorType) {
  return {
    "--bg-color": `var(--color-${color})`,
    "--fg-color": `var(--color-${color}-content)`,
    "--h": `var(--mod-highlight-${color}, var(--mod-highlight))`,
  } as CSSProperties;
}

export function cssColorPropsReversed(color: ColorType) {
  return {
    "--bg-color": `var(--color-${color}-content)`,
    "--fg-color": `var(--color-${color})`,
    "--h": `var(--mod-highlight-${color}, var(--mod-highlight))`,
  } as CSSProperties;
}

export function cssColorUniform(color: ColorType) {
  return {
    "--bg-color": `var(--color-${color}-content)`,
    "--fg-color": `var(--color-${color}-content)`,
    "--h": `var(--mod-highlight-${color}, var(--mod-highlight))`,
  } as CSSProperties;
}
