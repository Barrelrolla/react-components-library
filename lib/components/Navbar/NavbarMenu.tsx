import { ComponentProps } from "react";
import { useNavbarMenuStyles } from "./useNavbarStyles";
import { Composite } from "@floating-ui/react";
import { useIsMobile } from "@/hooks";
import { useNavbarContext } from "./NavbarContext";

export function NavbarMenu({
  className,
  children,
  ...rest
}: ComponentProps<"menu">) {
  const { styles } = useNavbarMenuStyles({ className });

  const context = useNavbarContext();
  const isMobile = useIsMobile();
  if (!context) {
    throw new Error("Please use the Navbar Collapse");
  }

  return (
    <Composite
      orientation={isMobile ? "vertical" : "horizontal"}
      render={
        <menu className={styles} {...rest}>
          {children}
        </menu>
      }
    />
  );
}
