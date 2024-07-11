import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Typewriter } from "react-simple-typewriter";
import Header from "./components/Header";
import About from "./components/About";
import TimeLine from "./components/TimeLine";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParallaxSection from "./components/ParallaxSection";
import bgImage from "./assets/img/windows.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Alexis Corporal - Developer Portfolio</title>
        <meta name="description" content="Hi, I'm Alexis Corporal, a passionate developer. Explore my projects and skills." />
        <meta name="keywords" content="Alexis Corporal, developer, portfolio, projects, skills, ReactJS, Python, C, C++, C#, programming, student, Go" />
        <meta property="og:title" content="Alexis Corporal - Developer Portfolio" />
        <meta property="og:description" content="Hi, I'm Alexis Corporal, a passionate developer. Explore my projects and skills." />
        {/* <meta property="og:url" content="" /> */}
      </Helmet>
      <Header />
      <main className="pt-16">
        <LazyLoadComponent>
          <section id="home">
            <ParallaxSection bgImage={bgImage}>
              <div className="flex justify-center items-center h-screen">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                  <Typewriter
                    words={["Welcome to My World"]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={120}
                    deleteSpeed={70}
                    delaySpeed={1500}
                  />
                </h1>
              </div>
            </ParallaxSection>
          </section>
        </LazyLoadComponent>
        <section id="about">
          <About />
        </section>
        <section id="timeline">
          <TimeLine />
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
