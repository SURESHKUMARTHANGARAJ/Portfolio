import React, { useState, useEffect } from 'react';

const Ribbon = () => {
  const initialText = [
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
    "Hire me immediately! ",
  ];

  const [text, setText] = useState(initialText);

  useEffect(() => {
    setInterval(() => {
      setText((prevText) => {
        // Append new text to the array without removing any existing text
        return [...prevText, "Hire me immediately! "];
      });
    }, 2000); // Add new text every 2 seconds
  }, []);

  return (
    <div className="scroll-ribbon-container">
      <div className="scroll-ribbon-text">
        {text.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Ribbon;
