import { ComponentProps } from "react";
import { useCardActionsStyles } from "./useCardStyles";

/** Section for actions inside a Card */
export function CardActions({
  className,
  children,
  ...rest
}: { className?: string } & ComponentProps<"div">) {
  const { styles } = useCardActionsStyles({ className });
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
}
