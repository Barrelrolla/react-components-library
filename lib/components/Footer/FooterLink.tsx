import { getFooterLinkClasses } from "./getFooterClasses";
import { Anchor, AnchorProps } from "../Anchor";
import { ElementType } from "react";
import { useFooterContext } from "./FooterContext";
import { CompositeItem } from "@floating-ui/react";

const defaultType = "a";
export function FooterLink<E extends ElementType = typeof defaultType>({
  as,
  underlined = false,
  tabIndex = 0,
  className,
  children,
  ...rest
}: AnchorProps<E>) {
  const footerContext = useFooterContext();
  const { color, classes } = getFooterLinkClasses({ className, footerContext });
  return (
    <CompositeItem render={
      <Anchor
        as={as || defaultType}
        color={color}
        tabIndex={tabIndex}
        underlined={underlined}
        className={classes}
        {...rest}
      >
        {children}
      </Anchor>
    } />
  );
}
