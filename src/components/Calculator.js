import '../css/calculator.css';
import CalcDisplay from './CalcDisplay';
import CalcBody from './CalcBody';

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
