"use client"

import { LanguageProvider } from "@/contexts/LanguageContext";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Journey from "./Components/Journey";
import Principal from "./Components/Principal";
import Projects from "./Components/Projects";
import LanguageButton from "./Components/LanguageButton";

export default function Home() {

  return (
    <div className="relative">
      <LanguageProvider>
        <Principal />
        <Journey />
        <Projects />
        <Contact />
        <Footer />
        <LanguageButton/>
      </LanguageProvider>
    </div>
  );
}
