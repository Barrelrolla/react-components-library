import { ComponentProps } from "react";

interface NavbarProps extends ComponentProps<"nav"> {}
export function Navbar(props: NavbarProps) {
  return <nav>{props.children}</nav>;
}
