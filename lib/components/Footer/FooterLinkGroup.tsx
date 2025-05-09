import { ComponentProps } from "react";
import { getFooterLinkGroupStyles } from "./getFooterStyles";

export function FooterLinkGroup({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { styles } = getFooterLinkGroupStyles({ className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
