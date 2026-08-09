import { useListItem, useMergeRefs } from "@floating-ui/react";
import { ComponentProps } from "react";
import { useSelectContext } from "./SelectContext";
import { getSelectOptionClasses } from "./getSelectClasses";
import { getTextFromChildren } from "@/util/helpers";
import { CheckMarkIcon } from "@/icons";

export function SelectOption({
  value,
  ref,
  disabled,
  children,
  className,
  ...rest
}: {
  value: string | undefined;
  disabled?: boolean;
} & ComponentProps<"button">) {
  const context = useSelectContext();
  if (!context) {
    throw new Error("Please use the Select List Item only inside a Select");
  }
  const label = getTextFromChildren(children);
  const item = useListItem({ label: disabled ? null : label });
  const isActive = item.index === context.activeIndex;
  let isSelected = false;
  if (context.multiple && value) {
    isSelected = context.selectedValues.includes(value);
  } else {
    isSelected = value === context.selectedValue;
  }
  const { classes } = getSelectOptionClasses({ className });

  return (
    <li className="focus-visible:outline-none has-disabled:cursor-not-allowed">
      <button
        role="menuitem"
        ref={useMergeRefs([item.ref, ref])}
        disabled={disabled}
        data-selected={isSelected}
        tabIndex={isActive ? 0 : -1}
        className={classes}
        {...context?.interactions.getItemProps()}
        {...rest}
        onClick={() => {
          context.setSelected(value, children);
        }}
      >
        {children}
        {isSelected && <CheckMarkIcon />}
      </button>
    </li>
  );
}
