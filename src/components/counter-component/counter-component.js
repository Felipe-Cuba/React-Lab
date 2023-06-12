import "./counter-component.css";
import { useState } from "react";

const Counter = ({ count, incress, decress, imgSrc }) => {
  return (
    <div className="counter-container">
      <img src={imgSrc} alt="" className="img" />

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

export const MainCounter = ({ manImg, womanImg }) => {
  const [mans, setMans] = useState(0);
  const [womans, setWomans] = useState(0);

  function incressCount(gender) {
    if (gender === "homem") {
      setMans(mans + 1);
    }

    if (gender === "mulher") {
      setWomans(womans + 1);
    }
  }

  function decressCount(gender) {
    if (gender === "homem") {
      setMans(mans > 0 ? mans - 1 : 0);
    }

    if (gender === "mulher") {
      setWomans(womans > 0 ? womans - 1 : 0);
    }
  }

  function clear() {
    setMans(0);
    setWomans(0);
  }

  return (
    <div className="counter-container">
      <div className="input-container">
        <p className="total">Total</p>
        <input type="text" value={mans + womans} class="total-input"></input>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Counter
          count={mans}
          incress={() => incressCount("homem")}
          decress={() => decressCount("homem")}
          imgSrc={manImg}
        />
        <Counter
          count={womans}
          incress={() => incressCount("mulher")}
          decress={() => decressCount("mulher")}
          imgSrc={womanImg}
        />
      </div>
      <div className="clear-container">
        <button onClick={clear} className="clear-button">
          Limpar
        </button>
      </div>
    </div>
  );
};
