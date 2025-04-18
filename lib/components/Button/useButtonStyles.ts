import { twMerge } from "tailwind-merge";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import { useTheme } from "@/contexts";
import { ColorType, SizeType } from "@/types";
import { ButtonSizes, ColorMap, IconButtonSizes } from "@/util";

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
  contrasting: boolean,
  icon: boolean,
  disabled: boolean,
  highlights: boolean,
  scaling: boolean,
  selected: boolean,
  transitions: boolean,
  disabledStyles: boolean,
  selectedStyles: boolean,
  primaryColor?: ColorType,
  secondaryColor?: ColorType,
  classes?: string,
  selectedClasses?: string,
) {
  const theme = useTheme();
  const group = useButtonGroupContext();
  const primary =
    primaryColor || group?.primaryColor || theme?.primaryColor || "black";
  const secondary =
    secondaryColor || group?.secondaryColor || theme?.secondaryColor || "white";
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
    primary,
    secondary,
    (!group || group.contrasting) && contrasting,
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
      disabled,
      group?.size || size,
      icon,
      disabledStyles,
    ),
    hasScaling &&
      "hover:scale-[102%] focus-visible:scale-[102%] active:scale-[98%]",
    hasTransitions && "transition",
    disabled ? "pointer-events-none" : "cursor-pointer",
    classes,
    selected &&
      selectedStyles &&
      getSelectedStyles(
        primary,
        secondary,
        group?.variant || variant,
        group?.clearButtonHover || clearButtonHover,
        contrasting,
      ),
    selectedClasses,
  );
}

function getBaseStyles(
  variant: ButtonVariant,
  radius: ButtonRadius,
  inGroup: boolean,
  vertical: boolean,
  disabled: boolean,
  size: SizeType,
  icon: boolean,
  disabledStyles: boolean,
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
    disabled && disabledStyles && "opacity-50 saturate-50",
    icon && IconButtonSizes[size],
    !icon && ButtonSizes[size],
  );
}

function getButtonColors(
  variant: ButtonVariant,
  clearButtonHover: ClearButtonHover,
  primaryColor: ColorType,
  secondaryColor: ColorType,
  contrasting: boolean,
) {
  switch (variant) {
    case "outline":
      return getOutlineButtonColors(primaryColor, secondaryColor, contrasting);

    case "clear":
      return getClearButtonColors(
        clearButtonHover,
        primaryColor,
        secondaryColor,
        contrasting,
      );

    default: // solid
      return getDefaultColors(primaryColor, secondaryColor, contrasting);
  }
}

