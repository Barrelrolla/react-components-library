import { ComponentProps } from "react";
import { getFooterStyles } from "./getFooterStyles";
import { ColorType, ResponsiveSizes } from "@/types";
import { cssColorProps } from "@/util";
import { FooterContextProvider } from "./FooterContext";

export type FooterProps = {
  color?: ColorType;
  decorations?: boolean;
  responsiveAt?: ResponsiveSizes;
  containerClasses?: string;
  className?: string;
} & ComponentProps<"footer">;

export function Footer({
  color = "dark",
  decorations = false,
  responsiveAt = "md",
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
    <FooterContextProvider value={{ color, responsiveAt }}>
      <footer className={containerStyles} style={cssColorProps(color)}>
        <div className={styles}>{children}</div>
      </footer>
    </FooterContextProvider>
  );
}
