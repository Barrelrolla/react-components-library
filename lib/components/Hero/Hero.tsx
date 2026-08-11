import { ComponentProps, CSSProperties } from "react";
import { ResponsiveSizes } from "@/types";
import { HeroContextProvider } from "./HeroContext";
import { HeroAlign } from "./HeroTypes";
import { getHeroClasses } from "./getHeroClasses";

export type HeroProps = {
  /** Text alignment strategy for headings and copy within the hero section. */
  textAlign?: HeroAlign;
  /** Alignment strategy for action elements, such as call-to-action buttons. */
  actionsAlign?: HeroAlign;
  /** Breakpoint size at which responsive alignment shifts between mobile and desktop modes. */
  responsiveAt?: ResponsiveSizes;
  /** Additional CSS class names applied to the full-width outer wrapper element. */
  wrapperClassName?: string;
  /** Inline CSS properties applied to the full-width outer wrapper element. */
  wrapperStyle?: CSSProperties;
} & ComponentProps<"div">;

/**
 * Prominent landing section component for presenting primary headlines, body text, and call-to-action elements.
 *
 * Includes configurable text and action alignments with built-in responsive behavior, wrapped in a full-width container.
 */
export function Hero({
  textAlign = "responsive",
  actionsAlign = "center",
  responsiveAt = "md",
  wrapperClassName,
  wrapperStyle,
  className,
  children,
  ...rest
}: HeroProps) {
  const { classes, wrapperClasses } = getHeroClasses({
    responsiveAt,
    wrapperClassName,
    className,
  });
  return (
    <HeroContextProvider value={{ textAlign, actionsAlign, responsiveAt }}>
      <section style={wrapperStyle} className={wrapperClasses}>
        <div className={classes} {...rest}>
          {children}
        </div>
      </section>
    </HeroContextProvider>
  );
}
