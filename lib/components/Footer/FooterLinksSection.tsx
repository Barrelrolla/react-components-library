import { ComponentProps } from "react";
import { useFooterLInksSectionStyles } from "./getFooterStyles";

export function FooterLinksSection({
  className,
  children,
}: ComponentProps<"div">) {
  const { styles } = useFooterLInksSectionStyles({ className });
  return <div className={styles}>{children}</div>;
}
