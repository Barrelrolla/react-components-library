import { cn } from "@/util";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { button, ButtonVariantProps } from "./buttonTypes";
import { useTheme } from "@/contexts";

export function useButtonStyles(
  { variant, radius, scaling, ghostHover, size, icon }: ButtonVariantProps,
  transitions: boolean,
  className: string,
) {
  const theme = useTheme();
  const group = useButtonGroupContext();
  const resolvedTransitions =
    (!theme || theme.transitions) &&
    (!group || group.transitions) &&
    transitions;
  const hasScaling =
    (!theme || theme.scalingButtons) && (!group || group.scaling) && scaling;
  const resolvedGhostHover =
    group && group.variant === "ghost"
      ? group.ghostHover
      : variant === "ghost"
        ? ghostHover
        : null;

  return cn(
    button({
      variant: group?.variant || variant || "solid",
      radius: group !== undefined ? "rect" : radius || "default",
      scaling: hasScaling,
      ghostHover: resolvedGhostHover,
      size: group?.size || size,
      icon,
    }),
    resolvedTransitions && "transition",
    group && "rounded-none border-none",
    group &&
      group.radius === "default" &&
      "group-first:rounded-l group-last:rounded-r",
    group &&
      group.radius === "pill" &&
      "group-first:rounded-l-full group-last:rounded-r-full",
    className,
  );
}
