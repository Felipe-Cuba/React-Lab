import './form1-component.css';
import { useState } from 'react';

export default function Form1Component() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Olá');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`Você disse "${message}" para ${to}`);
    }, 5000);
  }

  return (
    <form className="form1-container" onSubmit={handleSubmit}>
      <label className="form1-label">
        Para:{' '}
        <select
          className="form1-select"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        className="form1-textarea"
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="form1-button" type="submit">
        Enviar
      </button>
    </form>
  );
}
