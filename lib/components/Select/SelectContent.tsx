import { ComponentProps } from "react";
import { useSelectContext } from "./SelectContext";
import { FloatingElementContent } from "../Floating";
import { FloatingList } from "@floating-ui/react";
import { useIsMobile } from "@/hooks";

export type SelectContentProps = {
  /** Accessible label applied to the button that collapses the floating element on mobile devices. */
  closeButtonAriaLabel?: string;
} & ComponentProps<"div">;

/**
 * Floating surface container for option items within a select component.
 *
 * Manages the popover positioning wrapper for select choices by delegating layout,
 * elevation, backdrop, and overlay positioning styles to `FloatingElementContent`.
 */
export function SelectContent({
  style,
  children,
  ...rest
}: SelectContentProps) {
  const context = useSelectContext();
  const isMobile = useIsMobile();
  if (!context) {
    throw new Error(
      "Please use the Select Content only inside a Select component!",
    );
  }

  const width = context.data.elements.domReference?.clientWidth || 0;

  const styles = { ...style, ...{ width: isMobile ? undefined : width } };

  return (
    <FloatingElementContent context={context} style={styles} {...rest}>
      <FloatingList elementsRef={context.listRef} labelsRef={context.labelsRef}>
        <ul>{children}</ul>
      </FloatingList>
    </FloatingElementContent>
  );
}
