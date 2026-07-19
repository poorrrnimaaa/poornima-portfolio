import Rail from "./components/Rail";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = ["hero", "work", "about", "stack", "contact"];

export default function App() {
  const active = useActiveSection(sectionIds);

  function navigate(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <Rail active={active} onNavigate={navigate} />
      <MobileNav active={active} onNavigate={navigate} />
      <main className="lg:ml-[260px]">
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}
