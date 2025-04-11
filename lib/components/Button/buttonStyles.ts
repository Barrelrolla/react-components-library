import { twMerge } from "tailwind-merge";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import { ColorType, SizeType } from "@/types";
import { ButtonSizes } from "@/util/sizes";
import { ColorMap } from "@/util/colors";

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

export function getButtonStyles(
  variant: ButtonVariant,
  raidus: ButtonRadius,
  clearButtonHover: ClearButtonHover,
  inGroup: boolean,
  vertical: boolean,
  primaryColor: ColorType,
  secondaryColor: ColorType,
  size: SizeType,
  contrasting: boolean,
  icon: boolean,
  disabled: boolean,
  disableHoverHighlight: boolean,
  disableScale: boolean,
) {
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
    variant,
    clearButtonHover,
    primaryColor,
    secondaryColor,
    contrasting,
  );
  return twMerge(
    bgColor,
    !disableHoverHighlight && bgHoverColor,
    !disableHoverHighlight && bgActiveColor,
    textColor,
    !disableHoverHighlight && textHoverColor,
    !disableHoverHighlight && textActiveColor,
    outlineColor,
    !disableHoverHighlight && outlineHoverColor,
    !disableHoverHighlight && outlineActiveColor,
    getButtonBaseStyles(
      variant,
      raidus,
      inGroup,
      vertical,
      disabled,
      size,
      icon,
    ),
    !disableScale &&
      "hover:scale-[102%] focus-visible:scale-[102%] active:scale-[98%]",
    disabled ? "pointer-events-none" : "cursor-pointer",
  );
}

function getButtonBaseStyles(
  variant: ButtonVariant,
  radius: ButtonRadius,
  inGroup: boolean,
  vertical: boolean,
  disabled: boolean,
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
    variant === "outline" && "border",
    getRadius(),
    disabled && "opacity-50 saturate-50",
    icon && "p-2 text-2xl",
    icon && !vertical && "group-first:pl-2.5 group-last:pr-2.5",
    icon && vertical && "group-first:pt-2.5 group-last:pb-2.5",

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
  if (variant === "outline") {
    return getOutlineButtonColors(primaryColor, secondaryColor, contrasting);
  }

  if (variant === "clear") {
    return getClearStyles(
      clearButtonHover,
      primaryColor,
      secondaryColor,
      contrasting,
    );
  }

  return getDefaultButtonColors(primaryColor, secondaryColor, contrasting);
}

