import { ComponentProps, useContext } from "react";
import { NavbarContext } from "./NavbarContext";
import { twMerge } from "tailwind-merge";
import { ColorMap } from "@/util/colors";

interface NavbarCollapseProps extends ComponentProps<"ul"> {}
export function NavbarCollapse({ children }: NavbarCollapseProps) {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      "Please use the Navbar Link Group component only inside a navbar",
    );
  }
  const { isOpen } = context;

  return (
    <div
      className={twMerge(
        "order-last w-full sm:order-none sm:flex sm:w-auto",
        !isOpen && "hidden",
      )}
    >
      <ul
        className={twMerge(
          `bg-${ColorMap[context.primaryColor].lightHighlightedShade} dark:bg-${ColorMap[context.secondaryColor].darkHighlightedShade}`,
          `sm:bg-${ColorMap[context.primaryColor].lightShade} dark:sm:bg-${ColorMap[context.secondaryColor].darkShade}`,
          "mt-4 flex flex-col gap-4 border p-4 sm:mt-0 sm:flex-row sm:gap-6 sm:border-0 sm:p-0",
          context.rounded && "rounded-lg",
        )}
      >
        {children}
      </ul>
    </div>
  );
}
