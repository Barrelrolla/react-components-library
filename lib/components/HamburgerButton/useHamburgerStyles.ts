import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";
import { ColorType } from "@/types";
import { ColorMap } from "@/util";

interface HamburgerStyles {
  button: string;
  container: string;
  topLine: string;
  midLine: string;
  botLine: string;
}

export function useHamburgerStyles(
  contrasting: boolean,
  isOpen: boolean,
  primaryColor?: ColorType,
  secondaryColor?: ColorType,
  className?: string,
): HamburgerStyles {
  const theme = useTheme();
  const transitions = theme === undefined || theme.transitions;
  const primary = ColorMap[primaryColor || theme?.primaryColor || "black"];
  const secondary =
    ColorMap[secondaryColor || theme?.secondaryColor || "white"];

  const button = twMerge("px-1 py-0 hover:outline-2", className);
  const container = twMerge(
    "relative h-4.5 w-6 p-4",
    // transitions && "transition-all duration-300",
    // isOpen && "rotate-90",
  );
  const lineClasses = twMerge(
    `bg-${primary.dark}`,
    contrasting && `dark:bg-${secondary.light}`,
    "absolute top-1.75 left-1 h-0.5 w-6 rotate-0",
    transitions && "transition-all",
  );
  const topLine = twMerge(
    lineClasses,
    isOpen && "origin-top-right -translate-x-1 -rotate-45",
  );
  const midLine = twMerge(lineClasses, "translate-y-2", isOpen && "opacity-0");
  const botLine = twMerge(
    lineClasses,
    "translate-y-4",
    isOpen && "origin-bottom-right -translate-x-1 rotate-45",
  );

  return {
    button,
    container,
    topLine,
    midLine,
    botLine,
  };
}
