import { ComponentProps, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const navClasses = twMerge(
    "flex w-full flex-wrap items-center justify-between p-2",
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
        isOpen,
        setIsOpen,
      }}
    >
      <nav className={navClasses}>{children}</nav>
    </NavbarContext.Provider>
  );
}
