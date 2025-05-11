import { ComponentProps } from "react";
import { useFooterIconsContainerStyles } from "./useFooterStyles";

export function FooterIconsContainer({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { styles } = useFooterIconsContainerStyles({ className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
