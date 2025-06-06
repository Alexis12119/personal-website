import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import SkillsGrid from "./components/SkillsGrid";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SkillsGrid />
      <Contact />
    </main>
  );
}