function getDefaultColors(
  primaryColor: ColorType,
  secondaryColor: ColorType,
  contrasting: boolean,
): ButtonColors {
  const primary = ColorMap[primaryColor];
  const secondary = ColorMap[secondaryColor];
  const bgColor = twMerge(
    `bg-${primary.dark}`,
    contrasting && `dark:bg-${secondary.light}`,
  );
  const bgHoverColor = twMerge(
    `hover:bg-${primary.darkHighlight}`,
    `focus-visible:bg-${primary.darkHighlight}`,
    contrasting && `dark:hover:bg-${secondary.lightHighlight}`,
    contrasting && `dark:focus-visible:bg-${secondary.lightHighlight}`,
  );
  const bgActiveColor = twMerge(
    `active:bg-${primary.darkActive}`,
    contrasting && `dark:active:bg-${secondary.lightActive}`,
  );
  const textColor = twMerge(
    `text-${secondary.light}`,
    contrasting && `dark:text-${primary.dark}`,
  );
  const outlineColor = twMerge(
    `outline-${primary.darkHighlight}`,
    contrasting && `dark:outline-${secondary.lightHighlight}`,
  );
  const outlineActiveColor = twMerge(
    `active:outline-${primary.darkActive}`,
    contrasting && `dark:active:outline-${secondary.lightActive}`,
  );

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

function getOutlineButtonColors(
  primaryColor: ColorType,
  secondaryColor: ColorType,
  contrasting: boolean,
): ButtonColors {
  const primary = ColorMap[primaryColor];
  const secondary = ColorMap[secondaryColor];
  const bgColor = twMerge("bg-transparent");
  const bgHoverColor = twMerge(
    `hover:bg-${primary.dark}`,
    `focus-visible:bg-${primary.dark}`,
    contrasting && `dark:hover:bg-${secondary.light}`,
    contrasting && `dark:focus-visible:bg-${secondary.light}`,
  );
  const bgActiveColor = twMerge(
    "active:border-transparent",
    `active:bg-${primary.darkHighlight}`,
    contrasting && `dark:active:bg-${secondary.lightHighlight}`,
  );
  const textColor = twMerge(
    `text-${primary.dark}`,
    contrasting && `dark:text-${secondary.light}`,
  );
  const textHoverColor = twMerge(
    `hover:text-${secondary.light}`,
    `focus-visible:text-${secondary.light}`,
    `dark:hover:text-${primary.dark}`,
    `dark:focus-visible:text-${primary.dark}`,
  );
  const textActiveColor = twMerge(
    `active:text-${secondary.light}`,
    `dark:active:text-${primary.dark}`,
  );
  const outlineColor = twMerge(
    `outline-${primary.dark}`,
    `dark:outline-${secondary.light}`,
  );
  const outlineActiveColor = twMerge(
    `active:outline-${primary.darkHighlight}`,
    `dark:active:outline-${secondary.lightHighlight}`,
  );

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
  primaryColor: ColorType,
  secondaryColor: ColorType,
  contrasting: boolean,
): ButtonColors {
  const primary = ColorMap[primaryColor];
  const secondary = ColorMap[secondaryColor];
  const bgColor = "bg-transparent";
  const bgHoverColor = twMerge(
    clearButtonHover === "fill" &&
      `hover:bg-${primary.dark} focus-visible:bg-${primary.dark}`,
    contrasting &&
      clearButtonHover === "fill" &&
      `dark:hover:bg-${secondary.light} dark:focus-visible:bg-${secondary.light}`,
  );
  const bgActiveColor = twMerge(
    clearButtonHover === "fill" && `active:bg-${primary.darkHighlight}`,
    clearButtonHover === "fill" &&
      contrasting &&
      `dark:active:bg-${secondary.lightHighlight}`,
  );
  const textColor = twMerge(
    `text-${primary.dark}`,
    contrasting && `dark:text-${secondary.light}`,
  );
  const textHoverColor = twMerge(
    clearButtonHover === "none" &&
      `hover:text-${primary.darkHighlight} focus-visible:text-${primary.darkHighlight}`,
    clearButtonHover === "none" &&
      contrasting &&
      `dark:hover:text-${secondary.lightHighlight} dark:focus-visible:text-${secondary.lightHighlight}`,
    (clearButtonHover === "fill" || clearButtonHover === "contrasting") &&
      `hover:text-${secondary.light} focus-visible:text-${secondary.light}`,
    (clearButtonHover === "fill" || clearButtonHover === "contrasting") &&
      contrasting &&
      `dark:hover:text-${primary.dark} dark:focus-visible:text-${primary.dark}`,
  );
  const textActiveColor = twMerge(
    clearButtonHover === "none" && `active:text-${primary.darkActive}`,
    contrasting && `dark:active:text-${secondary.lightActive}`,
    clearButtonHover === "outline" && `active:text-${primary.darkHighlight}`,
    clearButtonHover === "outline" &&
      contrasting &&
      `dark:active:text-${secondary.lightHighlight}`,
    clearButtonHover === "fill" && `active:text-${secondary.light}`,
    clearButtonHover === "fill" &&
      contrasting &&
      `dark:active:text-${primary.dark}`,
    clearButtonHover === "contrasting" &&
      `active:text-${secondary.lightActive}`,
    clearButtonHover === "contrasting" &&
      contrasting &&
      `dark:active:text-${primary.darkActive}`,
  );
  const outlineHoverColor = twMerge(
    clearButtonHover === "outline" && "hover:outline-1",
    `outline-${primary.dark}`,
    contrasting && `dark:outline-${secondary.light}`,
    clearButtonHover === "none" && `outline-${primary.darkHighlight}`,
    clearButtonHover === "none" &&
      contrasting &&
      contrasting &&
      `dark:outline-${secondary.lightHighlight}`,
    clearButtonHover === "contrasting" && `outline-${secondary.light}`,
    clearButtonHover === "contrasting" &&
      contrasting &&
      `dark:outline-${primary.dark}`,
  );
  const outlineActiveColor = twMerge(
    clearButtonHover === "outline" && "hover:outline-1",
    `active:outline-${primary.darkHighlight}`,
    contrasting && `dark:active:outline-${secondary.lightHighlight}`,
    clearButtonHover === "none" && `active:outline-${primary.darkActive}`,
    clearButtonHover === "none" &&
      contrasting &&
      `dark:active:outline-${secondary.lightActive}`,
    clearButtonHover === "contrasting" &&
      `active:outline-${secondary.lightHighlight}`,
    clearButtonHover === "contrasting" &&
      contrasting &&
      `dark:active:outline-${primary.darkHighlight}`,
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
  primaryColor: ColorType,
  secondaryColor: ColorType,
  variant: ButtonVariant,
  clearButtonHover: ClearButtonHover,
  contrasting: boolean,
) {
  const primary = ColorMap[primaryColor];
  const secondary = ColorMap[secondaryColor];
  switch (variant) {
    case "outline":
      return twMerge(
        `bg-${primary.dark} text-${secondary.light} dark:bg-${secondary.light} dark:text-${primary.dark}`,
      );

    case "clear":
      return getClearActiveStyles();

    default: // solid
      return twMerge(
        `bg-${primary.darkActive}`,
        contrasting && `dark:bg-${secondary.lightActive}`,
      );
  }

  function getClearActiveStyles() {
    switch (clearButtonHover) {
      case "fill":
        return `bg-${primary.dark} text-${secondary.light} dark:bg-${secondary.light} dark:text-${primary.dark}`;

      case "outline":
        return `text-${primary.darkActive} dark:text-${secondary.lightActive} outline-${primary.darkActive} dark:outline-${secondary.lightActive}`;

      case "contrasting":
        return `text-${secondary.light} dark:text-${primary.dark}`;

      default: // none
        return `text-${primary.darkActive} dark:text-${secondary.lightActive}`;
    }
  }
}
