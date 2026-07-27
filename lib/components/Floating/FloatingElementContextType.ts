import { ColorType, MobileSheetPlacementType } from "@/types";
import { UseFloatingReturn, UseInteractionsReturn } from "@floating-ui/react";
import { CSSProperties, Ref } from "react";

export interface FloatingElementContextType {
  color: ColorType;
  useFocus: boolean;
  returnFocus: boolean | null;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isNested: boolean;
  data: UseFloatingReturn;
  interactions: UseInteractionsReturn;
  transitionStyles: CSSProperties;
  disabled?: boolean;
  hasArrow?: boolean;
  arrowRef?: Ref<SVGSVGElement> | undefined;
  mobileSheet: boolean;
  mobileSheetPlacement?: MobileSheetPlacementType;
}
