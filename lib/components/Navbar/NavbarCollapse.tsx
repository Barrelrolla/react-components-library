import { ComponentProps, useContext } from "react";
import { NavbarContext } from "./NavbarContext";
import { twMerge } from "tailwind-merge";

interface NavbarCollapseProps extends ComponentProps<"ul"> {}
export function NavbarCollapse({ children }: NavbarCollapseProps) {
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
        "w-full overflow-hidden transition-[max-height] duration-200",
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
          "flex flex-col gap-4",
          collapseAt === "sm" && "sm:mt-0 sm:mb-0 sm:flex-row sm:gap-6",
          collapseAt === "md" && "md:mt-0 md:mb-0 md:flex-row md:gap-6",
          collapseAt === "lg" && "lg:mt-0 lg:mb-0 lg:flex-row lg:gap-6",
          collapseAt === "xl" && "xl:mt-0 xl:mb-0 xl:flex-row xl:gap-6",
          context.rounded && "rounded-lg",
        )}
      >
        {children}
      </ul>
    </div>
  );
}
