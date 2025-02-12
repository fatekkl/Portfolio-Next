import Contact from "./Components/Contact";
import DotSquare from "./Components/DotSquare";
import DotSquareGrid from "./Components/DotSquareGrid";
import Journey from "./Components/Journey";
import Menu from "./Components/Menu";
import MobileHeader from "./Components/MobileHeader";
import Principal from "./Components/Principal";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <div className="relative">
      <Menu />
      <MobileHeader />
      <Principal />
      <Journey />
      <Projects />
      <Contact />
      <DotSquareGrid/>
    </div>
  );
}
