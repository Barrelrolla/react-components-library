import { isValidElement, ReactNode } from "react";

export function getTextFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join("");
  }

  if (
    isValidElement<{ children?: React.ReactNode }>(children) &&
    children.props.children
  ) {
    return getTextFromChildren(children.props.children);
  }

  return "";
}
