import { cn } from "@/util";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { button, ButtonVariantProps } from "./buttonTypes";
import { useTheme } from "@/contexts";

export function useButtonStyles(
  {
    variant,
    radius,
    scaling,
    transitions,
    ghostHover,
    size,
    icon,
  }: ButtonVariantProps,
  className: string,
) {
  const theme = useTheme();
  const group = useButtonGroupContext();
  const resolvedTransitions =
    (!theme || theme.transitions) &&
    (!group || group.transitions) &&
    transitions;
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
      scaling: group?.scaling || scaling,
      ghostHover: resolvedGhostHover,
      transitions: resolvedTransitions,
      size: group?.size || size,
      icon,
    }),
    className,
  );
}
