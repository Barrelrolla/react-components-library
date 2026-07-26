import { ComponentProps, CSSProperties } from "react";
import { ColorType, ResponsiveSizes } from "@/types";
import { cssColorProps } from "@/util";
import { FooterContextProvider } from "./FooterContext";
import { getFooterClasses } from "./getFooterClasses";

export type FooterProps = {
  /** Color of the footer. */
  color?: ColorType;
  /** Adds a border and rounding. */
  decorations?: boolean;
  /** Size at which the ordering should switch from col to row. */
  responsiveAt?: ResponsiveSizes;
  /** The footer sits inside a continer. Add classes to it here. */
  containerClassName?: string;
  /**Any styles for the container. */
  containerStyle?: CSSProperties;
  className?: string;
} & ComponentProps<"div">;

export function Footer({
  color = "dark",
  decorations = false,
  responsiveAt = "md",
  containerStyle,
  containerClassName,
  className,
  children,
  ...rest
}: FooterProps) {
  const { containerClasses, classes } = getFooterClasses({
    decorations,
    containerClassName,
    className,
  });

  return (
    <FooterContextProvider value={{ color, responsiveAt }}>
      <footer
        className={containerClasses}
        style={{ ...cssColorProps(color), ...containerStyle }}
      >
        <div className={classes} {...rest}>
          {children}
        </div>
      </footer>
    </FooterContextProvider>
  );
}
