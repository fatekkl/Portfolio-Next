"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ptbr from "../i18n/ptbr.json";
import en from "../i18n/en.json";

type Language = "ptbr" | "en";
type Translation = typeof ptbr;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const translations: Record<Language, Translation> = { ptbr,  en };
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
