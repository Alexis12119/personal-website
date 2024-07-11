import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaCode } from "react-icons/fa";
import { smoothScroll } from "../utils/smoothScroll";

function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => smoothScroll('home')}
          className="flex items-center space-x-2 text-2xl md:text-3xl hover:text-gray-700 dark:hover:text-gray-400 cursor-pointer transition-transform transform hover:scale-110"
          aria-label="Home"
        >
          <FaCode />
          <span className="hidden md:inline text-xl font-semibold">Alexis</span>
        </button>
        <div className="flex items-center space-x-4 md:space-x-6">
          <button
            onClick={() => smoothScroll('home')}
            className="hover:text-gray-700 dark:hover:text-gray-400 cursor-pointer transition-transform transform hover:scale-110"
            aria-label="Home"
          >
            <FaHome />
          </button>
          <button
            onClick={() => smoothScroll('about')}
            className="hover:text-gray-700 dark:hover:text-gray-400 cursor-pointer transition-transform transform hover:scale-110"
            aria-label="About"
          >
            <FaUser />
          </button>
          <button
            onClick={() => smoothScroll('projects')}
            className="hover:text-gray-700 dark:hover:text-gray-400 cursor-pointer transition-transform transform hover:scale-110"
            aria-label="Projects"
          >
            <FaProjectDiagram />
          </button>
          <button
            onClick={() => smoothScroll('contact')}
            className="hover:text-gray-700 dark:hover:text-gray-400 cursor-pointer transition-transform transform hover:scale-110"
            aria-label="Contact"
          >
            <FaEnvelope />
          </button>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
