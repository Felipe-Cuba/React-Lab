import './simple-counter-component.css';
import { useState } from 'react';

export default function SimpleCounterComponent() {
  const [number, setNumber] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-number">{number}</h1>
      <button
        className="counter-button"
        onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            alert(number);
          }, 3000);
        }}
      >
        +5
      </button>
    </div>
  );
}
