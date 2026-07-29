import { twMerge } from "tailwind-merge";
import { Button, ButtonProps } from "../Button";
import { useSidemenuContext } from "./SidemenuContext";
import { CompositeItem } from "@floating-ui/react";

export function SidemenuItem({
  index,
  wrapperClassName,
  className,
  children,
  ...rest
}: { index: number } & ButtonProps<"button">) {
  const context = useSidemenuContext();
  if (!context) {
    throw new Error("Please use the Sidemenu Item only inside a Sidemenu");
  }

  return (
    <CompositeItem
      render={
        <Button
          wrapperClassName={twMerge("w-max sm:w-full", wrapperClassName)}
          className={twMerge(
            "selected:focus-visible:outline-(--fg-color) w-max shrink-0 justify-start text-start -outline-offset-4 focus-visible:outline-2 sm:h-14 sm:w-full",
            className,
          )}
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
