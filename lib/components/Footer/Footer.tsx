import { ComponentProps } from "react";
import { getFooterStyles } from "./getFooterStyles";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";

export type FooterProps = {
  color?: ColorType;
  decorations?: boolean;
  containerClasses?: string;
  className?: string;
} & ComponentProps<"footer">;

export function Footer({
  color = "dark",
  decorations = false,
  containerClasses,
  className,
  children,
}: FooterProps) {
  const { containerStyles, styles } = getFooterStyles({
    decorations,
    containerClasses,
    className,
  });

  return (
    <footer className={containerStyles} style={cssColorProps(color)}>
      <div className={styles}>{children}</div>
    </footer>
  );
}
