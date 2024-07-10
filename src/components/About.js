import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import profilePicture from "../assets/img/profiles.jpg";

function About() {
  return (
    <section id="about" className="p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.div>
          <LazyLoadImage
            src={profilePicture}
            alt="Profile"
            effect="blur"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-6 md:mb-0 md:mr-8"
          />
        </motion.div>
        <motion.div className="max-w-md text-center md:text-left">
          <p className="text-lg mb-4 text-gray-900 dark:text-gray-100">
            Hi, I'm Alexis Corporal, a passionate developer who's currently in
            Pamantasan ng Lungsod ng San Pablo. I like to create innovative
            things with my programming skills.
          </p>
          <p className="text-lg text-gray-900 dark:text-gray-100">
            When I'm not coding, you can find me exploring new technologies and
            jogging. Let's connect and create something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
