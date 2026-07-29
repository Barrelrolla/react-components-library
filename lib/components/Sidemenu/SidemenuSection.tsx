import { useIsMobile } from "@/hooks";
import { ButtonGroup, ButtonGroupProps } from "../Button";

export function SidemenuSection({ children, ...rest }: ButtonGroupProps) {
  const isMobile = useIsMobile();
  return (
    <ButtonGroup
      variant="ghost"
      className="w-full"
      vertical={!isMobile}
      divider={isMobile}
      dividerClassName="opacity-(--border-transparency)"
      {...rest}
    >
      {children}
    </ButtonGroup>
  );
}
