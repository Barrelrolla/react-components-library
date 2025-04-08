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
  fixed?: boolean;
  rounded?: boolean;
}
export function Navbar({
  primaryColor = "white",
  secondaryColor = "black",
  border = true,
  shadow = true,
  fixed = true,
  rounded = true,
  children,
  className,
}: NavbarProps) {
  const navClasses = twMerge(
    "w-full p-2 transition-all",
    `bg-${ColorMap[primaryColor].lightShade}`,
    `dark:bg-${ColorMap[secondaryColor].darkShade}`,
    `text-${ColorMap[secondaryColor].darkShade}`,
    `dark:text-${ColorMap[primaryColor].lightShade}`,
    fixed && "fixed top-0 left-0 z-40",
    border && "border-b-2",
    rounded && "rounded-b-lg",
    shadow && "shadow-md shadow-stone-700",
    className,
  );
  const containerClasses = twMerge(
    "flex flex-wrap items-center justify-between transition-all",
  );
  const ref = useRef<HTMLElement>(null);
  return (
    <NavbarContext.Provider
      value={{
        primaryColor,
        secondaryColor,
        rounded,
        fixed,
        border,
        shadow,
        expandSize: "sm",
        open: false,
        navbarRef: ref,
      }}
    >
      <nav ref={ref} className={navClasses}>
        <div className={containerClasses}>{children}</div>
      </nav>
    </NavbarContext.Provider>
  );
}
