import { Divider, DividerProps } from "../Divider";
import { useFooterDivider } from "./useFooterStyles";

export function FooterDivider({ ...rest }: DividerProps) {
  const { resolvedColor } = useFooterDivider();
  return <Divider color={resolvedColor} {...rest} />;
}
