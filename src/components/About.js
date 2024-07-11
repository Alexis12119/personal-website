import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section id="about" className="p-8 bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-center">
        <h2 className="relative text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          <span className="inline-block p-4 border-4 border-current rounded-full">
            About Me
          </span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-6 md:mb-0 md:mr-8"
        >
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="w-32 h-32 md:w-48 md:h-48 text-gray-900 dark:text-gray-100"
            alt="Laptop Code Icon"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-md text-center md:text-left"
        >
          <p className="text-lg mb-4 text-gray-900 dark:text-gray-100">
            Hi, I'm Alexis Corporal, a passionate developer currently studying
            at Pamantasan ng Lungsod ng San Pablo. I thrive on creating
            innovative solutions and constantly enhancing my programming skills.
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
