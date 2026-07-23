import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function DialogContent({
  className,
  children,
  ...rest
}: ComponentProps<"div">) {
  return (
    <div
      className={twMerge("w-100 max-w-[calc(100vw-4rem)]", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
