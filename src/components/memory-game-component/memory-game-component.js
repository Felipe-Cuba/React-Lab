import React from 'react';
import MemoryGameBoard from './memory-game-board/memory-game-board';
import './memory-game-component.css';

const MemoryGameComponent = () => {
  return (
    <div className="memory-game">
      <h1>Jogo da Memória</h1>
      <MemoryGameBoard />
    </div>
  );
};

export default MemoryGameComponent;
