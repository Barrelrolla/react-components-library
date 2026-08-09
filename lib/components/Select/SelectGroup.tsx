import { ComponentProps } from "react";

export function SelectGroup({ children, ...rest }: ComponentProps<"ul">) {
  return <ul {...rest}>{children}</ul>;
}
