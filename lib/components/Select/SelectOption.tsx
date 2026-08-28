import { useListItem, useMergeRefs } from "@floating-ui/react";
import { ComponentProps } from "react";
import { useSelectContext } from "./SelectContext";
import { getTextFromChildren } from "@/util/helpers";
import { CheckMarkIcon } from "@/icons";
import { useIsMobile } from "@/hooks";
import { getFloatingListItemClasses } from "../Floating/getFloatinigClasses";

export type SelectOptionProps = {
  /** Zero-based index position of this option item within the select options list. */
  index: number;
  /** Disables interaction and selection for this specific option item. */
  disabled?: boolean;
} & ComponentProps<"button">;

/**
 * Individual selectable option item rendered inside the select dropdown list.
 *
 * Functions as an accessible button choice that registers its index with the parent select context,
 * supporting active highlight state, keyboard navigation, and click selections.
 */
export function SelectOption({
  index,
  ref,
  disabled,
  children,
  className,
  ...rest
}: SelectOptionProps) {
  const context = useSelectContext();
  if (!context) {
    throw new Error("Please use the Select List Item only inside a Select");
  }
  const label = getTextFromChildren(children);
  const item = useListItem({ label: disabled ? null : label });
  const isActive = item.index === context.activeIndex;
  let isSelected = false;
  if (context.multiple) {
    isSelected = context.selectedIndices.includes(index);
  } else {
    isSelected = index === context.selectedIndex;
  }
  const isMobile = useIsMobile();
  const { classes } = getFloatingListItemClasses({
    className,
    isMobile,
    mobileSheet: context.mobileSheet,
  });

  return (
    <li
      role="presentation"
      className="focus-visible:outline-none has-disabled:cursor-not-allowed"
    >
      <button
        role="option"
        ref={useMergeRefs([item.ref, ref])}
        disabled={disabled}
        data-selected={isSelected}
        tabIndex={isActive ? 0 : -1}
        className={classes}
        {...context?.interactions.getItemProps()}
        {...rest}
        onClick={() => {
          context.setSelected(index);
          context.triggerRef.current?.focus();
        }}
      >
        <span className="line-clamp-1">{children}</span>
        {isSelected && <CheckMarkIcon />}
      </button>
    </li>
  );
}
