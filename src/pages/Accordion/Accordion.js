import React from 'react';
import { Link } from 'react-router-dom';
import AccordionComponent from '../../components/accordion-component/accordion-component';

export default function Accordion() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <AccordionComponent />
      </div>
      <div className="button-container">
        <Link to="/form-ticket" className="button-link">
          Form Ticket
        </Link>
        <Link to="/menssenger" className="button-link">
          Menssenger
        </Link>
      </div>
    </div>
  );
}
