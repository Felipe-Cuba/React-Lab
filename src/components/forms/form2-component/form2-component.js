import './form2-component.css';
import { useState } from 'react';

export default function Form2Component() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <label className="form2-label">Primeiro nome:</label>
      <input
        className="form2-input"
        value={person.firstName}
        onChange={handleFirstNameChange}
      />
      <label className="form2-label">Sobrenome:</label>
      <input
        className="form2-input"
        value={person.lastName}
        onChange={handleLastNameChange}
      />
      <label className="form2-label">Email:</label>
      <input
        className="form2-input"
        value={person.email}
        onChange={handleEmailChange}
      />
      <p className="form2-output">
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
