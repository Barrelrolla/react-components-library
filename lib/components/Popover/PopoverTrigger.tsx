import { ReactElement } from "react";
import { usePopoverContext } from "./PopoverContext";
import { Slot } from "../Slot/Slot";

export function PopoverTrigger({ children }: { children: ReactElement }) {
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
