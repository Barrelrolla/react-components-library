import { Button, ButtonProps } from "../Button";
import { useSidemenuContext } from "./SidemenuContext";
import { CompositeItem } from "@floating-ui/react";
import { getSidemenuItemClasses } from "./getSidemenuClasses";
import { ElementType } from "react";

const defaultType = "button";
export type SidemenuItemProps<E extends ElementType> = {
  /** Zero-based index position of this menu item within the sidemenu navigation list. */
  index: number;
  /** Additional CSS class names applied to the outer item wrapper element. */
  wrapperClassName?: string;
} & ButtonProps<E>;

/**
 * Interactive navigation option rendered within a sidemenu.
 *
 * Functions as an accessible button that registers its index with the parent `SidemenuContext`,
 * automatically reflecting active selection styles, focus states, and color variants.
 */
export function SidemenuItem<E extends ElementType = typeof defaultType>({
  as,
  index,
  className,
  wrapperClassName,
  children,
  ...rest
}: SidemenuItemProps<E>) {
  const context = useSidemenuContext();
  if (!context) {
    throw new Error("Please use the Sidemenu Item only inside a Sidemenu");
  }

  const { classes, wrapperClasses } = getSidemenuItemClasses({
    fillOnSelect: context.fillOnSelect,
    className,
    wrapperClassName,
  });

  const isSelected = context.activeIndex === index;
  return (
    <CompositeItem
      render={
        <Button
          as={as || defaultType}
          role="menuitem"
          color={isSelected ? context.color : undefined}
          wrapperClassName={wrapperClasses}
          className={classes}
          selected={context.activeIndex === index}
          onClick={() => {
            context.setActiveIndex(index);
          }}
          {...rest}
        >
          {children}
        </Button>
      }
    />
  );
}
