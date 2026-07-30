import { twMerge } from "tailwind-merge";
import { ThemeContextType } from "@/contexts";
import { ColorType, SizeType } from "@/types";
import { ButtonGroupContextType } from "./ButtonGroupContext";
import { ButtonRadius, ButtonVariant, GhostHover } from "./buttonTypes";

export function getButtonClasses({
  variant,
  ghostHover,
  retainFocusState,
  size,
  isIcon,
  scaling,
  disabled,
  radius,
  color,
  className,
  wrapperClassName,
  theme,
  group,
}: {
  variant?: ButtonVariant;
  ghostHover?: GhostHover;
  retainFocusState: boolean;
  size?: SizeType;
  isIcon: boolean;
  scaling: boolean;
  disabled: boolean;
  radius?: ButtonRadius;
  color?: ColorType;
  className?: string;
  wrapperClassName?: string;
  theme: ThemeContextType;
  group: ButtonGroupContextType;
}) {
  const resolvedVariant = group?.variant || variant || "solid";
  const resolvedGhostHover = group?.ghostHover || ghostHover || "muted";
  const resolvedColor = group?.color || color || "main";
  const resolvedRadius = radius || "default";
  const groupRadius = group?.radius || "default";
  const inGroup = group !== null;
  const shouldRetainFocus =
    (!theme || theme.buttonsRetainFocus) &&
    (!group || group.retainFocusState) &&
    retainFocusState;
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
      inGroup && "btn-grouped",
      !inGroup && resolvedRadius === "default" && "rounded-inputs",
      !inGroup && resolvedRadius === "pill" && "rounded-full",
      inGroup &&
        !group.vertical &&
        groupRadius === "default" &&
        "group-first:rounded-l-(--radius-inputs) group-last:rounded-r-(--radius-inputs)",
      inGroup &&
        !group.vertical &&
        groupRadius === "pill" &&
        "group-first:rounded-l-full group-last:rounded-r-full",
      inGroup &&
        group.vertical &&
        groupRadius === "default" &&
        "group-first:rounded-t-(--radius-inputs) group-last:rounded-b-(--radius-inputs)",
      inGroup &&
        group.vertical &&
        groupRadius === "pill" &&
        "group-first:rounded-t-full group-last:rounded-b-full",
      className,
    ),
    wrapperClasses: twMerge(
      "group",
      disabled && "cursor-not-allowed",
      wrapperClassName,
    ),
    resolvedColor,
  };
}
