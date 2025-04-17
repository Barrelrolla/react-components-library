import { twMerge } from "tailwind-merge";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import { useTheme } from "@/contexts";
import { SizeType } from "@/types";
import { ButtonSizes, IconButtonSizes } from "@/util";

interface ButtonColors {
  bgColor: string;
  bgHoverColor: string;
  bgActiveColor: string;
  textColor: string;
  textHoverColor: string;
  textActiveColor: string;
  outlineColor: string;
  outlineHoverColor: string;
  outlineActiveColor: string;
}

export function useButtonStyles(
  variant: ButtonVariant,
  raidus: ButtonRadius,
  clearButtonHover: ClearButtonHover,
  size: SizeType,
  icon: boolean,
  highlights: boolean,
  scaling: boolean,
  selected: boolean,
  transitions: boolean,
  classes?: string,
) {
  const theme = useTheme();
  const group = useButtonGroupContext();
  const {
    bgColor,
    bgHoverColor,
    bgActiveColor,
    textColor,
    textHoverColor,
    textActiveColor,
    outlineColor,
    outlineHoverColor,
    outlineActiveColor,
  } = getButtonColors(
    group?.variant || variant,
    group?.clearButtonHover || clearButtonHover,
  );
  const hasTransitions = (!theme || theme.transitions) && transitions;
  const hasScaling =
    (!theme || theme.scalingButtons) && (!group || group.scaling) && scaling;
  return twMerge(
    bgColor,
    highlights && bgHoverColor,
    highlights && bgActiveColor,
    textColor,
    highlights && textHoverColor,
    highlights && textActiveColor,
    outlineColor,
    highlights && outlineHoverColor,
    highlights && outlineActiveColor,
    getBaseStyles(
      group?.variant || variant,
      group?.radius || raidus,
      group !== undefined,
      group?.vertical ? true : false,
      group?.size || size,
      icon,
    ),
    hasScaling &&
      "hover:scale-[102%] focus-visible:scale-[102%] active:scale-[98%]",
    hasTransitions && "transition",
    "cursor-pointer disabled:pointer-events-none",
    classes,
    selected &&
      getSelectedStyles(
        group?.variant || variant,
        group?.clearButtonHover || clearButtonHover,
      ),
  );
}

function getBaseStyles(
  variant: ButtonVariant,
  radius: ButtonRadius,
  inGroup: boolean,
  vertical: boolean,
  size: SizeType,
  icon: boolean,
) {
  function getRadius() {
    switch (radius) {
      case "pill":
        return twMerge(
          radius === "pill" &&
            inGroup &&
            !vertical &&
            "group-first:rounded-l-full group-last:rounded-r-full",
          radius === "pill" &&
            inGroup &&
            vertical &&
            "group-first:rounded-t-full group-last:rounded-b-full",
          radius === "pill" && !inGroup && "rounded-full",
        );

      case "rect":
        return "";

      default:
        return twMerge(
          radius === "default" && !inGroup && "rounded",
          radius === "default" &&
            inGroup &&
            !vertical &&
            "group-first:rounded-l group-last:rounded-r",
          radius === "default" &&
            inGroup &&
            vertical &&
            "group-first:rounded-t group-last:rounded-b",
        );
    }
  }

  return twMerge(
    "flex items-center justify-center gap-2 outline-offset-1 select-none focus-visible:outline-2",
    inGroup && "outline-offset-2",
    variant === "outline" &&
      !inGroup &&
      "border hover:border-transparent focus-visible:border-transparent",
    getRadius(),
    "disabled:opacity-50 disabled:saturate-50",
    icon && IconButtonSizes[size],
    !icon && ButtonSizes[size],
  );
}

function getButtonColors(
  variant: ButtonVariant,
  clearButtonHover: ClearButtonHover,
) {
  switch (variant) {
    case "outline":
      return getOutlineButtonColors();

    case "clear":
      return getClearButtonColors(clearButtonHover);

    default: // solid
      return getDefaultColors();
  }
}

