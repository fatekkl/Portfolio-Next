"use client"

import { useEffect, useState } from "react";
import Contact from "./Components/Contact";
import DotSquareGrid from "./Components/DotSquareGrid";
import Journey from "./Components/Journey";
import LanguageButton from "./Components/LanguageButton";
import Menu from "./Components/Menu";
import MobileHeader from "./Components/MobileHeader";
import Principal from "./Components/Principal";
import Projects from "./Components/Projects";

export default function Home() {
  const [languageSelected, setLanguageSelected] = useState("english")

  useEffect(() => {
  }, [languageSelected])


  return (
    <div className="relative">
      <Menu />
      <MobileHeader />
      <Principal />
      <Journey />
      <Projects />
      <Contact />
      <DotSquareGrid/>
      <LanguageButton language={languageSelected} setFunction={setLanguageSelected}/>
    </div>
  );
}
