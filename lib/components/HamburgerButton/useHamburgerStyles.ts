import { twMerge } from "tailwind-merge";

interface HamburgerStyles {
  button: string;
  container: string;
  topLine: string;
  midLine: string;
  botLine: string;
}

export function useHamburgerStyles({
  isOpen,
  className,
}: {
  isOpen: boolean;
  className?: string;
}): HamburgerStyles {
  const button = twMerge("group px-1 py-0", className);
  const container = "hamburger";
  const lineClasses = "hamburger-line";
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