function getDefaultColors(): ButtonColors {
  const bgColor = twMerge(`bg-(--btn-bg)`);
  const bgHoverColor = twMerge(
    `hover:bg-(--btn-bg)/90 focus-visible:bg-(--btn-bg)/90`,
  );
  const bgActiveColor = twMerge(`active:bg-(--btn-bg)/80`);
  const textColor = twMerge(`text-(--btn-fg)`);
  const outlineColor = twMerge(`outline-(--btn-bg)/90`);
  const outlineActiveColor = twMerge(`active:outline-(--btn-bg)/80)`);

  return {
    bgColor,
    bgHoverColor,
    bgActiveColor,
    textColor,
    textHoverColor: "",
    textActiveColor: "",
    outlineColor,
    outlineHoverColor: "",
    outlineActiveColor,
  };
}

function getOutlineButtonColors(): ButtonColors {
  const bgColor = twMerge("bg-transparent");
  const bgHoverColor = twMerge(
    `hover:bg-(--btn-bg)`,
    `focus-visible:bg-(--btn-bg)`,
  );
  const bgActiveColor = twMerge(
    "active:border-transparent",
    `active:bg-(--btn-bg)/90`,
  );
  const textColor = twMerge(`text-(--bnt-bg)`);
  const textHoverColor = twMerge(
    `hover:text-(--bnt-fg)`,
    `focus-visible:text-(--btn-fg)`,
  );
  const textActiveColor = twMerge(`hover:text-(--bnt-fg)`);
  const outlineColor = twMerge(`outline-(--btn-bg)`);
  const outlineActiveColor = twMerge(`active:outline-(--btn-bg)/90`);

  return {
    bgColor,
    bgHoverColor,
    bgActiveColor,
    textColor,
    textActiveColor,
    textHoverColor,
    outlineColor,
    outlineHoverColor: "",
    outlineActiveColor,
  };
}

function getClearButtonColors(
  clearButtonHover: ClearButtonHover,
): ButtonColors {
  const bgColor = "bg-transparent";
  const bgHoverColor = twMerge(
    clearButtonHover === "fill" &&
      `hover:bg-(--btn-bg) focus-visible:bg-(--btn-bg)`,
  );
  const bgActiveColor = twMerge(
    clearButtonHover === "fill" && `active:bg-(--btn-bg)/90`,
  );
  const textColor = twMerge(`text-(--btn-bg)`);
  const textHoverColor = twMerge(
    clearButtonHover === "none" &&
      `hover:text-(--btn-bg)/90 focus-visible:text-(--btn-bg)/90`,
    (clearButtonHover === "fill" || clearButtonHover === "contrasting") &&
      `hover:text-(---btn-fg) focus-visible:text-(---btn-fg)`,
  );
  const textActiveColor = twMerge(
    clearButtonHover === "none" && `active:text-(--btn-bg)/90`,
    clearButtonHover === "outline" && `active:text-(--btn-fg)`,
    clearButtonHover === "fill" && `active:text-(--btn-fg)`,
    clearButtonHover === "contrasting" && `active:text-(--btn-fg)`,
  );
  const outlineHoverColor = twMerge(
    clearButtonHover === "outline" && "hover:outline-1",
    `outline-(--btn-bg)`,
    clearButtonHover === "none" && `outline-(--btn-bg)/90`,
    clearButtonHover === "contrasting" && `outline-$(--btn-fg)`,
  );
  const outlineActiveColor = twMerge(
    clearButtonHover === "outline" && "hover:outline-1",
    `active:outline-(--btn-bg)/80`,
    clearButtonHover === "none" && `active:outline-(--btn-bg)/90`,
    clearButtonHover === "contrasting" && `active:outline-(--btn-fg)/90`,
  );

  return {
    bgColor,
    bgHoverColor,
    bgActiveColor,
    textColor,
    textHoverColor,
    textActiveColor,
    outlineColor: "",
    outlineHoverColor,
    outlineActiveColor,
  };
}

function getSelectedStyles(
  variant: ButtonVariant,
  clearButtonHover: ClearButtonHover,
) {
  switch (variant) {
    case "outline":
      return twMerge(`bg-(--btn-bg) text-(--btn-fg)`);

    case "clear":
      return getClearActiveStyles();

    default: // solid
      return twMerge(`bg-(--btn-bg)/90`);
  }

  function getClearActiveStyles() {
    switch (clearButtonHover) {
      case "fill":
        return `bg-(--btn-bg) text-(--btn-fg)`;

      case "outline":
        return `text-(--btn-bg)/90 outline-(--btn-bg)/90`;

      case "contrasting":
        return `text-(--btn-fg)`;

      default: // none
        return `text-(--btn-bg)/90`;
    }
  }
}
