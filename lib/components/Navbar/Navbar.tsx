import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { ColorType } from "@/types";
import { colors } from "@/util/colors";
import { NavbarContext } from "./NavbarContext";

interface NavbarProps extends ComponentProps<"nav"> {
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
  shadow?: boolean;
  border?: boolean;
  stickToTop?: boolean;
  rounded?: boolean;
}
export function Navbar({
  primaryColor = "white",
  secondaryColor = "black",
  border = true,
  shadow = true,
  stickToTop = true,
  rounded = false,
  children,
  className,
}: NavbarProps) {
  const classes = twMerge(
    "flex items-center justify-between px-4 py-2",
    colors[primaryColor].lightShade.regular.bgColor,
    colors[secondaryColor].darkShade.dark.bgColor,
    colors[secondaryColor].darkShade.regular.textColor,
    colors[primaryColor].lightShade.dark.textColor,
    border && "border-b-2",
    rounded && "rounded-b-lg",
    shadow && "shadow-md shadow-stone-700",
    stickToTop && "absolute top-0 left-0 z-40 w-full",
    className,
  );
  return (
    <NavbarContext.Provider
      value={{
        primaryColor,
        secondaryColor,
        rounded,
        stickToTop,
        border,
        shadow,
      }}
    >
      <nav className={classes}>{children}</nav>
    </NavbarContext.Provider>
  );
}
