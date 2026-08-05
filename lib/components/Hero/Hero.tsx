import { ComponentProps, CSSProperties } from "react";
import { ResponsiveSizes } from "@/types";
import { HeroContextProvider } from "./HeroContext";
import { HeroAlign } from "./HeroTypes";
import { getHeroClasses } from "./getHeroClasses";

export type HeroProps = {
  /** Aligns text to the left or to the center. By default it's `responsive` meaning it's left aligned on big screens and center on small ones. */
  textAlign?: HeroAlign;
  /** Alignment of the actions. By default it's `center` */
  actionsAlign?: HeroAlign;
  /** If the alignment of other components is `responsive`, chooose at which size it changes. */
  responsiveAt?: ResponsiveSizes;
  /** The hero component has a wrapper that has the full page width, use this to apply classes to the wrapper. */
  wrapperClassName?: string;
  /** Stype for the wrapper. */
  wrapperStyle?: CSSProperties;
} & ComponentProps<"div">;

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
