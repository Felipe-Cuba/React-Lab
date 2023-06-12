import React from 'react';
import { Link } from 'react-router-dom';

import MessengerComponent from '../../components/forms/menssenger-component/mensenger-component';

export default function Menssenger() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <MessengerComponent />
      </div>
      <div className="button-container">
        <Link to="/accordion" className="button-link">
          Accordion
        </Link>
      </div>
    </div>
  );
}
