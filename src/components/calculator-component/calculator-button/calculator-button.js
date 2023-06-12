import './calculator-button.css'

export default function CalculatorButton({ label, onClick }) {
  return (
    <button className="calc-button" onClick={onClick}>
      {label}
    </button>
  );
}
