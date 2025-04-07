import { ComponentProps, useContext, useState } from "react";
import { HamburgerButton } from "../HamburgerButton";
import { NavbarContext } from "./NavbarContext";
import { twMerge } from "tailwind-merge";
import { SizeType } from "@/types";

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
    "hidden gap-4",
    hideAt === "sm" && "sm:flex",
    hideAt === "md" && "md:flex",
    hideAt === "lg" && "lg:flex",
    hideAt === "xl" && "xl:flex",
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
