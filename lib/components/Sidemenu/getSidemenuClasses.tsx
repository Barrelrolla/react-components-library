import { twMerge } from "tailwind-merge";

export function getSidemenuClasses({
  className,
  wrapperClassName,
}: {
  className?: string;
  wrapperClassName?: string;
}) {
  return {
    classes: twMerge(
      "sidemenu sidemenu-horizontal-mask sm:sidemenu-vertical-mask",
      className,
    ),
    wrapperClasses: twMerge("sidemenu-wrapper relative", wrapperClassName),
  };
}
