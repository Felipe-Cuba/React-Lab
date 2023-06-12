import React from "react";
import DateTimeComponent from "../../components/date-time-component/DateTime";
import Marquee from "../../components/marquee-component/Marquee";
import "./LessonOne.css";

function LessonOne() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <DateTimeComponent />
        <Marquee text="Venha estudar na Fatec" textColor={"#1d0029"} />
      </div>
    </div>
  );
}

export default LessonOne;
