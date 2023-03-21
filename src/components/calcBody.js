function CalcBody() {
  const clacFunc = ['AC', '+/-', '%', '÷',
    7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  return (
    <div className="calc-body">
      {clacFunc.map((element) => (<button type="button" key={element}>{element}</button>))}
    </div>
  );
}

export default CalcBody;
