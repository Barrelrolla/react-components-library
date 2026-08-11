import { ColorType, MobileSheetPlacementType } from "@/types";
import { UseFloatingReturn, UseInteractionsReturn } from "@floating-ui/react";
import { CSSProperties, Ref } from "react";

export interface FloatingElementContextType {
  /** React ref attached to the scrollable container wrapper when floating content overflows. */
  scrollContainerRef?: Ref<HTMLDivElement | null>;
  /** Inline CSS properties applied to the inner scrollable list element. */
  scrollListStyle?: CSSProperties;
  /** Color variant applied across the floating element and arrow. */
  color: ColorType;
  /** Indicates whether keyboard focus management (trapping and focus restoration) is active. */
  useFocus: boolean;
  /** Controls whether focus returns to the reference trigger element upon closing floating content. */
  returnFocus: boolean | null;
  /** Indicates whether the floating element is currently open and visible. */
  isOpen: boolean;
  /** State updater function to explicitly toggle or set the floating element's open state. */
  setIsOpen: (open: boolean) => void;
  /** Indicates whether this floating element is nested within another parent floating component. */
  isNested: boolean;
  /** Positioning metadata, refs, and coordinates returned from the underlying floating calculation hook. */
  data: UseFloatingReturn;
  /** Trigger interaction handlers (hover, click, focus, dismiss) applied to reference and floating elements. */
  interactions: UseInteractionsReturn;
  /** Computed transition animation styles applied during enter and exit state transitions. */
  transitionStyles: CSSProperties;
  /** Disables user interactions and prevents the floating element from displaying. */
  disabled?: boolean;
  /** When `true`, renders a directional pointing arrow towards the reference trigger element. */
  hasArrow?: boolean;
  /** React ref attached to the SVG directional arrow element. */
  arrowRef?: Ref<SVGSVGElement> | undefined;
  /** Indicates whether the floating element transforms into a sheet layout on mobile viewports. */
  mobileSheet: boolean;
  /** Alignment and positioning placement used when `mobileSheet` mode is active. */
  mobileSheetPlacement?: MobileSheetPlacementType;
}
