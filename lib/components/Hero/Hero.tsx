import { ComponentProps } from "react";
import { HeroContextProvider } from "./HeroContext";
import { useHeroStyles } from "./useHeroStyles";
import { ResponsiveSizes } from "@/types";
import { HeroAlign } from "./HeroTypes";

export type HeroProps = {
  /** Aligns text to the left or to the center. By default it's `responsive` meaning it's left aligned on big screens and center on small ones. */
  textAlign?: HeroAlign;
  /** Alignment of the actions. By default it's `center` */
  actionsAlign?: HeroAlign;
  /** If the alignment of other components is `responsive`, chooose at which size it changes. */
  responsiveAt?: ResponsiveSizes;
} & ComponentProps<"div">;

/** Hero component for your main page */
export function Hero({
  textAlign = "responsive",
  actionsAlign = "center",
  responsiveAt = "md",
  className,
  children,
}: HeroProps) {
  const { classes } = useHeroStyles({ responsiveAt, className });
  return (
    <HeroContextProvider value={{ textAlign, actionsAlign, responsiveAt }}>
      <section className={classes}>{children}</section>
    </HeroContextProvider>
  );
}
