import { useIsMobile } from "@/hooks";
import { ButtonGroup, ButtonGroupProps } from "../Button";
import { twMerge } from "tailwind-merge";
import { Composite } from "@floating-ui/react";
import { useSidemenuContext } from "./SidemenuContext";

/**
 * Visual and structural grouping wrapper for related items within a sidemenu.
 *
 * Groups subcomponents using `ButtonGroup` behaviors
 */
export function SidemenuSection({
  className,
  dividerClassName,
  children,
  ...rest
}: ButtonGroupProps) {
  const context = useSidemenuContext();
  const isMobile = useIsMobile();
  if (!context) return null;

  return (
    <Composite
      loop={false}
      orientation={isMobile ? "horizontal" : "vertical"}
      render={
        <ButtonGroup
          role={isMobile ? "menubar" : "menu"}
          color="main"
          variant="ghost"
          className={twMerge("w-full", className)}
          vertical={!isMobile}
          divider={isMobile}
          dividerClassName={twMerge(
            "opacity-(--border-transparency)",
            dividerClassName,
          )}
          {...rest}
        >
          {children}
        </ButtonGroup>
      }
    />
  );
}
