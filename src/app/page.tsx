import Contact from "./Components/Contact";
import Journey from "./Components/Journey";
import Menu from "./Components/Menu";
import MobileHeader from "./Components/MobileHeader";
import Principal from "./Components/Principal";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <>
      <Menu />
      <MobileHeader/>
      <Principal />
      <Journey />
      <Projects />
      <Contact />
    </>
  );
}
