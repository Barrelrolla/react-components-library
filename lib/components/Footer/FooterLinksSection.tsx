import { ComponentProps } from "react";
import { getFooterLInksSectionStyles } from "./getFooterStyles";

export function FooterLinksSection({
  className,
  children,
}: ComponentProps<"div">) {
  const { styles } = getFooterLInksSectionStyles({ className });
  return <div className={styles}>{children}</div>;
}
