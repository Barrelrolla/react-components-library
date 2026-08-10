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

  return (
    <FloatingElementContent context={context} style={styles} {...rest}>
      <FloatingList elementsRef={context.listRef}>
        {context.filteredItems.length > 0 && (
          <ul>
            {context.rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const item = context.filteredItems[virtualRow.index];
              return (
                <li
                  key={virtualRow.key}
                  ref={(node) => {
                    context.listRef.current[virtualRow.index] = node;
                  }}
                  style={{
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: `translateY(${virtualRow.start}px)`,
                    height: `${virtualRow.size}px`,
                  }}
                  tabIndex={-1}
                >
                  <AutocompleteItem
                    active={context.activeIndex === virtualRow.index}
                  >
                    {item}
                  </AutocompleteItem>
                </li>
              );
            })}
          </ul>
        )}
        {context.filteredItems.length === 0 && <p>No results</p>}
      </FloatingList>
    </FloatingElementContent>
  );
}
