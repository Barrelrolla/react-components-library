import {
  PropsWithChildren,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AutocompleteContextProvider } from "./AutocompleteContext";
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
import Fuse from "fuse.js";
import { useVirtualizer } from "@tanstack/react-virtual";

export type AutocompleteProps = {
  query: string;
  setQuery: (query: string) => void;
  items: string[];
  strategy?: "absolute" | "fixed";
  placement?: Placement;
  disabled?: boolean;
} & PropsWithChildren;

export function Autocomplete({
  query,
  setQuery,
  items,
  strategy = "absolute",
  placement = "bottom",
  disabled,
  children,
}: AutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const lastEmptyQueryRef = useRef<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // 1. Memoize Fuse instance (only when raw items change)
  const fuse = useMemo(() => {
    lastEmptyQueryRef.current = null; // Reset cache if data changes
    return new Fuse(items, {
      keys: ["label"],
      threshold: 0.3,
      ignoreLocation: true, // Speeds up string matching matrix
    });
  }, [items]);

  // 2. Optimized Filter Logic
  const filteredItems = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();

    // Reset empty cache if user backspaces/clears input
    if (lastEmptyQueryRef.current && !q.startsWith(lastEmptyQueryRef.current)) {
      lastEmptyQueryRef.current = null;
    }

    // SHORT-CIRCUIT: If a shorter prefix already returned 0 results,
    // stop immediately without running Fuse!
    if (lastEmptyQueryRef.current && q.startsWith(lastEmptyQueryRef.current)) {
      return ["no results"];
    }

    if (!q) return items;

    // Run search
    const results = fuse.search(q).map((res) => res.item);

    // If search returns 0 results, mark this query prefix as empty
    if (results.length === 0) {
      lastEmptyQueryRef.current = q;
      return ["no results"];
    }

    return results;
  }, [fuse, deferredQuery, items]);

  // 3. Pass filtered array length to the virtualizer
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: filteredItems.length,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => 35,
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
  const dismiss = useDismiss(context, { bubbles: true });
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
    loop: true,
  });
  const interactions = useInteractions([role, dismiss, listNav]);
  const { isMounted, transitionStyles } = useFloatingTransitionStyles(data);

  console.log({
    scrollElem: scrollContainerRef.current,
    clientHeight: scrollContainerRef.current?.clientHeight,
    count: filteredItems.length,
  });

  return (
    <AutocompleteContextProvider
      value={{
        rowVirtualizer,
        filteredItems,
        query,
        setQuery,
        useFocus: false,
        color: "main",
        isOpen: disabled ? false : isMounted,
        setIsOpen: disabled ? () => {} : setIsOpen,
        activeIndex,
        setActiveIndex,
        interactions,
        data,
        transitionStyles,
        listRef,
        mobileSheet: false,
        returnFocus: true,
        isNested: false,
        scrollContainerRef,
        scrollListStyle: {
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        },
      }}
    >
      <>{children}</>
    </AutocompleteContextProvider>
  );
}
