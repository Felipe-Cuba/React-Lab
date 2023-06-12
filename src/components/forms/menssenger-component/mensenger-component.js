import { useState } from 'react';
import './mensenger-component.css';
import ChatComponent from '../chat-component/chat-component.js';
import ContactListComponent from '../contact-list-component/contact-list-component.js';

export default function MessengerComponent() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div className="messenger-container">
      <ContactListComponent
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <ChatComponent key={to.id} contact={to} />
    </div>
  );
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
