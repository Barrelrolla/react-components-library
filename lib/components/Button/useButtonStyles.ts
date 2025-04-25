import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";
import { ColorType, InputRadius, SizeType } from "@/types";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { ButtonVariant, GhostHover } from "./buttonTypes";

export function useButtonStyles({
  variant,
  ghostHover,
  retainFocusState,
  size,
  isIcon,
  scaling,
  transitions,
  disabled,
  radius,
  color,
  className,
  wrapperClasses,
}: {
  variant?: ButtonVariant;
  ghostHover?: GhostHover;
  retainFocusState: boolean;
  size?: SizeType;
  isIcon: boolean;
  scaling: boolean;
  transitions: boolean;
  disabled: boolean;
  radius?: InputRadius;
  color?: ColorType;
  className?: string;
  wrapperClasses?: string;
}) {
  const theme = useTheme();
  const group = useButtonGroupContext();

  const resolvedVariant = group?.variant || variant || "solid";
  const resolvedGhostHover = group?.ghostHover || ghostHover || "none";
  const resolvedColor = group?.color || color || "primary";
  const resolvedRadius = radius || theme?.inputsRadius || "small";
  const groupRadius = group?.radius || theme?.inputsRadius || "small";
  const inGroup = group !== undefined;
  const shouldRetainFocus =
    (!theme || theme.buttonsRetainFocus) &&
    (!group || group.retainFocusState) &&
    retainFocusState;
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
      resolvedVariant === "outline" && shouldRetainFocus && "btn-outline-focus",
      resolvedVariant === "ghost" &&
        shouldRetainFocus &&
        `btn-ghost-${resolvedGhostHover}-focus`,
      !isIcon && `btn-${group?.size || size || "md"}`,
      isIcon && `btn-icon-${group?.size || size || "md"}`,
      (variant === "ghost" || group?.variant === "ghost") &&
        `btn-ghost-${resolvedGhostHover}`,
      hasScaling && "active:scale-[98%]",
      hasTransitions && "transition",
      inGroup && "btn-grouped",
      !inGroup && resolvedRadius === "small" && "rounded",
      !inGroup && resolvedRadius === "full" && "rounded-full",
      inGroup &&
        !group.vertical &&
        groupRadius === "small" &&
        "group-first:rounded-l group-last:rounded-r",
      inGroup &&
        !group.vertical &&
        groupRadius === "full" &&
        "group-first:rounded-l-full group-last:rounded-r-full",
      inGroup &&
        group.vertical &&
        group.radius === "small" &&
        "group-first:rounded-t group-last:rounded-b",
      inGroup &&
        group.vertical &&
        groupRadius === "full" &&
        "group-first:rounded-t-full group-last:rounded-b-full",
      className,
    ),
    wrapperStyles: twMerge(
      "group",
      disabled && "cursor-not-allowed",
      wrapperClasses,
    ),
    resolvedColor,
  };
}
