import { useListItem, useMergeRefs } from "@floating-ui/react";
import { ComponentProps } from "react";
import { useSelectContext } from "./SelectContext";
import { getSelectOptionClasses } from "./getSelectClasses";
import { getTextFromChildren } from "@/util/helpers";

export function SelectOption({
  value,
  color,
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
  const { classes } = getSelectOptionClasses({ className });

  return (
    <li>
      <button
        color={color ?? "main"}
        role="menuitem"
        ref={useMergeRefs([item.ref, ref])}
        disabled={disabled}
        tabIndex={isActive ? 0 : -1}
        className={classes}
        {...context?.interactions.getItemProps()}
        {...rest}
        onClick={() => {
          context.setSelectedIndex(item.index);
          context.setSelectedValue(value);
          context.setIsOpen(false);
          context.setSelectedItem(children);
        }}
      >
        {children}
      </button>
    </li>
  );
}
