import { ReactElement, FocusEvent, HTMLAttributes } from "react";
import { useDropdownContext } from "./DropdownContext";
import { Slot } from "../Slot/Slot";
import { useListItem, useMergeRefs } from "@floating-ui/react";

interface DropdownTriggerProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement;
}

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
        parent?.getItemProps({
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
