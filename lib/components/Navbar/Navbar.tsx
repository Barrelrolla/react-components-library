import { ComponentProps, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { ColorType } from "@/types";
import { NavbarContext } from "./NavbarContext";
import { ColorMap } from "@/util/colors";

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
  rounded = true,
  children,
  className,
}: NavbarProps) {
  const classes = twMerge(
    "flex items-center justify-between px-4 py-2",
    `bg-${ColorMap[primaryColor].lightShade}`,
    `dark:bg-${ColorMap[secondaryColor].darkShade}`,
    `text-${ColorMap[secondaryColor].darkShade}`,
    `dark:text-${ColorMap[primaryColor].lightShade}`,
    border && "border-b-2",
    rounded && "rounded-b-lg",
    shadow && "shadow-md shadow-stone-700",
    stickToTop && "absolute top-0 left-0 z-40 w-full",
    className,
  );
  const ref = useRef<HTMLElement>(null);
  return (
    <NavbarContext.Provider
      value={{
        primaryColor,
        secondaryColor,
        rounded,
        stickToTop,
        border,
        shadow,
        expandSize: "sm",
        open: false,
        navbarRef: ref,
      }}
    >
      <nav ref={ref} className={classes}>
        {children}
      </nav>
    </NavbarContext.Provider>
  );
}
