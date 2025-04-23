import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";

interface HamburgerStyles {
  button: string;
  container: string;
  topLine: string;
  midLine: string;
  botLine: string;
}

export function useHamburgerStyles(
  isOpen: boolean,
  transitions: boolean,
  className?: string,
): HamburgerStyles {
  const theme = useTheme();
  const hasTransitions = (!theme || theme.transitions) && transitions;
  const button = twMerge("group px-1 py-0", className);
  const container = twMerge(
    "relative h-4.5 w-6 p-4",
    // hasTransitions && "transition-all duration-300",
    // isOpen && "rotate-90",
  );
  const lineClasses = twMerge(
    "group-hover:bg-hover group-focus-visible:bg-hover group-active:bg-active absolute top-1.75 left-1 h-0.5 w-6 rotate-0 bg-(--bg-color)",
    hasTransitions && "transition-all",
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
