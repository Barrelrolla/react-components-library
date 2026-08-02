import { useListItem, useMergeRefs } from "@floating-ui/react";
import { ElementType } from "react";
import { useSelectContext } from "./SelectContext";
import { Anchor, AnchorProps } from "../Anchor";
import { getSelectOptionClasses } from "./getSelectClasses";
import { CaretDownIcon } from "@/icons";
import { getTextFromChildren } from "@/util/helpers";

const defaultType = "button";
export function SelectOption<E extends ElementType = typeof defaultType>({
  as,
  value,
  color,
  ref,
  disabled,
  showCaret,
  children,
  className,
  ...rest
}: {
  value: string | undefined;
  disabled?: boolean;
  showCaret?: boolean;
} & AnchorProps<E>) {
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
      <Anchor
        as={as || defaultType}
        color={color ?? "main"}
        role="menuitem"
        ref={useMergeRefs([item.ref, ref])}
        disabled={disabled}
        tabIndex={isActive ? 0 : -1}
        className={classes}
        underlined={false}
        hoverUnderline={false}
        {...context?.interactions.getItemProps}
        {...rest}
        onClick={() => {
          context.setSelectedIndex(item.index);
          context.setSelectedValue(value);
          context.setIsOpen(false);
          context.setSelectedItem(children);
        }}
      >
        {children}
        {showCaret && <CaretDownIcon className="inline -rotate-90" />}
      </Anchor>
    </li>
  );
}
