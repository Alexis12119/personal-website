import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParallaxSection from "./components/ParallaxSection";
import bgImage from "./assets/img/biel-morro-J_F_003jcEQ-unsplash.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-16">
        {" "}
        <section id="home">
          <ParallaxSection bgImage={bgImage}>
            <h1 className="text-5xl font-bold text-white">
              Welcome to My Portfolio
            </h1>
          </ParallaxSection>
        </section>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
