import { ComponentProps, useContext, useState } from "react";
import { HamburgerButton } from "../HamburgerButton";
import { NavbarContext } from "./NavbarContext";
import { twMerge } from "tailwind-merge";
import { SizeType } from "@/types";
import { ColorMap } from "@/util/colors";

interface NavbarLinkGroupProps extends ComponentProps<"ul"> {
  hideAt?: SizeType;
}
export function NavbarLinkGroup({
  hideAt = "sm",
  className,
  children,
}: NavbarLinkGroupProps) {
  const context = useContext(NavbarContext);
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (!context) {
    throw new Error("Please use the Navbar Link Group only inside a navbar");
  }

  const buttonClasses = twMerge(
    hideAt === "sm" && "sm:hidden",
    hideAt === "md" && "md:hidden",
    hideAt === "lg" && "lg:hidden",
    hideAt === "xl" && "xl:hidden",
  );
  const listClasses = twMerge(
    "absolute top-0 left-0 h-screen w-screen flex-col content-center gap-4 space-y-8 p-6 text-center",
    `bg-${ColorMap[context.primaryColor].lightShade}`,
    `dark:bg-${ColorMap[context.secondaryColor].darkShade}`,
    !isOpen && "hidden",
    "sm:relative sm:flex sm:h-full sm:w-full sm:flex-row sm:space-y-0 sm:bg-transparent sm:p-0",
    className,
  );
  return (
    <div>
      <ul className={listClasses}>{children}</ul>
      <HamburgerButton
        className={buttonClasses}
        primaryColor={context.secondaryColor}
        secondaryColor={context.primaryColor}
        isOpen={isOpen}
        onClick={clickHandler}
      />
    </div>
  );
}
