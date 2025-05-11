import { ComponentProps } from "react";
import { useFooterFullSectionStyles } from "./useFooterStyles";

export function FooterFullSection({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { styles } = useFooterFullSectionStyles({ className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
