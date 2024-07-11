import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function DarkModeToggle() {
  // Retrieve the stored mode or default to false (light mode)
  const storedMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(storedMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save the current mode to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <button
      className="p-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default DarkModeToggle;
