import { twMerge } from "tailwind-merge";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { ButtonVariant, GhostHover } from "./buttonTypes";
import { useTheme } from "@/contexts";
import { ColorType, InputRadius, SizeType } from "@/types";

export function useButtonStyles(
  variant: ButtonVariant,
  ghostHover: GhostHover,
  size: SizeType,
  icon: boolean,
  scaling: boolean,
  transitions: boolean,
  radius?: InputRadius,
  color?: ColorType,
  className?: string,
) {
  const theme = useTheme();
  const group = useButtonGroupContext();

  const resolvedVariant = group?.variant || variant;
  const resolvedGhostHover = group?.ghostHover || ghostHover;
  const resolvedColor = group?.color || color || "primary";
  const resolvedRadius = radius || theme?.inputsRadius || "small";
  const groupRadius = group?.radius || theme?.inputsRadius || "small";
  const hasTransitions =
    (!theme || theme.transitions) &&
    (!group || group.transitions) &&
    transitions;
  const hasScaling =
    (!theme || theme.scalingButtons) && (!group || group.scaling) && scaling;

  return {
    classes: twMerge(
      "btn",
      `btn-${resolvedVariant}`,
      !icon && `btn-${group?.size || size}`,
      (variant === "ghost" || group?.variant === "ghost") &&
        `btn-ghost-${resolvedGhostHover}`,
      hasScaling && "active:scale-[99%]",
      hasTransitions && "transition",
      !group && resolvedRadius === "small" && "rounded",
      !group && resolvedRadius === "full" && "rounded-full",
      group && "rounded-none border-none",
      group &&
        groupRadius === "small" &&
        "group-first:rounded-l group-last:rounded-r",
      group &&
        groupRadius === "full" &&
        "group-first:rounded-l-full group-last:rounded-r-full",
      className,
    ),
    resolvedColor,
  };
}
