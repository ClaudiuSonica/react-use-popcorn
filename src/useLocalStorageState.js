import { useState, useEffect } from "react";

export const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const storedVal = localStorage.getItem(key);
    return storedVal ? JSON.parse(storedVal) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}