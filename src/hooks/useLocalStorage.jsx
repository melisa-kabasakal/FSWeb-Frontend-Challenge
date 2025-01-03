import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    // localStorage'dan veri okumaya çalışıyoruz
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        return JSON.parse(storedValue); // Veriyi parse edip geri döndürüyoruz
      }
      // Eğer localStorage'da veri yoksa, varsayılan değeri set ediyoruz
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (error) {
      // JSON.parse hata alırsa, varsayılan değeri döndürüyoruz
      console.error("Error parsing localStorage value", error);
      return defaultValue;
    }
  });

  const setLocalStorage = (newValue) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    } catch (error) {
      console.error("Error setting value in localStorage", error);
    }
  };

  return [value, setLocalStorage];
}