function getDefaultButtonColors(
  _primaryColor: ColorType,
  _secondaryColor: ColorType,
  contrasting: boolean,
): ButtonColors {
  const primaryColor = ColorMap[_primaryColor];
  const secondaryColor = ColorMap[_secondaryColor];
  const bgColor = twMerge(
    `bg-${primaryColor.darkShade}`,
    contrasting && `dark:bg-${secondaryColor.lightShade}`,
  );
  const bgHoverColor = twMerge(
    `hover:bg-${primaryColor.darkHighlightedShade}`,
    `focus-visible:bg-${primaryColor.darkHighlightedShade}`,
    contrasting && `dark:hover:bg-${secondaryColor.lightHighlightedShade}`,
    contrasting &&
      `dark:focus-visible:bg-${secondaryColor.lightHighlightedShade}`,
  );
  const bgActiveColor = twMerge(
    `active:bg-${primaryColor.darkActiveShade}`,
    contrasting && `dark:active:bg-${secondaryColor.lightActiveShade}`,
  );
  const textColor = twMerge(
    `text-${secondaryColor.lightShade}`,
    contrasting && `dark:text-${primaryColor.darkShade}`,
  );
  const outlineColor = twMerge(
    `outline-${primaryColor.darkHighlightedShade}`,
    contrasting && `dark:outline-${secondaryColor.lightHighlightedShade}`,
  );
  const outlineActiveColor = twMerge(
    `active:outline-${primaryColor.darkActiveShade}`,
    contrasting && `dark:active:outline-${secondaryColor.lightActiveShade}`,
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
  _primaryColor: ColorType,
  _secondaryColor: ColorType,
  contrasting: boolean,
): ButtonColors {
  const primaryColor = ColorMap[_primaryColor];
  const secondaryColor = ColorMap[_secondaryColor];
  const bgColor = twMerge("bg-transparent");
  const bgHoverColor = twMerge(
    "hover:border-transparent",
    `hover:bg-${primaryColor.darkShade}`,
    `focus-visible:bg-${primaryColor.darkShade}`,
    contrasting && `dark:hover:bg-${secondaryColor.lightShade}`,
    contrasting && `dark:focus-visible:bg-${secondaryColor.lightShade}`,
  );
  const bgActiveColor = twMerge(
    "active:border-transparent",
    `active:bg-${primaryColor.darkHighlightedShade}`,
    contrasting && `dark:active:bg-${secondaryColor.lightHighlightedShade}`,
  );
  const textColor = twMerge(
    `text-${primaryColor.darkShade}`,
    contrasting && `dark:text-${secondaryColor.lightShade}`,
  );
  const textHoverColor = twMerge(
    `hover:text-${secondaryColor.lightShade}`,
    `focus-visible:text-${secondaryColor.lightShade}`,
    `dark:hover:text-${primaryColor.darkShade}`,
    `dark:focus-visible:text-${primaryColor.darkShade}`,
  );
  const textActiveColor = twMerge(
    `active:text-${secondaryColor.lightShade}`,
    `dark:active:text-${primaryColor.darkShade}`,
  );
  const outlineColor = twMerge(
    `outline-${primaryColor.darkShade}`,
    `dark:outline-${secondaryColor.lightShade}`,
  );
  const outlineActiveColor = twMerge(
    `active:outline-${primaryColor.darkHighlightedShade}`,
    `dark:active:outline-${secondaryColor.lightHighlightedShade}`,
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

function getClearStyles(
  clearButtonHover: ClearButtonHover,
  _primaryColor: ColorType,
  _secondaryColor: ColorType,
  contrasting: boolean,
): ButtonColors {
  const primaryColor = ColorMap[_primaryColor];
  const secondaryColor = ColorMap[_secondaryColor];
  const bgColor = "bg-transparent";
  const bgHoverColor = twMerge(
    clearButtonHover === "fill" && `hover:bg-${primaryColor.darkShade}`,
    contrasting &&
      clearButtonHover === "fill" &&
      `dark:hover:bg-${secondaryColor.lightShade}`,
  );
  const bgActiveColor = twMerge(
    clearButtonHover === "fill" &&
      `active:bg-${primaryColor.darkHighlightedShade}`,
    clearButtonHover === "fill" &&
      contrasting &&
      `dark:active:bg-${secondaryColor.lightHighlightedShade}`,
  );
  const textColor = twMerge(
    `text-${primaryColor.darkShade}`,
    contrasting && `dark:text-${secondaryColor.lightShade}`,
  );
  const textHoverColor = twMerge(
    clearButtonHover === "none" &&
      `hover:text-${primaryColor.darkHighlightedShade} focus-visible:text-${primaryColor.darkHighlightedShade}`,
    clearButtonHover === "none" &&
      contrasting &&
      `dark:hover:text-${secondaryColor.lightHighlightedShade} dark:focus-visible:text-${secondaryColor.lightHighlightedShade}`,
    (clearButtonHover === "fill" || clearButtonHover === "contrasting") &&
      `hover:text-${secondaryColor.lightShade} focus-visible:text-${secondaryColor.lightShade}`,
    (clearButtonHover === "fill" || clearButtonHover === "contrasting") &&
      contrasting &&
      `dark:hover:text-${primaryColor.darkShade} dark:focus-visible:text-${primaryColor.darkShade}`,
  );
  const textActiveColor = twMerge(
    clearButtonHover === "none" &&
      `active:text-${primaryColor.darkActiveShade}`,
    contrasting && `dark:active:text-${secondaryColor.lightActiveShade}`,
    clearButtonHover === "outline" &&
      `active:text-${primaryColor.darkHighlightedShade}`,
    clearButtonHover === "outline" &&
      contrasting &&
      `dark:active:text-${secondaryColor.lightHighlightedShade}`,
    (clearButtonHover === "fill" || clearButtonHover === "contrasting") &&
      `active:text-${secondaryColor.lightShade}`,
    (clearButtonHover === "fill" || clearButtonHover === "contrasting") &&
      contrasting &&
      `dark:active:text-${primaryColor.darkShade}`,
  );
  const outlineHoverColor = twMerge(
    clearButtonHover === "outline" && "hover:outline-1",
    `outline-${primaryColor.darkShade}`,
    contrasting && `dark:outline-${secondaryColor.lightShade}`,
    clearButtonHover === "none" &&
      `outline-${primaryColor.darkHighlightedShade}`,
    clearButtonHover === "none" &&
      contrasting &&
      contrasting &&
      `dark:outline-${secondaryColor.lightHighlightedShade}`,
    clearButtonHover === "contrasting" &&
      `outline-${secondaryColor.lightShade}`,
    clearButtonHover === "contrasting" &&
      contrasting &&
      `dark:outline-${primaryColor.darkShade}`,
  );
  const outlineActiveColor = twMerge(
    clearButtonHover === "outline" && "hover:outline-1",
    `active:outline-${primaryColor.darkHighlightedShade}`,
    contrasting &&
      `dark:active:outline-${secondaryColor.lightHighlightedShade}`,
    clearButtonHover === "none" &&
      `active:outline-${primaryColor.darkActiveShade}`,
    clearButtonHover === "none" &&
      contrasting &&
      `dark:active:outline-${secondaryColor.lightActiveShade}`,
    clearButtonHover === "contrasting" &&
      `active:outline-${secondaryColor.lightHighlightedShade}`,
    clearButtonHover === "contrasting" &&
      contrasting &&
      `dark:active:outline-${primaryColor.darkHighlightedShade}`,
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
