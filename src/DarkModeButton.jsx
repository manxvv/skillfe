import React from 'react';
import { useDarkMode } from './DarkModeContext';

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="bg-gray-800 text-white px-4 py-2 rounded-md"
      onClick={toggleDarkMode}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeButton;
