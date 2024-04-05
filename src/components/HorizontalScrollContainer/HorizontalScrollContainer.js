// HorizontalScrollContainer.js
import React from 'react';
import './HorizontalScrollContainer.css';

const HorizontalScrollContainer = ({ children }) => {
  return (
    <div className="horizontal-scroll-container">
      <div className="scroll-content">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;
