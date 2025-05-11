import { ComponentProps } from "react";
import { getFooterIconsContainerStyles } from "./getFooterStyles";

export function FooterIconsContainer({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  const { styles } = getFooterIconsContainerStyles({ className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
