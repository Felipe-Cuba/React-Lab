import './counter-component.css';

export const Counter = ({ count, incress, decress, imgSrc }) => {
  return (
    <div className="counter-container">
      <img src={imgSrc} alt="" class="img" />
      <input type="text" value={count} className="counter-input"></input>
      <div className="counter-buttons">
        <button onClick={incress} className="counter-button increment">
          +
        </button>
        <button onClick={decress} className="counter-button decrement">
          -
        </button>
      </div>
    </div>
  );
};
