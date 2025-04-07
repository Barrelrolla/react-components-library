import { twMerge } from "tailwind-merge";
import { ButtonRadius, ButtonVariant, ClearButtonHover } from "./buttonTypes";
import { ColorType, SizeType } from "@/types";
import { colors } from "@/util/colors";
import { ButtonSizes } from "@/util/sizes";

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
    (!disableScale || !disableHoverHighlight) && "transition duration-150",
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
    icon && "p-2",
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
  primaryColor: ColorType,
  secondaryColor: ColorType,
  contrasting: boolean,
): ButtonColors {
  const bgColor = twMerge(
    colors[primaryColor].darkShade.regular.bgColor,
    contrasting && colors[secondaryColor].lightShade.dark.bgColor,
  );
  const bgHoverColor = twMerge(
    colors[primaryColor].darkHighlightedShade.hover.bgColor,
    contrasting &&
      colors[secondaryColor].lightHighlightedShade.darkHover.bgColor,
  );
  const bgActiveColor = twMerge(
    colors[primaryColor].darkActiveShade.active.bgColor,
    contrasting && colors[secondaryColor].lightActiveShade.darkActive.bgColor,
  );
  const textColor = twMerge(
    colors[secondaryColor].lightShade.regular.textColor,
    contrasting && colors[primaryColor].darkShade.dark.textColor,
  );
  const outlineColor = twMerge(
    colors[primaryColor].darkHighlightedShade.regular.outlineColor,
    contrasting &&
      colors[secondaryColor].lightHighlightedShade.dark.outlineColor,
  );
  const outlineActiveColor = twMerge(
    colors[primaryColor].darkActiveShade.active.outlineColor,
    contrasting &&
      colors[secondaryColor].lightActiveShade.darkActive.outlineColor,
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
  const bgColor = twMerge(
    "bg-transparent",
    colors[primaryColor].darkShade.regular.borderColor,
    contrasting && colors[secondaryColor].lightShade.dark.borderColor,
  );
  const bgHoverColor = twMerge(
    colors[primaryColor].darkShade.hover.bgColor,
    contrasting && colors[secondaryColor].lightShade.darkHover.bgColor,
  );
  const bgActiveColor = twMerge(
    colors[primaryColor].darkHighlightedShade.active.bgColor,
    contrasting &&
      colors[secondaryColor].lightHighlightedShade.darkActive.bgColor,
  );
  const textColor = twMerge(
    colors[primaryColor].darkShade.regular.textColor,
    contrasting && colors[secondaryColor].lightShade.dark.textColor,
  );
  const textHoverColor = twMerge(
    colors[secondaryColor].lightShade.hover.textColor,
    contrasting && colors[primaryColor].darkShade.darkHover.textColor,
  );
  const textActiveColor = twMerge(
    colors[secondaryColor].lightShade.active.textColor,
    contrasting && colors[primaryColor].darkShade.darkActive.textColor,
  );
  const outlineColor = twMerge(
    colors[primaryColor].darkShade.regular.outlineColor,
    contrasting && colors[secondaryColor].lightShade.dark.outlineColor,
  );
  const outlineActiveColor = twMerge(
    colors[primaryColor].darkHighlightedShade.active.outlineColor,
    contrasting &&
      colors[secondaryColor].lightHighlightedShade.darkActive.outlineColor,
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
  primaryColor: ColorType,
  secondaryColor: ColorType,
  contrasting: boolean,
): ButtonColors {
  const bgHoverColor = twMerge(
    clearButtonHover === "fill" && colors[primaryColor].darkShade.hover.bgColor,
    clearButtonHover === "fill" &&
      contrasting &&
      colors[secondaryColor].lightShade.darkHover.bgColor,
  );
  const bgActiveColor = twMerge(
    clearButtonHover === "fill" &&
      colors[primaryColor].darkHighlightedShade.active.bgColor,
    clearButtonHover === "fill" &&
      contrasting &&
      colors[secondaryColor].lightHighlightedShade.darkActive.bgColor,
  );
  const textColor = twMerge(
    colors[primaryColor].darkShade.regular.textColor,
    contrasting && colors[secondaryColor].lightShade.dark.textColor,
  );
  const textHoverColor = twMerge(
    clearButtonHover === "none" &&
      colors[primaryColor].darkHighlightedShade.hover.textColor,
    clearButtonHover === "none" &&
      contrasting &&
      colors[secondaryColor].lightHighlightedShade.darkHover.textColor,
    clearButtonHover === "fill" &&
      colors[secondaryColor].lightShade.hover.textColor,
    clearButtonHover === "fill" &&
      contrasting &&
      colors[primaryColor].darkShade.darkHover.textColor,
    clearButtonHover === "contrasting" &&
      colors[secondaryColor].lightShade.hover.textColor,
    clearButtonHover === "contrasting" &&
      contrasting &&
      colors[primaryColor].darkShade.darkHover.textColor,
  );
  const textActiveColor = twMerge(
    clearButtonHover === "none" &&
      colors[primaryColor].darkActiveShade.active.textColor,
    clearButtonHover === "none" &&
      contrasting &&
      colors[secondaryColor].lightActiveShade.darkActive.textColor,
    clearButtonHover === "fill" &&
      colors[secondaryColor].lightShade.active.textColor,
    clearButtonHover === "fill" &&
      contrasting &&
      colors[primaryColor].darkShade.darkActive.textColor,
    clearButtonHover === "contrasting" &&
      colors[secondaryColor].lightHighlightedShade.active.textColor,
    clearButtonHover === "contrasting" &&
      contrasting &&
      colors[primaryColor].darkHighlightedShade.darkActive.textColor,
    clearButtonHover === "outline" &&
      colors[primaryColor].darkHighlightedShade.active.textColor,
    clearButtonHover === "outline" &&
      contrasting &&
      colors[secondaryColor].lightHighlightedShade.darkActive.textColor,
  );
  const outlineHoverColor = twMerge(
    clearButtonHover === "outline" && "hover:outline-1",
    colors[primaryColor].darkShade.hover.outlineColor,
    contrasting && colors[secondaryColor].lightShade.darkHover.outlineColor,
    clearButtonHover === "none" &&
      colors[primaryColor].darkHighlightedShade.hover.outlineColor,
    clearButtonHover === "none" &&
      contrasting &&
      colors[secondaryColor].lightHighlightedShade.darkHover.outlineColor,
    clearButtonHover === "contrasting" &&
      colors[secondaryColor].lightShade.hover.outlineColor,
    clearButtonHover === "contrasting" &&
      contrasting &&
      colors[primaryColor].darkShade.darkHover.outlineColor,
  );
  const outlineActiveColor = twMerge(
    clearButtonHover === "outline" && "hover:outline-1",
    colors[primaryColor].darkHighlightedShade.active.outlineColor,
    contrasting &&
      colors[secondaryColor].lightHighlightedShade.darkActive.outlineColor,
    clearButtonHover === "none" &&
      colors[primaryColor].darkActiveShade.active.outlineColor,
    clearButtonHover === "none" &&
      contrasting &&
      colors[secondaryColor].lightActiveShade.darkActive.outlineColor,
    clearButtonHover === "contrasting" &&
      colors[secondaryColor].lightHighlightedShade.active.outlineColor,
    clearButtonHover === "contrasting" &&
      contrasting &&
      colors[primaryColor].darkHighlightedShade.darkActive.outlineColor,
  );

  return {
    bgColor: "",
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
