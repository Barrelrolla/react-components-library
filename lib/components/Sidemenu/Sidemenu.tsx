import {
  ComponentProps,
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";
import { ColorType } from "@/types";
import { getSidemenuClasses } from "./getSidemenuClasses";
import { useIsMobile } from "@/hooks";
import { SidemenuContextProvider } from "./SidemenuContext";
import { CaretDownIcon } from "@/icons";

export type SidemenuProps = {
  /** Color variant applied across selected sidemenu items and indicators. */
  color?: ColorType;
  /** When `true`, applies a solid color background to selected menu items instead of a subtle tint. */ fillOnSelect?: boolean;
  /** Zero-based index of the initially selected navigation menu item. */
  initialActiveIndex?: number;
  /** Callback fired when the active navigation item selection index changes. */
  onActiveIndexChange?: (index: number) => void;
  /** Additional CSS class names applied to the outer wrapper element. */
  wrapperClassName?: string;
  /** Custom inline CSS styles applied to the outer wrapper element. */
  wrapperStyle?: CSSProperties;
} & ComponentProps<"div">;

/**
 * Vertical side navigation menu container that automatically adapts to horizontal tabs on mobile viewports.
 *
 * Manages active item selection state across navigation options, supporting custom color variants,
 * solid or subtle background fill highlights, and responsive layout transitions.
 */
export function Sidemenu({
  initialActiveIndex = 0,
  onActiveIndexChange,
  color = "primary",
  fillOnSelect = false,
  className,
  style,
  wrapperClassName,
  wrapperStyle,
  children,
  ...rest
}: SidemenuProps) {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [availableScroll, setAvailableScroll] = useState({
    top: false,
    bottom: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    if (onActiveIndexChange) {
      onActiveIndexChange(activeIndex);
    }
  }, [activeIndex, onActiveIndexChange]);

  const divRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  useEffect(() => {
    const container = divRef.current;
    if (!container) {
      return;
    }

    function updateScrollState() {
      if (!container) {
        return;
      }

      if (isMobile) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const canScrollLeft = scrollLeft > 1;
        const canScrollRight = scrollLeft + clientWidth < scrollWidth - 1;
        setAvailableScroll({
          top: false,
          bottom: false,
          left: canScrollLeft,
          right: canScrollRight,
        });
        container.style.setProperty(
          "--start-fade",
          canScrollLeft ? "transparent" : "black",
        );
        container.style.setProperty(
          "--end-fade",
          canScrollRight ? "transparent" : "black",
        );
      } else {
        const { scrollTop, scrollHeight, clientHeight } = container;
        const canScrollTop = scrollTop > 1;
        const canScrollBottom = scrollTop + clientHeight < scrollHeight - 1;
        setAvailableScroll({
          top: canScrollTop,
          bottom: canScrollBottom,
          left: false,
          right: false,
        });

        container.style.setProperty(
          "--start-fade",
          canScrollTop ? "transparent" : "black",
        );
        container.style.setProperty(
          "--end-fade",
          canScrollBottom ? "transparent" : "black",
        );
      }
    }

    container.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    updateScrollState();

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [isMobile]);

  useEffect(() => {
    const container = divRef.current;
    if (!container) return;

    const selected = container.querySelector<HTMLElement>(
      "[data-selected='true']",
    );

    if (!selected) return;

    const containerRect = container.getBoundingClientRect();
    const selectedRect = selected.getBoundingClientRect();

    container.scrollTop +=
      selectedRect.top -
      containerRect.top -
      (container.clientHeight - selected.offsetHeight) / 2;

    container.scrollLeft +=
      selectedRect.left -
      containerRect.left -
      (container.clientWidth - selected.offsetWidth) / 2;
  }, [isMobile]);

  const { classes, wrapperClasses } = getSidemenuClasses({
    className,
    wrapperClassName,
  });

  const caretClasses = {
    top: "absolute top-1 left-[calc(50%-8px)]",
    bottom: "absolute bottom-1 left-[calc(50%-8px)]",
    left: "absolute left-1 top-[calc(50%-8px)]",
    right: "absolute right-1 top-[calc(50%-8px)]",
  };

  function setActive(index: number) {
    if (onActiveIndexChange) {
      onActiveIndexChange(index);
    }
    setActiveIndex(index);
  }

  return (
    <div style={wrapperStyle} className={wrapperClasses}>
      {availableScroll.top && (
        <div className={caretClasses.top}>
          <CaretDownIcon className="rotate-180" />
        </div>
      )}
      {availableScroll.bottom && (
        <div className={caretClasses.bottom}>
          <CaretDownIcon />
        </div>
      )}
      {availableScroll.left && (
        <div className={caretClasses.left}>
          <CaretDownIcon className="rotate-90" />
        </div>
      )}
      {availableScroll.right && (
        <div className={caretClasses.right}>
          <CaretDownIcon className="-rotate-90" />
        </div>
      )}
      <div
        ref={divRef}
        className={classes}
        style={
          {
            "--start-fade": "black",
            "--end-fade": "transparent",
            ...style,
          } as CSSProperties
        }
        {...rest}
      >
        <SidemenuContextProvider
          value={{
            activeIndex,
            setActiveIndex: setActive,
            color,
            fillOnSelect,
          }}
        >
          {children}
        </SidemenuContextProvider>
      </div>
    </div>
  );
}
