import React from "react";

export function useLocalStorage<T>(key: string, fallbackValue: T) {
  const [value, setValue] = React.useState(fallbackValue);
  const [touch, setTouch] = React.useState(false);
  React.useEffect(() => {
    const stored = localStorage.getItem(key);
    const nextValue = stored ? JSON.parse(stored) : fallbackValue;
    setValue(nextValue);
    setTouch(true);
  }, [fallbackValue, key]);

  React.useEffect(() => {
    if (touch) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, touch]);

  return [value, setValue] as const;
}
