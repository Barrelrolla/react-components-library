import { ReactElement } from "react";
import { useTooltipContext } from "./TooltipContext";
import { Slot } from "../Slot/Slot";

export default function TooltipTrigger({
  children,
}: {
  children: ReactElement;
}) {
  const context = useTooltipContext();
  if (!context) {
    throw new Error(
      "Please use the Tooltip Trigger only inside a Tooltip component!",
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
