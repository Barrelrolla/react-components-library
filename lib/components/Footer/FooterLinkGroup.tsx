import { ComponentProps } from "react";
import { useFooterLinkGroupStyles } from "./useFooterStyles";

export function FooterLinkGroup({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { styles } = useFooterLinkGroupStyles({ className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
