import { createContext, useContext, useState, ReactNode } from "react";
import portuguese from "../languages/pt.json";
import english from "../languages/en.json";

export type Language = "pt" | "en";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: typeof portuguese; // ou typeof english, ambos têm a mesma estrutura
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: ProviderProps) => {
  const [language, setLanguage] = useState<Language>("pt");


  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const translations = language === "pt" ? portuguese : english;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
