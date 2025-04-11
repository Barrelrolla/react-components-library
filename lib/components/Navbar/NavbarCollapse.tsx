import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  useContext,
} from "react";
import { NavbarContext } from "./NavbarContext";
import { twMerge } from "tailwind-merge";

interface NavbarCollapseProps extends ComponentProps<"ul"> {
  disableUnderline?: boolean;
  disableUnderlineOnMobile?: boolean;
  disableHoverBG?: boolean;
  disableHoverBGonMobile?: boolean;
  disableSelectedHighlight?: boolean;
  disableSelectedHighlightOnMobile?: boolean;
}
export function NavbarCollapse({
  disableUnderline = false,
  disableUnderlineOnMobile = false,
  disableHoverBG = false,
  disableHoverBGonMobile = false,
  disableSelectedHighlight = false,
  disableSelectedHighlightOnMobile = false,
  children,
}: NavbarCollapseProps) {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      "Please use the Navbar Link Group component only inside a navbar",
    );
  }
  const { isOpen, position, collapseAt } = context;

  return (
    <div
      className={twMerge(
        position === "top" && "order-last",
        position === "bottom" && "order-first",
        "w-full overflow-auto transition-[max-height] duration-200",
        collapseAt === "sm" && "sm:order-none sm:max-h-fit sm:w-auto",
        collapseAt === "md" && "md:order-none md:max-h-fit md:w-auto",
        collapseAt === "lg" && "lg:order-none lg:max-h-fit lg:w-auto",
        collapseAt === "xl" && "xl:order-none xl:max-h-fit xl:w-auto",
        !isOpen && "max-h-0 ease-out",
        isOpen && "max-h-screen ease-in",
      )}
    >
      <ul
        className={twMerge(
          position === "top" && "mt-4",
          position === "bottom" && "mb-4",
          "hidden flex-col gap-2 p-2",
          collapseAt === "sm" &&
            "sm:mt-0 sm:mb-0 sm:flex sm:flex-row sm:gap-4 sm:p-0",
          collapseAt === "md" &&
            "md:mt-0 md:mb-0 md:flex md:flex-row md:gap-4 md:p-0",
          collapseAt === "lg" &&
            "lg:mt-0 lg:mb-0 lg:flex lg:flex-row lg:gap-4 lg:p-0",
          collapseAt === "xl" &&
            "xl:mt-0 xl:mb-0 xl:flex xl:flex-row xl:gap-4 xl:p-0",
          context.rounded && "rounded-lg",
        )}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child as any, {
              disableUnderline: disableUnderline,
              disableHoverBG: disableHoverBG,
              disableSelectedHighlight: disableSelectedHighlight,
            });
          }
        })}
      </ul>
      <ul
        className={twMerge(
          position === "top" && "mt-4",
          position === "bottom" && "mb-4",
          "flex flex-col gap-2 p-2",
          collapseAt === "sm" && "sm:mt-0 sm:mb-0 sm:hidden sm:gap-4 sm:p-0",
          collapseAt === "md" && "md:mt-0 md:mb-0 md:hidden md:gap-4 md:p-0",
          collapseAt === "lg" && "lg:mt-0 lg:mb-0 lg:hidden lg:gap-4 lg:p-0",
          collapseAt === "xl" && "xl:mt-0 xl:mb-0 xl:hidden xl:gap-4 xl:p-0",
          context.rounded && "rounded-lg",
        )}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child as any, {
              disableUnderline: disableUnderlineOnMobile,
              disableHoverBG: disableHoverBGonMobile,
              disableSelectedHighlight: disableSelectedHighlightOnMobile,
            });
          }
        })}
      </ul>
    </div>
  );
}
