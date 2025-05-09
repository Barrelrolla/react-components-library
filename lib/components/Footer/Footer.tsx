import { ComponentProps } from "react";
import { getFooterStyles } from "./getFooterStyles";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";

export type FooterProps = {
  className?: string;
  color?: ColorType;
} & ComponentProps<"footer">;

export function Footer({ className, color = "dark", children }: FooterProps) {
  const { containerStyles, styles } = getFooterStyles({ className });

  return (
    <footer className={containerStyles} style={cssColorProps(color)}>
      <div className={styles}>{children}</div>
    </footer>
  );
}
