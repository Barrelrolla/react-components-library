import { ComponentProps } from "react";
import { getFooterIconsContainerClasses } from "./getFooterClasses";
import { FloatingDelayGroupContextProvider } from "@/contexts/FloatingDelayGroup";

/**
 * Flex container component designed to group social icons, action triggers,
 * or decorative icons within a `Footer`.
 */
export function FooterIconsContainer({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { styles } = getFooterIconsContainerClasses({ className });
  return (
    <FloatingDelayGroupContextProvider>
      <div className={styles} {...rest}>
        {children}
      </div>
    </FloatingDelayGroupContextProvider>
  );
}
