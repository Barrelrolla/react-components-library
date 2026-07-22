import { ComponentProps } from "react";
import { useFooterIconsContainerStyles } from "./useFooterStyles";
import { FloatingDelayGroupContextProvider } from "@/contexts/FloatingDelayGroup";

export function FooterIconsContainer({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { styles } = useFooterIconsContainerStyles({ className });
  return (
    <FloatingDelayGroupContextProvider>
      <div className={styles} {...rest}>
        {children}
      </div>
    </FloatingDelayGroupContextProvider>
  );
}
