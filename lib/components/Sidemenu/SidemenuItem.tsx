import { Button, ButtonProps } from "../Button";
import { useSidemenuContext } from "./SidemenuContext";
import { CompositeItem } from "@floating-ui/react";
import { getSidemenuItemClasses } from "./getSidemenuClasses";

export type SidemenuItemProps = {
  /** Zero-based index position of this menu item within the sidemenu navigation list. */
  index: number;
  /** Additional CSS class names applied to the outer item wrapper element. */
  wrapperClassName?: string;
} & ButtonProps<"button">;

/**
 * Interactive navigation option rendered within a sidemenu.
 *
 * Functions as an accessible button that registers its index with the parent `SidemenuContext`,
 * automatically reflecting active selection styles, focus states, and color variants.
 */
export function SidemenuItem({
  index,
  className,
  wrapperClassName,
  children,
  ...rest
}: { index: number } & ButtonProps<"button">) {
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
