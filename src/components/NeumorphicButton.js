import React from 'react';

function NeumorphicButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-inner hover:shadow-md"
    >
      {children}
    </button>
  );
}

export default NeumorphicButton;
