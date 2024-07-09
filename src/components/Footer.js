import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-4 text-center">
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="https://twitter.com" className="hover:text-gray-400"><FaTwitter /></a>
        <a href="https://linkedin.com" className="hover:text-gray-400"><FaLinkedin /></a>
        <a href="https://github.com" className="hover:text-gray-400"><FaGithub /></a>
      </div>
    </footer>
  );
}

export default Footer;
