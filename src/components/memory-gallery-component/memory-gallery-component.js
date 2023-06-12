import './memory-gallery-component.css';

import { useState } from 'react';
import { sculptureList } from './data.js';

export default function MemoryGalleryComponent() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (index === sculptureList.length - 1) {
      // Se for o último elemento, voltar para o primeiro
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePreviousClick() {
    if (index === 0) {
      // Se for o primeiro elemento, ir para o último
      setIndex(sculptureList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <div className="buttons-gallery-contaier">
        <button className="gallery-button" onClick={handlePreviousClick}>
          Anterior
        </button>
        <button className="gallery-button" onClick={handleNextClick}>
          Próximo
        </button>
      </div>
      <h2 className="gallery-title">
        <i>{sculpture.name}</i> por {sculpture.artist}
      </h2>
      <h3 className="gallery-index">
        ({index + 1} de {sculptureList.length})
      </h3>
      <button className="gallery-button" onClick={handleMoreClick}>
        {showMore ? 'Esconder' : 'Mostrar'} detalhes
      </button>
      {showMore && (
        <p className="gallery-description">{sculpture.description}</p>
      )}
      <img className="gallery-image" src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
