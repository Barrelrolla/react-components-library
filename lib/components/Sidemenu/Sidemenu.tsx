import {
  ComponentProps,
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";
import { ColorType } from "@/types";
import { cssColorProps } from "@/util";
import { getSidemenuClasses } from "./getSidemenuClasses";
import { useIsMobile } from "@/hooks";
import {
  PiCaretDownThin,
  PiCaretLeftThin,
  PiCaretRightThin,
  PiCaretUpThin,
} from "react-icons/pi";
import { SidemenuContextProvider } from "./SidemenuContext";

export type SidemenuProps = {
  color?: ColorType;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
} & ComponentProps<"div">;

export function Sidemenu({
  color = "main",
  className,
  style,
  wrapperClassName,
  wrapperStyle,
  children,
  ...rest
}: SidemenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [availableScroll, setAvailableScroll] = useState({
    top: false,
    bottom: false,
    left: false,
    right: false,
  });
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

    selected?.scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "auto",
    });
  }, [isMobile]);

  const { classes, wrapperClasses } = getSidemenuClasses({
    className,
    wrapperClassName,
  });

  const caretClasses = {
    top: "absolute top-1 left-[calc(50%-10px)]",
    bottom: "absolute bottom-1 left-[calc(50%-10px)]",
    left: "absolute left-1 top-[calc(50%-10px)]",
    right: "absolute right-1 top-[calc(50%-10px)]",
  };

  return (
    <div
      style={{ ...cssColorProps(color), ...wrapperStyle }}
      className={wrapperClasses}
    >
      {availableScroll.top && (
        <div className={caretClasses.top}>
          <PiCaretUpThin size={20} />
        </div>
      )}
      {availableScroll.bottom && (
        <div className={caretClasses.bottom}>
          <PiCaretDownThin size={20} />
        </div>
      )}
      {availableScroll.left && (
        <div className={caretClasses.left}>
          <PiCaretLeftThin size={20} />
        </div>
      )}
      {availableScroll.right && (
        <div className={caretClasses.right}>
          <PiCaretRightThin size={20} />
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
        <SidemenuContextProvider value={{ activeIndex, setActiveIndex }}>
          {children}
        </SidemenuContextProvider>
      </div>
    </div>
  );
}
