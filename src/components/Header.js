import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaCode } from "react-icons/fa";
import { smoothScroll } from "../utils/smoothScroll";

function Header() {
  return (
    <header className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-4 fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center">
        <button onClick={() => smoothScroll('home')} className="text-3xl hover:text-gray-400 cursor-pointer">
          <FaCode />
        </button>
        <div className="flex items-center space-x-4">
          <button onClick={() => smoothScroll('home')} className="hover:text-gray-400 cursor-pointer">
            <FaHome />
          </button>
          <button onClick={() => smoothScroll('about')} className="hover:text-gray-400 cursor-pointer">
            <FaUser />
          </button>
          <button onClick={() => smoothScroll('projects')} className="hover:text-gray-400 cursor-pointer">
            <FaProjectDiagram />
          </button>
          <button onClick={() => smoothScroll('contact')} className="hover:text-gray-400 cursor-pointer">
            <FaEnvelope />
          </button>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
