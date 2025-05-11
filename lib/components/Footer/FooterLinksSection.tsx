import { ComponentProps } from "react";
import { useFooterLinksSectionStyles } from "./useFooterStyles";

export function FooterLinksSection({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { styles } = useFooterLinksSectionStyles({ className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
