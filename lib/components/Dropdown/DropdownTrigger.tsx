import { ReactElement } from "react";
import { useDropdownContext } from "./DropdownContext";
import { Slot } from "../Slot/Slot";

export function DropdownTrigger({ children }: { children: ReactElement }) {
  const context = useDropdownContext();
  if (!context) {
    throw new Error(
      "Please use the Dropdown Trigger only inside a Dropdown component!",
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
