import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";

interface HamburgerStyles {
  button: string;
  container: string;
  topLine: string;
  midLine: string;
  botLine: string;
}

export function useHamburgerStyles({
  isOpen,
  transitions,
  className,
}: {
  isOpen: boolean;
  transitions: boolean;
  className?: string;
}): HamburgerStyles {
  const theme = useTheme();
  const hasTransitions = (!theme || theme.transitions) && transitions;
  const button = twMerge("group px-1 py-0", className);
  const container = twMerge("hamburger");
  const lineClasses = twMerge(
    "hamburger-line",
    hasTransitions && "transition-all duration-(--dropdown-animation-duration)",
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
