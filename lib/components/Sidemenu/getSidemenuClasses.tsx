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

export function getSidemenuItemClasses({
  fillOnSelect,
  className,
  wrapperClassName,
}: {
  fillOnSelect: boolean;
  className?: string;
  wrapperClassName?: string;
}) {
  return {
    classes: twMerge(
      "w-max shrink-0 justify-start text-start -outline-offset-4 focus-visible:outline-2 sm:h-14 sm:w-full",
      fillOnSelect && "selected:focus-visible:outline-(--fg-color)",
      !fillOnSelect &&
        "selected:focus-visible:outline-(--bg-color) selected:bg-(--bg-color)/5 selected:text-(--bg-color) selected:hover:bg-(--bg-color)/10 selected:focus-visible:bg-(--bg-color)/10 selected:active:bg-(--bg-color)/15",
      className,
    ),
    wrapperClasses: twMerge("w-max sm:w-full", wrapperClassName),
  };
}
