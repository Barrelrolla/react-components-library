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
  color?: ColorType;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  query: string;
  items: string[];
  strategy?: "absolute" | "fixed";
  placement?: Placement;
  disabled?: boolean;
  onSelectItem: (activeItem: string) => void;
  selectedIndex?: number | null;
  selectedIndices?: number[];
} & PropsWithChildren;

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
    loop: false,
  });
  const interactions = useInteractions([role, dismiss, listNav]);
  const { isMounted, transitionStyles } = useFloatingTransitionStyles(data);

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
        returnFocus: true,
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
