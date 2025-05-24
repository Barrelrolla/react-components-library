"use client";

import { ComponentProps } from "react";
import { ColorType, ResponsiveSizes } from "@/types";
import { cssColorProps } from "@/util";
import { FooterContextProvider } from "./FooterContext";
import { useFooterStyles } from "./useFooterStyles";

export type FooterProps = {
  /** Color of the footer. */
  color?: ColorType;
  /** Adds a border and rounding. */
  decorations?: boolean;
  /** Size at which the ordering should switch from col to row. */
  responsiveAt?: ResponsiveSizes;
  /** The footer sits inside a continer. Add classes to it here. */
  containerClasses?: string;
  className?: string;
} & ComponentProps<"div">;

export function Footer({
  color = "dark",
  decorations = false,
  responsiveAt = "md",
  containerClasses,
  className,
  children,
  ...rest
}: FooterProps) {
  const { containerStyles, styles } = useFooterStyles({
    decorations,
    containerClasses,
    className,
  });

  return (
    <FooterContextProvider value={{ color, responsiveAt }}>
      <footer className={containerStyles} style={cssColorProps(color)}>
        <div className={styles} {...rest}>
          {children}
        </div>
      </footer>
    </FooterContextProvider>
  );
}
