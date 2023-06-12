import { useState } from 'react';
import CalculatorButton from './calculator-button/calculator-button';
import CalculatorDisplay from './calculator-display/calculator-display';
import './calculator-component.css';

import * as math from 'mathjs';

export default function CalculatorComponent() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (label) => {
    if (label === 'C') {
      setDisplayValue('0');
    } else if (label === '=') {
      try {
        const result = math.evaluate(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Erro');
      }
    } else if (label === '±') {
      setDisplayValue((parseFloat(displayValue) * -1).toString());
    } else if (label === '⌫') {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      const lastChar = displayValue.slice(-1);
      const isLastCharOperator = ['+', '-', '*', '/'].includes(lastChar);
      const isLastCharDecimal = lastChar === '.';
      const isNewDecimal =
        label === '.' && (isLastCharOperator || isLastCharDecimal);

      if (isNewDecimal) {
        setDisplayValue(displayValue + '0' + label);
      } else {
        setDisplayValue(displayValue === '0' ? label : displayValue + label);
      }
    }
  };

  const handleDecimalClick = () => {
    const lastChar = displayValue.slice(-1);
    const isLastCharOperator = ['+', '-', '*', '/'].includes(lastChar);

    if (isLastCharOperator) {
      setDisplayValue(displayValue + '0.');
    } else {
      setDisplayValue(displayValue + '.');
    }
  };

  const handlePercentageClick = () => {
    try {
      const result = math.evaluate(displayValue + '/100');
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Erro');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <CalculatorDisplay value={displayValue} />
      <div className="buttons">
        <CalculatorButton label="C" onClick={() => handleButtonClick('C')} />
        <CalculatorButton label="⌫" onClick={() => handleButtonClick('⌫')} />
        <CalculatorButton label="%" onClick={handlePercentageClick} />
        <CalculatorButton label="÷" onClick={() => handleButtonClick('/')} />
        <CalculatorButton label="7" onClick={() => handleButtonClick('7')} />
        <CalculatorButton label="8" onClick={() => handleButtonClick('8')} />
        <CalculatorButton label="9" onClick={() => handleButtonClick('9')} />
        <CalculatorButton label="x" onClick={() => handleButtonClick('*')} />
        <CalculatorButton label="4" onClick={() => handleButtonClick('4')} />
        <CalculatorButton label="5" onClick={() => handleButtonClick('5')} />
        <CalculatorButton label="6" onClick={() => handleButtonClick('6')} />
        <CalculatorButton label="-" onClick={() => handleButtonClick('-')} />
        <CalculatorButton label="1" onClick={() => handleButtonClick('1')} />
        <CalculatorButton label="2" onClick={() => handleButtonClick('2')} />
        <CalculatorButton label="3" onClick={() => handleButtonClick('3')} />
        <CalculatorButton label="+" onClick={() => handleButtonClick('+')} />
        <CalculatorButton label="±" onClick={() => handleButtonClick('±')} />
        <CalculatorButton label="0" onClick={() => handleButtonClick('0')} />
        <CalculatorButton label="." onClick={handleDecimalClick} />
        <CalculatorButton label="=" onClick={() => handleButtonClick('=')} />
      </div>
    </div>
  );
}
