import { ComponentProps } from "react";
import { useFooterLinksTitleStyles } from "./useFooterStyles";

export function FooterLinksTitle({
  className,
  children,
  ...rest
}: ComponentProps<"h3">) {
  const { styles } = useFooterLinksTitleStyles({ className });
  return (
    <h3 className={styles} {...rest}>
      {children}
    </h3>
  );
}
