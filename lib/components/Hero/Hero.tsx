"use client";

import { ComponentProps } from "react";
import { ColorType, ResponsiveSizes } from "@/types";
import { HeroContextProvider } from "./HeroContext";
import { HeroAlign } from "./HeroTypes";
import { useHeroStyles } from "./useHeroStyles";
import { cssColorProps } from "@/util";

export type HeroProps = {
  /** Hero color */
  color?: ColorType;
  /** Aligns text to the left or to the center. By default it's `responsive` meaning it's left aligned on big screens and center on small ones. */
  textAlign?: HeroAlign;
  /** Alignment of the actions. By default it's `center` */
  actionsAlign?: HeroAlign;
  /** If the alignment of other components is `responsive`, chooose at which size it changes. */
  responsiveAt?: ResponsiveSizes;
  /** The hero component has a wrapper that has the full page width, use this to apply styles to the wrapper. */
  wrapperClasses?: string;
} & ComponentProps<"div">;

export function Hero({
  color,
  textAlign = "responsive",
  actionsAlign = "center",
  responsiveAt = "md",
  wrapperClasses,
  style,
  className,
  children,
  ...rest
}: HeroProps) {
  const { styles, wrapperStyles } = useHeroStyles({
    responsiveAt,
    wrapperClasses,
    className,
  });
  const styleVars = color ? cssColorProps(color) : {};
  return (
    <HeroContextProvider value={{ textAlign, actionsAlign, responsiveAt }}>
      <section style={{ ...styleVars, ...style }} className={wrapperStyles}>
        <div className={styles} {...rest}>
          {children}
        </div>
      </section>
    </HeroContextProvider>
  );
}
