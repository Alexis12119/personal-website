import React from 'react';

function GlassCard({ children }) {
  return (
    <div className="p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-md">
      {children}
    </div>
  );
}

export default GlassCard;
