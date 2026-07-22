import { Children, cloneElement, HTMLAttributes, isValidElement } from "react";
import { useMergeRefs } from "@floating-ui/react";
import { twMerge } from "tailwind-merge";

const EVENT_REGEX = /^on[A-Z]/;

type SlotProps = HTMLAttributes<HTMLElement> & {
  ref?: React.Ref<HTMLElement>;
};

function composeEventHandlers<E extends React.SyntheticEvent>(
  childHandler?: (event: E) => void,
  slotHandler?: (event: E) => void,
) {
  return (event: E) => {
    childHandler?.(event);

    if (!event.defaultPrevented) {
      slotHandler?.(event);
    }
  };
}

export function Slot({ children, ref, ...props }: SlotProps) {
  const child = Children.only(children);
  if (!isValidElement(child)) {
    throw new Error("Slot should be a single react element.");
  }

  const childProps = child.props as SlotProps;
  const childPropsRecord = child.props as Record<string, unknown>;

  const mergedProps: Record<string, unknown> = {
    ...props,
    ...childProps,
  };

  for (const key in props) {
    const prop = props[key as keyof typeof props];

    if (EVENT_REGEX.test(key) && typeof prop === "function") {
      mergedProps[key] = composeEventHandlers(
        childPropsRecord[key] as
          ((event: React.SyntheticEvent) => void) | undefined,
        prop as (event: React.SyntheticEvent) => void,
      );
    }
  }

  mergedProps.className = twMerge(props.className, childProps.className);

  mergedProps.style = {
    ...props.style,
    ...childProps.style,
  };

  mergedProps.ref = useMergeRefs([ref, childProps.ref]);

  return cloneElement(child, mergedProps);
}
