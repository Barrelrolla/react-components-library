import { ComponentProps } from "react";
import { useSelectContext } from "./SelectContext";
import { getSelectContentClasses } from "./getSelectClasses";
import { FloatingElementContent } from "../Floating";
import { FloatingList } from "@floating-ui/react";

export function SelectContent({ children, ...rest }: ComponentProps<"div">) {
  const context = useSelectContext();
  if (!context) {
    throw new Error(
      "Please use the Select Content only inside a Select component!",
    );
  }

  const width = context.data.elements.domReference?.clientWidth || 0;

  return (
    <FloatingElementContent
      context={context}
      getClasses={getSelectContentClasses}
      style={{ width }}
      {...rest}
    >
      <FloatingList elementsRef={context.listRef} labelsRef={context.labelsRef}>
        <ul>{children}</ul>
      </FloatingList>
    </FloatingElementContent>
  );
}
