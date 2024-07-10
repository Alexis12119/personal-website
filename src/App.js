import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParallaxSection from "./components/ParallaxSection";
import bgImage from "./assets/img/biel-morro-J_F_003jcEQ-unsplash.jpg";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-16">
        <section id="home">
          <ParallaxSection bgImage={bgImage}>
            <h1 className="text-5xl font-bold text-white">
              <Typewriter
                words={["Welcome to My Portfolio"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </h1>
          </ParallaxSection>
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
