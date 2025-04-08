import { ComponentProps, useContext, useState } from "react";
import { HamburgerButton } from "../HamburgerButton";
import { NavbarContext } from "./NavbarContext";
import { twMerge } from "tailwind-merge";
import { SizeType } from "@/types";
import { ColorMap } from "@/util/colors";
// import { ColorMap } from "@/util/colors";

interface NavbarCollapseProps extends ComponentProps<"ul"> {
  hideAt?: SizeType;
}
export function NavbarCollapse({ children }: NavbarCollapseProps) {
  const context = useContext(NavbarContext);
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (!context) {
    throw new Error(
      "Please use the Navbar Link Group component only inside a navbar",
    );
  }

  return (
    <>
      <div className="flex space-x-3 sm:hidden sm:space-x-0">
        <HamburgerButton
          primaryColor={context.secondaryColor}
          secondaryColor={context.primaryColor}
          isOpen={isOpen}
          onClick={clickHandler}
        />
      </div>
      <div
        className={twMerge(
          !isOpen && "hidden",
          "order-last w-full items-center justify-between sm:order-none sm:flex sm:w-auto sm:items-end",
        )}
      >
        <ul
          className={twMerge(
            // todo: fix bug when open and scaled down
            isOpen &&
              `bg-${ColorMap[context.primaryColor].lightHighlightedShade} dark:bg-${ColorMap[context.secondaryColor].darkHighlightedShade}`,
            "mt-4 flex flex-col items-center gap-4 rounded-lg border p-4 sm:mt-0 sm:flex-row sm:gap-6 sm:border-0 sm:p-0",
          )}
        >
          {children}
        </ul>
      </div>
    </>
  );
}
