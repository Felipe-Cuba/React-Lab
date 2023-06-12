import React from 'react';
import { Link } from 'react-router-dom';
import FormTicketComponent from '../../components/forms/form-ticket-component/form-ticket-component';

export default function FormTicket() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <FormTicketComponent />
      </div>
      <div className="button-container">
        <Link to="/form-quiz" className="button-link">
          Form Quiz
        </Link>
        <Link to="/accordion" className="button-link">
          Accordion
        </Link>
      </div>
    </div>
  );
}
