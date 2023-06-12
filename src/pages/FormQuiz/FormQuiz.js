import React from 'react';
import { Link } from 'react-router-dom';

import FormQuizComponent from '../../components/forms/form-quiz-component/form-quiz-component';

export default function FormQuiz() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <FormQuizComponent />
      </div>
      <div className="button-right">
        <Link to="/form-ticket" className="button-link">
          Form Ticket
        </Link>
      </div>
    </div>
  );
}
