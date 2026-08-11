import { ComponentProps, CSSProperties } from "react";
import { ColorType, ResponsiveSizes } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { FooterContextProvider } from "./FooterContext";
import { getFooterClasses } from "./getFooterClasses";

export type FooterProps = {
  /** Color variant applied to the footer background and text styles. */
  color?: ColorType;
  /** Applies decorative borders and outer corner rounding. */
  decorations?: boolean;
  /** Breakpoint size at which the internal layout shifts from column to row orientation. */
  responsiveAt?: ResponsiveSizes;
  /** Additional CSS class names applied to the internal container element. */
  containerClassName?: string;
  /** Inline CSS properties applied to the internal container element. */
  containerStyle?: CSSProperties;
  /** Additional CSS class names applied directly to the footer wrapper. */
  className?: string;
} & ComponentProps<"div">;

/**
 * Page footer layout component with customizable color variants, responsive column-to-row layout switching, and container styling.
 */
export function Footer({
  color = "neutral",
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
        style={{ ...cssColorPropsReversed(color), ...containerStyle }}
      >
        <div className={classes} {...rest}>
          {children}
        </div>
      </footer>
    </FooterContextProvider>
  );
}
