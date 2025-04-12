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
    `bg-${primaryColor.dark}`,
    contrasting && `dark:bg-${secondaryColor.light}`,
  );
  const bgHoverColor = twMerge(
    `hover:bg-${primaryColor.darkHighlight}`,
    `focus-visible:bg-${primaryColor.darkHighlight}`,
    contrasting && `dark:hover:bg-${secondaryColor.lightHighlight}`,
    contrasting && `dark:focus-visible:bg-${secondaryColor.lightHighlight}`,
  );
  const bgActiveColor = twMerge(
    `active:bg-${primaryColor.darkActive}`,
    contrasting && `dark:active:bg-${secondaryColor.lightActive}`,
  );
  const textColor = twMerge(
    `text-${secondaryColor.light}`,
    contrasting && `dark:text-${primaryColor.dark}`,
  );
  const outlineColor = twMerge(
    `outline-${primaryColor.darkHighlight}`,
    contrasting && `dark:outline-${secondaryColor.lightHighlight}`,
  );
  const outlineActiveColor = twMerge(
    `active:outline-${primaryColor.darkActive}`,
    contrasting && `dark:active:outline-${secondaryColor.lightActive}`,
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
    `hover:bg-${primaryColor.dark}`,
    `focus-visible:bg-${primaryColor.dark}`,
    contrasting && `dark:hover:bg-${secondaryColor.light}`,
    contrasting && `dark:focus-visible:bg-${secondaryColor.light}`,
  );
  const bgActiveColor = twMerge(
    "active:border-transparent",
    `active:bg-${primaryColor.darkHighlight}`,
    contrasting && `dark:active:bg-${secondaryColor.lightHighlight}`,
  );
  const textColor = twMerge(
    `text-${primaryColor.dark}`,
    contrasting && `dark:text-${secondaryColor.light}`,
  );
  const textHoverColor = twMerge(
    `hover:text-${secondaryColor.light}`,
    `focus-visible:text-${secondaryColor.light}`,
    `dark:hover:text-${primaryColor.dark}`,
    `dark:focus-visible:text-${primaryColor.dark}`,
  );
  const textActiveColor = twMerge(
    `active:text-${secondaryColor.light}`,
    `dark:active:text-${primaryColor.dark}`,
  );
  const outlineColor = twMerge(
    `outline-${primaryColor.dark}`,
    `dark:outline-${secondaryColor.light}`,
  );
  const outlineActiveColor = twMerge(
    `active:outline-${primaryColor.darkHighlight}`,
    `dark:active:outline-${secondaryColor.lightHighlight}`,
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
    clearButtonHover === "fill" && `hover:bg-${primaryColor.dark}`,
    contrasting &&
      clearButtonHover === "fill" &&
      `dark:hover:bg-${secondaryColor.light}`,
  );
  const bgActiveColor = twMerge(
    clearButtonHover === "fill" && `active:bg-${primaryColor.darkHighlight}`,
    clearButtonHover === "fill" &&
      contrasting &&
      `dark:active:bg-${secondaryColor.lightHighlight}`,
  );
  const textColor = twMerge(
    `text-${primaryColor.dark}`,
    contrasting && `dark:text-${secondaryColor.light}`,
  );
  const textHoverColor = twMerge(
    clearButtonHover === "none" &&
      `hover:text-${primaryColor.darkHighlight} focus-visible:text-${primaryColor.darkHighlight}`,
    clearButtonHover === "none" &&
      contrasting &&
      `dark:hover:text-${secondaryColor.lightHighlight} dark:focus-visible:text-${secondaryColor.lightHighlight}`,
    (clearButtonHover === "fill" || clearButtonHover === "contrasting") &&
      `hover:text-${secondaryColor.light} focus-visible:text-${secondaryColor.light}`,
    (clearButtonHover === "fill" || clearButtonHover === "contrasting") &&
      contrasting &&
      `dark:hover:text-${primaryColor.dark} dark:focus-visible:text-${primaryColor.dark}`,
  );
  const textActiveColor = twMerge(
    clearButtonHover === "none" && `active:text-${primaryColor.darkActive}`,
    contrasting && `dark:active:text-${secondaryColor.lightActive}`,
    clearButtonHover === "outline" &&
      `active:text-${primaryColor.darkHighlight}`,
    clearButtonHover === "outline" &&
      contrasting &&
      `dark:active:text-${secondaryColor.lightHighlight}`,
    (clearButtonHover === "fill" || clearButtonHover === "contrasting") &&
      `active:text-${secondaryColor.light}`,
    (clearButtonHover === "fill" || clearButtonHover === "contrasting") &&
      contrasting &&
      `dark:active:text-${primaryColor.dark}`,
  );
  const outlineHoverColor = twMerge(
    clearButtonHover === "outline" && "hover:outline-1",
    `outline-${primaryColor.dark}`,
    contrasting && `dark:outline-${secondaryColor.light}`,
    clearButtonHover === "none" && `outline-${primaryColor.darkHighlight}`,
    clearButtonHover === "none" &&
      contrasting &&
      contrasting &&
      `dark:outline-${secondaryColor.lightHighlight}`,
    clearButtonHover === "contrasting" && `outline-${secondaryColor.light}`,
    clearButtonHover === "contrasting" &&
      contrasting &&
      `dark:outline-${primaryColor.dark}`,
  );
  const outlineActiveColor = twMerge(
    clearButtonHover === "outline" && "hover:outline-1",
    `active:outline-${primaryColor.darkHighlight}`,
    contrasting && `dark:active:outline-${secondaryColor.lightHighlight}`,
    clearButtonHover === "none" && `active:outline-${primaryColor.darkActive}`,
    clearButtonHover === "none" &&
      contrasting &&
      `dark:active:outline-${secondaryColor.lightActive}`,
    clearButtonHover === "contrasting" &&
      `active:outline-${secondaryColor.lightHighlight}`,
    clearButtonHover === "contrasting" &&
      contrasting &&
      `dark:active:outline-${primaryColor.darkHighlight}`,
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
