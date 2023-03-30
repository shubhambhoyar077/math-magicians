import PropTypes from 'prop-types';

function CalcBody({ handelClick }) {
  const clacFunc = ['AC', '+/-', '%', '÷',
    7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  return (
    <div className="calc-body">
      {clacFunc.map((element) => (
        <button value={element} type="button" key={element} onClick={handelClick}>
          {element}
        </button>
      ))}
    </div>
  );
}

CalcBody.propTypes = {
  handelClick: PropTypes.func.isRequired,
};

export default CalcBody;
