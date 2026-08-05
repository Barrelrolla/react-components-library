import { Button, ButtonProps } from "../Button";
import { useSidemenuContext } from "./SidemenuContext";
import { CompositeItem } from "@floating-ui/react";
import { getSidemenuItemClasses } from "./getSidemenuClasses";

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
