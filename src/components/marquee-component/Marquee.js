import React, { useState, useEffect } from "react";
import "./Marquee.css";

const Marquee = ({ text, textColor }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex >= text.length) {
        setCurrentIndex(0);
        setCurrentText("");
      } else {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, [text, currentIndex]);

  const textStyle = {
    color: textColor || "#ffffff", // Definir cor do texto, padrão é branco
  };

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span className="marquee-text" style={textStyle}>
          {currentText}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
