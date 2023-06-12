import { useState } from 'react';
import './chat-component.css';

export default function ChatComponent({ contact }) {
  const [text, setText] = useState('');

  return (
    <section className="chat-container">
      <textarea
        className="chat-input"
        value={text}
        placeholder={'Conversar com ' + contact.name}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button className="send-button">Enviar para {contact.email}</button>
    </section>
  );
}
