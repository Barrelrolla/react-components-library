import { ComponentProps } from "react";
import { useFooterFullSectionStyles } from "./getFooterStyles";

export function FooterFullSection({
  className,
  children,
}: ComponentProps<"div">) {
  const { styles } = useFooterFullSectionStyles({ className });
  return <div className={styles}>{children}</div>;
}
