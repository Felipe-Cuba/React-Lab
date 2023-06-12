import React, { useState, useEffect } from "react";
import "./DateTime.css";

const DateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="datetime-container">
      <p className="datetime-text">
        <span className="date-label">Data:</span>{" "}
        {currentDateTime.toLocaleDateString()}
      </p>
      <p className="datetime-text">
        <span className="time-label">Hora:</span>{" "}
        {currentDateTime.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default DateTimeComponent;
