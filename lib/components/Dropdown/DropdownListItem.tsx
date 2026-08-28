import { useFloatingTree, useListItem, useMergeRefs } from "@floating-ui/react";
import { ElementType, MouseEvent, FocusEvent, Ref } from "react";
import { useDropdownContext } from "./DropdownContext";
import { CaretDownIcon } from "@/icons";
import { getTextFromChildren } from "@/util/helpers";
import { PolymorphicProps } from "@/types";
import { cssColorPropsReversed } from "@/util";
import { getFloatingListItemClasses } from "../Floating/getFloatinigClasses";
import { useIsMobile } from "@/hooks";

const defaultType = "button";
export function DropdownListItem<E extends ElementType = typeof defaultType>({
  as,
  ref,
  color,
  disabled,
  style,
  children,
  className,
  ...rest
}: { disabled?: boolean } & PolymorphicProps<E>) {
  const context = useDropdownContext();
  if (!context) {
    throw new Error("Please use the Dropdown List Item only inside a Dropdown");
  }

  const resolvedColor = color || context.color || "primary";
  const label = getTextFromChildren(children);
  const item = useListItem({ label: disabled ? null : label });
  const tree = useFloatingTree();
  const isMobile = useIsMobile();
  const isActive = item.index === context.activeIndex;
  const { classes } = getFloatingListItemClasses({
    className: "group/dropdown expanded:text-(--fg-color) " + className,
    mobileSheet: context.mobileSheet,
    isMobile,
  });
  const Element = as || defaultType;

  return (
    <li className="has-disabled:cursor-not-allowed" role="menuitem">
      <Element
        data-test={children}
        style={{ ...cssColorPropsReversed(resolvedColor), ...style }}
        ref={useMergeRefs([item.ref, ref as Ref<HTMLElement | null>])}
        disabled={disabled}
        tabIndex={isActive ? 0 : -1}
        className={classes}
        {...context?.interactions.getItemProps({
          onClick(event: MouseEvent<HTMLElement>) {
            rest.onClick?.(event);
            tree?.events.emit("click");
          },
          onFocus(event: FocusEvent<HTMLElement>) {
            rest.onFocus?.(event);
            context.setHasFocusInside(true);
          },
        })}
        {...rest}
        role={undefined}
      >
        {children}
        <CaretDownIcon className="group-can-expand/dropdown:inline hidden -rotate-90" />
      </Element>
    </li>
  );
}
