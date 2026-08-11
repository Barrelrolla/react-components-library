import { getFooterLinkClasses } from "./getFooterClasses";
import { Anchor, AnchorProps } from "../Anchor";
import { ElementType } from "react";
import { useFooterContext } from "./FooterContext";
import { CompositeItem } from "@floating-ui/react";

const defaultType = "a";
/**
 * Individual navigation link component for a `Footer`.
 *
 * Supports polymorphic rendering via the `as` prop (e.g., `a`, `Link`, `button`),
 * enabling seamless integration with client-side routers or custom action triggers. Defaults to `a`.
 */
export function FooterLink<E extends ElementType = typeof defaultType>({
  as,
  tabIndex = 0,
  className,
  children,
  ...rest
}: AnchorProps<E>) {
  const footerContext = useFooterContext();
  const { color, classes } = getFooterLinkClasses({ className, footerContext });
  return (
    <CompositeItem
      render={
        <Anchor
          as={as || defaultType}
          color={color}
          tabIndex={tabIndex}
          className={classes}
          {...rest}
        >
          {children}
        </Anchor>
      }
    />
  );
}
