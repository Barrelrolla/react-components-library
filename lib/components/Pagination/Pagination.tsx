import { ColorType } from "@/types";
import { Button } from "../Button/Button";
import { CaretDownIcon } from "@/icons";
import { cssColorPropsReversed } from "@/util";
import { Composite, CompositeItem } from "@floating-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";

type PageItem = number | "ellipsis";

function getPageNumbers(
  currentPage: number,
  pageCount: number,
  itemsCount: number,
): PageItem[] {
  const minItems = Math.max(itemsCount, 5);

  if (pageCount <= minItems) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  const middleCount = minItems - 4;
  const leftOffset = Math.floor((middleCount - 1) / 2);

  if (currentPage <= minItems - 3) {
    const head = Array.from({ length: minItems - 2 }, (_, i) => i + 1);
    return [...head, "ellipsis", pageCount];
  }

  if (currentPage >= pageCount - (minItems - 4)) {
    const tailStart = pageCount - (minItems - 3);
    const tail = Array.from({ length: minItems - 2 }, (_, i) => tailStart + i);
    return [1, "ellipsis", ...tail];
  }

  const startPage = currentPage - leftOffset;
  const middle = Array.from({ length: middleCount }, (_, i) => startPage + i);

  return [1, "ellipsis", ...middle, "ellipsis", pageCount];
}

function getPageCompositeIndex(
  page: number,
  pageCount: number,
  itemsCount: number,
) {
  const pages = getPageNumbers(page, pageCount, itemsCount);
  const pageIndex = pages.findIndex((item) => item === page);

  return (
    pages
      .slice(0, pageIndex)
      .filter((item): item is number => item !== "ellipsis").length + 1
  );
}

export type PaginationProps = {
  /** The color theme variant for active and interactive elements. */
  color?: ColorType;

  /** The maximum number of visible page buttons to display in the control, including page numbers and ellipsis. Must be at least `5`.
   */
  visiblePages?: number;
  /** The currently active page number. */
  currentPage: number;
  /** The total number of pages available. */
  pageCount: number;

  /**
   * Callback fired when a page button or navigation control is selected.
   *
   * @param index - The targeted page number (1-indexed).
   */
  onPageChange: (index: number) => void;
  /** Accessible label for the previous page button */
  previousAriaLabel?: string;
  /** Accessible label for the next page button */
  nextAriaLabel?: string;
};
/** Renders a responsive pagination bar with optional ellipsis truncation for navigating multi-page datasets. */
export function Pagination({
  color = "main",
  visiblePages = 7,
  currentPage,
  pageCount,
  onPageChange,
  previousAriaLabel,
  nextAriaLabel,
}: PaginationProps) {
  const pages = getPageNumbers(currentPage, pageCount, visiblePages);
  const hadFocus = useRef(false);
  const lastPage = useRef(currentPage);

  const getPageIndex = useCallback(
    (page: number) => {
      return getPageCompositeIndex(page, pageCount, visiblePages);
    },
    [pageCount, visiblePages],
  );

  const [activeIndex, setActiveIndex] = useState(getPageIndex(currentPage));

  useEffect(() => {
    setActiveIndex(getPageIndex(currentPage));
  }, [currentPage, getPageIndex]);

  useEffect(() => {
    if (!hadFocus.current) {
      setActiveIndex(getPageIndex(currentPage));
      return;
    }

    hadFocus.current = false;

    if (document.activeElement === document.body) {
      const activePageBtn = document.querySelector(
        '[data-pagination-selected="true"]',
      ) as HTMLElement;

      activePageBtn?.focus();
      setActiveIndex(lastPage.current);
      setActiveIndex(getPageIndex(currentPage));
    }
  }, [currentPage, getPageIndex]);

  const handlePageChange = (page: number) => {
    setActiveIndex(getPageIndex(page));
    hadFocus.current = true;
    onPageChange(page);
  };

  if (pageCount <= 1) return null;

  return (
    <Composite
      activeIndex={activeIndex}
      onNavigate={setActiveIndex}
      loop={false}
      render={
        <div
          className="flex w-full items-center justify-center gap-2 text-(--fg-color)"
          style={cssColorPropsReversed(color)}
        >
          <CompositeItem
            render={
              <Button
                aria-label={previousAriaLabel}
                color={color}
                size="sm"
                variant="ghost"
                disabled={currentPage === 1}
                startIcon={<CaretDownIcon className="rotate-90" />}
                onClick={() => handlePageChange(currentPage - 1)}
              />
            }
          />
          {pages.map((page, index) =>
            page === "ellipsis" ? (
              <span key={`ellipsis-${index}`} className="px-2">
                …
              </span>
            ) : (
              <CompositeItem
                key={"pagination" + page}
                render={
                  <Button
                    color={color}
                    size="sm"
                    variant="ghost"
                    selected={page === currentPage}
                    data-pagination-selected={page === currentPage}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                }
              />
            ),
          )}
          <CompositeItem
            render={
              <Button
                aria-label={nextAriaLabel}
                color={color}
                size="sm"
                variant="ghost"
                disabled={currentPage === pageCount}
                startIcon={<CaretDownIcon className="-rotate-90" />}
                onClick={() => handlePageChange(currentPage + 1)}
              />
            }
          />
        </div>
      }
    />
  );
}
