import { useState } from 'react';
import '../css/calculator.css';
import CalcDisplay from './CalcDisplay';
import CalcBody from './CalcBody';
import calculate from '../logic/calculate';

const calcObj = {
  total: null,
  next: null,
  operation: null,
};

function Calculator() {
  const [result, setResult] = useState('0');
  const handelClick = (e) => {
    const { total = null, next = null, operation = null } = calculate(calcObj, e.target.value);
    calcObj.total = total;
    calcObj.next = next;
    calcObj.operation = operation;
    if (calcObj.next || calcObj.total) {
      setResult(calcObj.next ? calcObj.next : calcObj.total);
    } else {
      setResult('0');
    }
  };
  return (
    <div className="calculator">
      <CalcDisplay result={result} />
      <CalcBody handelClick={handelClick} />
    </div>
  );
}

export default Calculator;
