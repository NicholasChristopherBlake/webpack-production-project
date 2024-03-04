import { useCallback, useEffect, useRef } from "react";

// any is okay, because args can be anything
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>();

  const throttledCallback = useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;
      // we ignore callback calls while throttleRef is true
      timeoutRef.current = setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);

  // Clear timeout in return statement
  useEffect(() => () => {
    clearTimeout(timeoutRef.current);
  }, []);

  return throttledCallback;
}
