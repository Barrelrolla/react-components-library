import { ComponentProps } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";
import { FloatingElementContent } from "../Floating";
import { FloatingList } from "@floating-ui/react";
import { AutocompleteItem } from "./AutocompleteItem";

export function AutocompleteContent({ style, ...rest }: ComponentProps<"div">) {
  const context = useAutocompleteContext();
  if (!context) {
    throw new Error(
      "Please use the Autocomplete Content only inside a Autocomplete component!",
    );
  }

  const width = context.data.elements.domReference?.clientWidth || 0;

  const styles = { width, ...style };
  console.log(
    "virtualizer length",
    context.rowVirtualizer.getVirtualItems().length,
  );

  console.log("style", context.scrollListStyle);

  return (
    <FloatingElementContent context={context} style={styles} {...rest}>
      <FloatingList elementsRef={context.listRef}>
        <ul>
          {context.rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const item = context.filteredItems[virtualRow.index];
            console.log(item);
            return (
              <li
                key={virtualRow.key}
                ref={(node) => {
                  context.listRef.current[virtualRow.index] = node;
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: `translateY(${virtualRow.start}px)`,
                  height: `${virtualRow.size}px`,
                }}
              >
                <AutocompleteItem
                  isSelected={context.activeIndex === virtualRow.index}
                >
                  {item}
                </AutocompleteItem>
              </li>
            );
          })}
        </ul>
      </FloatingList>
    </FloatingElementContent>
  );
}
