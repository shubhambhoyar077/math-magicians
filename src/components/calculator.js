import '../css/calculator.css';
import CalcDisplay from './calcDisplay';
import CalcBody from './calcBody';

function Calculator() {
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <CalcDisplay />
      <CalcBody />
    </div>
  );
}

export default Calculator;
