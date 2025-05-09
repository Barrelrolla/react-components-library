import { ComponentProps } from "react";
import { getFooterFullSectionStyles } from "./getFooterStyles";

export function FooterFullSection({
  className,
  children,
}: ComponentProps<"div">) {
  const { styles } = getFooterFullSectionStyles({ className });
  return <div className={styles}>{children}</div>;
}
