import { ReactElement } from "react";
import { usePopoverContext } from "./PopoverContext";
import { Slot } from "../Slot/Slot";

export type PopoverTriggerProps = {
  /** Single React element acting as the interactive trigger for the popover. */
  children: ReactElement;
};
/**
 * Anchor trigger component that binds popover interaction handlers and floating reference refs
 * to its direct child element without adding extra wrapper nodes to the DOM.
 *
 * Clones the child element using `Slot` to merge necessary event listeners, refs,
 * and accessibility attributes.
 */
export function PopoverTrigger({ children }: PopoverTriggerProps) {
  const context = usePopoverContext();
  if (!context) {
    throw new Error(
      "Please use the Popover Trigger only inside a Popover component!",
    );
  }

  return (
    <Slot
      {...context.interactions.getReferenceProps()}
      ref={context.data.refs.setReference}
    >
      {children}
    </Slot>
  );
}
