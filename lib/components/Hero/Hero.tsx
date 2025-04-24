import { ComponentProps } from "react";
import { HeroContextProvider } from "./HeroContext";
import { useHeroStyles } from "./useHeroStyles";
import { ResponsiveSizes } from "@/types";
import { HeroAlign } from "./HeroTypes";

export type HeroProps = {
  textAlign?: HeroAlign;
  actionsAlign?: HeroAlign;
  responsiveAt?: ResponsiveSizes;
} & ComponentProps<"div">;

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
