import { useCallback, useRef } from "react";

interface UseRepeatActionOptions {
  delay?: number;
  interval?: number;
}

export function useRepeatAction(
  action: () => void,
  { delay = 400, interval = 50 }: UseRepeatActionOptions = {},
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stop = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    timeoutRef.current = null;
    intervalRef.current = null;
  }, []);

  const start = useCallback(() => {
    stop();

    action();

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        action();
      }, interval);
    }, delay);
  }, [action, delay, interval, stop]);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  };
}
