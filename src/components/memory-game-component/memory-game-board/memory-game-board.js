import React, { useEffect, useState } from 'react';
import MemoryGameCard from '../memory-game-card/memory-game-card';
import './memory-game-board.css';

const MemoryGameBoard = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    const generateCards = () => {
      const symbols = ['😀', '😎', '😍', '🙄', '😐', '😌', '🤕', '🤡'];
      const shuffledSymbols = [...symbols, ...symbols].sort(
        () => Math.random() - 0.5
      );
      const generatedCards = shuffledSymbols.map((symbol) => ({
        symbol,
        flipped: false,
      }));
      setCards(generatedCards);
    };

    generateCards();
  }, []);

  const handleCardClick = (index) => {
    if (isVerifying || solved.includes(index) || cards[index].flipped) {
      return;
    }

    if (flipped.length === 0) {
      setFlipped([index]);
    } else {
      const flippedCardIndex = flipped[0];
      const selectedCard = cards[index];

      if (flippedCardIndex === index) {
        return;
      }

      setFlipped([flippedCardIndex, index]);
      setIsVerifying(true);

      if (selectedCard.symbol === cards[flippedCardIndex].symbol) {
        setSolved([...solved, flippedCardIndex, index]);

        if (solved.length + 2 === cards.length) {
          setGameOver(true);
        }

        setFlipped([]);
        setIsVerifying(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setIsVerifying(false);
        }, 1000);
      }
    }
  };

  const handleReset = () => {
    setCards([]);
    setFlipped([]);
    setSolved([]);
    setGameOver(false);
    setTimeout(() => {
      generateCards();
    }, 500);
  };

  const generateCards = () => {
    const symbols = ['😀', '😎', '😍', '🙄', '😐', '😌', '🤕', '🤡'];
    const shuffledSymbols = [...symbols, ...symbols].sort(
      () => Math.random() - 0.5
    );
    const generatedCards = shuffledSymbols.map((symbol) => ({
      symbol,
      flipped: false,
    }));
    setCards(generatedCards);
  };

  return (
    <div className="board">
      {cards.map((card, index) => (
        <MemoryGameCard
          key={index}
          value={card.symbol}
          flipped={flipped.includes(index) || solved.includes(index)}
          onClick={() => handleCardClick(index)}
        />
      ))}
      {gameOver && (
        <div className="game-over-message">
          Parabéns, você venceu o jogo!
          <button onClick={handleReset}>Resetar</button>
        </div>
      )}
    </div>
  );
};

export default MemoryGameBoard;
