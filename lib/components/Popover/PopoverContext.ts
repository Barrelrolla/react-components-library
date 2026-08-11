import { ColorType } from "@/types";
import { UseFloatingReturn, UseInteractionsReturn } from "@floating-ui/react";
import { createContext, CSSProperties, Ref, useContext } from "react";
import { FloatingElementContextType } from "../Floating";

export interface PopoverContextType extends FloatingElementContextType {
  /** Color variant applied across the popover body and arrow subcomponents. */
  color: ColorType;
  /** Indicates whether the popover content is currently open and visible. */
  isOpen: boolean;
  /** State updater function to toggle or set the popover open state. */
  setIsOpen: (open: boolean) => void;
  /** Positioning metadata, refs, and coordinates returned from the underlying floating hook. */
  data: UseFloatingReturn;
  /** Interaction event handlers and accessibility bindings applied to trigger and popover elements. */
  interactions: UseInteractionsReturn;
  /** Computed inline transition styles applied during popover opening and closing animations. */
  transitionStyles: CSSProperties;
  /** Disables popover interactions and prevents it from opening. */
  disabled?: boolean;
  /** When `true`, renders a directional pointing arrow towards the anchor trigger element. */
  hasArrow?: boolean;
  /** React ref attached to the SVG directional arrow element. */
  arrowRef?: Ref<SVGSVGElement> | undefined;
}

const PopoverContext = createContext<PopoverContextType | null>(null);
/**
 * Context provider that distributes popover positioning data, interaction handlers,
 * visibility state, color variant choices, and arrow references to nested popover subcomponents.
 */
export const PopoverContextProvider = PopoverContext.Provider;

export function usePopoverContext() {
  return useContext(PopoverContext);
}
