import { useState } from 'react';

import './form-ticket-component.css';

export default function FormTicketComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div className="form-ticket-container">
      <h2>Vamos fazer o check-in</h2>
      <div className="form-field">
        <label className="form-label">Nome:</label>
        <input
          className="form-input"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="form-field">
        <label className="form-label">Sobrenome:</label>
        <input
          className="form-input"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <p className="ticket-info">
        Seu ticket será emitido em nome de: <b>{fullName}</b>
      </p>
    </div>
  );
}
