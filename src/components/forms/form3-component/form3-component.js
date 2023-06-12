import './form3-component.css';
import { useState } from 'react';

export default function Form3Component() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label className="form3-label">Nome:</label>
      <input
        className="form3-input"
        value={person.name}
        onChange={handleNameChange}
      />
      <label className="form3-label">Título:</label>
      <input
        className="form3-input"
        value={person.artwork.title}
        onChange={handleTitleChange}
      />
      <label className="form3-label">Cidade:</label>
      <input
        className="form3-input"
        value={person.artwork.city}
        onChange={handleCityChange}
      />
      <label className="form3-label">Imagem:</label>
      <input
        className="form3-input"
        value={person.artwork.image}
        onChange={handleImageChange}
      />
      <p className="form3-output">
        <i>{person.artwork.title}</i> por {person.name}
        <br />
        (localizado em {person.artwork.city})
      </p>
      <div className="form3-image-container">
        <img
          className="form3-image"
          src={person.artwork.image}
          alt={person.artwork.title}
        />
      </div>
    </>
  );
}
