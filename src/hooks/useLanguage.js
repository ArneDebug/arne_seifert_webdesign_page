"use client";

import { useEffect, useState } from "react";
import { translations } from "@/lib/translations";

export function useLanguage() {
  const [language, setLanguage] = useState("de");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return {
    language,
    t: translations[language],
  };
}