import { ComponentProps } from "react";
import { useTooltipContext } from "./TooltipContext";
import { getTooltipClasses } from "./getTooltipClasses";
import { FloatingElementContent } from "../Floating";

export function TooltipContent({ ...rest }: ComponentProps<"div">) {
  const context = useTooltipContext();
  if (!context) {
    throw new Error(
      "Please use the Tooltip Content only inside a Tooltip component!",
    );
  }

  return (
    <FloatingElementContent
      context={context}
      getClasses={getTooltipClasses}
      {...rest}
    />
  );
}
