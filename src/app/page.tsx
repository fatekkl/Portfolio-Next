"use client"

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Journey from "./Components/Journey";
import Principal from "./Components/Principal";
import Projects from "./Components/Projects";

export default function Home() {

  return (
    <div className="relative">
      <Principal />
      <Journey />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}
