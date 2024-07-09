import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaCode } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-4 fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center">
        <a href="#home" className="text-3xl hover:text-gray-400">
          <FaCode />
        </a>
        <div className="flex items-center space-x-4">
          <a href="#home" className="hover:text-gray-400">
            <FaHome />
          </a>
          <a href="#about" className="hover:text-gray-400">
            <FaUser />
          </a>
          <a href="#projects" className="hover:text-gray-400">
            <FaProjectDiagram />
          </a>
          <a href="#contact" className="hover:text-gray-400">
            <FaEnvelope />
          </a>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
