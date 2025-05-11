import { twMerge } from "tailwind-merge";
import { useTheme } from "@/contexts";
import { ColorType, SizeType } from "@/types";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { ButtonRadius, ButtonVariant, GhostHover } from "./buttonTypes";

export function useButtonStyles({
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
  wrapperClasses,
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
  wrapperClasses?: string;
}) {
  const theme = useTheme();
  const group = useButtonGroupContext();

  const resolvedVariant = group?.variant || variant || "solid";
  const resolvedGhostHover = group?.ghostHover || ghostHover || "none";
  const resolvedColor = group?.color || color || "primary";
  const resolvedRadius = radius || "default";
  const groupRadius = group?.radius || "default";
  const inGroup = group !== undefined;
  const shouldRetainFocus =
    (!theme || theme.buttonsRetainFocus) &&
    (!group || group.retainFocusState) &&
    retainFocusState;
  const hasScaling =
    (!theme || theme.scalingButtons) && (!group || group.scaling) && scaling;

  return {
    styles: twMerge(
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
    wrapperStyles: twMerge(
      "group",
      disabled && "cursor-not-allowed",
      wrapperClasses,
    ),
    resolvedColor,
  };
}
