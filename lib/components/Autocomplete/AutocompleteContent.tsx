import { ComponentProps, RefObject } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";
import { FloatingElementContent } from "../Floating";
import { FloatingList } from "@floating-ui/react";
import { AutocompleteItem } from "./AutocompleteItem";

export type AutocompleteContentProps = {
  /** Ref to the parent div, used to calculate the width. If no ref is provided, the width will be calculated based on the Trigger. */
  parentRef?: RefObject<HTMLDivElement | null>;
  /** Text message displayed inside the dropdown list when no matching suggestions are found. Defaults to `"No results found."`. */
  noResultsText?: string;
  /** Accessible label applied to the button that collapses the floating element on mobile devices. */
  closeButtonAriaLabel?: string;
} & ComponentProps<"div">;

/**
 * Floating surface container for autocomplete search results and option items.
 *
 * Manages the floating positioning wrapper for autocomplete suggestions and automatically handles
 * empty state rendering using `noResultsText` when filtering returns zero matching choices.
 */
export function AutocompleteContent({
  parentRef,
  noResultsText = "No results found.",
  style,
  ...rest
}: AutocompleteContentProps) {
  const context = useAutocompleteContext();
  if (!context) {
    throw new Error(
      "Please use the Autocomplete Content only inside a Autocomplete component!",
    );
  }

  const width =
    parentRef?.current?.clientWidth ||
    context.data.elements.domReference?.clientWidth ||
    0;

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
        {context.filteredItems.length === 0 && <p>{noResultsText}</p>}
      </FloatingList>
    </FloatingElementContent>
  );
}
