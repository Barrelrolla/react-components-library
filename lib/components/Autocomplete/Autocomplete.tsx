import {
  PropsWithChildren,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Fuse from "fuse.js";
import { useVirtualizer } from "@tanstack/react-virtual";
import {
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from "@floating-ui/react";
import { useFloatingTransitionStyles } from "@/hooks/useFloatingTransitionStyles";
import { AutocompleteContextProvider } from "./AutocompleteContext";
import { ColorType } from "@/types";

export type AutocompleteProps = {
  /** Color variant of the autocomplete component. */
  color?: ColorType;
  /** Controls whether the autocomplete dropdown is open. */
  isOpen: boolean;
  /** Callback fired when the open state of the dropdown changes. */
  setIsOpen: (open: boolean) => void;
  /** The list of selectable string items to search through. */
  items: string[];
  /** The current search query used to filter the item list. */
  query: string;
  /**
   * Positioning strategy for the dropdown menu.
   * @default "absolute"
   */
  strategy?: "absolute" | "fixed";
  /** Placement of the dropdown relative to the input/trigger element. */
  placement?: Placement;
  /** Disables the autocomplete component and its interactions. */
  disabled?: boolean;
  /**
   * Callback fired when an item is selected via mouse click or the Enter key.
   * @param activeItem The selected string item from the dropdown list.
   */
  onSelectItem: (activeItem: string) => void;
  /** Index of the currently selected item, useful for combobox styling. Passed to list items. */
  selectedIndex?: number | null;
  /** List of selected indices for supporting multi-selection modes. */
  selectedIndices?: number[];
} & PropsWithChildren;

/**
 * Controlled autocomplete component.
 *
 * Add an `AutocompleteTrigger` child and manage state independently. Designed to allow
 * any custom input to act as a trigger. For a controlled input solution, use `AutocompleteInput`.
 *
 * Features virtualized list rendering for seamless performance with large datasets, as well as
 * fuzzy search support for handling typos.
 *
 * Refer to the `Autocomplete` stories for detailed usage examples.
 */
export function Autocomplete({
  color = "main",
  isOpen,
  setIsOpen,
  query,
  onSelectItem,
  items,
  strategy = "absolute",
  placement = "bottom",
  disabled,
  selectedIndex,
  selectedIndices,
  children,
}: AutocompleteProps) {
  const deferredQuery = useDeferredValue(query);
  const lastEmptyQueryRef = useRef<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const fuse = useMemo(() => {
    lastEmptyQueryRef.current = null;
    return new Fuse(items, {
      keys: ["label"],
      threshold: 0.3,
      ignoreLocation: true,
    });
  }, [items]);

  const filteredItems = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();

    if (lastEmptyQueryRef.current && !q.startsWith(lastEmptyQueryRef.current)) {
      lastEmptyQueryRef.current = null;
    }

    if (lastEmptyQueryRef.current && q.startsWith(lastEmptyQueryRef.current)) {
      return [];
    }

    if (!q) {
      return items;
    }

    const results = fuse.search(q).map((res) => res.item);

    if (results.length === 0) {
      lastEmptyQueryRef.current = q;
      return [];
    }

    return results;
  }, [fuse, deferredQuery, items]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: filteredItems.length,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => 32,
    overscan: 5,
  });

  const listRef = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    listRef.current.length = filteredItems.length;
  }, [filteredItems.length]);

  useEffect(() => {
    if (filteredItems.length > 0) {
      setActiveIndex(0);
    } else {
      setActiveIndex(null);
    }
  }, [filteredItems]);

  const data = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [offset(2), flip(), shift({ padding: 8 })],
    strategy,
    whileElementsMounted: autoUpdate,
  });

  const { context } = data;
  const role = useRole(context, { role: "combobox" });
  const dismiss = useDismiss(context, {
    bubbles: true,
    outsidePressEvent: "click",
  });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: (index) => {
      setActiveIndex(index);
      if (index !== null) {
        rowVirtualizer.scrollToIndex(index, { align: "auto" });
      }
    },
    virtual: true,
    loop: false,
  });
  const interactions = useInteractions([role, dismiss, listNav]);
  const { isMounted, transitionStyles } = useFloatingTransitionStyles(
    data,
    false,
  );

  return (
    <AutocompleteContextProvider
      value={{
        items,
        rowVirtualizer,
        filteredItems,
        query,
        onSelectItem,
        useFocus: false,
        color,
        isOpen: disabled ? false : isMounted,
        setIsOpen: disabled ? () => {} : setIsOpen,
        activeIndex,
        setActiveIndex,
        interactions,
        data,
        transitionStyles,
        listRef,
        mobileSheet: false,
        returnFocus: false,
        isNested: false,
        scrollContainerRef,
        scrollListStyle: {
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
          minHeight: "24px",
        },
        selectedIndex,
        selectedIndices,
      }}
    >
      <>{children}</>
    </AutocompleteContextProvider>
  );
}
