import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p className="text-md text-gray-900 dark:text-gray-100">&copy; {currentYear} Alexis Corporal. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Alexis12119"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
