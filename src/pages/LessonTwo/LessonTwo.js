import React from "react";

import "./LessonTwo.css";

import manImg from "../../assets/images/man.png";
import womanImg from "../../assets/images/woman.png";
import { MainCounter } from "../../components/counter-component/counter-component";

export default function LessonTwo() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <MainCounter manImg={manImg} womanImg={womanImg} />
      </div>
    </div>
  );
}
