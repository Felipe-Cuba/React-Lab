import './memory-game-card.css';

const MemoryGameCard = ({ value, flipped, onClick }) => {
  const cardStyle = {
    background: flipped ? '#e6e6e6' : '#4529ff',
    color: flipped ? '#4529ff' : '#e6e6e6',
    cursor: flipped ? 'default' : 'pointer',
  };

  return (
    <div className="card" style={cardStyle} onClick={onClick}>
      {flipped ? value : ''}
    </div>
  );
};

export default MemoryGameCard;
