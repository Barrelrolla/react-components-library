import { Button, ButtonProps } from "../Button";
import { useSidemenuContext } from "./SidemenuContext";

export function SidemenuItem({
  index,
  children,
  ...rest
}: { index: number } & ButtonProps<"button">) {
  const context = useSidemenuContext();
  if (!context) {
    throw new Error("Please use the Sidemenu Item only inside a Sidemenu");
  }

  return (
    <Button
      wrapperClassName="w-max sm:w-full"
      className="w-max shrink-0 justify-start text-start sm:h-14 sm:w-full"
      selected={context.activeIndex === index}
      onClick={() => {
        context.setActiveIndex(index);
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
