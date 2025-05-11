import { useFooterLinkStyles } from "./useFooterStyles";
import { Anchor, AnchorProps } from "../Anchor";
import { ElementType } from "react";

const defaultType = "a";
export function FooterLink<E extends ElementType>({
  as,
  underlined = false,
  tabIndex = 0,
  className,
  children,
  ...rest
}: AnchorProps<E>) {
  const { color, styles } = useFooterLinkStyles({ className });
  return (
    <Anchor
      as={as || defaultType}
      color={color}
      tabIndex={tabIndex}
      underlined={underlined}
      useBgColor={false}
      className={styles}
      {...rest}
    >
      {children}
    </Anchor>
  );
}
