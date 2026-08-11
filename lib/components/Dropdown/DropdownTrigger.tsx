import { ReactElement, FocusEvent, HTMLAttributes } from "react";
import { useDropdownContext } from "./DropdownContext";
import { Slot } from "../Slot/Slot";
import { useListItem, useMergeRefs } from "@floating-ui/react";

export interface DropdownTriggerProps extends HTMLAttributes<HTMLElement> {
  /** Single React element acting as the interactive trigger for the dropdown menu. */
  children: ReactElement;
}

/**
 * Anchor trigger component that binds dropdown interaction handlers, accessibility attributes,
 * and floating reference refs directly to its child element without adding extra wrapper DOM nodes.
 *
 * Uses `Slot` under the hood to clone the child element and merge event handlers and references.
 */
export function DropdownTrigger({ children, ...rest }: DropdownTriggerProps) {
  const context = useDropdownContext();
  if (!context) {
    throw new Error(
      "Please use the Dropdown Trigger only inside a Dropdown component!",
    );
  }

  const { data, isNested, parent } = context;
  const item = useListItem();
  const refs = useMergeRefs([data.refs.setReference, item.ref]);

  return (
    <Slot
      ref={refs}
      tabIndex={
        !isNested ? undefined : parent?.activeIndex === item.index ? 0 : -1
      }
      role={isNested ? "menuitem" : undefined}
      {...context.interactions.getReferenceProps(
        parent?.interactions.getItemProps({
          ...rest,
          onFocus(event: FocusEvent<HTMLElement>) {
            rest.onFocus?.(event);
            context.setHasFocusInside(false);
            parent.setHasFocusInside(true);
          },
        }),
      )}
    >
      {children}
    </Slot>
  );
}
