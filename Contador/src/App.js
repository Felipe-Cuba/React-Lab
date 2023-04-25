import './App.css';
import { useState } from 'react';

import { Counter } from './components/counter/counter-component';

import manImg from './assets/images/man.png';
import womanImg from './assets/images/woman.png';

function App() {
  const [mans, setMans] = useState(0);
  const [womans, setWomans] = useState(0);

  function incressCount(gender) {
    if (gender === 'homem') {
      setMans(mans + 1);
    }

    if (gender === 'mulher') {
      setWomans(womans + 1);
    }
  }

  function decressCount(gender) {
    if (gender === 'homem') {
      setMans(mans > 0 ? mans - 1 : 0);
    }

    if (gender === 'mulher') {
      setWomans(womans > 0 ? womans - 1 : 0);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="input-container">
          <p class="total">Total:</p>
          <input type="text" value={mans + womans} class="total-input"></input>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Counter
            count={mans}
            incress={() => incressCount('homem')}
            decress={() => decressCount('homem')}
            imgSrc={manImg}
          />
          <Counter
            count={womans}
            incress={() => incressCount('mulher')}
            decress={() => decressCount('mulher')}
            imgSrc={womanImg}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
