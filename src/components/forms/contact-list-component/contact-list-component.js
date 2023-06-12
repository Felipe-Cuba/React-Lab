import './contact-list-component.css';

export default function ContactListComponent({
  selectedContact,
  contacts,
  onSelect,
}) {
  return (
    <section className="contact-list-container">
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className={`contact-button ${
                contact === selectedContact ? 'active' : ''
              }`}
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
