import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";
import { ColorType, InputRadius } from "@/types";
import { ButtonVariant } from "./buttonTypes";

export function useButtonGroupStyles({
  color = "primary",
  variant = "solid",
  radius,
  vertical,
  divider,
  className,
  dividerClasses,
}: {
  color?: ColorType;
  variant?: ButtonVariant;
  radius?: InputRadius;
  vertical: boolean;
  divider: boolean;
  className?: string;
  dividerClasses?: string;
}) {
  const theme = useTheme();
  const resolvedRadiues = radius || theme?.inputsRadius || "small";
  const groupStyles = twMerge(
    "btn-group",
    variant === "outline" && "inset-ring inset-ring-(--bg-color)",
    vertical && "flex-col",
    resolvedRadiues === "small" && "rounded",
    resolvedRadiues === "full" && "rounded-full",
    className,
  );

  const dividerStyles = divider
    ? twMerge(
        "bg-(--bg-color)",
        variant === "solid" && "bg-(--fg-color)",
        !vertical && "w-0.25",
        vertical && "h-0.25",
        "z-1",
        dividerClasses,
      )
    : "";

  return {
    groupStyles,
    dividerStyles,
    resolvedColor: color,
  };
}
