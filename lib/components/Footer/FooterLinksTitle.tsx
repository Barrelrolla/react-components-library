import { ComponentProps } from "react";
import { getFooterLinksTitleStyles } from "./getFooterStyles";

export function FooterLinksTitle({
  className,
  children,
}: ComponentProps<"h3">) {
  const { styles } = getFooterLinksTitleStyles({ className });
  return <h3 className={styles}>{children}</h3>;
}
