import { useState, useCallback } from 'react';


type CallbackFunction = (...args: any) => void;

// Custom debounce hook
export function useDebounceCallback(callback: CallbackFunction, delay: number): CallbackFunction {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback((...args: any) => {
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);
    setTimer(newTimer);
  }, [callback, delay]);

  return debouncedCallback;
}