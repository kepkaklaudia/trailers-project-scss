import { KeyboardEvent } from "react";

export const handleKeyDown = (
  e: KeyboardEvent<HTMLInputElement>,
  setError: React.Dispatch<React.SetStateAction<string>>
): void => {
  const key = e.key;
  const isNumericKey = /^\d$/.test(key);

  if (isNumericKey || key === "Backspace" || key === "Tab" || key === "Enter") {
    setError("");
  } else {
    setError("Pole przyjmuje tylko cyfry");
  }
};
